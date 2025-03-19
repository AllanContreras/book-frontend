import React from 'react';
import { useNavigate } from 'react-router-dom';
import labImage from '../assets/lab.jpg'; 

const laboratorios = [
  { id: 1, name: 'B-LABPLA' },
  { id: 2, name: 'B-LABSIW' },
  { id: 3, name: 'B-RECO' },
  { id: 4, name: 'H-301L' },
  { id: 5, name: 'D-310' },
  { id: 6, name: 'LAB' },
  { id: 7, name: 'LAB' },
  { id: 8, name: 'LAB' },
];

const LaboratoriosList = () => {
  const navigate = useNavigate(); 

  return (
    <div className="contenedor-opciones-reservas">
      {laboratorios.map((lab) => (
        <button
          key={lab.id}
          className="opcion-reservas"
          onClick={() => navigate(`/laboratorio`)} 
        >
          <img src={labImage} alt={lab.name} />
          <div className="contenido">
            <p className="titulo">{lab.name}</p>
            <a href="#" className="boton-mas-info">Más información</a>
          </div>
        </button>
      ))}
    </div>
  );
};

export default LaboratoriosList;
