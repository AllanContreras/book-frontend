import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/LOGO-ESCING_NEGATIVO-BLANCO.png';
import microsoftLogo from '../assets/favicon.ico';

const Sesion = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/principal'); // Redirige a la página principal después del login
    };

    return (
        <div className="sesion-container">
            {/* Encabezado */}
            <header className="header">
                <div className="logo-container">
                    <img src={logo} alt="Escuela Colombiana de Ingeniería Julio Garavito" />
                </div>
            </header>

            {/* Contenedor del login */}
            <div className="login-container">
                <h2>ENTRAR A ESCUELA</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre de usuario o correo electrónico" name="usuario" required />
                    <input type="password" placeholder="Contraseña" name="password" required />
                    <button type="submit" className="login-acceder" onClick={() => navigate('/principal')}>Acceder</button>

                    <a href="#" className="forgot-password">¿Olvidó su contraseña?</a>

                    <hr className="divider" />

                    <h4>IDENTIFÍQUESE USANDO SU CUENTA EN:</h4> 
                    <button className="login-btn-office365-large" onClick={() => navigate('/principal')}>
                        <img src={microsoftLogo} alt="Microsoft Logo" width="24px" height="24px" className="mr-1" /> Ingreso Office 365
                    </button>  

                    <hr className="divider" />

                    <a href="#" className="Lenguaje">Español Internacional (es)</a>
                </form>
            </div>

            {/* Volver al inicio */}
            <a href="/" className="volver-inicio">Volver al inicio</a>
        </div>
    );
};

export default Sesion;
