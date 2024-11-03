// src/components/FlightResultsTable.js
import React from 'react';

const FlightResultsTable = ({ flights }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Fecha de Salida</th>
                    <th>Hora de Salida</th>
                    <th>Fecha de Llegada</th>
                    <th>Hora de Llegada</th>
                    <th>Aerolínea</th>
                </tr>
            </thead>
            <tbody>
                {flights.map((flight) => (
                    <tr key={flight.flightOrtrainNumber}>
                        <td>{flight.dateOfDeparture}</td>
                        <td>{flight.timeOfDeparture}</td>
                        <td>{flight.dateOfArrival}</td>
                        <td>{flight.timeOfArrival}</td>
                        <td>
                            <img
                                src={`https://pics.avs.io/60/60/${flight.marketingCarrier}.png`}
                                alt={`${flight.marketingCarrier}`}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FlightResultsTable;

