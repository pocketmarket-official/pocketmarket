import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';


function OrderInfo() {
    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="orderinfo">
                <div className="orderinfo__options">
                    <div className="orderinfo__title">포장선택</div>
                    <div className="orderinfo__choices"><input type="checkbox" value="Eat in" />Eat in <input type="checkbox" value="Take out" />Take out</div>
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
                    <Link to="/order/complete">결제하기</Link>
                </div>
            </div>
        </>
    );
}

export default OrderInfo;