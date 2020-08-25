import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Routes/Login';
import Main from './Routes/Main';
import Mypage from './Routes/Mypage';
import FestivalStore from './Routes/FestivalStore';
import StoreView from './Routes/Store';
import ReviewList from './Routes/ReviewList';
import Order from './Routes/Order';
import OrderInfo from './Routes/OrderInfo';
import OrderComplete from './Routes/CompleteOrder';
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
import './App.css';
import { firestore } from "./firebase";
import AuthRoute from "./Security/AuthRoute";


function App() {
    const [user, setUser] = useState(null);
    const authenticated = user != null;
    const setUserInfo = ({ email }) => setUser({ email });
    return (
        <BrowserRouter>
            <Route exact path="/login" render={props => (
                <Login authenticated={authenticated} login={setUserInfo} {...props} />
            )} />
            <Route exact path="/" component={Main} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/main/festival/:id" component={FestivalStore} />
            <Switch>
                <Route exact path="/main/store/:storeId/order" component={Order} />
                <Route exact path="/main/store/:storeId/orderinfo" component={OrderInfo} />
            </Switch>
            <AuthRoute authenticated={authenticated} exact path="/main/store/:storeId" component={StoreView} />
            <AuthRoute authenticated={authenticated} exact path="/order/review" component={ReviewWrite} />
            <AuthRoute authenticated={authenticated} exact path="/order/complete" component={OrderComplete} />
            <AuthRoute authenticated={authenticated} exact path="/order/status" component={OrderStatus} />
            <AuthRoute authenticated={authenticated} exact path="/order/status/:storeId" component={BigStatus} />
            <AuthRoute authenticated={authenticated} exact path="/review" component={ReviewList} />
            <AuthRoute authenticated={authenticated} exact path="/mypage" component={Mypage} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/fastorder" component={Fastorder} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/myplace" component={Myplace} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/myplace/:placeId" component={MyplaceDetail} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/order" component={OrderHistory} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/point" component={PointHistory} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/questions" component={QuestionsHistory} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/questions/write" component={QuestionWrite} />
            <AuthRoute authenticated={authenticated} exact path="/biz/certification" component={BizCertification} />
            <AuthRoute authenticated={authenticated} exact path="/biz/mypage" component={BizMypage} />
            <AuthRoute authenticated={authenticated} exact path="/biz/mypage/order" component={OrderHistory} />
            <AuthRoute authenticated={authenticated} exact path="/biz/mypage/kitchen" component={BizKitchen} />
            <AuthRoute authenticated={authenticated} exact path="/biz/master" component={BizMaster} />
            <AuthRoute authenticated={authenticated} exact path="/biz/mypage/search/month" component={BizSearchMonth} />
            <AuthRoute authenticated={authenticated} exact path="/biz/mypage/search/date" component={BizSearchDaily} />
            <AuthRoute authenticated={authenticated} exact path="/biz/mypage/order/status" component={BizOrderStatus} />
            <AuthRoute authenticated={authenticated} exact path="/biz/mypage/review" component={ReviewList} />
        </BrowserRouter>
    );
}

export default App;
