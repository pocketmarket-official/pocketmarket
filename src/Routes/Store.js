import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';


// react hooks that changes tabs
const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if(!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

const content = [
    {
        tab: "grid", 
        content: 
        <>
            <div className="store__review grid" id="review__container">
                <Link to="/review"><div>image1</div></Link>
                <div>image2</div>
                <div>image3</div>
                <div>image1</div>
                <div>image2</div>
                <div>image3</div>
                <div>image1</div>
                <div>image2</div>
                <div>image3</div>
                <div>image1</div>
                <div>image2</div>
                <div>image3</div>
                <div>image1</div>
                <div>image2</div>
            </div>
        </>
    }, 
    {
        tab: "list", 
        content:
        <>
            <div className="review__container">
                <Link to="/review">
                <div className="review__content">
                    <div>image</div>
                    <div className="review__title">
                        <div className="review__name">마진형</div>
                        <div className="review__detail">리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰</div>
                    </div>
                </div>
                </Link>
                <div className="review__common">
                    <div className="common__btns">
                        <div>Sale Dt</div>
                        <div className="review__order">주문내역</div>
                        <div className="review__likes">좋아요</div>
                    </div>
                    <div className="review__comment">댓글댓글</div>
                    <div className="review__comment">댓글댓글</div>
                    <div className="review__comment">댓글댓글</div>
                    <div className="review__comment">댓글댓글</div>
                </div>
                <div className="review__content">
                    <div>image</div>
                    <div className="review__title">
                        <div className="review__name">마진형</div>
                        <div className="review__detail">리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰</div>
                    </div>
                </div>
                <div className="review__common">
                    <div className="common__btns">
                        <div>Sale Dt</div>
                        <div className="review__order">주문내역</div>
                        <div className="review__likes">좋아요</div>
                    </div>
                    <div className="review__comment">댓글댓글</div>
                    <div className="review__comment">댓글댓글</div>
                    <div className="review__comment">댓글댓글</div>
                    <div className="review__comment">댓글댓글</div>
                </div>
                <div className="review__content">
                    <div>image</div>
                    <div className="review__title">
                        <div className="review__name">마진형</div>
                        <div className="review__detail">리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰</div>
                    </div>
                </div>
                <div className="review__common">
                    <div className="common__btns">
                        <div>Sale Dt</div>
                        <div className="review__order">주문내역</div>
                        <div className="review__likes">좋아요</div>
                    </div>
                    <div className="review__comment">댓글댓글</div>
                    <div className="review__comment">댓글댓글</div>
                    <div className="review__comment">댓글댓글</div>
                    <div className="review__comment">댓글댓글</div>
                </div>
            </div>
        </>
    },
];

function StoreView({match}) {
    const { currentItem, changeItem } = useTabs(0, content);

    const id = match.params.storeId;
    const link = "/main/store/" + id + "/order"

    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="store">
                <div className="content__store">
                    <div className="store__store">
                        <div className="store__image">image</div>
                        <div className="store__detail">
                            <div className="detail__title">
                                <div className="detail__name">강남 핫도그</div>
                                <div className="detail__distance">0.7km</div>
                                <div className="detail__likes">좋아요</div>
                            </div>
                            <div className="detail__description">
                                설명설명설명설명설명설명설명설명설명설명설명
                            </div>
                        </div>
                    </div>
                    <div className="button__container">
                        {content.map((section, index) =>  (
                            <button onClick={() => changeItem(index)} key={index}>{section.tab}</button>
                        ))}
                    </div>
                </div>
                {currentItem.content}
            </div>
            <div className="order"><Link to={link}>주문하기</Link></div>
        </>
    );
}

export default StoreView;
