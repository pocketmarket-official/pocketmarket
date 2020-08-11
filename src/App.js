import React, {useState} from 'react';
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
import Fastorder from './Routes/Fastorder';
import OrderHistory from './Routes/OrderHistory';
import PointHistory from './Routes/PointHistory';
import QuestionsHistory from './Routes/QuestionsHistory';
import QuestionWrite from './Routes/QuestionWrite';
import ReviewWrite from './Routes/ReviewWrite';
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
            <Route exact path="/main/festival/:id" component={FestivalStore} />
            <Switch>
                <Route exact path="/main/store/:storeId/order" component={Order} />
                <Route exact path="/main/store/:storeId/orderinfo" component={OrderInfo} />
                <Route exact path="/main/store/:storeId/:reviewId" component={ReviewList} />
            </Switch>
            <AuthRoute authenticated={authenticated} exact path="/main/store/:storeId" component={StoreView} />
            <AuthRoute authenticated={authenticated} exact path="/order/review" component={ReviewWrite} />
            <AuthRoute authenticated={authenticated} exact path="/order/complete" component={OrderComplete} />
            <AuthRoute authenticated={authenticated} exact path="/mypage" component={Mypage} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/fastorder" component={Fastorder} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/order" component={OrderHistory} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/point" component={PointHistory} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/questions" component={QuestionsHistory} />
            <AuthRoute authenticated={authenticated} exact path="/mypage/questions/write" component={QuestionWrite} />
        </BrowserRouter>
    );
}

export default App;
