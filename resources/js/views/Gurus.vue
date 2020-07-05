<template>
    <div class="container-fluid">
        <div class="card mb-4 mt-5">
            <div class="card-header d-flex">
                <i class="fas fa-chart-area mr-1"></i>
                Data Guru
                <button class="btn btn-primary btn-sm ml-auto" v-on:click="showNewGuruModal"><span class="fa fa-plus"></span> Tambah Guru</button>
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Nama</td>
                            <td>NOMOR HP</td>
                            <td>ALAMAT</td>
                            <td>AKSI</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(guru, index) in gurus" :key="index">
                            <td>{{ index+1 }}</td>
                            <td>{{ guru.name }}</td>
                            <td>{{ guru.phone }}</td>
                            <td>{{ guru.address }}</td>
                            <td>
                                <button class="btn btn-primary btn-sm" v-on:click="editGuru(guru)"><span class="fa fa-edit"></span></button>
                                <button class="btn btn-danger btn-sm" v-on:click="deleteGuru(guru)"><span class="fa fa-trash"></span></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div class="text-center" v-show="moreExists">
                    <button type="button" class="btn btn-primary btn-sm" v-on:click="loadMore"><span class="fa fa-arrow-down"></span>
                        Lebih Banyak</button>
                </div>
            </div>
        </div>

        <b-modal ref="newGuruModal" hide-footer title="Tambah Data Guru">
            <div class="d-block">
                <form v-on:submit.prevent="createGuru">
                    <div class="form-group">
                        <label for="name">Nama Lengkap</label>
                        <input type="text" v-model="guruData.name" class="form-control" id="name" placeholder="Masukan Nama Guru">
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="phone">Nomor HP</label>
                        <input type="text" v-model="guruData.phone" class="form-control" id="phone" placeholder="Masukan Nomor HP Guru">
                        <div class="invalid-feedback" v-if="errors.phone">{{ errors.phone[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="address">Alamat</label>
                        <input type="text" v-model="guruData.address" class="form-control" id="address" placeholder="Masukan Alamat Guru">
                        <div class="invalid-feedback" v-if="errors.address">{{ errors.address[0] }}</div>
                    </div>

                    <hr>
                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideNewGuruModal">Batal</button>
                        <button type="submit" class="btn btn-primary"><span 
                        class="fa fa-check"></span> Simpan</button>
                    </div>
                </form>
            </div>
        </b-modal>

        <b-modal ref="editGuruModal" hide-footer title="Ubah Data Guru">
            <div class="d-block">
                <form v-on:submit.prevent="updateGuru">
                    <div class="form-group">
                        <label for="name">Nama Lengkap</label>
                        <input type="text" v-model="editGuruData.name" class="form-control" id="name" placeholder="Masukan Nama Guru">
                        <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="phone">Nomor HP</label>
                        <input type="text" v-model="editGuruData.phone" class="form-control" id="phone" placeholder="Masukan Nomor HP Guru">
                        <div class="invalid-feedback" v-if="errors.phone">{{ errors.phone[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="address">Alamat</label>
                        <input type="text" v-model="editGuruData.address" class="form-control" id="address" placeholder="Masukan Alamat Guru">
                        <div class="invalid-feedback" v-if="errors.address">{{ errors.address[0] }}</div>
                    </div>

                    <hr>
                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="hideEditGuruModal">Batal</button>
                        <button type="submit" class="btn btn-primary"><span 
                        class="fa fa-check"></span> Ubah</button>
                    </div>
                </form>
            </div>
        </b-modal>

    </div>
</template>

<script>
    import * as guruService from '../services/guru_service';
    export default {
        name: 'guru',
        data() {
            return {
                gurus: [],
                guruData: {
                    name: '',
                    phone: '',
                    address: ''
                },
                moreExists: false,
                nextPage: 0,
                editGuruData: {},
                errors: {}
            }
        },
        mounted() {
            this.loadGurus();
        },
        methods: {
            hideNewGuruModal() {
                this.$refs.newGuruModal.hide();
            },
            showNewGuruModal() {
                this.$refs.newGuruModal.show();
            },
            loadGurus: async function() {
                try {
                    const response = await guruService.loadGurus();
                    this.gurus = response.data.data;

                    if(response.data.current_page < response.data.last_page) {
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1;
                    } else {
                        this.moreExists = false;
                    }
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Terjadi masalah silahkan refresh halaman ini!',
                        time: 5000
                    });
                }
            },
            createGuru: async function() {
                let formData = new FormData();
                formData.append('name', this.guruData.name);
                formData.append('phone', this.guruData.phone);
                formData.append('address', this.guruData.address);

                try {
                    const response = await guruService.createGuru(formData);
                    this.gurus.unshift(response.data);
                    this.hideNewGuruModal();
                    this.flashMessage.success({
                        message: 'Data Guru Berhasil Ditambahkan',
                        time: 5000
                    });
                    this.guruData = {
                        name: '',
                        phone: '',
                        address: ''
                    };
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Terjadi masalah silahkan refresh halaman ini!',
                                time: 5000
                            });
                            break;
                    }
                }
            },
            deleteGuru: async function(guru) {
                if(!window.confirm(`Anda Akan Menghapus ${guru.name}`)) {
                    return;
                }

                try {
                    await guruService.deleteGuru(guru.id);

                    this.gurus = this.gurus.filter(obj => {
                        return obj.id != guru.id;
                    });
                    this.flashMessage.success({
                        message: 'Data Guru Berhasil Dihapus',
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            },
            hideEditGuruModal() {
                this.$refs.editGuruModal.hide();
            },
            showEditGuruModal() {
                this.$refs.editGuruModal.show();
            },
            editGuru(guru) {
                this.editGuruData = {...guru};
                this.showEditGuruModal();
            },
            updateGuru: async function() {
                try {
                    const formData = new FormData();
                    formData.append('name', this.editGuruData.name);
                    formData.append('phone', this.editGuruData.phone);
                    formData.append('address', this.editGuruData.address);
                    formData.append('_method', 'put');

                    const response = await guruService.updateGuru(this.editGuruData.id, formData);
                    this.gurus.map(guru => {
                        if(guru.id == response.data.id) {
                            for(let key in response.data) {
                                guru[key] = response.data[key];
                            }
                        }
                    });
                    
                    this.hideEditGuruModal();

                    this.flashMessage.success({
                        message: 'Data Guru Berhasil Diubah',
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
                    const response = await guruService.loadMore(this.nextPage);
                    if(response.data.current_page < response.data.last_page) {
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1;
                    } else {
                        this.moreExists = false;
                    }

                    response.data.data.forEach(data => {
                        this.gurus.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time: 5000
                    });
                }
            }
        }
    }
</script>