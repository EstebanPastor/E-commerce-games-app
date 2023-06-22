import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../../utils/auth_details/AuthDetails";
import Header from "../header/Header";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
            "User not found. Please check your email or sign up for a new account."
          );
        } else {
          setErrorMessage("Failed to sign in. Please try again.");
        }
      });
  };

  return (
    <div className="sign-in-container">
      <Header titulo="Steamcito" />
      <form onSubmit={signIn}>
        <h1>Inicia sesión aquí</h1>
        <input
          type="email"
          placeholder="Ingresa tu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Ingresa tu password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!errorMessage && (
          <button type="submit">Click aquí para iniciar sesión</button>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <AuthDetails />
      </form>
    </div>
  );
};

export default SignIn;
