import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";
import "./Register.css";
import Header from "../header/Header";

import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const signup = async (e) => {
    e.preventDefault();

    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods && methods.length > 0) {
        setErrorMessage(
          "El email que estás queriendo ingresar ya existe, elige otro."
        );
        return;
      }
    } catch (error) {
      console.log(error);
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setSuccessMessage("Usuario creado correctamente! Inicia sesión.");
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Hubo un error, por favor intenta nuevamente.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="sign-in-container">
      <Header titulo='Steamcito'/>
      <form onSubmit={signup}>
        <h1>Crear una cuenta</h1>
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
        <button type="submit">Registrarse</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && (
        <p>
          {successMessage} Haz click
          <Link to="/signin"> AQUI</Link> para iniciar sesión.
        </p>
      )}
    </div>
  );
};

export default SignUp;
