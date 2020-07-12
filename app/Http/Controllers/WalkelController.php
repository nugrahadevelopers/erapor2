<?php

namespace App\Http\Controllers;

use App\Walkel;
use Illuminate\Http\Request;

class WalkelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $walkes = Walkel::with('guru', 'kela')->get();
        return response()->json($walkes, 200);
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
            'guru_id' => 'required'
        ]);

        $walkel = new Walkel();
        $walkel->kela_id = $request->kela_id;
        $walkel->guru_id = $request->guru_id;

        if ($walkel->save()) {
            return response()->json($walkel, 200);
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
     * @param  \App\Walkel  $walkel
     * @return \Illuminate\Http\Response
     */
    public function show(Walkel $walkel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Walkel  $walkel
     * @return \Illuminate\Http\Response
     */
    public function edit(Walkel $walkel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Walkel  $walkel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Walkel $walkel)
    {
        $request->validate([
            'kela_id' => 'required',
            'guru_id' => 'required'
        ]);

        $walkel->kela_id = $request->kela_id;
        $walkel->guru_id = $request->guru_id;

        if ($walkel->save()) {
            return response()->json($walkel, 200);
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
     * @param  \App\Walkel  $walkel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Walkel $walkel)
    {
        if ($walkel->delete()) {
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
