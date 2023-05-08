import React from 'react';
import './header.css';

function Header({titulo}) {
  return (
    <nav>
      <div className="nav-wrapper dark-red darken-2">
        <a href="#!" className="brand-logo">{titulo}</a>
        <ul id="nav-mobile" className="right">
          <li><a href="#">Tienda</a></li>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Carrito</a></li>
          <li><a href="#">Registro/Inicio sesión</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;