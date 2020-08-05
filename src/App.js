import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Routes/Login';
import Main from './Routes/Main';
import Mypage from './Routes/Mypage';
import FestivalStore from './Routes/FestivalStore';
import StoreView from './Routes/Store';
import ReviewList from './Routes/ReviewList';
import Fastorder from './Routes/Fastorder';
import logo from './logo.svg';
import './App.css';
import { firestore } from "./firebase";


function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/main/festival/:id" component={FestivalStore} />
            <Route exact path="/main/store/:storeId/:reviewId" component={ReviewList} />
            <Route exact path="/main/store/:storeId" component={StoreView} />
            <Route exact path="/mypage" component={Mypage} />
            <Route exact path="/mypage/fastorder" component={Fastorder} />
        </BrowserRouter>
    );
}

export default App;
