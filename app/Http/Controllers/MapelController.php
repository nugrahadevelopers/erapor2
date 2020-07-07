<?php

namespace App\Http\Controllers;

use App\Mapel;
use Illuminate\Http\Request;

class MapelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mapels = Mapel::orderBy('created_at', 'desc')->paginate(5);
        return response()->json($mapels, 200);
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
            'kode_singkat' => 'required|unique:mapels',
            'nama_mapel' => 'required',
            'nilai_kkm' => 'required',
            'kelompok' => 'required',
        ]);

        $mapel = new Mapel();
        $mapel->kode_singkat = $request->kode_singkat;
        $mapel->nama_mapel = $request->nama_mapel;
        $mapel->nilai_kkm = $request->nilai_kkm;
        $mapel->kelompok = $request->kelompok;

        if ($mapel->save()) {
            return response()->json($mapel, 200);
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
     * @param  \App\Mapel  $mapel
     * @return \Illuminate\Http\Response
     */
    public function show(Mapel $mapel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Mapel  $mapel
     * @return \Illuminate\Http\Response
     */
    public function edit(Mapel $mapel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mapel  $mapel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mapel $mapel)
    {
        $request->validate([
            'kode_singkat' => 'required',
            'nama_mapel' => 'required',
            'nilai_kkm' => 'required',
            'kelompok' => 'required',
        ]);

        $mapel->kode_singkat = $request->kode_singkat;
        $mapel->nama_mapel = $request->nama_mapel;
        $mapel->nilai_kkm = $request->nilai_kkm;
        $mapel->kelompok = $request->kelompok;

        if ($mapel->save()) {
            return response()->json($mapel, 200);
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
     * @param  \App\Mapel  $mapel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mapel $mapel)
    {
        if ($mapel->delete()) {
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
