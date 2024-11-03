<?php
namespace App\Http\Controllers;

use App\Models\Flight;
use Illuminate\Http\Request;

class FlightController extends Controller
{
    public function store(Request $request)
    {
        // Validar la entrada (opcional)
        $request->validate([
            'flights' => 'required|array',
            'flights.*.dateOfDeparture' => 'required|string',
            'flights.*.timeOfDeparture' => 'required|string',
            'flights.*.dateOfArrival' => 'required|string',
            'flights.*.timeOfArrival' => 'required|string',
            'flights.*.marketingCarrier' => 'required|string',
            'flights.*.flightOrtrainNumber' => 'required|string',
            'flights.*.locationId' => 'required|array',
        ]);

        // Guardar cada vuelo en la base de datos
        foreach ($request->flights as $flightData) {
            Flight::create([
                'dateOfDeparture' => $flightData['dateOfDeparture'],
                'timeOfDeparture' => $flightData['timeOfDeparture'],
                'dateOfArrival' => $flightData['dateOfArrival'],
                'timeOfArrival' => $flightData['timeOfArrival'],
                'marketingCarrier' => $flightData['marketingCarrier'],
                'flightOrtrainNumber' => $flightData['flightOrtrainNumber'],
                'locationId' => json_encode($flightData['locationId']), // Guardar como JSON
            ]);
        }

        return response()->json(['message' => 'Vuelos guardados exitosamente']);
    }
}
