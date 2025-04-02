import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HacerReserva = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedLaboratory, setSelectedLaboratory] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  // Opciones de laboratorios
  const laboratories = [
    "MULTIMEDIA", "INGENIERIA_SW", "REDES", "PLATAFORMAS",
    "INTERACTIVA", "FUNDAMENTOS", "DESARROLLO_VJ", "AULA_EDFI"
  ];

  // Opciones de horarios
  const hours = [
    { label: "7:00", value: "SIETE" },
    { label: "8:30", value: "OCHO_TREINTA" },
    { label: "10:00", value: "DIEZ" },
    { label: "11:30", value: "ONCE_TREINTA" },
    { label: "13:00", value: "UNA" },
    { label: "14:30", value: "DOS_TREINTA" },
    { label: "16:00", value: "CUATRO" },
    { label: "17:30", value: "CINCO_TREINTA" }
  ];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="titulo-modal">Reservar Laboratorio</h2>

        {/* Selección de fecha */}
        <label>Selecciona una fecha:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          className="datepicker"
        />

        {/* Selección de laboratorio */}
        <label>Selecciona un laboratorio:</label>
        <select
          value={selectedLaboratory}
          onChange={(e) => setSelectedLaboratory(e.target.value)}
        >
          <option value="">-- Seleccionar --</option>
          {laboratories.map((lab) => (
            <option key={lab} value={lab}>{lab}</option>
          ))}
        </select>

        {/* Selección de horario */}
        <label>Selecciona una hora:</label>
        <select
          value={selectedHour}
          onChange={(e) => setSelectedHour(e.target.value)}
        >
          <option value="">-- Seleccionar --</option>
          {hours.map((hour) => (
            <option key={hour.value} value={hour.value}>{hour.label}</option>
          ))}
        </select>

        {/* Botones */}
        <button className="btn-reservar">Consultar disponibilidad</button>
        <button className="btn-cerrar" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default HacerReserva;
