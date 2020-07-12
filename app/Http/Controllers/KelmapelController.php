<?php

namespace App\Http\Controllers;

use App\Kelmapel;
use Illuminate\Http\Request;

class KelmapelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kelmapel = Kelmapel::with('mapel', 'guru', 'kela')->get();
        return response()->json($kelmapel, 200);
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
            'mapel_id' => 'required',
            'guru_id' => 'required',
            'kela_id' => 'required',
        ]);

        $kelmapel = new Kelmapel();
        $kelmapel->mapel_id = $request->mapel_id;
        $kelmapel->guru_id = $request->guru_id;
        $kelmapel->kela_id = $request->kela_id;

        if ($kelmapel->save()) {
            return response()->json($kelmapel, 200);
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
     * @param  \App\Kelmapel  $kelmapel
     * @return \Illuminate\Http\Response
     */
    public function show(Kelmapel $kelmapel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Kelmapel  $kelmapel
     * @return \Illuminate\Http\Response
     */
    public function edit(Kelmapel $kelmapel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Kelmapel  $kelmapel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Kelmapel $kelmapel)
    {
        $request->validate([
            'mapel_id' => 'required',
            'guru_id' => 'required',
            'kela_id' => 'required',
        ]);

        $kelmapel->mapel_id = $request->mapel_id;
        $kelmapel->guru_id = $request->guru_id;
        $kelmapel->kela_id = $request->kela_id;

        if ($kelmapel->save()) {
            return response()->json($kelmapel, 200);
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
     * @param  \App\Kelmapel  $kelmapel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kelmapel $kelmapel)
    {
        if ($kelmapel->delete()) {
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
