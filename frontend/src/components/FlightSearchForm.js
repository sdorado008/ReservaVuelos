// src/components/FlightSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import FlightResultsTable from './FlightResultsTable';
import './BuscarVuelos.css';

const FlightSearchForm = () => {
    const [departureCity, setDepartureCity] = useState('');
    const [arrivalCity, setArrivalCity] = useState('');
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        setError(null); // Resetea el error al iniciar una nueva búsqueda
        try {
            // Realiza la búsqueda de vuelos
            const response = await axios.post('https://staging.travelflight.aiop.com.co/api/flights/v2', {
                searchs: 250,
                qtyPassengers: 1,
                adult: 1,
                itinerary: [
                    {
                        departureCity: departureCity,
                        arrivalCity: arrivalCity,
                        hour: new Date().toISOString(), // Cambiar por la fecha y hora deseada
                    },
                ],
            });

            const data = response.data; // Asigna los datos de respuesta

            // Guarda los vuelos en el estado
            setFlights(data);

            // Ahora guarda los vuelos en la base de datos
            const saveResponse = await fetch('http://localhost/api/flights/save', { // Cambia la URL según tu entorno
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ flights: data }), // Asegúrate de que esto coincida con la estructura que espera tu backend
            });

            if (!saveResponse.ok) {
                throw new Error('Error al guardar vuelos');
            }

            const saveData = await saveResponse.json();
            console.log(saveData.message); // Mensaje de éxito

        } catch (error) {
            setError(error.response ? error.response.data : 'Error al buscar vuelos');
        }
    };

    return (
        <><div className='flight-search-bar'>
            <input
                type="text"
                placeholder="Ciudad de salida"
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)} />
            <input
                type="text"
                placeholder="Ciudad de llegada"
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)} />
            <input
                type="date"
                placeholder="Fecha"
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)} />
            <input
                type="number"
                placeholder="Pasajeros"
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)} />
            <button className="search-button"onClick={handleSearch}>Buscar Vuelos</button>
            {error && <p>Error: {error}</p>}


        </div><div className='flight-search-bar'>
        <FlightResultsTable className="flights" flights={flights} />
            </div></>
        
    );
};

export default FlightSearchForm;    