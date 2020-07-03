<template>
    <div class="container mt-3">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card card-default">
                    <div class="card-header">DATA GURU</div>

                    <div class="card-body">
                        <router-link :to="{ name: 'create' }" class="btn btn-md btn-success">TAMBAH GURU</router-link>

                        <div class="table-responsive mt-2">
                            <table class="table table-hover table-bordered">
                                <thead>
                                <tr>
                                    <th>NIP</th>
                                    <th>NAMA</th>
                                    <th>NOMOR HP</th>
                                    <th>ALAMAT</th>
                                    <th>AKSI</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="guru in gurus" :key="guru.id">
                                    <td>{{ guru.nip }}</td>
                                    <td>{{ guru.name }}</td>
                                    <td>{{ guru.phone }}</td>
                                    <td>{{ guru.address }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'edit', params: { id: guru.id }}" class="btn btn-sm btn-primary">UBAH</router-link>
                                        <button @click.prevent="GuruDelete(guru.id, index)" class="btn btn-sm btn-danger">HAPUS</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

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
                gurus: []
            }
        },
        created() {
            let uri = `http://localhost:8000/api/gurus`;
            this.axios.get(uri).then(response => {
                this.gurus = response.data.data;
            });
        },
        methods: {
            GuruDelete(id)
            {
                let uri = `http://localhost:8000/api/gurus/${id}`;
                this.axios.delete(uri)
                    .then(response => {
                        this.gurus.splice(index, 1);
                    }).catch(error => {
                    alert('system error!');
                });
            }
        }
    }
</script>