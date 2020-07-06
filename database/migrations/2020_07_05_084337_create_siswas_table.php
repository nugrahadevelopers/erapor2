<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiswasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('siswas', function (Blueprint $table) {
            $table->id();
            $table->string('nis');
            $table->string('nisn');
            $table->string('nama');
            $table->string('jenis_kelamin');
            $table->string('tempat_lahir');
            $table->string('tgl_lahir');
            $table->string('agama');
            $table->string('alamat');
            $table->string('no_telp');
            $table->string('sekolah_asal');
            $table->string('alamat_sekolah_asal');
            $table->string('diterima_dikelas');
            $table->string('diterima_tgl');
            $table->string('no_ijazah');
            $table->string('thn_ijazah');
            $table->string('no_skhun');
            $table->string('thn_skhun');
            $table->string('nama_ayah');
            $table->string('nama_ibu');
            $table->string('almt_ortu');
            $table->string('tlp_ortu');
            $table->string('pekerjaan_ayah');
            $table->string('pekerjaan_ibu');
            $table->string('nama_wali');
            $table->string('almt_wali');
            $table->string('tlp_wali');
            $table->string('pekerjaan_wali');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('siswas');
    }
}
