<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Airport;
use Illuminate\Support\Facades\Http;

class AirportController extends Controller
{
 public function getAirports(Request $request)
{
    $request->validate([
        'code' => 'required|string',
    ]);

    $airports = Airport::where('city', 'like', '%' . $request->input('code') . '%')->get();

    if ($airports->isEmpty()) {
        return response()->json(['message' => 'No se encontraron aeropuertos para esta ciudad'], 404);
    }

    return response()->json($airports);
}   
}
