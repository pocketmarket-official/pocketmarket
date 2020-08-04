import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Routes/Login';
import Main from './Routes/Main';
import Mypage from './Routes/Mypage';
import FestivalStore from './Routes/FestivalStore';
import StoreView from './Routes/Store';
import logo from './logo.svg';
import './App.css';
import { firestore } from "./firebase";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Login} />
      <Route path="/main" exact={true} component={Main} />
      <Route path="/main/festival/:id" component={FestivalStore} />
      <Route path="/main/store/:id" component={StoreView} />
      <Route path="/mypage" exact={true} component={Mypage} />
    </BrowserRouter>
  );
}

export default App;
