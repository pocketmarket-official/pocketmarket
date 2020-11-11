import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';
import home from '../assets/map/btn_clocation.png';
import logout from '../assets/map/btn_clocation.png';
import changelogo from '../assets/map/ico_poc.png';
import close from "../assets/order_status_pop/btn_close.png";

import '../Components/scss/BizMypage.scss';

function BizMypage() {
    return (
        <>
            <div className="modal__conversion hidden" id="modal__conversion" onClick={() => {

            }}>
                <div className="modal__user_change" onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <div className="modal__header">
                        <div className="modal__header_img"><img src={changelogo} /></div>
                        <div className="">사용자를 변경합니다. 원하는 사용자를 선택해주세요.</div>

                    </div>
                    <div className="modal__close__btn" id="modal__close__btn" onClick={() =>{
                        const elt = document.getElementById("modal__conversion");
                        elt.classList.add("hidden");
                    }}><img src={close}/></div>

                    <div className="modal__user__container">
                        <div className="user__choices">
                            <input id="100" name="A" type="radio" value="100" defaultChecked={true}/><label htmlFor="100"><span> 소비자 </span> </label>
                            <input id="200" name="A" type="radio" value="200" /><label htmlFor="200"><span> 포켓떡볶이 강남점 </span> </label>
                            <input id="300" name="A" type="radio" value="300"/><label htmlFor="300"><span> 포켓떡볶이 안양점 </span> </label>


                        </div>
                    </div>
                    <button className="modal__user_change__button">선택</button>
                </div>
            </div>

            <HeaderBiz />
            <div className="bizmypage">
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
                                <div className="slideBall on"><div className="slideBall2"></div></div>
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
                    <button className="bizsetting__list">
                        <Link to="/"><img src={home}/>사용자 모드</Link>
                    </button>
                    <button className="bizsetting__list" onClick={() => {
                        const elt = document.getElementById("modal__conversion");
                        elt.classList.remove("hidden");
                    }}>
                        <Link><img src={logout}/>로그아웃</Link>
                    </button>
                </div>
            </div>
        </>
    );
}

export default BizMypage;
