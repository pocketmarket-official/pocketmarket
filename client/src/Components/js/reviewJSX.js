import React, {useRef} from 'react';

import itemimg from "../../assets/review_list/list_img1.jpg";
import userimg from "../../assets/review_list/ico_user1.png";
import Flicking from "@egjs/react-flicking";


let temp = [
    {
        id: "노민**",
        username: "노민철",
        like_count: 14,
        order_date: "2020-09-10",
        order_list: ["아이스아메리카노 2", "아이스라떼 1"],
        comment: "커피가 정말 맛있어요  커피가 정말 맛있어요 커피가 정말 맛있어요 커피가 정말 맛있어요 커피가 정말 맛있어요 커피가 정말 맛있어요 커피가 정말 맛있어요 커피가 정말 맛있어요 커피가 정말 맛있어요 ",
        recoment: [{id: "사장님", comment: "감사합니다. 홍길동길동님, 앞으로 치즈 두배 세배로 넣어드릴께요?"},
            {id: "작성자", comment: "감사합니다 :)"}],

    },

];

function ReviewJSX() {
    const paginationElem = useRef(null);

    function onChangeReviewItem(e) {
        for (let item of paginationElem.current.children) {
            item.classList.remove('active');
        }
        paginationElem.current.children[e.index].classList.add('active');
    }

    return (
        <>
            {
                temp.map((data) => {
                    return (
                        <>
                            <div className="review">
                                <div className="review__list">
                                    <div className="image__container">
                                        <Flicking classPrefix="jumbo"
                                                  hanger={0}
                                                  anchor={0}
                                                  zIndex={0}
                                                  infinite={true}
                                                  onChange={onChangeReviewItem}
                                                  className={"image"}>
                                            <img src={itemimg}/>
                                            <img src={itemimg}/>
                                            <img src={itemimg}/>
                                            <img src={itemimg}/>
                                            <img src={itemimg}/>
                                        </Flicking>
                                        <div ref={paginationElem} className="pagination">
                                            <div className="pagination-item active"/>
                                            <div className="pagination-item"/>
                                            <div className="pagination-item"/>
                                            <div className="pagination-item"/>
                                            <div className="pagination-item"/>
                                        </div>
                                    </div>


                                    <div className="review_container">
                                        <div className="review__header">
                                            <div className="review__user">
                                                <div className="user__avatar"><img className="image" src={userimg}/>
                                                </div>
                                                <div className="user__name">{data.username}</div>
                                            </div>

                                            <button className="review__like"><p>♥</p> {data.like_count}</button>
                                        </div>

                                        <div
                                            className="review__order">{data.id} {data.order_date} {data.order_list}</div>
                                        <div className="review__review">{data.comment}</div>
                                        <div>
                                            <div className="bar"></div>
                                        </div>
                                        {/*<button id="review__more" onClick={() => {*/}
                                        {/*    let i = data.id;*/}
                                        {/*    const elt = document.getElementById(i);*/}
                                        {/*    elt.classList.toggle("hidden");*/}
                                        {/*}}>...</button>*/}
                                        <div className="review__comment hidden" id={data.id}>
                                            <div className="review__box">
                                                <div className="review__1">답글</div>
                                                <div className="review__2">{data.recoment[0].id}</div>
                                                <div className="review__3">{data.recoment[0].comment}</div>
                                            </div>
                                            <div className="review__box">
                                                <div className="review__1">답글</div>
                                                <div className="review__2">{data.recoment[1].id}</div>
                                                <div className="review__3">{data.recoment[1].comment}</div>
                                            </div>
                                        </div>
                                        <div className="review__input">
                                            <input className="write-comment" placeholder="댓글달기"></input>
                                            <button className="write_comment_btn">전송</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
        </>
    );

}

export default ReviewJSX;
