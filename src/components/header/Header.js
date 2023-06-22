import React, { useState, useEffect } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Store from "../store/Store";
import Register from "../register/Register";
import Cart from "../cart/Cart";
import SignIn from "../sign_in/SignIn";
import "./header.css";
import ToggleButton from "../../components/toggleButon/ToggleButton";
import ThemeContext from "../../context/ThemeContext";

function Header({ titulo, isLoggedIn }) {
  return (
    <>
      <Routes>
        <Route path="/store" element={<Store />} />
        {isLoggedIn && <Route path="/cart" element={<Cart />} />}
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      <div className="foto"></div>
      <nav>
        <div className="nav-wrapper dark-red darken-2">
          <a href="#!" className="brand-logo">
            <li>
              <Link to="/">{titulo}</Link>
            </li>
          </a>

          <ul id="nav-mobile" className="right">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to="/store" style={{ textDecoration: "none" }}>
                Tienda
              </Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  Carrito
                </Link>
              </li>
            )}
            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    Iniciar Sesión
                  </Link>
                </li>
                <li>
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    Registro
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
