import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import cookie from 'react-cookies';
import Index from './Routes/Index';
import Main from './Routes/Main';
import Mypage from './Routes/Mypage';
import FestivalStore from './Routes/FestivalStore';
import StoreView from './Routes/Store';
import ReviewList from './Routes/ReviewList';
import Order from './Routes/Order';
import OrderInfo from './Routes/OrderInfo';
import OrderComplete from './Routes/OrderComplete';
import OrderStatus from './Routes/OrderStatus';
import Collections from './Routes/Collections';
import OrderHistory from './Routes/OrderHistory';
import PointHistory from './Routes/PointHistory';
import QuestionsHistory from './Routes/QuestionsHistory';
import QuestionWrite from './Routes/QuestionWrite';
import ReviewWrite from './Routes/ReviewWrite';
import BigStatus from './Routes/BigStatus';
import Myplace from './Routes/Myplace';
import MyplaceDetail from './Routes/MyplaceDetail';
import MyplaceDetailList from './Routes/MyplaceDetailList';
import MyplaceDetailMap from './Routes/MyplaceDetailMap'
import BizCertification from './Routes/BizCertification';
import BizMypage from './Routes/BizMypage';
import BizMaster from './Routes/BizMaster';
import BizKitchen from './Routes/BizKitchen';
import BizSearchMonth from './Routes/BizSearchMonth';
import BizSearchDaily from './Routes/BizSearchDaily';
import BizOrderStatus from './Routes/BizOrderStatus';
import KDSMain from './Routes/KDSMain';
import KDSCnrStats from './Routes/KDSCnrStats';
import KDSPickup from './Routes/KDSPickup';
import KDSKitchen from './Routes/KDSKitchen';
import KDSSetting from './Routes/KDSSetting';
import KDSSoldout from './Routes/KDSSoldout';
import InsertStoreCd from './Routes/InsertStoreCd'
import MakingCookie from './Routes/makingCookie';
import Reject from './Routes/Reject';
import './App.css';
import Intro from "./Routes/Intro";
import OrderInfoPayMethod from "./Routes/OrderInfoPayMethod";
import axios from 'axios';
import storage from "./storage";

function App() {
    let STATE = process.env.REACT_APP_STATE;
      if(STATE === 'local:start' || STATE === 'local:build') {
        axios.defaults.baseURL = 'http://localhost:8000';
      } else if(STATE === 'dev') {
        axios.defaults.baseURL = 'http://13.124.90.138:8000';
      } else if(STATE === 'prod') {
        axios.defaults.baseURL = 'http://pocketmarket-prod.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com';
      } else if(STATE === 'jh') {
        axios.defaults.baseURL = 'http://13.124.90.138:8000';
      }

    //todo: 로그인 인증수단을 전부 cookie_token으로 바꿨음
    // 쿠키를 받아오고
    let cookie_token = cookie.load("access_token");
    let authenticated = false;
    //쿠키가 있으면
    if(cookie_token) {
        //그 쿠키로 메일을 받아오고
        let user_email = storage.get(cookie_token);
        //메일도 있으면 정상
        if(user_email){
            authenticated = true;
        } else {
            // 메일이 없으면 해당 토큰의 쿠키를 삭제하고
            cookie.remove('access_token');
            // 미인증
            authenticated = false;
        }
    }

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyCYaFuGXcKFTV1wIm8PeN0ri4jpur29CCY",
      authDomain: "pocket-market-ddc08.firebaseapp.com",
      databaseURL: "https://pocket-market-ddc08.firebaseio.com",
      projectId: "pocket-market-ddc08",
      storageBucket: "pocket-market-ddc08.appspot.com",
      messagingSenderId: "196040287857",
      appId: "1:196040287857:web:abfb63cdff7f2e1c30ddd0",
      measurementId: "G-T84SPLRMTM"
    };

  return (
      <BrowserRouter>
        <Route exact path="/login" render={props => (
            <Intro authenticated={authenticated} {...props} />
        )} />
        <Route exact path="/" >
              <Redirect to={"/login"} />
        </Route>
        <Route authenticated={authenticated} exact path="/index" component={Index} />
        <Route authenticated={authenticated} exact path="/main" component={Main} />
        <CacheRoute authenticated={authenticated} exact path="/main/festival/:id" component={FestivalStore} />
        <CacheSwitch>
          <CacheRoute exact path="/main/store/:storeId/order" component={Order} />
          <CacheRoute exact path="/main/store/:storeId/orderinfo" component={OrderInfo} />
          <CacheRoute exact path="/main/store/:storeId/orderinfo/payMethod" component={OrderInfoPayMethod} />
        </CacheSwitch>
        <CacheRoute authenticated={authenticated} exact path="/main/store/:storeId" component={StoreView} />
        <Route authenticated={authenticated} exact path="/order/review" component={ReviewWrite} />
        <Route authenticated={authenticated} exact path="/order/complete" component={OrderComplete} />
        <Route authenticated={authenticated} exact path="/order/status" component={OrderStatus} />
        <Route authenticated={authenticated} exact path="/order/status/:storeId" component={BigStatus} />
        <Route authenticated={authenticated} exact path="/review/:reviewId" component={ReviewList} />
        <Route authenticated={authenticated} exact path="/mypage" component={Mypage} />
        <Route authenticated={authenticated} exact path="/mypage/collections" component={Collections} />
        <Route authenticated={authenticated} exact path="/mypage/myplace" component={Myplace} />
        <Route authenticated={authenticated} exact path="/mypage/myplace/detailList" component={MyplaceDetailList} />
        <Route authenticated={authenticated} exact path="/mypage/myplace/detailMap" component={MyplaceDetailMap} />
        <Route authenticated={authenticated} exact path="/mypage/myplace/search" component={MyplaceDetail} />
        <Route authenticated={authenticated} exact path="/mypage/order" component={OrderHistory} />
        <Route authenticated={authenticated} exact path="/mypage/point" component={PointHistory} />
        <Route authenticated={authenticated} exact path="/mypage/questions" component={QuestionsHistory} />
        <Route authenticated={authenticated} exact path="/mypage/questions/write" component={QuestionWrite} />
        <Route authenticated={authenticated} exact path="/biz/certification" component={BizCertification} />
        <Route authenticated={authenticated} exact path="/biz/mypage" component={BizMypage} />
        <Route authenticated={authenticated} exact path="/biz/mypage/order" component={OrderHistory} />
        <Route authenticated={authenticated} exact path="/biz/mypage/kitchen" component={BizKitchen} />
        <Route authenticated={authenticated} exact path="/biz/master" component={BizMaster} />
        <Route authenticated={authenticated} exact path="/biz/mypage/search/month" component={BizSearchMonth} />
        <Route authenticated={authenticated} exact path="/biz/mypage/search/date" component={BizSearchDaily} />
        <Route authenticated={authenticated} exact path="/biz/mypage/order/status" component={BizOrderStatus} />
        <Route authenticated={authenticated} exact path="/biz/mypage/review" component={ReviewList} />
        <Route authenticated={authenticated} exact path="/kds/main" component={KDSMain} />
        <Route authenticated={authenticated} exact path="/kds/cnrstats" component={KDSCnrStats} />
        <Route authenticated={authenticated} exact path="/kds/pickup" component={KDSPickup} />
        <Route authenticated={authenticated} exact path="/kds/kitchen" component={KDSKitchen} />
        <Route authenticated={authenticated} exact path="/kds/setting" component={KDSSetting} />
        <Route authenticated={authenticated} exact path="/kds/soldout" component={KDSSoldout} />
        <Route authenticated={authenticated} exact path="/kds/insertStoreCd" component={InsertStoreCd} />
        <Route authenticated={authenticated} exact path="/makingCookie/:access_token/:email" component={MakingCookie} />
        <CacheRoute authenticated={authenticated} exact path="/reject" component={Reject} />
      </BrowserRouter>
  );
}

export default App;
