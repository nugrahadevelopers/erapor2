<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('guru', 'GuruController');
Route::get('guruall', 'GuruController@indexAll');
Route::resource('siswa', 'SiswaController');
Route::get('getsiswakela/{getsiswakela}', 'SiswaController@showByKela');
Route::resource('mapel', 'MapelController');
Route::get('mapelall', 'MapelController@indexAll');
Route::resource('kela', 'KelaController');
Route::get('kelaall', 'KelaController@indexAll');
Route::put('updatekuota/{updatekuota}', 'KelaController@updateKuota');
Route::put('hapuskuota/{hapuskuota}', 'KelaController@hapusKuota');
Route::resource('ekskul', 'EkskulController');
Route::resource('kelkel', 'KelKelController');
Route::resource('kelmapel', 'KelmapelController');
Route::resource('walkel', 'WalkelController');
