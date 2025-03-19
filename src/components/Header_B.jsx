import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo_B from '../assets/Logo_de_la_Escuela_Colombiana_de_Ingeniería_-_Universidad.webp.png'; 
import homeIcon from '../assets/icons8-casa-50.png';

const Header_B = () => {
  const navigate = useNavigate();

  return (
    <header className="header-principal">
      <div className="logo-container-principal">
        <img src={logo_B} alt="Escuela Colombiana de Ingeniería Julio Garavito" />
      </div>

      <button className="btn-inicio" onClick={() => navigate('/principal')}>
        <img src={homeIcon} alt="Inicio" /> Inicio
      </button>
    </header>
  );
};

export default Header_B;
