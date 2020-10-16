import React from 'react';
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
                <div className="orderinfo__options">
                    <div className="orderinfo__title">주문 내역</div>
                    <div>치즈핫도그 2</div>
                </div>
                <div className="orderinfo__options">
                    <div className="orderinfo__title">결제금액</div>
                    <div className="orderinfo__pay">
                        <div className="pay__info">
                            <div>총 금액</div>
                            <div>5,000원</div>
                        </div>
                        <div className="pay__info">
                            <div>포켓머니</div>
                            <button>전액 사용</button>
                            <div>1,500원</div>
                        </div>
                    </div>
                </div>
                <div className="orderinfo__options">
                    <div className="orderinfo__title">최종 결제금액</div>
                    <div>3,500원</div>
                </div>
                <div className="orderinfo__btn">
                    <div onClick={() => pay()}>결제하기</div>
                </div>
            </div>
        </>
    );
}

export default OrderInfo;
