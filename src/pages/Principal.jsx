import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo_de_la_Escuela_Colombiana_de_Ingeniería_-_Universidad.webp.png';
import homeIcon from '../assets/icons8-casa-50.png';
import addIcon from '../assets/mas.png';
import deleteIcon from '../assets/trash.png';
import editIcon from '../assets/edit.png';
import searchIcon from '../assets/search.png';

const Principal = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Encabezado */}
            <header className="header-principal">
                <div className="logo-container-principal">
                    <img src={logo} alt="Escuela Colombiana de Ingeniería Julio Garavito" />
                </div>
                <button className="btn-inicio" onClick={() => navigate('/principal')}>
                    <img src={homeIcon} alt="Inicio" /> Inicio
                </button>
            </header>

            {/* Contenedor de opciones */}
            <div className="contenedor-opciones">
                <button className="opcion" onClick={() => navigate('/reservas')}>
                    <img src={addIcon} alt="Nueva Reserva" /> Nueva Reserva
                </button>
                <button className="opcion" onClick={() => navigate('/sesion')}>
                    <img src={deleteIcon} alt="Eliminar Reserva" /> Eliminar Reserva
                </button>
                <button className="opcion" onClick={() => navigate('/sesion')}>
                    <img src={editIcon} alt="Modificar Reserva" /> Modificar Reserva
                </button>
                <button className="opcion" onClick={() => navigate('/sesion')}>
                    <img src={searchIcon} alt="Consultar Reserva" /> Consultar Reserva
                </button>
            </div>
        </div>
    );
};

export default Principal;
