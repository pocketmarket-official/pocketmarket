import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Routes/Login';
import Main from './Routes/Main';
import Mypage from './Routes/Mypage';
import logo from './logo.svg';
import './App.css';
import { firestore } from "./firebase";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Login} />
      <Route path="/main" exact={true} component={Main} />
      <Route path="/mypage" exact={true} component={Mypage} />
    </BrowserRouter>
  );
}

export default App;
