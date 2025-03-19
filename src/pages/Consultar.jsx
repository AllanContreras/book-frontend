import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header_B from '../components/Header_B';
import Reservas from '../components/Reservas';



const Consultar = () => {
    const navigate = useNavigate();

    return (

        <div>
            <Header_B/>

            <h2>Consultar Reservas</h2>

            <Reservas/>
        </div>
    )

}

export default Consultar;