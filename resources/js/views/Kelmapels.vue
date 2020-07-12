<template>
  <div class="container-fluid">
    <div class="card mb-4 mt-5">
      <div class="card-header d-flex">
        <i class="fas fa-chart-area mr-1"></i>
        Data Guru
        <button
          class="btn btn-primary btn-sm ml-auto"
          v-on:click="showNewKelmapelModal"
        >
          <span class="fa fa-plus"></span> Tambah
        </button>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Kelas</td>
              <td>Mata Pelajaran</td>
              <td>Guru</td>
              <td>AKSI</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(kelmapel, index) in kelmapels" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ kelmapel.kela.nama_kelas }}</td>
              <td>{{ kelmapel.mapel.nama_mapel }}</td>
              <td>{{ kelmapel.guru.name }}</td>
              <td>
                <button class="btn btn-danger btn-sm" v-on:click="deleteKelmapel(kelmapel)">
                  <span class="fa fa-trash"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <b-modal ref="newKelmapelModal" hide-footer title="Tambah Data">
      <div class="d-block">
        <form v-on:submit.prevent="createKelmapel">
          <div class="form-group">
            <label for="guru">Guru</label>
            <b-dropdown
              split
              split-variant="outline-dark"
              :text="dropGuruValue"
              v-model="dropGuruValue"
            >
              <b-dropdown-item
                v-for="guru in gurus"
                :key="guru.id"
                :value="guru.id"
                @click="kelmapelData.guru_id = guru.id, dropGuruValue = guru.name"
              >{{guru.name}}</b-dropdown-item>
            </b-dropdown>
            <!-- <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div> -->
          </div>
          <div class="form-group">
            <label for="mapel">Mata Pelajaran</label>
            <b-dropdown
              split
              split-variant="outline-dark"
              :text="dropMapelValue"
              v-model="dropMapelValue"
            >
              <b-dropdown-item
                v-for="mapel in mapels"
                :key="mapel.id"
                :value="mapel.id"
                @click="kelmapelData.mapel_id = mapel.id, dropMapelValue = mapel.nama_mapel"
              >{{mapel.nama_mapel}}</b-dropdown-item>
            </b-dropdown>
          </div>
          <div class="form-group">
            <label for="kelas">Kelas</label>
            <b-dropdown
              split
              split-variant="outline-dark"
              :text="dropKelaValue"
              v-model="dropKelaValue"
            >
              <b-dropdown-item
                v-for="kela in kelas"
                :key="kela.id"
                :value="kela.id"
                @click="kelmapelData.kela_id = kela.id, dropKelaValue = kela.nama_kelas"
              >{{kela.nama_kelas}}</b-dropdown-item>
            </b-dropdown>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideNewKelmapelModal">Batal</button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span> Simpan
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import * as kelmapelService from "../services/kelmapel_service";
import * as guruService from "../services/guru_service";
import * as mapelService from "../services/mapel_service";
import * as kelasService from "../services/kelas_service";
export default {
  name: "kelmapel",
  name: "guru",
  name: "mapel",
  name: "kela",
  data() {
    return {
      kelmapels: [],
      gurus: [],
      mapels: [],
      kelas: [],
      dropGuruValue: "",
      dropMapelValue: "",
      dropKelaValue: "",
      kelmapelData: {
        mapel_id: "",
        guru_id: "",
        kela_id: ""
      },
      moreExists: false,
      nextPage: 0,
      editKelmapelData: {},
      errors: {}
    };
  },
  mounted() {
    this.loadKelmapels();
    this.loadGurus();
    this.loadMapelsAll();
    this.loadKelassAll();
  },
  methods: {
    hideNewKelmapelModal() {
      this.$refs.newKelmapelModal.hide();
    },
    showNewKelmapelModal() {
      this.$refs.newKelmapelModal.show();
    },
    loadKelassAll: async function() {
      try {
        const response = await kelasService.loadKelassAll();
        this.kelas = response.data;
      } catch (error) {
        this.flashMessage.error({
          message: "Terjadi masalah silahkan refresh halaman ini!",
          time: 5000
        });
      }
    },
    loadMapelsAll: async function() {
      try {
        const response = await mapelService.loadMapelsAll();
        this.mapels = response.data;
      } catch (error) {
        this.flashMessage.error({
          message: "Terjadi masalah silahkan refresh halaman ini!",
          time: 5000
        });
      }
    },
    loadGurus: async function() {
      try {
        const response = await guruService.loadGurusAll();
        this.gurus = response.data;
      } catch (error) {
        this.flashMessage.error({
          message: "Terjadi masalah silahkan refresh halaman ini!",
          time: 5000
        });
      }
    },
    loadKelmapels: async function() {
      try {
        const response = await kelmapelService.loadKelmapels();
        this.kelmapels = response.data;

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
    createKelmapel: async function() {
      let formData = new FormData();
      formData.append("mapel_id", this.kelmapelData.mapel_id);
      formData.append("guru_id", this.kelmapelData.guru_id);
      formData.append("kela_id", this.kelmapelData.kela_id);

      try {
        const response = await kelmapelService.createKelmapel(formData);
        this.loadKelmapels();
        this.hideNewKelmapelModal();
        this.flashMessage.success({
          message: "Data Berhasil Ditambahkan",
          time: 5000
        });
        this.kelmapelData = {
          mapel_id: "",
          guru_id: "",
          kela_id: ""
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
    deleteKelmapel: async function(kelmapel) {
      if (
        !window.confirm(
          `Anda Akan Menghapus ${kelmapel.mapel.nama_mapel} oleh ${kelmapel.guru.name}`
        )
      ) {
        return;
      }

      try {
        await kelmapelService.deleteKelmapel(kelmapel.id);

        this.kelmapels = this.kelmapels.filter(obj => {
          return obj.id != kelmapel.id;
        });
        this.flashMessage.success({
          message: "Data Berhasil Dihapus",
          time: 5000
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