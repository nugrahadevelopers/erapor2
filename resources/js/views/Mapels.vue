<template>
  <div class="container-fluid">
    <div class="card mb-4 mt-5">
      <div class="card-header d-flex">
        <i class="fas fa-chart-area mr-1"></i>
        Data Mata Pelajaran
        <button
          class="btn btn-primary btn-sm ml-auto"
          v-on:click="showNewMapelModal"
        >
          <span class="fa fa-plus"></span> Tambah Mapel
        </button>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Kelompok</td>
              <td>KKM</td>
              <td>Nama</td>
              <td>AKSI</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(mapel, index) in mapels" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ mapel.kelompok }}</td>
              <td>{{ mapel.nilai_kkm }}</td>
              <td>{{ mapel.nama_mapel }}</td>
              <td>
                <button class="btn btn-primary btn-sm" v-on:click="editMapel(mapel)">
                  <span class="fa fa-edit"></span>
                </button>
                <button class="btn btn-danger btn-sm" v-on:click="deleteMapel(mapel)">
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

    <b-modal ref="newMapelModal" hide-footer title="Tambah Mata Pelajaran">
      <div class="d-block">
        <form v-on:submit.prevent="createMapel">
          <div class="form-group">
            <label for="kode_singkat">Kode Mapel</label>
            <input
              type="text"
              v-model="mapelData.kode_singkat"
              class="form-control"
              id="kode_singkat"
              placeholder="Masukan Kode Mapel"
            />
            <div class="invalid-feedback" v-if="errors.kode_singkat">{{ errors.kode_singkat[0] }}</div>
          </div>
          <div class="form-group">
            <label for="nama_mapel">Nama Mata Pelajaran</label>
            <input
              type="text"
              v-model="mapelData.nama_mapel"
              class="form-control"
              id="nama_mapel"
              placeholder="Masukan Nama Mata Pelajaran"
            />
            <div class="invalid-feedback" v-if="errors.nama_mapel">{{ errors.nama_mapel[0] }}</div>
          </div>
          <div class="form-group">
            <label for="nilai_kkm">Nilain KKM</label>
            <input
              type="text"
              v-model="mapelData.nilai_kkm"
              class="form-control"
              id="nilai_kkm"
              placeholder="Masukan Nilai KKM"
            />
            <div class="invalid-feedback" v-if="errors.nilai_kkm">{{ errors.nilai_kkm[0] }}</div>
          </div>
          <div class="form-group">
            <label for="kelompok">Kelompok</label>
            <input
              type="text"
              v-model="mapelData.kelompok"
              class="form-control"
              id="kelompok"
              placeholder="Kelompok"
            />
            <div class="invalid-feedback" v-if="errors.kelompok">{{ errors.kelompok[0] }}</div>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideNewMapelModal">Batal</button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span> Simpan
            </button>
          </div>
        </form>
      </div>
    </b-modal>

    <b-modal ref="editMapelModal" hide-footer title="Ubah Data Mapel">
      <div class="d-block">
        <form v-on:submit.prevent="updateMapel">
          <div class="form-group">
            <label for="kode_singkat">Kode Mapel</label>
            <input
              type="text"
              v-model="editMapelData.kode_singkat"
              class="form-control"
              id="kode_singkat"
              placeholder="Masukan Kode Mapel"
            />
            <div class="invalid-feedback" v-if="errors.kode_singkat">{{ errors.kode_singkat[0] }}</div>
          </div>
          <div class="form-group">
            <label for="nama_mapel">Nama Mata Pelajaran</label>
            <input
              type="text"
              v-model="editMapelData.nama_mapel"
              class="form-control"
              id="nama_mapel"
              placeholder="Masukan Nama Mata Pelajaran"
            />
            <div class="invalid-feedback" v-if="errors.nama_mapel">{{ errors.nama_mapel[0] }}</div>
          </div>
          <div class="form-group">
            <label for="nilai_kkm">Nilain KKM</label>
            <input
              type="text"
              v-model="editMapelData.nilai_kkm"
              class="form-control"
              id="nilai_kkm"
              placeholder="Masukan Nilai KKM"
            />
            <div class="invalid-feedback" v-if="errors.nilai_kkm">{{ errors.nilai_kkm[0] }}</div>
          </div>
          <div class="form-group">
            <label for="kelompok">Kelompok</label>
            <input
              type="text"
              v-model="editMapelData.kelompok"
              class="form-control"
              id="kelompok"
              placeholder="Kelompok"
            />
            <div class="invalid-feedback" v-if="errors.kelompok">{{ errors.kelompok[0] }}</div>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideEditMapelModal">Batal</button>
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
import * as mapelService from "../services/mapel_service";
export default {
  name: "mapel",
  data() {
    return {
      mapels: [],
      mapelData: {
        kode_singkat: "",
        nama_mapel: "",
        nilai_kkm: "",
        kelompok: ""
      },
      moreExists: false,
      nextPage: 0,
      editMapelData: {},
      errors: {}
    };
  },
  mounted() {
    this.loadMapels();
  },
  methods: {
    hideNewMapelModal() {
      this.$refs.newMapelModal.hide();
    },
    showNewMapelModal() {
      this.$refs.newMapelModal.show();
    },
    loadMapels: async function() {
      try {
        const response = await mapelService.loadMapels();
        this.mapels = response.data.data;

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
    createMapel: async function() {
      let formData = new FormData();
      formData.append("kode_singkat", this.mapelData.kode_singkat);
      formData.append("nama_mapel", this.mapelData.nama_mapel);
      formData.append("nilai_kkm", this.mapelData.nilai_kkm);
      formData.append("kelompok", this.mapelData.kelompok);

      try {
        const response = await mapelService.createMapel(formData);
        this.mapels.unshift(response.data);
        this.hideNewMapelModal();
        this.flashMessage.success({
          message: "Data Mapel Berhasil Ditambahkan",
          time: 5000
        });
        this.mapelData = {
          kode_singkat: "",
          nama_mapel: "",
          nilai_kkm: "",
          kelompok: ""
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
    deleteMapel: async function(mapel) {
      if (!window.confirm(`Anda Akan Menghapus ${mapel.nama_mapel}`)) {
        return;
      }

      try {
        await mapelService.deleteMapel(mapel.id);

        this.mapels = this.mapels.filter(obj => {
          return obj.id != mapel.id;
        });
        this.flashMessage.success({
          message: "Data Mapel Berhasil Dihapus",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    hideEditMapelModal() {
      this.$refs.editMapelModal.hide();
    },
    showEditMapelModal() {
      this.$refs.editMapelModal.show();
    },
    editMapel(mapel) {
      this.editMapelData = { ...mapel };
      this.showEditMapelModal();
    },
    updateMapel: async function() {
      try {
        const formData = new FormData();
        formData.append("kode_singkat", this.editMapelData.kode_singkat);
        formData.append("nama_mapel", this.editMapelData.nama_mapel);
        formData.append("nilai_kkm", this.editMapelData.nilai_kkm);
        formData.append("kelompok", this.editMapelData.kelompok);
        formData.append("_method", "put");

        const response = await mapelService.updateMapel(
          this.editMapelData.id,
          formData
        );
        this.mapels.map(mapel => {
          if (mapel.id == response.data.id) {
            for (let key in response.data) {
              mapel[key] = response.data[key];
            }
          }
        });

        this.hideEditMapelModal();

        this.flashMessage.success({
          message: "Data Mapel Berhasil Diubah",
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
        const response = await mapelService.loadMore(this.nextPage);
        if (response.data.current_page < response.data.last_page) {
          this.moreExists = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.moreExists = false;
        }

        response.data.data.forEach(data => {
          this.mapels.push(data);
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