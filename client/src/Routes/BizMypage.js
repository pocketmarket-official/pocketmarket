import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';
import home from '../assets/map/btn_clocation.png';
import logout from '../assets/map/btn_clocation.png';
import '../Components/scss/BizMypage.scss';


function BizMypage() {
    return (
        <>
            <HeaderBiz />
            <div className="mypage">
                <div className="bizmypage__stor__container">
                    <div className="bizmypage__stor__name">
                        <p>포켓 떡볶이 강남점</p>
                    </div>
                </div>
                <div className="bizmypage__silder_container">
                    <div className="bizmypage__order__text">주문가능 여부</div>

                    <div className="button__container">
                        <button><p className="off">불가</p></button>
                        <div className="slide">
                            <div className="subslide">
                                <div className="slideBall"><div className="slideBall2"></div></div>
                            </div>
                        </div>
                        <button><p className="on">가능</p></button>
                    </div>
                </div>
                <div className="bizmypage__box">
                    <div className="bizmypage__list"><Link to="/biz/master">Master 등록</Link><p>{">"}</p></div>
                    <div className="bizmypage__list"><Link to="/biz/mypage/kitchen">주방혼잡도</Link><p>{">"}</p></div>
                    <div className="bizmypage__list"><Link to="/biz/mypage/review">리뷰관리</Link><p>{">"}</p></div>
                    <div className="bizmypage__list"><Link to="/biz/mypage/order/status">주문현황</Link><p>{">"}</p></div>
                    <div className="bizmypage__list"><Link to="/biz/mypage/order">영수건별조회</Link><p>{">"}</p></div>
                    <div className="bizmypage__list"><Link to="/biz/mypage/search/date">일자별조회</Link><p>{">"}</p></div>
                    <div className="bizmypage__list"><Link to="/biz/mypage/search/month">월별조회</Link><p>{">"}</p></div>
                </div>

                <div className="bizsetting__box">
                    <div className="bizsetting__list">
                        <Link to="/"><img src={home}/>사용자 모드</Link>
                    </div>
                    <div className="bizsetting__list">
                        <Link to="/"><img src={logout}/>로그아웃</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BizMypage;
