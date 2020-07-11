<template>
  <div class="container-fluid">
    <b-card no-body class="mt-4">
      <b-tabs pills card>
        <b-tab title="Daftar Siswa" active>
          Daftar Siswa Kelas {{ kelasnama }}
          <b-card-text>
            <table class="table">
              <thead>
                <tr>
                  <td>#</td>
                  <td>NIS</td>
                  <td>NAMA</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(kelkel, index) in kelkels" :key="index">
                  <td>{{ index + 1 }}</td>
                  <!-- <td v-for="(kela, index) in kelkel.kela" :key="index">{{ kela.nama_kelas }}</td> -->
                  <td>{{ kelkel.siswa.nis }}</td>
                  <td>{{ kelkel.siswa.nama }}</td>
                  <td>
                    <button class="btn btn-danger btn-sm" v-on:click="deleteKelkel(kelkel)">
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
          </b-card-text>
        </b-tab>
        <b-tab title="Tambah Siswa">
          <b-card-text>
            <table class="table">
              <thead>
                <tr>
                  <td>#</td>
                  <td>NIS</td>
                  <td>NISN</td>
                  <td>NAMA</td>
                  <td>AKSI</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(siswa, index) in siswas" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ siswa.nis }}</td>
                  <td>{{ siswa.nisn }}</td>
                  <td>{{ siswa.nama }}</td>
                  <td>
                    <button class="btn btn-primary btn-sm" v-on:click="createKelkel(siswa)">
                      <span class="fa fa-plus"></span>
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
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import * as siswaService from "../services/siswa_service";
import * as kelkelService from "../services/setkel_service";
import * as kelasService from "../services/kelas_service";

export default {
  props: ["kelasid", "kelasnama", "kelastingkat"],
  name: "kelkel",
  name: "siswa",
  data() {
    return {
      siswas: [],
      kelkels: [],
      kelkelData: {
        kela_id: 0,
        siswa_id: 0
      },
      siswaData: {
        nis: "",
        nisn: "",
        nama: "",
        jenis_kelamin: "Pria",
        tempat_lahir: "",
        tgl_lahir: "",
        agama: "",
        alamat: "",
        no_telp: "",
        sekolah_asal: "",
        alamat_sekolah_asal: "",
        diterima_dikelas: "",
        diterima_tgl: "",
        no_ijazah: "",
        thn_ijazah: "",
        no_skhun: "",
        thn_skhun: "",
        nama_ayah: "",
        nama_ibu: "",
        almt_ortu: "",
        tlp_ortu: "",
        pekerjaan_ayah: "",
        pekerjaan_ibu: "",
        nama_wali: "",
        almt_wali: "",
        tlp_wali: "",
        pekerjaan_wali: ""
      },
      moreExists: false,
      nextPage: 0,
      editSiswaData: {},
      errors: {}
    };
  },
  mounted() {
    this.loadSiswas();
    this.loadKelkel();
  },
  methods: {
    loadKelkel: async function() {
      try {
        const response = await kelkelService.showKelkel(this.kelasid);
        this.kelkels = response.data;
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    deleteKelkel: async function(kelkel) {
      if (!window.confirm(`Anda Akan Menghapus ${kelkel.siswa.nama}`)) {
        return;
      }

      try {
        await kelkelService.deleteKelkel(kelkel.id);
        this.hapusKuota(this.kelasid);
        this.editSiswaData = { ...kelkel.siswa };
        this.updateSiswa(kelkel.siswa.id);

        this.kelkels = this.kelkels.filter(obj => {
          return obj.id != kelkel.id;
        });
        this.flashMessage.success({
          message: "Data Kelompok Kelas Berhasil Dihapus",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    createKelkel: async function(siswa) {
      let formData = new FormData();
      formData.append("kela_id", this.kelasid);
      formData.append("siswa_id", siswa.id);
      try {
        const response = await kelkelService.createKelkel(formData);
        this.updateKuota(this.kelasid);
        this.editSiswaData = { ...siswa };
        this.updateSiswa2(siswa.id);
        this.loadKelkel();
        this.flashMessage.success({
          message: "Data Kela Berhasil Diubah 0",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    updateKuota: async function(id) {
      try {
        const response = await kelasService.updateKuota(id);
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    hapusKuota: async function(id) {
      try {
        const response = await kelasService.hapusKuota(id);
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    updateSiswa2: async function(id) {
      const formData = new FormData();
      formData.append("nis", this.editSiswaData.nis);
      formData.append("nisn", this.editSiswaData.nisn);
      formData.append("nama", this.editSiswaData.nama);
      formData.append("jenis_kelamin", this.editSiswaData.jenis_kelamin);
      formData.append("tempat_lahir", this.editSiswaData.tempat_lahir);
      formData.append("tgl_lahir", this.editSiswaData.tgl_lahir);
      formData.append("agama", this.editSiswaData.agama);
      formData.append("alamat", this.editSiswaData.alamat);
      formData.append("no_telp", this.editSiswaData.no_telp);
      formData.append("sekolah_asal", this.editSiswaData.sekolah_asal);
      formData.append(
        "alamat_sekolah_asal",
        this.editSiswaData.alamat_sekolah_asal
      );
      formData.append("diterima_dikelas", this.editSiswaData.diterima_dikelas);
      formData.append("diterima_tgl", this.editSiswaData.diterima_tgl);
      formData.append("no_ijazah", this.editSiswaData.no_ijazah);
      formData.append("thn_ijazah", this.editSiswaData.thn_ijazah);
      formData.append("no_skhun", this.editSiswaData.no_skhun);
      formData.append("thn_skhun", this.editSiswaData.thn_skhun);
      formData.append("nama_ayah", this.editSiswaData.nama_ayah);
      formData.append("nama_ibu", this.editSiswaData.nama_ibu);
      formData.append("almt_ortu", this.editSiswaData.almt_ortu);
      formData.append("tlp_ortu", this.editSiswaData.tlp_ortu);
      formData.append("pekerjaan_ayah", this.editSiswaData.pekerjaan_ayah);
      formData.append("pekerjaan_ibu", this.editSiswaData.pekerjaan_ibu);
      formData.append("nama_wali", this.editSiswaData.nama_wali);
      formData.append("almt_wali", this.editSiswaData.almt_wali);
      formData.append("tlp_wali", this.editSiswaData.tlp_wali);
      formData.append("pekerjaan_wali", this.editSiswaData.pekerjaan_wali);
      formData.append("kela_id", this.kelasid);
      formData.append("_method", "put");
      try {
        const response = await siswaService.updateSiswa(id, formData);
        this.loadSiswas();
        this.siswas.map(siswa => {
          if (siswa.id == response.data.id) {
            for (let key in response.data) {
              siswa[key] = response.data[key];
            }
          }
        });

        this.flashMessage.success({
          message: "Data Kela Berhasil Diubah 0",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    updateSiswa: async function(id) {
      const formData = new FormData();
      formData.append("nis", this.editSiswaData.nis);
      formData.append("nisn", this.editSiswaData.nisn);
      formData.append("nama", this.editSiswaData.nama);
      formData.append("jenis_kelamin", this.editSiswaData.jenis_kelamin);
      formData.append("tempat_lahir", this.editSiswaData.tempat_lahir);
      formData.append("tgl_lahir", this.editSiswaData.tgl_lahir);
      formData.append("agama", this.editSiswaData.agama);
      formData.append("alamat", this.editSiswaData.alamat);
      formData.append("no_telp", this.editSiswaData.no_telp);
      formData.append("sekolah_asal", this.editSiswaData.sekolah_asal);
      formData.append(
        "alamat_sekolah_asal",
        this.editSiswaData.alamat_sekolah_asal
      );
      formData.append("diterima_dikelas", this.editSiswaData.diterima_dikelas);
      formData.append("diterima_tgl", this.editSiswaData.diterima_tgl);
      formData.append("no_ijazah", this.editSiswaData.no_ijazah);
      formData.append("thn_ijazah", this.editSiswaData.thn_ijazah);
      formData.append("no_skhun", this.editSiswaData.no_skhun);
      formData.append("thn_skhun", this.editSiswaData.thn_skhun);
      formData.append("nama_ayah", this.editSiswaData.nama_ayah);
      formData.append("nama_ibu", this.editSiswaData.nama_ibu);
      formData.append("almt_ortu", this.editSiswaData.almt_ortu);
      formData.append("tlp_ortu", this.editSiswaData.tlp_ortu);
      formData.append("pekerjaan_ayah", this.editSiswaData.pekerjaan_ayah);
      formData.append("pekerjaan_ibu", this.editSiswaData.pekerjaan_ibu);
      formData.append("nama_wali", this.editSiswaData.nama_wali);
      formData.append("almt_wali", this.editSiswaData.almt_wali);
      formData.append("tlp_wali", this.editSiswaData.tlp_wali);
      formData.append("pekerjaan_wali", this.editSiswaData.pekerjaan_wali);
      formData.append("kela_id", 0);
      formData.append("_method", "put");
      try {
        const response = await siswaService.updateSiswa(id, formData);
        this.loadSiswas();
        this.siswas.map(siswa => {
          if (siswa.id == response.data.id) {
            for (let key in response.data) {
              siswa[key] = response.data[key];
            }
          }
        });

        this.flashMessage.success({
          message: "Data Kela Berhasil Diubah 0",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    loadSiswas: async function() {
      try {
        const response = await siswaService.ambilSiswasByKela(
          this.kelastingkat
        );
        this.siswas = response.data;
      } catch (error) {
        this.flashMessage.error({
          message: "Terjadi masalah silahkan refresh halaman ini!",
          time: 5000
        });
      }
    },
    loadMore: async function() {
      try {
        const response = await siswaService.loadMore(this.nextPage);
        if (response.data.current_page < response.data.last_page) {
          this.moreExists = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.moreExists = false;
        }

        response.data.data.forEach(data => {
          this.siswas.push(data);
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
