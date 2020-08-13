import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function BigStatus() {
    return (
        <>
            <HeaderBack />
            <div className="bigstatus">
                <div className="bigstatus__content">
                    <div className="bigstatus__title">점포명: </div>
                    <div className="bigstatus__detail">스타벅스</div>
                </div>
                <div className="bigstatus__content">
                    <div className="bigstatus__title">주문번호: </div>
                    <div className="bigstatus__detail">Receipt no</div>
                </div>
                <div className="bigstatus__content">
                    <div className="bigstatus__title">주문목록: </div>
                    <div className="bigstatus__detail">아이스 아메리카노 1잔</div>
                </div>
                <div className="bigstatus__content">
                    <div className="bigstatus__title">상태: </div>
                    <div className="bigstatus__detail">제조중</div>
                </div>
                <div className="bigstatus__content">
                    <div className="bigstatus__title">주문완료시간: </div>
                    <div className="bigstatus__detail">hh:mm</div>
                </div>
                <div className="bigstatus__content">
                    <div className="bigstatus__title">현재 대기인원: </div>
                    <div className="bigstatus__detail">n명</div>
                </div>
            </div>
        </>
    );
}

export default BigStatus;
