//eslint-disable-next-line
import "./Login.css";
import React, { useState } from "react";
//import { useHistory } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const history = useHistory();
 function FinalSubmit(){
// history.push('/');
}
  return (
    <div className="Login">
      <h1>Login page </h1>
      <form onSubmit={FinalSubmit()}>
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
