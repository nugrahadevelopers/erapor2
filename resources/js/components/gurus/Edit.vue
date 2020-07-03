<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">EDIT DATA GURU</div>

                    <div class="card-body">

                        <form @submit.prevent="GuruUpdate">

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
                                       placeholder="Masukkan NAMA GURU">
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
                                       placeholder="Masukkan Alamat Guru">
                                <div v-if="validation.address">
                                    <div class="alert alert-danger mt-1" role="alert">
                                        {{ validation.address[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="btn btn-md btn-success">UBAH</button>
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
        created() {
            let uri = `http://localhost:8000/api/gurus/${this.$route.params.id}`;
            this.axios.get(uri).then((response) => {
                this.guru = response.data.data;
            });
        },
        methods: {
            GuruUpdate() {
                let uri = `http://localhost:8000/api/gurus/update/${this.$route.params.id}`;
                this.axios.post(uri, this.guru)
                    .then((response) => {
                        this.$router.push({name: 'gurus'});
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>