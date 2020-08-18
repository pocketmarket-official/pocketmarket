import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';


function Mypage() {
    return (
        <>
            <HeaderBack />
            <div className="mypage">
                <div className="mypage__box">
                    <div className="mypage__list"><Link to="/mypage/fastorder">Fast-order</Link></div>
                    <div className="mypage__list"><Link to="/mypage/myplace">주소관리</Link></div>
                    <div className="mypage__list"><Link to="/mypage/order">주문 / 결재 이력</Link></div>
                    <div className="mypage__list"><Link to="/mypage/point">포인트 / 좋아요 이력</Link></div>
                    <div className="mypage__list"><Link to="/review">리뷰 목록</Link></div>
                    <div className="mypage__list"><Link to="/mypage/questions">문의 내역</Link></div>
                </div>
                <div className="setting__box">
                    <div className="setting__list"><Link to="/biz/certification">점주페이지</Link></div>
                    <div className="setting__list">로그아웃</div>
                </div>
            </div>
        </>
        );
}

export default Mypage;
