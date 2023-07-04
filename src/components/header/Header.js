import { Link, Route, Routes } from "react-router-dom";
import Store from "../store/Store";
import Register from "../register/Register";
import SignIn from "../sign_in/SignIn";
import "./header.css";

function Header({ titulo }) {
  return (
    <>
      <Routes>
        <Route path="/store" element={<Store />} />

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
            <li></li>
            <li>
              <Link to="/store" style={{ textDecoration: "none" }}>
                Tienda
              </Link>
            </li>

            <li>
              <Link to="/cart" style={{ textDecoration: "none" }}>
                Carrito
              </Link>
            </li>

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
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
