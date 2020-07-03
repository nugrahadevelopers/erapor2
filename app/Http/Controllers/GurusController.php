<?php

namespace App\Http\Controllers;

use App\Guru;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GurusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $gurus = Guru::latest()->get();
        return response([
            'success' => true,
            'message' => 'List Semua Guru',
            'data' => $gurus
        ], 200);
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
        //validate data
        $validator = Validator::make($request->all(), [
            'nip'       => 'required', 
            'name'      => 'required',
            'phone'     => 'required',
            'address'   => 'required'
            /* 'matpel_id' => 'required',
            'kelas_id'  => 'required',
            'walkel_id' => 'required' */
        ],
            [
                'nip.required'      => 'Masukkan NIP !',
                'name.required'     => 'Masukkan Nama !',
                'phone.required'    => 'Masukkan Nomor Telepon !',
                'address.required'  => 'Masukkan Alamat !',
                /* 'matpel_id.required' => 'Masukkan Content Post !',
                'kelas_id.required' => 'Masukkan Content Post !',
                'walkel_id.required' => 'Masukkan Content Post !', */
            ]
        );

        if($validator->fails()) {

            return response()->json([
                'success' => false,
                'message' => 'Silahkan Isi Bidang Yang Kosong',
                'data'    => $validator->errors()
            ],400);

        } else {

            $guru = Guru::create([
                'nip'       => $request->input('nip'),
                'name'      => $request->input('name'),
                'phone'     => $request->input('phone'),
                'address'   => $request->input('address')
            ]);


            if ($guru) {
                return response()->json([
                    'success' => true,
                    'message' => 'Guru Berhasil Ditambahkan!',
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Guru Gagal Ditambah!',
                ], 400);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $guru = Guru::whereId($id)->first();

        if ($guru) {
            return response()->json([
                'success' => true,
                'message' => 'Detail Guru!',
                'data'    => $guru
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Data Guru Tidak Ditemukan!',
                'data'    => ''
            ], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        //validate data
        $validator = Validator::make($request->all(), [
            'nip'       => 'required', 
            'name'      => 'required',
            'phone'     => 'required',
            'address'   => 'required'
            /* 'matpel_id' => 'required',
            'kelas_id'  => 'required',
            'walkel_id' => 'required' */
        ],
            [
                'nip.required'      => 'Masukkan NIP !',
                'name.required'     => 'Masukkan Nama !',
                'phone.required'    => 'Masukkan Nomor Telepon !',
                'address.required'  => 'Masukkan Alamat !',
                /* 'matpel_id.required' => 'Masukkan Content Post !',
                'kelas_id.required' => 'Masukkan Content Post !',
                'walkel_id.required' => 'Masukkan Content Post !', */
            ]
        );

        if($validator->fails()) {

            return response()->json([
                'success' => false,
                'message' => 'Silahkan Isi Bidang Yang Kosong',
                'data'    => $validator->errors()
            ],400);

        } else {

            $guru = Guru::whereId($request->input('id'))->update([
                'nip'     => $request->input('nip'),
                'name'   => $request->input('name'),
                'phone'   => $request->input('phone'),
                'address'   => $request->input('address'),
            ]);


            if ($guru) {
                return response()->json([
                    'success' => true,
                    'message' => 'Guru Berhasil Diupdate!',
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Guru Gagal Diupdate!',
                ], 500);
            }

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $guru = Guru::findOrFail($id);
        $guru->delete();

        if ($guru) {
            return response()->json([
                'success' => true,
                'message' => 'Guru Berhasil Dihapus!',
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Guru Gagal Dihapus!',
            ], 500);
        }
    }
}
