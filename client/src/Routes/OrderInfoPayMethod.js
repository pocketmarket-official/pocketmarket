import HeaderBiz from "../Components/js/HeaderBiz";
import React from "react";

import '../Components/scss/orderInfoPayMethod.scss';

const OrderInfoPayMethod = () => {
    return (
        <>
            <HeaderBiz />
            <div className="orderinfo__pay-method">
                <div className="orderinfo__options">
                    <div className="options__title-box">
                        <div className="orderinfo__title">결제수단 선택 A</div>
                        <input id="payADefault" type="checkbox" className="orderinfo__default" /><label htmlFor="payADefault">기본결제수단으로 사용</label>
                    </div>
                    <div className="orderinfo__choices">
                        <input id="pg" name="A" type="radio" value="PG결제" defaultChecked={true}/><label htmlFor="pg">PG결제</label>
                        <input id="easy" name="A" type="radio" value="간편결제" /><label htmlFor="easy">간편결제</label>
                        <input id="transfer" name="A" type="radio" value="계좌이체" /><label htmlFor="transfer">계좌이체</label>
                        <input id="withoutBankbook" name="A" type="radio" value="무통장입금" /><label htmlFor="withoutBankbook">무통장입금</label>
                        <input id="phone" name="A" type="radio" value="휴대폰" /><label htmlFor="phone">휴대폰</label>
                    </div>
                </div>
                <div className="divide" />
                <div className="orderinfo__options">
                    <div className="options__title-box">
                        <div className="orderinfo__title">결제수단 선택 B</div>
                        <input id="payBDefault" type="checkbox" className="orderinfo__default" /><label htmlFor="payBDefault">기본결제수단으로 사용</label>
                    </div>
                    <div className="orderinfo__choices">
                        <input id="point1" name="B" type="checkbox" value="카드포인트" defaultChecked={true}/><label htmlFor="point1">카드포인트</label>
                        <input id="point2" name="B" type="checkbox" value="카드포인트" /><label htmlFor="point2">카드포인트</label>
                        <input id="point3" name="B" type="checkbox" value="P이벤트쿠폰" /><label htmlFor="point3">P이벤트쿠폰</label>
                        <input id="point4" name="B" type="checkbox" value="전용포인트" /><label htmlFor="point4">전용포인트</label>
                    </div>
                </div>
                <div className="divide"/>
                <div className="ok">선택완료</div>
            </div>
        </>
    );
};

export default OrderInfoPayMethod;
