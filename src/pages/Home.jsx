import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/LOGO-ESCING_NEGATIVO-BLANCO.png';
import microsoftLogo from '../assets/favicon.ico';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            {/* Header */}
            <header className="header">
                <div className="logo-container">
                    <img src={logo} alt="Escuela Colombiana de Ingeniería Julio Garavito" />
                </div>
            </header>

            {/* Contenido principal */}
            <main className="main-content">
                <h1>Reservas De Laboratorios</h1>

                <div className="login-box">
                    <button className="login-btn-office365" onClick={() => navigate('/sesion')}>
                        <img src={microsoftLogo} alt="Microsoft Logo" /> Ingreso Office 365
                    </button>

                    <button className="login-btn other" onClick={() => navigate('/sesion')}>
                        Ingreso otras cuentas
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Home;
