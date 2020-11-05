import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import Index from './Routes/Index';
import Main from './Routes/Main';
import Mypage from './Routes/Mypage';
import FestivalStore from './Routes/FestivalStore';
import StoreView from './Routes/Store';
import ReviewList from './Routes/ReviewList';
import Order from './Routes/Order';
import OrderInfo from './Routes/OrderInfo';
import OrderInfo_test from './Routes/OrderInfo_test';
import OrderComplete from './Routes/OrderComplete';
import OrderStatus from './Routes/OrderStatus';
import Fastorder from './Routes/Fastorder';
import OrderHistory from './Routes/OrderHistory';
import PointHistory from './Routes/PointHistory';
import QuestionsHistory from './Routes/QuestionsHistory';
import QuestionWrite from './Routes/QuestionWrite';
import ReviewWrite from './Routes/ReviewWrite';
import BigStatus from './Routes/BigStatus';
import Myplace from './Routes/Myplace';
import MyplaceDetail from './Routes/MyplaceDetail';
import BizCertification from './Routes/BizCertification';
import BizMypage from './Routes/BizMypage';
import BizMaster from './Routes/BizMaster';
import BizKitchen from './Routes/BizKitchen';
import BizSearchMonth from './Routes/BizSearchMonth';
import BizSearchDaily from './Routes/BizSearchDaily';
import BizOrderStatus from './Routes/BizOrderStatus';
import KDSMain from './Routes/KDSMain';
import KDSPickup from './Routes/KDSPickup';
import KDSKitchen from './Routes/KDSKitchen';
import KDSSetting from './Routes/KDSSetting';
import './App.css';
import Intro from "./Routes/Intro";
import OrderInfoPayMethod from "./Routes/OrderInfoPayMethod";


function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const setUserInfo = ({ email }) => setUser({ email });
  return (
      <BrowserRouter>
        <Route exact path="/login" render={props => (
            <Intro authenticated={authenticated} login={setUserInfo} {...props} />
        )} />
        <Route exact path="/" >
              <Redirect to={"/login"} />
        </Route>
        <Route authenticated={authenticated} exact path="/index" component={Index} />
        <CacheRoute authenticated={authenticated} exact path="/main" component={Main} />
        <CacheRoute authenticated={authenticated} exact path="/main/festival/:id" component={FestivalStore} />
        <CacheSwitch>
          <CacheRoute exact path="/main/store/:storeId/order" component={Order} />
          <CacheRoute exact path="/main/store/:storeId/orderinfo" component={OrderInfo} />
          <CacheRoute exact path="/main/store/:storeId/orderinfo/payMethod" component={OrderInfoPayMethod} />
          <CacheRoute exact path="/main/store/:storeId/orderinfo_test" component={OrderInfo_test} />
        </CacheSwitch>
        <CacheRoute authenticated={authenticated} exact path="/main/store/:storeId" component={StoreView} />
        <Route authenticated={authenticated} exact path="/order/review" component={ReviewWrite} />
        <Route authenticated={authenticated} exact path="/order/complete" component={OrderComplete} />
        <Route authenticated={authenticated} exact path="/order/status" component={OrderStatus} />
        <Route authenticated={authenticated} exact path="/order/status/:storeId" component={BigStatus} />
        <Route authenticated={authenticated} exact path="/review" component={ReviewList} />
        <Route authenticated={authenticated} exact path="/mypage" component={Mypage} />
        <Route authenticated={authenticated} exact path="/mypage/fastorder" component={Fastorder} />
        <Route authenticated={authenticated} exact path="/mypage/myplace" component={Myplace} />
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
        <Route authenticated={authenticated} exact path="/kds/pickup" component={KDSPickup} />
        <Route authenticated={authenticated} exact path="/kds/kitchen" component={KDSKitchen} />
        <Route authenticated={authenticated} exact path="/kds/setting" component={KDSSetting} />
      </BrowserRouter>
  );
}

export default App;
