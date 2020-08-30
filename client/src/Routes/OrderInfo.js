import React from 'react';
import { Link } from 'react-router-dom';
import pay from '../bootpay.js';
import HeaderBack from '../Components/js/HeaderBack';


function OrderInfo() {
    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="orderinfo">
                <div className="orderinfo__options">
                    <div className="orderinfo__title">포장선택</div>
                    <div className="orderinfo__choices"><input type="radio" name="where" value="Eat in" />Eat in <input type="radio" name="where" value="Take out" />Take out</div>
                </div>
                <div className="orderinfo__options">
                    <div className="orderinfo__title">할인선택</div>
                    <div className="orderinfo__choices"><input type="checkbox" value="쿠폰할인" />쿠폰할인</div>
                </div>
                <div className="orderinfo__options">
                    <div className="orderinfo__title">포인트 사용</div>
                    <div className="orderinfo__choices"><input type="checkbox" value="포인트 사용" />포인트 사용</div>
                </div>
                <div className="orderinfo__btn">
                    <div onClick={() => pay()}>결제하기</div>
                </div>
            </div>
        </>
    );
}

export default OrderInfo;
