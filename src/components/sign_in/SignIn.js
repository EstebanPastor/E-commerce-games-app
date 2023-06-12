import { useState } from "react";
import { auth } from "../../firebase";
import "./SignIn.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthDetails from "../../utils/auth_details/AuthDetails";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
   

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential)
    })
   .catch((error) => {
    console.log(error)
   })
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Inicia sesión</h1>
        <input
          type="email"
          placeholder="Ingresa tu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Ingresa tu password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Click aqui para iniciar sesion</button>
        <AuthDetails />
      </form>
   
    </div>
  );
};

export default SignIn;
