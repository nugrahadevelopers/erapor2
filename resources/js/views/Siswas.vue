<template>
  <div class="container-fluid">
    <b-card no-body class="mt-4">
      <b-tabs pills card>
        <b-tab title="Data Siswa" active>
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
                  <td>{{ index+1 }}</td>
                  <td>{{ siswa.nis }}</td>
                  <td>{{ siswa.nisn }}</td>
                  <td>{{ siswa.nama }}</td>
                  <td>
                    <button class="btn btn-primary btn-sm" v-on:click="editSiswa(siswa)">
                      <span class="fa fa-edit"></span>
                    </button>
                    <button class="btn btn-danger btn-sm" v-on:click="deleteSiswa(siswa)">
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
            <div class="d-block">
              <form v-on:submit.prevent="createSiswa">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="name">NIS</label>
                      <input
                        type="text"
                        v-model="siswaData.nis"
                        class="form-control"
                        id="nis"
                        placeholder="Masukan NIS"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="phone">NISN</label>
                      <input
                        type="text"
                        v-model="siswaData.nisn"
                        class="form-control"
                        id="nisn"
                        placeholder="Masukan NISN"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="phone">Nama</label>
                      <input
                        type="text"
                        v-model="siswaData.nama"
                        class="form-control"
                        id="nama"
                        placeholder="Masukan NAMA"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="phone">Jenis Kelamin</label>
                      <b-dropdown split split-variant="outline" v-model="dropGender.dropValue">
                        <b-dropdown-item
                          v-for="dropoption in dropGender.dropOption"
                          :key="dropoption.value"
                          :value="dropoption.value"
                          @click="siswaData.jenis_kelamin = dropoption.value, dropGender.dropValue = dropoption.value"
                        >{{dropoption.text}}</b-dropdown-item>
                      </b-dropdown>
                      <p>{{ dropGender.dropValue }}</p>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Tempat Lahir</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="siswaData.tempat_lahir"
                        id="tempat_lahir"
                        placeholder="Masukan Tempat Lahir"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="phone">Tanggal Lahir</label>
                      <b-input-group class="mb-3">
                        <b-form-input
                          id="example-input"
                          v-model="siswaData.tgl_lahir"
                          type="text"
                          placeholder="YYYY-MM-DD"
                          autocomplete="off"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-form-datepicker
                            id="example-datepicker"
                            v-model="siswaData.tgl_lahir"
                            button-only
                            right
                          ></b-form-datepicker>
                        </b-input-group-append>
                      </b-input-group>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="phone">Agama</label>
                      <input
                        type="text"
                        class="form-control"
                        id="agama"
                        v-model="siswaData.agama"
                        placeholder="Masukan Agama"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Alamat</label>
                      <input
                        type="text"
                        class="form-control"
                        id="alamat"
                        v-model="siswaData.alamat"
                        placeholder="Masukan Alamat"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Nomor Telepon</label>
                      <input
                        type="text"
                        class="form-control"
                        id="no_telp"
                        v-model="siswaData.no_telp"
                        placeholder="Masukan Nomor Telepon"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Sekolah Asal</label>
                      <input
                        type="text"
                        class="form-control"
                        id="sekolah_asal"
                        v-model="siswaData.sekolah_asal"
                        placeholder="Masukan Sekolah Asal"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Alamat Sekolah Asal</label>
                      <input
                        type="text"
                        class="form-control"
                        id="alamat_sekolah_asal"
                        v-model="siswaData.alamat_sekolah_asal"
                        placeholder="Masukan Alamat Sekolah Asal"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Diterima Dikelas</label>
                      <b-dropdown
                        :text="siswaData.diterima_dikelas"
                        split
                        split-variant="outline-dark"
                        v-model="dropKelas.dropValue"
                      >
                        <b-dropdown-item
                          v-for="dropoption in dropKelas.dropOption"
                          :key="dropoption.value"
                          :value="dropoption.value"
                          @click="siswaData.diterima_dikelas = dropoption.value, dropKelas.dropValue = dropoption.value"
                        >{{dropoption.text}}</b-dropdown-item>
                      </b-dropdown>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Tanggal Diterima</label>
                      <b-input-group class="mb-3">
                        <b-form-input
                          id="diterima_tgl"
                          v-model="siswaData.diterima_tgl"
                          type="text"
                          placeholder="YYYY-MM-DD"
                          autocomplete="off"
                        ></b-form-input>
                        <b-input-group-append>
                          <b-form-datepicker
                            id="diterima_tgl"
                            v-model="siswaData.diterima_tgl"
                            button-only
                            right
                          ></b-form-datepicker>
                        </b-input-group-append>
                      </b-input-group>
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">No. Ijazah</label>
                      <input
                        type="text"
                        class="form-control"
                        id="no_ijazah"
                        v-model="siswaData.no_ijazah"
                        placeholder="Masukan Nomor Ijazah"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Tahun Ijazah</label>
                      <input
                        type="text"
                        class="form-control"
                        id="thn_ijazah"
                        v-model="siswaData.thn_ijazah"
                        placeholder="Masukan Tahun Ijazah"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">No. SKHUN</label>
                      <input
                        type="text"
                        class="form-control"
                        id="no_skhun"
                        v-model="siswaData.no_skhun"
                        placeholder="Masukan Nomor SKHUN"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Tahun SKHUN</label>
                      <input
                        type="text"
                        class="form-control"
                        id="thn_skhun"
                        v-model="siswaData.thn_skhun"
                        placeholder="Masukan Tahun SKHUN"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Nama Ayah</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nama_ayah"
                        v-model="siswaData.nama_ayah"
                        placeholder="Masukan Nama Ayah"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Nama Ibu</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nama_ibu"
                        v-model="siswaData.nama_ibu"
                        placeholder="Masukan Nama Ibu"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Alamat Ortu</label>
                      <input
                        type="text"
                        class="form-control"
                        id="almt_ortu"
                        v-model="siswaData.almt_ortu"
                        placeholder="Masukan Alamat Orang Tua"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Telp Ortu</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tlp_ortu"
                        v-model="siswaData.tlp_ortu"
                        placeholder="Masukan No. Telepon Ortu"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Perkerjaan Ayah</label>
                      <input
                        type="text"
                        class="form-control"
                        id="pekerjaan_ayah"
                        v-model="siswaData.pekerjaan_ayah"
                        placeholder="Masukan Perkerjaan Ayah"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Perkerjaan Ibu</label>
                      <input
                        type="text"
                        class="form-control"
                        id="pekerjaan_ibu"
                        v-model="siswaData.pekerjaan_ibu"
                        placeholder="Masukan Perkerjaan Ibu"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Nama Wali</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nama_wali"
                        v-model="siswaData.nama_wali"
                        placeholder="Masukan Nama Wali"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Alamat Wali</label>
                      <input
                        type="text"
                        class="form-control"
                        id="almt_wali"
                        v-model="siswaData.almt_wali"
                        placeholder="Masukan Alamat Wali"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Telp Wali</label>
                      <input
                        type="text"
                        class="form-control"
                        id="tlp_wali"
                        v-model="siswaData.tlp_wali"
                        placeholder="Masukan Telp Wali"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="name">Perkerjaan Wali</label>
                      <input
                        type="text"
                        class="form-control"
                        id="pekerjaan_wali"
                        v-model="siswaData.pekerjaan_wali"
                        placeholder="Masukan Perkerjaan Wali"
                      />
                      <div class="invalid-feedback"></div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="text-right">
                  <button type="submit" class="btn btn-primary">
                    <span class="fa fa-check"></span> Simpan
                  </button>
                </div>
              </form>
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>

    <b-modal ref="editSiswaModal" size="xl" hide-footer title="Ubah Data Siswa">
      <div class="d-block">
        <form v-on:submit.prevent="updateSiswa">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="name">NIS</label>
                <input
                  type="text"
                  v-model="editSiswaData.nis"
                  class="form-control"
                  id="nis"
                  placeholder="Masukan NIS"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="phone">NISN</label>
                <input
                  type="text"
                  v-model="editSiswaData.nisn"
                  class="form-control"
                  id="nisn"
                  placeholder="Masukan NISN"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="phone">Nama</label>
                <input
                  type="text"
                  v-model="editSiswaData.nama"
                  class="form-control"
                  id="nama"
                  placeholder="Masukan NAMA"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <label for="name">Jenis Kelamin</label>
                  <b-dropdown
                    split
                    split-variant="outline-dark"
                    :text="editSiswaData.jenis_kelamin"
                    v-model="editSiswaData.jenis_kelamin"
                  >
                    <b-dropdown-item
                      v-for="dropoption in dropGender.dropOption"
                      :key="dropoption.value"
                      :value="dropoption.value"
                      @click="editSiswaData.jenis_kelamin = dropoption.value, dropGender.dropValue = dropoption.value"
                    >{{dropoption.text}}</b-dropdown-item>
                  </b-dropdown>
                  <div class="invalid-feedback"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="name">Tempat Lahir</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editSiswaData.tempat_lahir"
                  id="tempat_lahir"
                  placeholder="Masukan Tempat Lahir"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="phone">Tanggal Lahir</label>
                <b-input-group class="mb-3">
                  <b-form-input
                    id="example-input"
                    v-model="editSiswaData.tgl_lahir"
                    type="text"
                    placeholder="YYYY-MM-DD"
                    autocomplete="off"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-form-datepicker
                      id="example-datepicker"
                      v-model="editSiswaData.tgl_lahir"
                      button-only
                      right
                    ></b-form-datepicker>
                  </b-input-group-append>
                </b-input-group>
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="phone">Agama</label>
                <input
                  type="text"
                  class="form-control"
                  id="agama"
                  v-model="editSiswaData.agama"
                  placeholder="Masukan Agama"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="name">Alamat</label>
                <input
                  type="text"
                  class="form-control"
                  id="alamat"
                  v-model="editSiswaData.alamat"
                  placeholder="Masukan Alamat"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Nomor Telepon</label>
                <input
                  type="text"
                  class="form-control"
                  id="no_telp"
                  v-model="editSiswaData.no_telp"
                  placeholder="Masukan Nomor Telepon"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="name">Sekolah Asal</label>
                <input
                  type="text"
                  class="form-control"
                  id="sekolah_asal"
                  v-model="editSiswaData.sekolah_asal"
                  placeholder="Masukan Sekolah Asal"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Alamat Sekolah Asal</label>
                <input
                  type="text"
                  class="form-control"
                  id="alamat_sekolah_asal"
                  v-model="editSiswaData.alamat_sekolah_asal"
                  placeholder="Masukan Alamat Sekolah Asal"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="name">Diterima Dikelas</label>
                <b-dropdown
                  split
                  split-variant="outline-dark"
                  :text="editSiswaData.diterima_dikelas"
                  v-model="editSiswaData.diterima_dikelas"
                >
                  <b-dropdown-item
                    v-for="dropoption in dropKelas.dropOption"
                    :key="dropoption.value"
                    :value="dropoption.value"
                    @click="editSiswaData.diterima_dikelas = dropoption.value, dropKelas.dropValue = dropoption.value"
                  >{{dropoption.text}}</b-dropdown-item>
                </b-dropdown>
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Tanggal Diterima</label>
                <b-input-group class="mb-3">
                  <b-form-input
                    id="diterima_tgl"
                    v-model="editSiswaData.diterima_tgl"
                    type="text"
                    placeholder="YYYY-MM-DD"
                    autocomplete="off"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-form-datepicker
                      id="diterima_tgl"
                      v-model="editSiswaData.diterima_tgl"
                      button-only
                      right
                    ></b-form-datepicker>
                  </b-input-group-append>
                </b-input-group>
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">No. Ijazah</label>
                <input
                  type="text"
                  class="form-control"
                  id="no_ijazah"
                  v-model="editSiswaData.no_ijazah"
                  placeholder="Masukan Nomor Ijazah"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Tahun Ijazah</label>
                <input
                  type="text"
                  class="form-control"
                  id="thn_ijazah"
                  v-model="editSiswaData.thn_ijazah"
                  placeholder="Masukan Tahun Ijazah"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">No. SKHUN</label>
                <input
                  type="text"
                  class="form-control"
                  id="no_skhun"
                  v-model="editSiswaData.no_skhun"
                  placeholder="Masukan Nomor SKHUN"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Tahun SKHUN</label>
                <input
                  type="text"
                  class="form-control"
                  id="thn_skhun"
                  v-model="editSiswaData.thn_skhun"
                  placeholder="Masukan Tahun SKHUN"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="name">Nama Ayah</label>
                <input
                  type="text"
                  class="form-control"
                  id="nama_ayah"
                  v-model="editSiswaData.nama_ayah"
                  placeholder="Masukan Nama Ayah"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Nama Ibu</label>
                <input
                  type="text"
                  class="form-control"
                  id="nama_ibu"
                  v-model="editSiswaData.nama_ibu"
                  placeholder="Masukan Nama Ibu"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Alamat Ortu</label>
                <input
                  type="text"
                  class="form-control"
                  id="almt_ortu"
                  v-model="editSiswaData.almt_ortu"
                  placeholder="Masukan Alamat Orang Tua"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Telp Ortu</label>
                <input
                  type="text"
                  class="form-control"
                  id="tlp_ortu"
                  v-model="editSiswaData.tlp_ortu"
                  placeholder="Masukan No. Telepon Ortu"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="name">Perkerjaan Ayah</label>
                <input
                  type="text"
                  class="form-control"
                  id="pekerjaan_ayah"
                  v-model="editSiswaData.pekerjaan_ayah"
                  placeholder="Masukan Perkerjaan Ayah"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Perkerjaan Ibu</label>
                <input
                  type="text"
                  class="form-control"
                  id="pekerjaan_ibu"
                  v-model="editSiswaData.pekerjaan_ibu"
                  placeholder="Masukan Perkerjaan Ibu"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Nama Wali</label>
                <input
                  type="text"
                  class="form-control"
                  id="nama_wali"
                  v-model="editSiswaData.nama_wali"
                  placeholder="Masukan Nama Wali"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Alamat Wali</label>
                <input
                  type="text"
                  class="form-control"
                  id="almt_wali"
                  v-model="editSiswaData.almt_wali"
                  placeholder="Masukan Alamat Wali"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Telp Wali</label>
                <input
                  type="text"
                  class="form-control"
                  id="tlp_wali"
                  v-model="editSiswaData.tlp_wali"
                  placeholder="Masukan Telp Wali"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
            <div class="col">
              <div class="form-group">
                <label for="name">Perkerjaan Wali</label>
                <input
                  type="text"
                  class="form-control"
                  id="pekerjaan_wali"
                  v-model="editSiswaData.pekerjaan_wali"
                  placeholder="Masukan Perkerjaan Wali"
                />
                <div class="invalid-feedback"></div>
              </div>
            </div>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideEditSiswaModal">Batal</button>
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
import * as siswaService from "../services/siswa_service";
export default {
  name: "siswa",
  data() {
    return {
      siswas: [],
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
      dropGender: {
        dropValue: "Pria",
        dropOption: [
          {
            value: "Pria",
            text: "Pria"
          },
          {
            value: "Wanita",
            text: "Wanita"
          }
        ]
      },
      dropKelas: {
        dropValue: "10",
        dropOption: [
          {
            value: "10",
            text: "10"
          },
          {
            value: "11",
            text: "11"
          },
          {
            value: "12",
            text: "12"
          }
        ]
      },
      moreExists: false,
      nextPage: 0,
      editSiswaData: {},
      errors: {}
    };
  },
  mounted() {
    this.loadSiswas();
  },
  methods: {
    loadSiswas: async function() {
      try {
        const response = await siswaService.loadSiswas();
        this.siswas = response.data.data;

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
    createSiswa: async function() {
      let formData = new FormData();
      formData.append("nis", this.siswaData.nis);
      formData.append("nisn", this.siswaData.nisn);
      formData.append("nama", this.siswaData.nama);
      formData.append("jenis_kelamin", this.siswaData.jenis_kelamin);
      formData.append("tempat_lahir", this.siswaData.tempat_lahir);
      formData.append("tgl_lahir", this.siswaData.tgl_lahir);
      formData.append("agama", this.siswaData.agama);
      formData.append("alamat", this.siswaData.alamat);
      formData.append("no_telp", this.siswaData.no_telp);
      formData.append("sekolah_asal", this.siswaData.sekolah_asal);
      formData.append(
        "alamat_sekolah_asal",
        this.siswaData.alamat_sekolah_asal
      );
      formData.append("diterima_dikelas", this.siswaData.diterima_dikelas);
      formData.append("diterima_tgl", this.siswaData.diterima_tgl);
      formData.append("no_ijazah", this.siswaData.no_ijazah);
      formData.append("thn_ijazah", this.siswaData.thn_ijazah);
      formData.append("no_skhun", this.siswaData.no_skhun);
      formData.append("thn_skhun", this.siswaData.thn_skhun);
      formData.append("nama_ayah", this.siswaData.nama_ayah);
      formData.append("nama_ibu", this.siswaData.nama_ibu);
      formData.append("almt_ortu", this.siswaData.almt_ortu);
      formData.append("tlp_ortu", this.siswaData.tlp_ortu);
      formData.append("pekerjaan_ayah", this.siswaData.pekerjaan_ayah);
      formData.append("pekerjaan_ibu", this.siswaData.pekerjaan_ibu);
      formData.append("nama_wali", this.siswaData.nama_wali);
      formData.append("almt_wali", this.siswaData.almt_wali);
      formData.append("tlp_wali", this.siswaData.tlp_wali);
      formData.append("pekerjaan_wali", this.siswaData.pekerjaan_wali);

      try {
        const response = await siswaService.createSiswa(formData);
        this.siswas.unshift(response.data);
        // this.hideNewGuruModal();
        this.flashMessage.success({
          message: "Data Siswa Berhasil Ditambahkan",
          time: 5000
        });
        this.siswaData = {
          nis: "",
          nisn: "",
          nama: ""
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
    deleteSiswa: async function(siswa) {
      if (!window.confirm(`Anda Akan Menghapus ${siswa.nama}`)) {
        return;
      }

      try {
        await siswaService.deleteSiswa(siswa.id);

        this.siswas = this.siswas.filter(obj => {
          return obj.id != siswa.id;
        });
        this.flashMessage.success({
          message: "Data Siswa Berhasil Dihapus",
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    hideEditSiswaModal() {
      this.$refs.editSiswaModal.hide();
    },
    showEditSiswaModal() {
      this.$refs.editSiswaModal.show();
    },
    editSiswa(siswa) {
      this.editSiswaData = { ...siswa };
      this.showEditSiswaModal();
    },
    updateSiswa: async function() {
      try {
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
        formData.append(
          "diterima_dikelas",
          this.editSiswaData.diterima_dikelas
        );
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
        formData.append("_method", "put");

        const response = await siswaService.updateSiswa(
          this.editSiswaData.id,
          formData
        );
        this.siswas.map(siswa => {
          if (siswa.id == response.data.id) {
            for (let key in response.data) {
              siswa[key] = response.data[key];
            }
          }
        });

        this.hideEditSiswaModal();

        this.flashMessage.success({
          message: "Data Siswa Berhasil Diubah",
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