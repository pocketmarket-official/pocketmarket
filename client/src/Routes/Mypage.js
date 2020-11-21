import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';
import logout from '../assets/my_page/ico_logout.png';
import store from '../assets/my_page/ico_store.png';

function Mypage() {
    return (
        <>
            <HeaderBiz/>
            <div className="mypage">
                <div className="mypage__box">
                    <div className="mypage__list"><Link to="/mypage/collections">포켓마켓도감</Link><p>{">"}</p></div>
                    <div className="mypage__list"><Link to="/mypage/myplace">주소관리</Link><p>{">"}</p></div>
                    <div className="mypage__list"><Link to="/mypage/order">주문 / 결제 이력</Link><p>{">"}</p></div>
                    {/*<div className="mypage__list"><Link to="/mypage/point">포인트 / 좋아요 이력</Link><p>{">"}</p></div>*/}
                    <div className="mypage__list"><Link to="/review">리뷰 목록</Link><p>{">"}</p></div>
                    <div className="mypage__list"><Link to="/mypage/questions">문의 내역</Link><p>{">"}</p></div>
                </div>
                <div className="setting__box">
                    <div className="setting__list"><Link to="/biz/certification">점주 페이지</Link><img src={store}/></div>
                    <div className="setting__list"><p>로그아웃</p><img src={logout}/></div>
                </div>
            </div>
        </>
        );
}

export default Mypage;
