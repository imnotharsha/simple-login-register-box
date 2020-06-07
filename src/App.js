import React from "react";
import Login from "./components/login/login";
import Register from "./components/login/register";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/'></Link>
        <Route path='/' component={Login} exact={true} />
        <Route path='/register' component={Register} />
      </Router>
    </div>
  );
}

export default App;
