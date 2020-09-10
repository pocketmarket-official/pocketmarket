import React from 'react';


let temp = [
    {
        id: 1,
        username: "노민철",
        like_count: 14,
        order_date: "2020-09-10 18:01:34",
        order_list: ["아이스아메리카노 2", "아이스라떼 1"],
        comment: "커피가 정말 맛있어요",
    },
    {
        id: 2,
        username: "마진형",
        like_count: 22,
        order_date: "2020-09-11 14:22:34",
        order_list: ["아이스아메리카노 1", "티라미수 1"],
        comment: "맛있는 티라미수",
    },
]

function ReviewJSX() {
    return (
        temp.map((data) => {
            return (
                <>
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
                                        <div className="user__name">{data.username}</div>
                                    </div>
                                    <div className="review__like">{data.like_count}</div>
                                </div>
                                <div className="review__order">{data.order_date} {data.order_list}</div>
                                <div className="review__review">{data.comment}</div>
                                <button id="review__more" onClick={() => {
                                    let i = data.id;
                                    const elt = document.getElementById(i);
                                    elt.classList.toggle("hidden");
                                }}>...</button>
                                <div className="review__comment hidden" id={data.id}>
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
        })
    );

}

export default ReviewJSX;
