import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function OrderComplete() {
    return (
        <>
            <HeaderBack />
            <div className="ordercomplete">
                <div className="ordercomplete__text">
                    <div className="ordercomplete__line1">스타벅스에</div>
                    <div className="ordercomplete__line2">order list 결제가 완료되었습니다. </div>
                    <div className="ordercomplete__line3">마진형님 앞에는 n명의 고객님이 대기중이십니다.</div>
                </div>
                <div className="ordercomplete__container">
                    <div className="ordercomplete__confirm">확인</div>
                    <div className="ordercomplete__fastorder" onClick={() => {
                        const elt = document.getElementById("modal__fastorder");
                        elt.classList.remove("hidden");
                    }}>Fast order에 추가</div>
                </div>
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
            </div>
        </>
    );
}

export default OrderComplete;
