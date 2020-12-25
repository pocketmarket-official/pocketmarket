import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';
import logout from '../assets/my_page/ico_logout.png';
import store from '../assets/my_page/ico_store.png';
import cookie from "react-cookies";
import axios from "axios";
import {cookieCheck_rejectGuest} from "../Components/js/CookieCheck.js"

class Mypage extends React.Component {
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            user: '',
        }
    }

    logOut() {
        localStorage.removeItem(cookie.load("access_token"));
        cookie.remove('access_token');
        window.location.href = '/login/';
    };

    componentDidMount() {
        let user_email = cookieCheck_rejectGuest();

        axios.get('/api/users_user/')
            .then((res) => {
                let user = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                });
                this.setState({user});
            });
    }

    render(){
        return(
            <>
                <HeaderBiz/>
            <div className="mypage">
                <div className="mypage__box">
                    <div className="mypage__list"><Link to="/mypage/collections">포켓마켓도감</Link><p>{">"}</p></div>
                    {/*<div className="mypage__list"><Link to="/mypage/myplace">주소관리</Link><p>{">"}</p></div>*/}
                    {/*<div className="mypage__list"><Link to="/mypage/order">주문 / 결제 이력</Link><p>{">"}</p></div>*/}
                    {/*<div className="mypage__list"><Link to="/mypage/point">포인트 / 좋아요 이력</Link><p>{">"}</p></div>*/}
                    {/*<div className="mypage__list"><Link to="/review">리뷰 목록</Link><p>{">"}</p></div>*/}
                    <div className="mypage__list"><Link to="/mypage/questions/">문의 하기</Link><p>{">"}</p></div>
                </div>
                <div className="setting__box">
                    {
                        this.state.user.bizYn === 'Y'?
                            <>
                                <div className="setting__list"><Link to="/kds/main">점주 페이지</Link><img src={store}/></div>
                            </>
                            :
                            null
                    }
                    <div className="setting__list"><p onClick={()=>this.logOut()}>로그아웃</p><img src={logout}/></div>
                </div>
            </div>
            </>
        )
    }
}

export default Mypage;
