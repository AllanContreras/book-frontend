import React from "react";

const Table = () => {
  const dias = [
    { nombre: "LUNES", disponible: true },
    { nombre: "MIERCOLES", disponible: true },
    { nombre: "VIERNES", disponible: true },
    { nombre: "DOMINGO", disponible: false },

    { nombre: "MARTES", disponible: true },
    { nombre: "JUEVES", disponible: true },
    { nombre: "SABADO", disponible: true },
    { nombre: "FESTIVOS", disponible: false },
  ];

  return (
    <section className="dias-disponibles">
      <h2>Días disponibles</h2>
      <div className="tabla-disponibilidad">
        <div className="columna">
          {dias.slice(0, 4).map((dia, index) => (
            <div key={index} className="dia">
              {dia.nombre} <span className={dia.disponible ? "verde" : "rojo"}>{dia.disponible ? "🟢" : "🔴"}</span>
              {dia.disponible && (
                <>
                  <br />08:00 AM a 06:00 PM
                  <br />Medio día: 08:00 AM a 12:00 PM
                </>
              )}
            </div>
          ))}
        </div>
        <div className="columna">
          {dias.slice(4).map((dia, index) => (
            <div key={index} className="dia">
              {dia.nombre} <span className={dia.disponible ? "verde" : "rojo"}>{dia.disponible ? "🟢" : "🔴"}</span>
              {dia.disponible && (
                <>
                  <br />08:00 AM a 06:00 PM
                  <br />Medio día: 08:00 AM a 12:00 PM
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Table;
