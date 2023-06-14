import { useState } from "react";
import { auth } from "../../firebase";
import "./Register.css";
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";

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
        setErrorMessage("Email already exists. Please use a different email.");
        return;
      }
    } catch (error) {
      console.log(error);
    }

    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setSuccessMessage("User created successfully!");
        setErrorMessage("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Failed to create user. Please try again.");
        setSuccessMessage("");
      });
  };

  return (
    <div className="sign-in-container">
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
          placeholder="Ingresa tu password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default SignUp;
