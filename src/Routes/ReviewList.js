import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function ReviewList() {
    return (
        <>
            <HeaderBack />
            <div className="review">
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
                    <div className="review__comment">
                        <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
                        <div>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</div>
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
        </>
    );
}

export default ReviewList;
