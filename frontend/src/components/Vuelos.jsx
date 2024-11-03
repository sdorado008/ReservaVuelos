import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Vuelos() {
  const [airports, setAirports] = useState([]); // Lista de aeropuertos
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  // Función para hacer la búsqueda
  const handleSearch = () => {
    alert(`Buscando vuelos de ${origin} a ${destination}`);
    // Aquí puedes agregar la lógica para hacer la solicitud a una API de vuelos
  };

  // Llamada a la API para obtener la lista de aeropuertos
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await axios.get('https://staging.travelflight.aiop.com.co/api/airports/v2'); // Cambia esta URL a tu API real
        setAirports(response.data); // Suponiendo que response.data es un array de aeropuertos
      } catch (error) {
        console.error("Error al obtener aeropuertos:", error);
      }
    };

    fetchAirports();
  }, []); // El arreglo vacío hace que se ejecute solo una vez al montar el componente

  return (
    <div>
      <h2>Reserva tu vuelo</h2>

      {/* Select para elegir el aeropuerto de origen */}
      <div className="input-group">
        <label>Origen</label>
        <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
          <option value="">Seleccione un aeropuerto</option>
          {airports.map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.name}
            </option>
          ))}
        </select>
      </div>

      {/* Select para elegir el aeropuerto de destino */}
      <div className="input-group">
        <label>Destino</label>
        <select value={destination} onChange={(e) => setDestination(e.target.value)}>
          <option value="">Seleccione un aeropuerto</option>
          {airports.map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.name}
            </option>
          ))}
        </select>
      </div>

      {/* Fecha y pasajeros */}
      <div className="input-group">
        <label>Fecha</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Pasajeros</label>
        <input type="number" value={passengers} min="1" onChange={(e) => setPassengers(e.target.value)} />
      </div>

      {/* Botón de búsqueda */}
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default Vuelos;