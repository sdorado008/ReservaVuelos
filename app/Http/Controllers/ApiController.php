<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function RecibirReact(){
        $response = Http::get('http://localhost:3000/api/endpoint');
        if($response->successfull()){
            return response()->json($response->json());
        }else{
            return response()->json(['error' => 'Error al obtener datos de la API de React'], 500);
        }     
    }
   /* public function index()
    {
        return response()->json(['message' => 'Hello from Laravel']);
    }*/
}
