<?php

namespace App\Http\Controllers;

use App\Siswa;
use Illuminate\Http\Request;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $siswas = Siswa::orderBy('created_at', 'desc')->paginate(5);
        return response()->json($siswas, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nis' => 'required',
            'nisn' => 'required',
            'nama' => 'required',
            'jenis_kelamin' => 'required',
            'tempat_lahir' => 'required',
            'tgl_lahir' => 'required',
            'agama' => 'required',
            'alamat' => 'required',
            'no_telp' => 'required',
            'sekolah_asal' => 'required',
            'alamat_sekolah_asal' => 'required',
            'diterima_dikelas' => 'required',
            'diterima_tgl' => 'required',
            'no_ijazah' => 'required',
            'thn_ijazah' => 'required',
            'no_skhun' => 'required',
            'thn_skhun' => 'required',
            'nama_ayah' => 'required',
            'nama_ibu' => 'required',
            'almt_ortu' => 'required',
            'tlp_ortu' => 'required',
            'pekerjaan_ayah' => 'required',
            'pekerjaan_ibu' => 'required',
            'nama_wali' => 'required',
            'almt_wali' => 'required',
            'tlp_wali' => 'required',
            'pekerjaan_wali' => 'required',

        ]);

        $siswa = new Siswa();
        $siswa->nis = $request->nis;
        $siswa->nisn = $request->nisn;
        $siswa->nama = $request->nama;
        $siswa->jenis_kelamin = $request->jenis_kelamin;
        $siswa->tempat_lahir = $request->tempat_lahir;
        $siswa->tgl_lahir = $request->tgl_lahir;
        $siswa->agama = $request->agama;
        $siswa->alamat = $request->alamat;
        $siswa->no_telp = $request->no_telp;
        $siswa->sekolah_asal = $request->sekolah_asal;
        $siswa->alamat_sekolah_asal = $request->alamat_sekolah_asal;
        $siswa->diterima_dikelas = $request->diterima_dikelas;
        $siswa->diterima_tgl = $request->diterima_tgl;
        $siswa->no_ijazah = $request->no_ijazah;
        $siswa->thn_ijazah = $request->thn_ijazah;
        $siswa->no_skhun = $request->no_skhun;
        $siswa->thn_skhun = $request->thn_skhun;
        $siswa->nama_ayah = $request->nama_ayah;
        $siswa->nama_ibu = $request->nama_ibu;
        $siswa->almt_ortu = $request->almt_ortu;
        $siswa->tlp_ortu = $request->tlp_ortu;
        $siswa->pekerjaan_ayah = $request->pekerjaan_ayah;
        $siswa->pekerjaan_ibu = $request->pekerjaan_ibu;
        $siswa->nama_wali = $request->nama_wali;
        $siswa->almt_wali = $request->almt_wali;
        $siswa->tlp_wali = $request->tlp_wali;
        $siswa->pekerjaan_wali = $request->pekerjaan_wali;
        $siswa->kela_id = 0;

        if ($siswa->save()) {
            return response()->json($siswa, 200);
        } else {
            return response()->json([
                'message' => 'Terjadi Kesalahan, Silahkan Coba Kembali!',
                'status' => 500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function show(Siswa $siswa)
    {
        //
    }

    public function showByKela($kelas)
    {
        $kelKels = Siswa::where([
            ['kela_id', '=', 0],
            ['diterima_dikelas', '=', $kelas]
        ])->get();
        return response()->json($kelKels, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function edit(Siswa $siswa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Siswa $siswa)
    {
        $request->validate([
            'nis' => 'required',
            'nisn' => 'required',
            'nama' => 'required',
            'jenis_kelamin' => 'required',
            'tempat_lahir' => 'required',
            'tgl_lahir' => 'required',
            'agama' => 'required',
            'alamat' => 'required',
            'no_telp' => 'required',
            'sekolah_asal' => 'required',
            'alamat_sekolah_asal' => 'required',
            'diterima_dikelas' => 'required',
            'diterima_tgl' => 'required',
            'no_ijazah' => 'required',
            'thn_ijazah' => 'required',
            'no_skhun' => 'required',
            'thn_skhun' => 'required',
            'nama_ayah' => 'required',
            'nama_ibu' => 'required',
            'almt_ortu' => 'required',
            'tlp_ortu' => 'required',
            'pekerjaan_ayah' => 'required',
            'pekerjaan_ibu' => 'required',
            'nama_wali' => 'required',
            'almt_wali' => 'required',
            'tlp_wali' => 'required',
            'pekerjaan_wali' => 'required',

        ]);

        $siswa->nis = $request->nis;
        $siswa->nisn = $request->nisn;
        $siswa->nama = $request->nama;
        $siswa->jenis_kelamin = $request->jenis_kelamin;
        $siswa->tempat_lahir = $request->tempat_lahir;
        $siswa->tgl_lahir = $request->tgl_lahir;
        $siswa->agama = $request->agama;
        $siswa->alamat = $request->alamat;
        $siswa->no_telp = $request->no_telp;
        $siswa->sekolah_asal = $request->sekolah_asal;
        $siswa->alamat_sekolah_asal = $request->alamat_sekolah_asal;
        $siswa->diterima_dikelas = $request->diterima_dikelas;
        $siswa->diterima_tgl = $request->diterima_tgl;
        $siswa->no_ijazah = $request->no_ijazah;
        $siswa->thn_ijazah = $request->thn_ijazah;
        $siswa->no_skhun = $request->no_skhun;
        $siswa->thn_skhun = $request->thn_skhun;
        $siswa->nama_ayah = $request->nama_ayah;
        $siswa->nama_ibu = $request->nama_ibu;
        $siswa->almt_ortu = $request->almt_ortu;
        $siswa->tlp_ortu = $request->tlp_ortu;
        $siswa->pekerjaan_ayah = $request->pekerjaan_ayah;
        $siswa->pekerjaan_ibu = $request->pekerjaan_ibu;
        $siswa->nama_wali = $request->nama_wali;
        $siswa->almt_wali = $request->almt_wali;
        $siswa->tlp_wali = $request->tlp_wali;
        $siswa->pekerjaan_wali = $request->pekerjaan_wali;
        $siswa->kela_id = $request->kela_id;

        if ($siswa->save()) {
            return response()->json($siswa, 200);
        } else {
            return response()->json([
                'message' => 'Terjadi Kesalahan, Silahkan Coba Kembali!',
                'status' => 500
            ], 500);
        }
    }

    public function updateKelaId(Request $request, Siswa $siswa)
    {
        $siswa->kela_id = $request->kela_id;

        if ($siswa->save()) {
            return response()->json($siswa, 200);
        } else {
            return response()->json([
                'message' => 'Terjadi Kesalahan, Silahkan Coba Kembali!',
                'status' => 500
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Siswa $siswa)
    {
        if ($siswa->delete()) {
            return response()->json([
                'message' => 'Berhasil Dihapus',
                'status' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Terjadi Kesalahan, Silahkan Coba Kembali!',
                'status' => 500
            ], 500);
        }
    }
}
