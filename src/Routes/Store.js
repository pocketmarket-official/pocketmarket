import React, { useState } from 'react';
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
            <div>hihi</div>
        </>
    },
];

function StoreView() {
    const { currentItem, changeItem } = useTabs(0, content);
    return (
        <>
            <HeaderBack />
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
            <div className="order">주문하기</div>
        </>
    );
}

export default StoreView;
