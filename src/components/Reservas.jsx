import React from 'react';
import { useNavigate } from 'react-router-dom';


const reservas = [
  {
    id: 1,
    dia: '01/03/2025',
    tiempoTotal: '3 horas',
    lab: 'B-LABSIW',
    disponible: true,
  },
  {
    id: 2,
    dia: '22/03/2025',
    tiempoTotal: '1.5 horas',
    lab: 'B-LABPLA',
    disponible: true,
  },
  {
    id: 3,
    dia: '07/03/2025',
    tiempoTotal: '3 horas',
    lab: 'B-RECO',
    disponible: true,
  },
  {
    id: 4,
    dia: '17/03/2025',
    tiempoTotal: '3 horas',
    lab: 'B-LABSIW',
    disponible: true,
  },
];

const Reservas = () => {
  return (
    <div className="contenedor-reservas">
      {reservas.map((reserva) => (
        <button
          key={reserva.id}
          className={`reserva ${reserva.disponible ? 'disponible' : 'no-disponible'}`}
        >
          <strong>{reserva.disponible ? 'Disponible' : 'No Disponible'}</strong><br />
          <span><strong>Día:</strong> {reserva.dia}</span><br />
          <span><strong>Tiempo total:</strong> {reserva.tiempoTotal}</span><br />
          <span><strong>Lab:</strong> {reserva.lab}</span>
        </button>
      ))}
    </div>
  );
};

export default Reservas;
