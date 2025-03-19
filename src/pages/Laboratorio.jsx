import React from 'react';
import { useNavigate } from 'react-router-dom';
import labImage from '../assets/lab.jpg';
import Header_B from '../components/Header_B';



const Laboratorio = () => {
        const navigate = useNavigate();
    
  return (
    <div >

      <Header_B/>

      {/* Contenido Principal */}
      <div className="laboratorio-content">
        <img
          src={labImage}
          alt="Laboratorio"
          className="laboratorio-img"
        />
        <div className="laboratorio-info">
          <h3 className="titulo">B-LABPLA</h3>
          <p className='descripcion'>Laboratorio de plataformas, ubicado en el edificio B</p>
          <button className="reservar-btn">Reservar</button>
        </div>
      </div>

      {/* Sección de días disponibles */}
      <div className="dias-disponibles">
        <h3 className="dias-titulo">Días disponibles</h3>
        <table className="horario-tabla">
        <tbody>
          {[
            { dia: "LUNES", disponible: true },
            { dia: "MARTES", disponible: true },
            { dia: "MIÉRCOLES", disponible: true },
            { dia: "JUEVES", disponible: true },
            { dia: "VIERNES", disponible: true },
            { dia: "SÁBADO", disponible: true },
            { dia: "DOMINGO", disponible: false },
            { dia: "FESTIVOS", disponible: false },
          ].map(({ dia, disponible }, index) => (
            <tr key={index} className={`horario-row ${disponible ? "activo" : "inactivo"}`}>
              <td>{dia}</td>
              <td>
                {disponible ? (
                  <>
                    <span className="status-icon disponible">🟢</span> 08:00 AM a 06:00 PM
                    <br />
                    Medio día:
                    <br />
                    08:00 AM a 12:00 PM
                  </>
                ) : (
                  <span className="status-icon no-disponible">🔴</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Laboratorio;
