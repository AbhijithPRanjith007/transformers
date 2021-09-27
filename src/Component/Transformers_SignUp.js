import "./Login.css";
//import { useHistory } from "react-router-dom";
import React, { useState } from "react";
function SignUp() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName] = useState("");
  //const history = useHistory();
    function handleSignUp(e){
e.preventDefault();
        //history.push('/Home');
    }
  return (
     <div className="SignUp">
      <h1>SignUp page </h1>
      <form onSubmit={handleSignUp}>
          <input className="text" type="text" placeholder="Full Name" value ={name} onChange={(e) => setName(e.target.value)} />
          <input className="text" type="email" placeholder="EmailID"  value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="text" type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input className="text" type="password" placeholder="Confirm Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
          <button  className="button" type="submit">Sign Up</button>
          <a href="/Login">Already a user? Login Here..</a>
      </form>
    </div>
  );
}

export default SignUp;