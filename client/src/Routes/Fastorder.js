import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function Fastorder() {
    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="fastorder">
                <div className="fastorder__container" onClick={() => {
                        const elt = document.getElementById("menu1");
                        elt.classList.toggle("hidden");
                    }}>
                    <div className="fastorder__content">
                        <div className="fastorder__image">image</div>
                        <div className="fastorder__detail">
                            <div className="detail__header">
                                <div className="detail__name">스타벅스 안암점</div>
                                <div className="detail__distance">0.7km</div>
                                <div className="detail__like">좋아요</div>
                            </div>
                            <div className="detail__body">
                                <div className="detail__description">설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명</div>
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                }}>X</button>
                            </div>
                        </div>
                    </div>
                    <div className="fastorder__menu hidden" id="menu1">
                        <div className="order__content">
                            <div className="order__name">아이스 아메리카노 2잔</div>
                            <div className="order__name">아이스 라떼 3잔</div>
                            <div className="order__name">프라푸치노 1잔</div>
                        </div>
                        <div className="order__content">
                            <div className="order__name">아이스 아메리카노 2잔</div>
                            <div className="order__name">아이스 라떼 3잔</div>
                            <div className="order__name">프라푸치노 1잔</div>
                        </div>
                        <div className="order__content">
                            <div className="order__name">아이스 아메리카노 2잔</div>
                            <div className="order__name">아이스 라떼 3잔</div>
                            <div className="order__name">프라푸치노 1잔</div>
                        </div>                        
                    </div>
                </div>
                <div className="fastorder__container">
                    <div className="fastorder__content">
                        <div className="fastorder__image">image</div>
                        <div className="fastorder__detail">
                            <div className="detail__header">
                                <div className="detail__name">스타벅스 안암점</div>
                                <div className="detail__distance">0.7km</div>
                                <div className="detail__like">좋아요</div>
                            </div>
                            <div className="detail__body">
                                <div className="detail__description">설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명</div>
                                <button>X</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fastorder__container">
                    <div className="fastorder__content">
                        <div className="fastorder__image">image</div>
                        <div className="fastorder__detail">
                            <div className="detail__header">
                                <div className="detail__name">스타벅스 안암점</div>
                                <div className="detail__distance">0.7km</div>
                                <div className="detail__like">좋아요</div>
                            </div>
                            <div className="detail__body">
                                <div className="detail__description">설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명</div>
                                <button>X</button>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </>
    );
}

export default Fastorder;
