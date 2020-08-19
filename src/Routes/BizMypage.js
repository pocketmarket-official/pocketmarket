import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';


function BizMypage() {
    return (
        <>
            <HeaderBiz />
            <div className="mypage">
                <div className="mypage__box">
                    <div className="mypage__list"><Link to="/biz/master">Master 등록</Link></div>
                    <div className="mypage__list"><Link to="">주방혼잡도</Link></div>
                    <div className="mypage__list"><Link to="">리뷰관리</Link></div>
                    <div className="mypage__list"><Link to="">주문현황</Link></div>
                    <div className="mypage__list"><Link to="">영수건별조회</Link></div>
                    <div className="mypage__list"><Link to="/biz/search/date">일자별조회</Link></div>
                    <div className="mypage__list"><Link to="/biz/search/month">월별조회</Link></div>
                </div>
                <div className="setting__box">
                    <div className="setting__list"><Link to="/">사용자 모드로 변경</Link></div>
                    <div className="setting__list">로그아웃</div>
                </div>
            </div>
        </>
    );
}

export default BizMypage;
