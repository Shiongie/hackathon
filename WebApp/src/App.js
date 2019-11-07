import React from 'react';
import Login from './Login';
import RegisterAs from './RegisterAs';
import Register from './Register';
import Main from './Main';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/Login" component={Login}/>
          <Route path="/RegisterAs" component={RegisterAs}/>
          <Route path="/Register" component={Register}/>
          <Route path="/Main" component={Main}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
