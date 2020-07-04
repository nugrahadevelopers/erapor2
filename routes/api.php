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

Route::post('login', 'Api\Auth\LoginController@login');
Route::post('register', 'Api\Auth\LoginController@register');

Route::group(['middleware' => ['auth:api']], function () {
    Route::post('logout', 'Api\Auth\LoginController@logout');

    Route::get('/gurus', 'GurusController@index');
    Route::post('/gurus/store', 'GurusController@store');
    Route::get('/gurus/{id?}', 'GurusController@show');
    Route::post('/gurus/update/{id?}', 'GurusController@update');
    Route::delete('/gurus/{id?}', 'GurusController@destroy');
});

