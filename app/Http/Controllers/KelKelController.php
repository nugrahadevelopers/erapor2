<?php

namespace App\Http\Controllers;

use Exception;
use App\KelKel;
use Illuminate\Http\Request;

class KelKelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kelKels = KelKel::with('kela', 'siswa')->get();
        return response()->json($kelKels, 200);
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
            'kela_id' => 'required',
            'siswa_id' => 'required'
        ]);

        $kelkel = new KelKel();
        $kelkel->kela_id = $request->kela_id;
        $kelkel->siswa_id = $request->siswa_id;

        if ($kelkel->save()) {
            return response()->json($kelkel, 200);
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
     * @param  \App\KelKel  $kelKel
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $kelKels = KelKel::with('kela', 'siswa')->where('kela_id', '=', $id)->get();
        return response()->json($kelKels, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\KelKel  $kelKel
     * @return \Illuminate\Http\Response
     */
    public function edit(KelKel $kelKel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\KelKel  $kelKel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, KelKel $kelKel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\KelKel  $kelKel
     * @return \Illuminate\Http\Response
     */
    public function destroy(KelKel $kelkel)
    {
        if ($kelkel->delete()) {
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
