import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header_B from '../components/Header_B';
import saludoIcon from '../assets/saludo.png';
import labImage from '../assets/lab.jpg';

import LaboratoriosList from '../components/Laboratorios';


const Reservas = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header_B/>

            <div className="title-image">
                <h3 className="title">BIENVENIDO</h3>
                <img src={saludoIcon} alt="BIENVENIDO" />
            </div>


         
            <div className="laboratorios-disponibles">
                <h3 className="lab-disp">Laboratorios Disponibles</h3>
            </div>


        <LaboratoriosList/>

        </div>
    );
};

export default Reservas;
