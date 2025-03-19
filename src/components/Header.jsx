import React from 'react';
import logo from '../assets/LOGO-ESCING_NEGATIVO-BLANCO.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Escuela Colombiana de Ingeniería Julio Garavito" />
      </div>
    </header>
  );
};

export default Header;
