import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import HeaderBiz from '../Components/js/HeaderBiz';


function BizOrderStatus() {
    return (
        <>
            <HeaderBiz url='/biz/mypage' />
            <div className="bizorderstatus">
                <div className="bizorderstatus__stor__container">
                    <div className="bizorderstatus__stor__name">
                        <p>포켓 떡볶이 강남점</p>
                    </div>
                </div>

                <div className="bizorderstatus__container">
                    <div className="bizorderstatus__status red">주문완료
                        <div className="bizorderstatus__status__number red">
                            <p>2</p>
                        </div>
                    </div>
                    <div className="bizorderstatus__detail">
                        <div className="bizorderstatus__order">
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox red">주문일시</div>
                                <div className="saledt">2020. 10 .17</div>
                                <div className="saletime">20:01:13</div>
                            </div>
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox red">주문번호</div>
                                <div className="saledt">202145</div>
                            </div>
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox red">주문메뉴</div>
                                <div className="saledt">포켓세트 1 (콜라 -1, 사이다 +1, 양념범벅 +1), 순대 2</div>
                            </div>
                        </div>
                        <div className="bizorderstatus__order">
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox red">주문일시</div>
                                <div className="saledt">2020. 10 .17</div>
                                <div className="saletime">20:01:13</div>
                            </div>
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox red">주문번호</div>
                                <div className="saledt">202142</div>
                            </div>

                            <div className="bizorderstatus__order__detail">
                                <div className="namebox red">주문메뉴</div>
                                <div className="saledt">마켓세트 1, 콜라 1</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bizorderstatus__container">
                    <div className="bizorderstatus__status">제조완료
                        <div className="bizorderstatus__status__number">
                            <p>1</p>
                        </div></div>
                    <div className="bizorderstatus__detail">
                        <div className="bizorderstatus__order">
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox">주문일시</div>
                                <div className="saledt">2020. 10 .17</div>
                                <div className="saletime">19:05:05</div>
                            </div>
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox">주문번호</div>
                                <div className="saledt">202145</div>
                            </div>
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox">주문메뉴</div>
                                <div className="saledt">포켓세트 1 (콜라 -1, 사이다 +1, 양념범벅 +1), 순대 2</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bizorderstatus__container">
                    <div className="bizorderstatus__status">픽업완료
                        <div className="bizorderstatus__status__number">
                            <p>1</p>
                        </div></div>

                    <div className="bizorderstatus__detail">
                        <div className="bizorderstatus__order">
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox">주문일시</div>
                                <div className="saledt">2020. 10 .17</div>
                                <div className="saletime">20:01:13</div>
                            </div>
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox">주문번호</div>
                                <div className="saledt">202145</div>
                            </div>
                            <div className="bizorderstatus__order__detail">
                                <div className="namebox">주문메뉴</div>
                                <div className="saledt">포켓세트 1 (콜라 -1, 사이다 +1, 양념범벅 +1), 순대 2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BizOrderStatus;
