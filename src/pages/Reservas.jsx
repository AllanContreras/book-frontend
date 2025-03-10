import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo_de_la_Escuela_Colombiana_de_Ingeniería_-_Universidad.webp.png';
import homeIcon from '../assets/icons8-casa-50.png';
import saludoIcon from '../assets/saludo.png';
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

const Reservas = () => {
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
                <button className="btn-mis-reservas" onClick={() => navigate('/principal')}>
                    Mis Reservas
                </button>
            </header>

            {/* Bienvenida */}
            <div className="title-image">
                <h3 className="title">BIENVENIDO</h3>
                <img src={saludoIcon} alt="BIENVENIDO" />
            </div>

            {/* Sección de laboratorios disponibles */}
            <div className="laboratorios-disponibles">
                <h3 className="lab-disp">Laboratorios Disponibles</h3>
            </div>

            {/* Lista de laboratorios */}
            <div className="contenedor-opciones-reservas">
                {laboratorios.map((lab) => (
                    <button key={lab.id} className="opcion-reservas" onClick={() => navigate('/laboratorio')}>
                        <img src={labImage} alt={lab.name} />
                        <div className="contenido">
                            <p className="titulo">{lab.name}</p>
                            <a href="#" className="boton-mas-info">Más información</a>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Reservas;
