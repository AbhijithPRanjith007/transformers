//import logo from './logo.svg';
import './App.css';
import Login from './Component/Transformers_Login';
import SignUp from './Component/Transformers_SignUp';
import Home from './Component/Transformers_Home';
function App() {
  return (
    <div className="App">
     <Login/>
     <SignUp/>
     <Home/>
   </div>
  );
}

export default App;
