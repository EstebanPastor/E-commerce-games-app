import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../../utils/auth_details/AuthDetails";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./SignIn.css";
import ToggleButton from "../../components/toggleButon/ToggleButton";
import ThemeContext from "../../context/ThemeContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        setErrorMessage("");
        navigate("/cart");
      })
      .catch((error) => {
       
        if (error.code === "auth/user-not-found") {
          setErrorMessage(
            "Usuario no encontrado. Por favor chequea tu email o crea una cuenta."
          );
        } else {
          setErrorMessage("Hubo un error. Por favor intenta nuevamente.");
        }
      });
  };

  return (
  <ThemeContext.Provider value={theme}>
   <>
       <div className={`sign-in-container ${theme}`}>
            <Header titulo="Steamcito" />
            <form onSubmit={signIn}>
              <h1 style={{ color: 'rgb(57, 87, 133)' }}>Inicia sesión</h1>
              <input
                type="email"
                placeholder="Ingresa tu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!errorMessage && (
                <button type="submit">Iniciar sesión</button>
              )}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <AuthDetails />
            </form>
    </div>
    <Footer />
    <ToggleButton toggleTheme={toggleTheme} />
    </>
    </ThemeContext.Provider>
  );
};

export default SignIn;
