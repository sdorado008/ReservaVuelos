<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlightsTable extends Migration
{
    public function up()
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->string('dateOfDeparture');
            $table->string('timeOfDeparture');
            $table->string('dateOfArrival');
            $table->string('timeOfArrival');
            $table->string('marketingCarrier');
            $table->string('flightOrtrainNumber');
            $table->json('locationId'); // Para almacenar el objeto de ubicación
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('flights');
    }
}

