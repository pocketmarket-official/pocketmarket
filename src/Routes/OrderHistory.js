import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function OrderHistory() {
    return (
        <>
            <HeaderBack />
            <div className="orderhistory">
                <div className="orderhistory__search">
                    <input type="date" /> ~ <input type="date" />
                    <input type="submit" value="조회"/>
                </div>
                <div className="orderhistory__result">
                    <div className="orderhistory__container">
                        <div className="orderhistory__date">2020년 8월 1일</div>
                        <div className="orderhistory__content" onClick={() => {
                        const elt = document.getElementById("orderhistory1");
                        elt.classList.toggle("hidden");
                    }}>
                            <div className="orderhistory__detail">
                                <div className="orderhistory__name">스타벅스</div>
                                <div className="orderhistory__price">10000원</div>
                            </div>
                            <div className="orderhistory__btn">재주문</div>
                        </div>
                        <div className="orderhistory__menu hidden" id="orderhistory1">
                            <div className="menu__detail">
                                <div className="menu__name">아이스 아메리카노</div>
                                <div className="menu__count">1개</div>
                                <div className="menu__price">4100원</div>
                            </div>
                            <div className="menu__detail">
                                <div className="menu__name">아이스 아메리카노</div>
                                <div className="menu__count">1개</div>
                                <div className="menu__price">4100원</div>
                            </div>
                            <div className="menu__detail">
                                <div className="menu__name">아이스 아메리카노</div>
                                <div className="menu__count">1개</div>
                                <div className="menu__price">4100원</div>
                            </div>
                            <div className="menu__receipt" onClick={() => {
                                const elt = document.getElementById("receipt1");
                                elt.classList.remove("hidden");
                            }}>승인전표조회</div>
                            <div className="receipt__container hidden" id="receipt1" onClick={() => {
                                const elt = document.getElementById("receipt1");
                                elt.classList.add("hidden");
                            }}>
                                <div className="receipt__image" onClick={(e) => {
                                    e.stopPropagation();
                                }}>영수증 이미지</div>
                            </div>
                        </div>
                    </div>
                    <div className="orderhistory__container">
                        <div className="orderhistory__date">2020년 8월 1일</div>
                        <div className="orderhistory__content" onClick={() => {
                        const elt = document.getElementById("orderhistory2");
                        elt.classList.toggle("hidden");
                    }}>
                            <div className="orderhistory__detail">
                                <div className="orderhistory__name">스타벅스</div>
                                <div className="orderhistory__price">10000원</div>
                            </div>
                            <div className="orderhistory__btn">재주문</div>
                        </div>
                        <div className="orderhistory__menu hidden" id="orderhistory2">
                            <div className="menu__detail">
                                <div className="menu__name">아이스 아메리카노</div>
                                <div className="menu__count">1개</div>
                                <div className="menu__price">4100원</div>
                            </div>
                            <div className="menu__detail">
                                <div className="menu__name">아이스 아메리카노</div>
                                <div className="menu__count">1개</div>
                                <div className="menu__price">4100원</div>
                            </div>
                            <div className="menu__detail">
                                <div className="menu__name">아이스 아메리카노</div>
                                <div className="menu__count">1개</div>
                                <div className="menu__price">4100원</div>
                            </div>
                            <div className="menu__receipt">승인전표조회</div>
                        </div>
                    </div>
                    <div className="orderhistory__container">
                        <div className="orderhistory__date">2020년 8월 1일</div>
                        <div className="orderhistory__content" onClick={() => {
                        const elt = document.getElementById("orderhistory3");
                        elt.classList.toggle("hidden");
                    }}>
                            <div className="orderhistory__detail">
                                <div className="orderhistory__name">스타벅스</div>
                                <div className="orderhistory__price">10000원</div>
                            </div>
                            <div className="orderhistory__btn">재주문</div>
                        </div>
                        <div className="orderhistory__menu hidden" id="orderhistory3">
                            <div className="menu__detail">
                                <div className="menu__name">아이스 아메리카노</div>
                                <div className="menu__count">1개</div>
                                <div className="menu__price">4100원</div>
                            </div>
                            <div className="menu__detail">
                                <div className="menu__name">아이스 아메리카노</div>
                                <div className="menu__count">1개</div>
                                <div className="menu__price">4100원</div>
                            </div>
                            <div className="menu__detail">
                                <div className="menu__name">아이스 아메리카노</div>
                                <div className="menu__count">1개</div>
                                <div className="menu__price">4100원</div>
                            </div>
                            <div className="menu__receipt">승인전표조회</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderHistory;
