import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from './Routes/Login';
import Main from './Routes/Main';
import logo from './logo.svg';
import './App.css';
import { firestore } from "./firebase";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Login} />
      <Route path="/main" exact={true} component={Main} />
    </HashRouter>
  );
}

export default App;
