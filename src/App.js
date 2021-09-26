//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Component/Transformers_Login';
import SignUp from './Component/Transformers_SignUp';
import Home from './Component/Transformers_Home';
function App() {
  return (
    <div className="App">
        <Router>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </Router>
</div>
  );
}

export default App;
