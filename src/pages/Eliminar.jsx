import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header_B from '../components/Header_B';
import Reservas from '../components/Reservas';




const Eliminar = () => {
    const navigate = useNavigate();

    return (

        <div>
            <Header_B/>

            <h2>Eliminar Reserva</h2>

            <Reservas/>


            











        </div>
    )

}

export default Eliminar;