<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\ReactApiController;
use App\Http\Controllers\FlightController;

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

/*Route::get('/data',[ApiController::class,'index']);*/

Route::get('/datos-react', [ReactApiController::class, 'obtenerDatosDesdeReact']);
Route::post('/airports', [\App\Http\Controllers\ReactApiController::class, 'getIataCodes']);
Route::post('/flights/save', [FlightController::class, 'store']);
