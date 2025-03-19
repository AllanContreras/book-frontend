import React from 'react';
import { useNavigate } from 'react-router-dom';

import addIcon from '../assets/mas.png';
import deleteIcon from '../assets/trash.png';
import editIcon from '../assets/edit.png';
import searchIcon from '../assets/search.png';


import Header_B from '../components/Header_B';

const Principal = () => {
    const navigate = useNavigate();

    return (
        <div>

        <Header_B/>
            



            {/* Contenedor de opciones */}
            <div className="contenedor-opciones">
                <button className="opcion" onClick={() => navigate('/reservas')}>
                    <img src={addIcon} alt="Nueva Reserva" /> Nueva Reserva
                </button>
                <button className="opcion" onClick={() => navigate('/Eliminar')}>
                    <img src={deleteIcon} alt="Eliminar Reserva" /> Eliminar Reserva
                </button>
                <button className="opcion" onClick={() => navigate('/Modificar')}>
                    <img src={editIcon} alt="Modificar Reserva" /> Modificar Reserva
                </button>
                <button className="opcion" onClick={() => navigate('/consultar')}>
                    <img src={searchIcon} alt="Consultar Reserva" /> Consultar Reserva
                </button>
            </div>
        </div>
    );
};

export default Principal;
