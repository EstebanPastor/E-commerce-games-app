import "./header.css";
import { Link, Route, Routes } from "react-router-dom";
import Store from "../store/Store";
import Register from "../register/Register";
import Cart from "../cart/Cart";
import Search from "../search/Search";

function Header({ titulo }) {
  return (
    <>
      <Routes>
        <Route path="/store" element={<Store />} />
      </Routes>

      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Routes>
        <Route path="/register" element={<Register />} />
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
              <Link to="/register">Registro/Inicio sesión</Link>
            </li>
          </ul>
        </div>
        <Search />
      </nav>
    </>
  );
}

export default Header;
