import React, { useState } from 'react'; // <-- Asegúrate de importar useState
import { useNavigate } from 'react-router-dom';
import labImage from '../assets/lab.jpg';
import Header_B from '../components/Header_B';
import Table from '../components/Table';
import HacerReserva from '../components/HacerReserva';


const Laboratorio = () => {
     
      const [modalOpen, setModalOpen] = useState(false);
        
    
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
          <button className="reservar-btn" onClick={() => setModalOpen(true)}>Reservar</button>
        </div>
      </div>

      <Table/> 

      <HacerReserva isOpen={modalOpen} onClose={() => setModalOpen(false)} />     
  </div>
  );
};

export default Laboratorio;
