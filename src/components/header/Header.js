import React from "react";
import "./header.css";
import { Link, Route, Routes } from "react-router-dom";
import Store from "../store/Store";
import Register from "../sign_register/Sign_register";
import Cart from "../shopping_cart/Shopping_cart";

function Header({ titulo }) {
  return (
   <>
    <Routes>
    <Route path="/store" element={<Store />} />
    </Routes>
    <div className="foto">
    </div>
    <nav>
      <div className="nav-wrapper dark-red darken-2">
        <a href="#!" className="brand-logo">
          {titulo}
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/store">Tienda</Link>
          </li>
          <li>
            <Link to="/shopping_cart">Carrito</Link>
          </li>
          <li>
            <Link to="/register">Registro/Inicio sesión</Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Header;
