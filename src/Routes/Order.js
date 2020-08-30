import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import OptionModal from '../Components/js/OptionModal';


function Order({match}) {

    const id = match.params.storeId;
    const link = "/main/store/" + id + "/orderinfo"

    return (
        <>
            <OptionModal />
            <HeaderBack url='/mypage' />
            <div className="orderpage">
                <div className="order__category">
                    <div className="category__content">음료</div>
                    <div className="category__content">디저트</div>
                    <div className="category__content">기타</div>
                    <div className="category__content">기타</div>
                    <div className="category__content">기타</div>
                    <div className="category__content">기타</div>
                    <div className="category__content">기타</div>
                </div>
                <div className="order__menu">
                    <div className="menu__container" onClick={() => {
                                const elt = document.getElementById("optionmodal");
                                elt.classList.remove("hidden");
                            }}>
                        <div className="menu__image">image</div>
                        <div className="menu__name">아이스 아메리카노</div>
                    </div>
                    <div className="menu__container">
                        <div className="menu__image">image</div>
                        <div className="menu__name">아이스 아메리카노</div>
                    </div>
                    <div className="menu__container">
                        <div className="menu__image">image</div>
                        <div className="menu__name">아이스 아메리카노</div>
                    </div>
                    <div className="menu__container">
                        <div className="menu__image">image</div>
                        <div className="menu__name">아이스 아메리카노</div>
                    </div>
                    <div className="menu__container">
                        <div className="menu__image">image</div>
                        <div className="menu__name">아이스 아메리카노</div>
                    </div>
                    <div className="menu__container">
                        <div className="menu__image">image</div>
                        <div className="menu__name">아이스 아메리카노</div>
                    </div>
                    <div className="menu__container">
                        <div className="menu__image">image</div>
                        <div className="menu__name">아이스 아메리카노</div>
                    </div>
                    <div className="menu__container">
                        <div className="menu__image">image</div>
                        <div className="menu__name">아이스 아메리카노</div>
                    </div>
                    <div className="menu__container">
                        <div className="menu__image">image</div>
                        <div className="menu__name">아이스 아메리카노</div>
                    </div>
                </div>
                <div className="order__container">
                    <div className="order__result">
                        <div>초기화</div>
                        <div className="order__quantity">
                            수량
                            <div className="order__total-quantity">8개</div>
                        </div>
                        <div className="order__cost">
                            금액
                            <div className="cost__cost">12,000원</div>
                        </div>
                        <div><Link to={link}>주문결제</Link></div>
                    </div>
                    <div className="order__detail">
                        <div className="order__item">
                            <div className="item__name">상품명</div>
                            <div onClick={() => {
                                const elt = document.getElementById("optionmodal");
                                elt.classList.remove("hidden");
                            }}>옵션변경</div>
                            <input type="number" name="quantity" id="quantity" />
                            <button>X</button>
                        </div>
                        <div className="order__item">
                            <div className="item__name">상품명</div>
                            <div>옵션변경</div>
                            <input type="number" name="quantity" id="quantity" />
                            <button>X</button>
                        </div>
                        <div className="order__item">
                            <div className="item__name">상품명</div>
                            <div>옵션변경</div>
                            <input type="number" name="quantity" id="quantity" />
                            <button>X</button>
                        </div>
                        <div className="order__item">
                            <div className="item__name">상품명</div>
                            <div>옵션변경</div>
                            <input type="number" name="quantity" id="quantity" />
                            <button>X</button>
                        </div>
                        <div className="order__item">
                            <div className="item__name">상품명</div>
                            <div>옵션변경</div>
                            <input type="number" name="quantity" id="quantity" />
                            <button>X</button>
                        </div>
                        <div className="order__item">
                            <div className="item__name">상품명</div>
                            <div>옵션변경</div>
                            <input type="number" name="quantity" id="quantity" />
                            <button>X</button>
                        </div>
                        <div className="order__item">
                            <div className="item__name">상품명</div>
                            <div>옵션변경</div>
                            <input type="number" name="quantity" id="quantity" />
                            <button>X</button>
                        </div>
                        <div className="order__item">
                            <div className="item__name">상품명</div>
                            <div>옵션변경</div>
                            <input type="number" name="quantity" id="quantity" />
                            <button>X</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Order;
