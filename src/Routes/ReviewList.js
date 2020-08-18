import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function ReviewList() {
    return (
        <>
            <HeaderBack />
            <div className="review">
                <div className="review__list">
                    <div className="image__container">
                        <div id="left__btn">&lt;</div>
                        <div className="image">image</div>
                        <div id="right__btn">&gt;</div>
                    </div>
                    <div className="review__container">
                        <div className="review__header">
                            <div className="review__user">
                                <div className="user__avatar">이미지</div>
                                <div className="user__name">마진형</div>
                            </div>
                            <div className="review__like">좋아요</div>
                        </div>
                        <div className="review__order">주문 일자 주문 목록</div>
                        <div className="review__review">리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰</div>
                        <button id="review__more" onClick={() => {
                            const elt = document.getElementById("review__comment1");
                            elt.classList.toggle("hidden");
                        }}>...</button>
                        <div className="review__comment hidden" id="review__comment1">
                            <div>1댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>2댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>3댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>4댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>5댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>6댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>7댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>8댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>9댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>10댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                        </div>
                        <div className="review__input">
                            <input className="write-comment" placeholder="댓글달기"></input>
                            <button>submit</button>
                        </div>
                    </div>
                    <div className="image__container">
                        <div id="left__btn">&lt;</div>
                        <div className="image">image</div>
                        <div id="right__btn">&gt;</div>
                    </div>
                    <div className="review__container">
                        <div className="review__header">
                            <div className="review__user">
                                <div className="user__avatar">이미지</div>
                                <div className="user__name">마진형</div>
                            </div>
                            <div className="review__like">좋아요</div>
                        </div>
                        <div className="review__order">주문 일자 주문 목록</div>
                        <div className="review__review">리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰</div>
                        <button id="review__more" onClick={() => {
                            const elt = document.getElementById("review__comment2");
                            elt.classList.toggle("hidden");
                        }}>...</button>
                        <div className="review__comment hidden" id="review__comment2">
                            <div>1댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>2댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>3댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>4댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>5댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>6댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>7댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>8댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>9댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>10댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                            <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                        </div>
                        <div className="review__input">
                            <input className="write-comment" placeholder="댓글달기"></input>
                            <button>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewList;
