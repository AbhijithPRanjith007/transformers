import "./Login.css";
function SignUp() {
  return (
     <div className="SignUp">
      <h1>SignUp page </h1>
      <form>
          <input className="text" type="text" placeholder="Full Name"/>
          <input className="text" type="email" placeholder="EmailID"/>
          <input className="text" type="password" placeholder="Password"/>
          <input className="text" type="password" placeholder="Confirm Password"/>
          <button  className="button" type="submit">Sign Up</button>
          <a href="/SignUp">Already a user? Login Here..</a>
      </form>
    </div>
  );
}

export default SignUp;