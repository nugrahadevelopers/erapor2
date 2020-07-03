<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">TAMBAH GURU</div>

                    <div class="card-body">

                        <form @submit.prevent="GuruStore">

                            <div class="form-group">
                                <label>NIP</label>
                                <input type="text" class="form-control" v-model="guru.nip"
                                       placeholder="Masukkan NIP">
                                <div v-if="validation.nip">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.nip[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>NAMA</label>
                                <input type="text" class="form-control" v-model="guru.name"
                                       placeholder="Masukkan NAMA">
                                <div v-if="validation.name">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.name[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>NOMOR HP</label>
                                <input type="text" class="form-control" v-model="guru.phone"
                                       placeholder="Masukkan NOMOR HP">
                                <div v-if="validation.phone">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.phone[0] }}
                                    </div>
                                </div>
                            </div>


                            <div class="form-group">
                                <label>ALAMAT</label>
                                <input type="text" class="form-control" v-model="guru.address"
                                       placeholder="Masukkan ALAMAT">
                                <div v-if="validation.address">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.address[0] }}
                                    </div>
                                </div>
                            </div>


                            <div class="form-group">
                                <button type="submit" class="btn btn-md btn-success">SIMPAN</button>
                                <button type="reset" class="btn btn-md btn-danger">RESET</button>
                            </div>


                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                guru: {},
                validation: []
            }
        },
        methods: {
            GuruStore() {
                let uri = 'http://localhost:8000/api/gurus/store';
                this.axios.post(uri, this.guru)
                    .then((response) => {
                        this.$router.push({
                            name: 'gurus'
                        });
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>