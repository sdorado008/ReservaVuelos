import React, { useState } from 'react';
import FlightSearchForm from './components/FlightSearchForm';
import FlightResultsTable from './components/FlightResultsTable';

const App = () => {
    const [flights, setFlights] = useState([]);

    return (
        <div>
            <h1>Buscador de Vuelos</h1>
            <FlightSearchForm onSearch={setFlights} />
            {flights.length > 0 && <FlightResultsTable flights={flights} />}
        </div>
    );
};

export default App;
