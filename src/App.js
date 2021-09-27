
//import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Component/Transformers_Login';
import SignUp from './Component/Transformers_SignUp';
import Home from './Component/Transformers_Home';
import Navbar from './Component/Navbar';
function App() {
  return (
    <div className="App">
      
        <Router>
              <Navbar/>
    <Switch>
        
         <Route exact path="/Home" component={Home} />
      <Route  path="/Login" component={Login} />
      <Route  path="/" component={SignUp} />

    </Switch>
  </Router>
</div>
  );
}

export default App;
