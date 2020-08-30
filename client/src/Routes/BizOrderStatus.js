import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function BizOrderStatus() {
    return (
        <>
            <HeaderBack url='/biz/mypage' />
            <div className="bizorderstatus">
                <div className="bizorderstatus__container">
                    <div className="bizorderstatus__status">주문완료</div>
                    <div className="bizorderstatus__detail">
                        <div className="bizorderstatus__order">
                            <div className="">스타벅스</div>
                            <div className="">Sale Dt</div>
                            <div className="">주문 목록</div>
                            <div className="">경과시간</div>
                        </div>
                        <div className="bizorderstatus__order">
                            <div className="">스타벅스</div>
                            <div className="">Sale Dt</div>
                            <div className="">주문 목록</div>
                            <div className="">경과시간</div>
                        </div>
                    </div>
                </div>
                <div className="bizorderstatus__container">
                    <div className="bizorderstatus__status">제조완료</div>
                    <div className="bizorderstatus__detail">
                        <div className="bizorderstatus__order">
                            <div className="">스타벅스</div>
                            <div className="">Sale Dt</div>
                            <div className="">주문 목록</div>
                            <div className="">경과시간</div>
                        </div>
                        <div className="bizorderstatus__order">
                            <div className="">스타벅스</div>
                            <div className="">Sale Dt</div>
                            <div className="">주문 목록</div>
                            <div className="">경과시간</div>
                        </div>
                    </div>
                </div>
                <div className="bizorderstatus__container">
                    <div className="bizorderstatus__status">픽업완료</div>
                    <div className="bizorderstatus__detail">
                        <div className="bizorderstatus__order">
                            <div className="">스타벅스</div>
                            <div className="">Sale Dt</div>
                            <div className="">주문 목록</div>
                            <div className="">경과시간</div>
                        </div>
                        <div className="bizorderstatus__order">
                            <div className="">스타벅스</div>
                            <div className="">Sale Dt</div>
                            <div className="">주문 목록</div>
                            <div className="">경과시간</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BizOrderStatus;
