import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HacerReserva = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="titulo-modal">Reservar</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline 
        />
        <button className="btn-reservar">Consultar disponibilidad</button>
        <button className="btn-cerrar" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default HacerReserva;
