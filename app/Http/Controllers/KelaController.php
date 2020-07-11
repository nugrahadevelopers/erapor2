<?php

namespace App\Http\Controllers;

use App\Kela;
use Illuminate\Http\Request;

class KelaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kelas = Kela::orderBy('created_at', 'desc')->paginate(10);
        // $kelas = Kela::all();
        // $kelas = Kela::with('siswa')->get();
        return response()->json($kelas, 200);
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
            'tingkat' => 'required',
            'nama_kelas' => 'required'
        ]);

        $kela = new Kela();
        $kela->tingkat = $request->tingkat;
        $kela->nama_kelas = $request->nama_kelas;

        if ($kela->save()) {
            return response()->json($kela, 200);
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
     * @param  \App\Kela  $kela
     * @return \Illuminate\Http\Response
     */
    public function show(Kela $kela)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Kela  $kela
     * @return \Illuminate\Http\Response
     */
    public function edit(Kela $kela)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Kela  $kela
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kela $kela)
    {
        $request->validate([
            'tingkat' => 'required',
            'nama_kelas' => 'required'
        ]);

        $kela->tingkat = $request->tingkat;
        $kela->nama_kelas = $request->nama_kelas;

        if ($kela->save()) {
            return response()->json($kela, 200);
        } else {
            return response()->json([
                'message' => 'Terjadi Kesalahan, Silahkan Coba Kembali!',
                'status' => 500
            ], 500);
        }
    }

    public function updateKuota($id)
    {
        $kela = Kela::where('id', $id)->first();

        $kela->kuota += 1;

        if ($kela->save()) {
            return response()->json($kela, 200);
        } else {
            return response()->json([
                'message' => 'Terjadi Kesalahan, Silahkan Coba Kembali!',
                'status' => 500
            ], 500);
        }
    }

    public function hapusKuota($id)
    {
        $kela = Kela::where('id', $id)->first();

        $kela->kuota -= 1;

        if ($kela->save()) {
            return response()->json($kela, 200);
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
     * @param  \App\Kela  $kela
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kela $kela)
    {
        if ($kela->delete()) {
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
