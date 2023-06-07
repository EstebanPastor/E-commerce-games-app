import "./header.css";
import { Link, Route, Routes } from "react-router-dom";
import Store from "../store/Store";
import Register from "../register/Register";
import Cart from "../cart/Cart";
import SignIn from "../sign_in/SignIn";

function Header({ titulo }) {
  return (
    <>
      <Routes>
        <Route path="/store" element={<Store />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/register" element={<Register />} />

        <Route path="/signin" element={<SignIn />} />
      </Routes>

      <div className="foto"></div>
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
              <Link to="/cart">Carrito</Link>
            </li>
            <li>
              <Link to="/signin">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/register">Registro</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
