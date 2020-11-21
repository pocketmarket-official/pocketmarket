import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';


function OrderComplete() {
    return (
        <>
            <div className="modal__fastorder hidden" id="modal__fastorder" onClick={(e) => {
                const elt = document.getElementById("modal__fastorder");
                elt.classList.add("hidden");
            }}>
                <div className="modal__modal" id="modal__modal" onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <div className="modal__text">Fast order의 이름을 입력해주세요. </div>
                    <div className="modal__btns">
                        <input type="text" />
                        <input type="submit" value="제출" />
                    </div>
                </div>
            </div>
            <HeaderBiz/>
            <div className="ordercomplete">
                <div className="ordercomplete__close"><p>주문완료</p></div>
                <div className="ordercomplete__text">
                    <div className="ordercomplete__line1">· 매장 <p>강남핫도그</p></div>
                    <div className="ordercomplete__line2">· 주문 <p>치즈핫도그 1개, 콘핫도그 2개</p> </div>
                    <div className="ordercomplete__line3">· 가격 <p>4,800원</p></div>
                    <div className="ordercomplete__line"></div>
                    <div className="ordercomplete__line4"><p>홍길동님의 호출번호는 <b>0024</b> 이며 3명의 고객이 대기중입니다.</p> </div>
                </div>
                <div className="ordercomplete__container">
                    <div className="ordercomplete__confirm"><Link to="/order/status"><p>선택완료</p></Link></div>
                    <div className="ordercomplete__fastorder" onClick={() => {
                        const elt = document.getElementById("modal__fastorder");
                        elt.classList.remove("hidden");
                    }}><p>도감추가</p></div>
                </div>
            </div>
        </>
    );
}

export default OrderComplete;
