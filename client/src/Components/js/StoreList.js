import React from 'react';
import { Link } from 'react-router-dom';


let temp = [
    {
        id: 1,
        username: "노민철",
        like_count: 14,
        order_date: "2020-09-10",
        order_list: ["아이스아메리카노 2", "아이스라떼 1"],
        comment: "커피가 정말 맛있어요",
    },
    {
        id: 2,
        username: "마진형",
        like_count: 22,
        order_date: "2020-09-11",
        order_list: ["아이스아메리카노 1", "티라미수 1"],
        comment: "맛있는 티라미수",
    },
]

function StoreList() {
    return(
        temp.map((data) => {
            return (
                <>
                    <div className="review__container">
                        <Link to="/review">
                        <div className="review__content">
                            <div>image</div>
                            <div className="review__title">
                                <div className="review__name">{data.username}</div>
                                <div className="review__detail">리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰</div>
                            </div>
                        </div>
                        </Link>
                        <div className="review__common">
                            <div className="common__btns">
                                <div>{data.order_date}</div>
                                <div className="review__order">{data.order_list}</div>
                                <div className="review__likes">{data.like_count}</div>
                            </div>
                            <div className="review__comment">댓글댓글</div>
                            <div className="review__comment">댓글댓글</div>
                            <div className="review__comment">댓글댓글</div>
                            <div className="review__comment">댓글댓글</div>
                        </div>
                    </div>
                </>
            );
        })
    );
}

export default StoreList;
