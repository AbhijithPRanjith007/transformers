import "./Login.css";
function Login() {
function handleValidation(){
    // we need API call to validate user
    //we need to navigate home page 
}

  return (
    <div className="Login">
      <h1>Login page </h1>
      <form onSubmit={handleValidation}>
          <input className="text" type="email" placeholder="EmailID"/>
          <input className="text" type="password" placeholder="Password"/>
          <button  className="button" type="submit">Get Started</button>
          <a href="/SignUp">New User? Register here..</a>
      </form>
    </div>
  );
}


export default Login;
