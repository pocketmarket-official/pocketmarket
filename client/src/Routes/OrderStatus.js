import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';


function OrderStatus() {
    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="orderstatus">
                <Link to="/order/status/1">
                <div className="orderstatus__card">
                    <button className="card__delete hidden" onClick={(e) => {
                        e.preventDefault();
                    }}>X</button>
                    <div className="card__contents">
                        <div className="card__title">점포명: </div>
                        <div className="card__detail">스타벅스</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">주문번호: </div>
                        <div className="card__detail">Receipt no</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">주문목록: </div>
                        <div className="card__detail">아이스 아메리카노 1잔</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">상태: </div>
                        <div className="card__detail">제조중</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">주문완료시간: </div>
                        <div className="card__detail">hh:mm</div>
                    </div>
                    <div className="card__contents" >
                        <div className="card__title">현재 대기인원: </div>
                        <div className="card__detail">3명</div>
                    </div>
                    <button id="pickup" onClick={(e) => {
                        e.preventDefault();
                    }}>픽업처리</button>
                </div>
                </Link>
                <div className="orderstatus__card">
                    <button className="card__delete hidden">X</button>
                    <div className="card__contents">
                        <div className="card__title">점포명: </div>
                        <div className="card__detail">스타벅스</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">주문번호: </div>
                        <div className="card__detail">Receipt no</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">주문목록: </div>
                        <div className="card__detail">아이스 아메리카노 1잔</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">상태: </div>
                        <div className="card__detail">제조중</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">주문완료시간: </div>
                        <div className="card__detail">hh:mm</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">현재 대기인원: </div>
                        <div className="card__detail">3명</div>
                    </div>
                    <button id="pickup">픽업처리</button>
                </div>
                <div className="orderstatus__card">
                    <button className="card__delete">X</button>
                    <div className="card__contents">
                        <div className="card__title">점포명: </div>
                        <div className="card__detail">스타벅스</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">주문번호: </div>
                        <div className="card__detail">Receipt no</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">주문목록: </div>
                        <div className="card__detail">아이스 아메리카노 1잔</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">상태: </div>
                        <div className="card__detail">제조중</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">주문완료시간: </div>
                        <div className="card__detail">hh:mm</div>
                    </div>
                    <div className="card__contents">
                        <div className="card__title">현재 대기인원: </div>
                        <div className="card__detail">3명</div>
                    </div>
                    <button id="pickup">픽업처리</button>
                </div>
            </div>
        </>
    );
}

export default OrderStatus;
