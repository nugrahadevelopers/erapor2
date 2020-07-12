<template>
  <div class="container-fluid">
    <div class="card mb-4 mt-5">
      <div class="card-header d-flex">
        <i class="fas fa-chart-area mr-1"></i>
        Data Guru
        <button
          class="btn btn-primary btn-sm ml-auto"
          v-on:click="showNewWalkelModal"
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
              <td>Wali Kelas</td>
              <td>AKSI</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(walkel, index) in walkels" :key="index">
              <td>{{ index+1 }}</td>
              <td>{{ walkel.kela.nama_kelas }}</td>
              <td>{{ walkel.guru.name }}</td>
              <td>
                <button class="btn btn-danger btn-sm" v-on:click="deleteWalkel(walkel)">
                  <span class="fa fa-trash"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <b-modal ref="newWalkelModal" hide-footer title="Tambah Data">
      <div class="d-block">
        <form v-on:submit.prevent="createWalkel">
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
                @click="walkelData.guru_id = guru.id, dropGuruValue = guru.name"
              >{{guru.name}}</b-dropdown-item>
            </b-dropdown>
            <!-- <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div> -->
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
                @click="walkelData.kela_id = kela.id, dropKelaValue = kela.nama_kelas"
              >{{kela.nama_kelas}}</b-dropdown-item>
            </b-dropdown>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideNewWalkelModal">Batal</button>
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
import * as walkelService from "../services/walkel_service";
import * as guruService from "../services/guru_service";
import * as kelasService from "../services/kelas_service";
export default {
  name: "walkel",
  name: "guru",
  name: "kela",
  data() {
    return {
      walkels: [],
      gurus: [],
      kelas: [],
      dropGuruValue: "",
      dropKelaValue: "",
      dropKelaEdit: "",
      dropGuruEdit: "",
      walkelData: {
        guru_id: "",
        kela_id: ""
      },
      moreExists: false,
      nextPage: 0,
      editWalkelData: {},
      errors: {}
    };
  },
  mounted() {
    this.loadWalkels();
    this.loadGurus();
    this.loadKelassAll();
  },
  methods: {
    hideNewWalkelModal() {
      this.$refs.newWalkelModal.hide();
    },
    showNewWalkelModal() {
      this.$refs.newWalkelModal.show();
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
    loadWalkels: async function() {
      try {
        const response = await walkelService.loadWalkels();
        this.walkels = response.data;
      } catch (error) {
        this.flashMessage.error({
          message: "Terjadi masalah silahkan refresh halaman ini!",
          time: 5000
        });
      }
    },
    createWalkel: async function() {
      let formData = new FormData();
      formData.append("guru_id", this.walkelData.guru_id);
      formData.append("kela_id", this.walkelData.kela_id);

      try {
        const response = await walkelService.createWalkel(formData);
        this.loadWalkels();
        this.hideNewWalkelModal();
        this.flashMessage.success({
          message: "Data Berhasil Ditambahkan",
          time: 5000
        });
        this.walkelData = {
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
    deleteWalkel: async function(walkel) {
      if (
        !window.confirm(
          `Anda Akan Menghapus ${walkel.kela.nama_kelas} oleh ${walkel.guru.name}`
        )
      ) {
        return;
      }

      try {
        await walkelService.deleteWalkel(walkel.id);

        this.walkels = this.walkels.filter(obj => {
          return obj.id != walkel.id;
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