import React from 'react';
import { useNavigate } from 'react-router-dom';

import addIcon from '../assets/mas.png';
import deleteIcon from '../assets/trash.png';
import editIcon from '../assets/edit.png';
import searchIcon from '../assets/search.png';


import Header_B from '../components/Header_B';

const Principal_Admin = () => {
    const navigate = useNavigate();

    return (
        <div>

        <Header_B/>
            



            {/* Contenedor de opciones */}
            <div className="contenedor-opciones">
                <button className="opcion" onClick={() => navigate('/Crear_Usuario')}>
                    <img src={addIcon} alt=" Crear Usuario" /> Crear Usuario
                </button>
                <button className="opcion" onClick={() => navigate('/Eliminar_Usuario')}>
                    <img src={deleteIcon} alt="Eliminar Usuario" /> Eliminar Usuario
                </button>
                <button className="opcion" onClick={() => navigate('/Actualizar_Usuario')}>
                    <img src={editIcon} alt="Actualizar Usuario" /> Actualizar Usuario
                </button>
                <button className="opcion" onClick={() => navigate('/consultar_Usuario')}>
                    <img src={searchIcon} alt="Consultar Reserva" /> Consultar Usuario
                </button>
            </div>
        </div>
    );
};

export default Principal_Admin;
