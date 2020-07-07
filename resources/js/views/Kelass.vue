<template>
  <div class="container-fluid">
    <div class="card mb-4 mt-5">
      <div class="card-header d-flex">
        <i class="fas fa-chart-area mr-1"></i>
        Data Kelas
        <button
          class="btn btn-primary btn-sm ml-auto"
          v-on:click="showNewKelasModal"
        >
          <span class="fa fa-plus"></span> Tambah Kelas
        </button>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Tingkat</td>
              <td>Nama</td>
              <td>AKSI</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(kelas, index) in kelass" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ kelas.tingkat }}</td>
              <td>{{ kelas.nama_kelas }}</td>
              <td>
                <button class="btn btn-primary btn-sm" v-on:click="editKelas(kelas)">
                  <span class="fa fa-edit"></span>
                </button>
                <button class="btn btn-danger btn-sm" v-on:click="deleteKelas(kelas)">
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

    <b-modal ref="newKelasModal" hide-footer title="Tambah Kelas">
      <div class="d-block">
        <form v-on:submit.prevent="createKelas">
          <div class="form-group">
            <label for="tingkat">Tingkat</label>
            <input
              type="text"
              v-model="kelasData.tingkat"
              class="form-control"
              id="tingkat"
              placeholder="Masukan Tingkat"
            />
            <div class="invalid-feedback" v-if="errors.tingkat">{{ errors.tingkat[0] }}</div>
          </div>
          <div class="form-group">
            <label for="nama_kelas">Nama Kelas</label>
            <input
              type="text"
              v-model="kelasData.nama_kelas"
              class="form-control"
              id="nama_kelas"
              placeholder="Masukan Namak Kelas"
            />
            <div class="invalid-feedback" v-if="errors.nama_kelas">{{ errors.nama_kelas[0] }}</div>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideNewKelasModal">Batal</button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span> Simpan
            </button>
          </div>
        </form>
      </div>
    </b-modal>

    <b-modal ref="editKelasModal" hide-footer title="Ubah Data Kelas">
      <div class="d-block">
        <form v-on:submit.prevent="updateKelas">
          <div class="form-group">
            <label for="tingkat">Tingkat</label>
            <input
              type="text"
              v-model="editKelasData.tingkat"
              class="form-control"
              id="tingkat"
              placeholder="Masukan Tingkat"
            />
            <div class="invalid-feedback" v-if="errors.tingkat">{{ errors.tingkat[0] }}</div>
          </div>
          <div class="form-group">
            <label for="nama_kelas">Nama Kelas</label>
            <input
              type="text"
              v-model="editKelasData.nama_kelas"
              class="form-control"
              id="nama_kelas"
              placeholder="Masukan Nama Kelas"
            />
            <div class="invalid-feedback" v-if="errors.nama_kelas">{{ errors.nama_kelas[0] }}</div>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideEditKelasModal">Batal</button>
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
import * as kelasService from "../services/kelas_service";
export default {
  name: "kelas",
  data() {
    return {
      kelass: [],
      kelasData: {
        tingkat: "",
        nama_kelas: ""
      },
      moreExists: false,
      nextPage: 0,
      editKelasData: {},
      errors: {}
    };
  },
  mounted() {
    this.loadKelass();
  },
  methods: {
    hideNewKelasModal() {
      this.$refs.newKelasModal.hide();
    },
    showNewKelasModal() {
      this.$refs.newKelasModal.show();
    },
    loadKelass: async function() {
      try {
        const response = await kelasService.loadKelass();
        this.kelass = response.data.data;

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
    createKelas: async function() {
      let formData = new FormData();
      formData.append("tingkat", this.kelasData.tingkat);
      formData.append("nama_kelas", this.kelasData.nama_kelas);

      try {
        const response = await kelasService.createKelas(formData);
        this.kelass.unshift(response.data);
        this.hideNewKelasModal();
        this.flashMessage.success({
          message: "Data Kelas Berhasil Ditambahkan",
          time: 5000
        });
        this.kelasData = {
          tingkat: "",
          nama_kelas: ""
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
    deleteKelas: async function(kelas) {
      if (!window.confirm(`Anda Akan Menghapus ${kelas.nama_kelas}`)) {
        return;
      }

      try {
        await kelasService.deleteKelas(kelas.id);

        this.kelass = this.kelass.filter(obj => {
          return obj.id != kelas.id;
        });
        this.flashMessage.success({
          message: "Data Kelas Berhasil Dihapus",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    hideEditKelasModal() {
      this.$refs.editKelasModal.hide();
    },
    showEditKelasModal() {
      this.$refs.editKelasModal.show();
    },
    editKelas(kelas) {
      this.editKelasData = { ...kelas };
      this.showEditKelasModal();
    },
    updateKelas: async function() {
      try {
        const formData = new FormData();
        formData.append("tingkat", this.editKelasData.tingkat);
        formData.append("nama_kelas", this.editKelasData.nama_kelas);
        formData.append("_method", "put");

        const response = await kelasService.updateKelas(
          this.editKelasData.id,
          formData
        );
        this.kelass.map(kelas => {
          if (kelas.id == response.data.id) {
            for (let key in response.data) {
              kelas[key] = response.data[key];
            }
          }
        });

        this.hideEditKelasModal();

        this.flashMessage.success({
          message: "Data Kelas Berhasil Diubah",
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
        const response = await kelasService.loadMore(this.nextPage);
        if (response.data.current_page < response.data.last_page) {
          this.moreExists = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.moreExists = false;
        }

        response.data.data.forEach(data => {
          this.kelass.push(data);
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