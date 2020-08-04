import React, { useState } from 'react';
import Header from '../Components/js/Header';

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

//
const content = [
    {
        tab: "축제보기", 
        content: 
        <>
            <div className="current-position">내 현재 위치 GPS icon</div>
            <div className="content__festival">
                <div>image</div>
                <div className="festival__detail">
                    <div className="detail__name">Festival Name</div>
                    <div className="detail__description">Festival Dscpt</div>
                    <div className="detail__address">Address</div>
                </div>
            </div>
            <div className="content__festival">
                <div>image</div>
                <div className="festival__detail">
                    <div className="detail__name">Festival Name</div>
                    <div className="detail__description">Festival Dscpt</div>
                    <div className="detail__address">Address</div>
                </div>
            </div>
            <div className="content__festival">
                <div className="festival__image">image</div>
                <div className="festival__detail">
                    <div className="detail__name">Festival Name</div>
                    <div className="detail__description">Festival Dscpt</div>
                    <div className="detail__address">Address</div>
                </div>
            </div>
        </>
    }, 
    {
        tab: "매장보기", 
        content: 
        <>
            <div className="current-position">내 현재 위치 GPS icon</div>
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
                <div className="store__review">
                    리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰
                    <div className="review__likes">리뷰 좋아요</div>
                </div>
            </div>
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
                <div className="store__review">
                    리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰
                    <div className="review__likes">리뷰 좋아요</div>
                </div>
            </div>
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
                <div className="store__review">
                    리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰
                    <div className="review__likes">리뷰 좋아요</div>
                </div>
            </div>
        </>
    },
];

function Main() {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
            <>
                <Header />
                <div className="main">
                    <div className="main__navigation">
                        {content.map((section, index) =>  (
                                <button onClick={() => changeItem(index)}>{section.tab}</button>
                            ))}
                    </div>
                    {currentItem.content}
                </div>
            </>
        );
}

export default Main;
