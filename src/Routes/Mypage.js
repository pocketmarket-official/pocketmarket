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
                    <div className="mypage__list">주소관리</div>
                    <div className="mypage__list">주문 / 결재 이력</div>
                    <div className="mypage__list">포인트 / 좋아요 이력</div>
                    <div className="mypage__list">리뷰 목록</div>
                    <div className="mypage__list">문의 내역</div>
                </div>
                <div className="setting__box">
                    <div className="setting__list">점주페이지</div>
                    <div className="setting__list">로그아웃</div>
                </div>
            </div>
        </>
        );
}

export default Mypage;
