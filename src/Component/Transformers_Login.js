import "./Login.css";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
function handleValidation(){
    // we need API call to validate user
    //we need to navigate home page 
}

  return (
    <div className="Login">
      <h1>Login page </h1>
      <form onSubmit={handleValidation}>
          <input className="text" type="email" placeholder="EmailID"  value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <input className="text" type="password" placeholder="Password" Value={password}
          onChange={(e) => setPassword(e.target.value)}/>
          <button  className="button" type="submit">Get Started</button>
          <a href="/SignUp">New User? Register here..</a>
      </form>
    </div>
  );
}


export default Login;
