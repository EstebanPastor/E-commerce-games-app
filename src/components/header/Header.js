import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

function Header({titulo}) {
  return (
    <nav>
      <div className="nav-wrapper dark-red darken-2">
        <a href="#!" className="brand-logo">{titulo}</a>
        <ul id="nav-mobile" className="right">
          <li><Link href="#">Tienda</Link></li>
          <li><Link href="#">Carrito</Link></li>
          <li><Link href="#">Registro/Inicio sesión</Link></li>Link 
        </ul>
      </div>
    </nav>
  );
}

export default Header;