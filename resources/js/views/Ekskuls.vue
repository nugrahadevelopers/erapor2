<template>
  <div class="container-fluid">
    <div class="card mb-4 mt-5">
      <div class="card-header d-flex">
        <i class="fas fa-chart-area mr-1"></i>
        Data Ekstrakulikuler
        <button
          class="btn btn-primary btn-sm ml-auto"
          v-on:click="showNewEkskulModal"
        >
          <span class="fa fa-plus"></span> Tambah Ekskul
        </button>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Nama</td>
              <td>AKSI</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ekskul, index) in ekskuls" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ ekskul.nama_ekskul }}</td>
              <td>
                <button class="btn btn-primary btn-sm" v-on:click="editEkskul(ekskul)">
                  <span class="fa fa-edit"></span>
                </button>
                <button class="btn btn-danger btn-sm" v-on:click="deleteEkskul(ekskul)">
                  <span class="fa fa-trash"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="text-center" v-show="moreExists">
          <button type="button" class="btn btn-primary btn-sm" v-on:click="loadMore">
            <span class="fa fa-arrow-down"></span>
            Lebih Banyak
          </button>
        </div>
      </div>
    </div>

    <b-modal ref="newEkskulModal" hide-footer title="Tambah Data Ekskul">
      <div class="d-block">
        <form v-on:submit.prevent="createEkskul">
          <div class="form-group">
            <label for="nama_ekskul">Nama</label>
            <input
              type="text"
              v-model="ekskulData.nama_ekskul"
              class="form-control"
              id="nama_ekskul"
              placeholder="Masukan Nama Ekskul"
            />
            <div class="invalid-feedback" v-if="errors.nama_ekskul">{{ errors.nama_ekskul[0] }}</div>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideNewEkskulModal">Batal</button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span> Simpan
            </button>
          </div>
        </form>
      </div>
    </b-modal>

    <b-modal ref="editEkskulModal" hide-footer title="Ubah Data Ekskul">
      <div class="d-block">
        <form v-on:submit.prevent="updateEkskul">
          <div class="form-group">
            <label for="nama_ekskul">Nama</label>
            <input
              type="text"
              v-model="editEkskulData.nama_ekskul"
              class="form-control"
              id="nama_ekskul"
              placeholder="Masukan Nama Ekskul"
            />
            <div class="invalid-feedback" v-if="errors.nama_ekskul">{{ errors.nama_ekskul[0] }}</div>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideEditEkskulModal">Batal</button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span> Ubah
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import * as ekskulService from "../services/ekskul_service";
export default {
  name: "ekskul",
  data() {
    return {
      ekskuls: [],
      ekskulData: {
        nama_ekskul: ""
      },
      moreExists: false,
      nextPage: 0,
      editEkskulData: {},
      errors: {}
    };
  },
  mounted() {
    this.loadEkskuls();
  },
  methods: {
    hideNewEkskulModal() {
      this.$refs.newEkskulModal.hide();
    },
    showNewEkskulModal() {
      this.$refs.newEkskulModal.show();
    },
    loadEkskuls: async function() {
      try {
        const response = await ekskulService.loadEkskuls();
        this.ekskuls = response.data.data;

        if (response.data.current_page < response.data.last_page) {
          this.moreExists = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.moreExists = false;
        }
      } catch (error) {
        this.flashMessage.error({
          message: "Terjadi masalah silahkan refresh halaman ini!",
          time: 5000
        });
      }
    },
    createEkskul: async function() {
      let formData = new FormData();
      formData.append("nama_ekskul", this.ekskulData.nama_ekskul);

      try {
        const response = await ekskulService.createEkskul(formData);
        this.ekskuls.unshift(response.data);
        this.hideNewEkskulModal();
        this.flashMessage.success({
          message: "Data Ekskul Berhasil Ditambahkan",
          time: 5000
        });
        this.ekskulData = {
          nama_ekskul: ""
        };
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          default:
            this.flashMessage.error({
              message: "Terjadi masalah silahkan refresh halaman ini!",
              time: 5000
            });
            break;
        }
      }
    },
    deleteEkskul: async function(ekskul) {
      if (!window.confirm(`Anda Akan Menghapus ${ekskul.nama_ekskul}`)) {
        return;
      }

      try {
        await ekskulService.deleteEkskul(ekskul.id);

        this.ekskuls = this.ekskuls.filter(obj => {
          return obj.id != ekskul.id;
        });
        this.flashMessage.success({
          message: "Data Ekskul Berhasil Dihapus",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    hideEditEkskulModal() {
      this.$refs.editEkskulModal.hide();
    },
    showEditEkskulModal() {
      this.$refs.editEkskulModal.show();
    },
    editEkskul(ekskul) {
      this.editEkskulData = { ...ekskul };
      this.showEditEkskulModal();
    },
    updateEkskul: async function() {
      try {
        const formData = new FormData();
        formData.append("nama_ekskul", this.editEkskulData.nama_ekskul);
        formData.append("_method", "put");

        const response = await ekskulService.updateEkskul(
          this.editEkskulData.id,
          formData
        );
        this.ekskuls.map(ekskul => {
          if (ekskul.id == response.data.id) {
            for (let key in response.data) {
              ekskul[key] = response.data[key];
            }
          }
        });

        this.hideEditEkskulModal();

        this.flashMessage.success({
          message: "Data Ekskul Berhasil Diubah",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    loadMore: async function() {
      try {
        const response = await ekskulService.loadMore(this.nextPage);
        if (response.data.current_page < response.data.last_page) {
          this.moreExists = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.moreExists = false;
        }

        response.data.data.forEach(data => {
          this.ekskuls.push(data);
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    }
  }
};
</script>