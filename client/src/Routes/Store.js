import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import StoreList from '../Components/js/StoreList';


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
            <StoreList />
        </>
    },
];

function StoreView(props) {
    const { currentItem, changeItem } = useTabs(0, content);

    const id = props.location.state.data.id;
    const link = "/main/store/" + id + "/order";

    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="store">
                <div className="content__store">
                    <div className="store__store">
                        <div className="store__image">image</div>
                        <div className="store__detail">
                            <div className="detail__title">
                                <div className="detail__name">{props.location.state.data.store_nm}</div>
                                <div className="detail__distance">{props.location.state.d}</div>
                                <div className="detail__likes">{props.location.state.data.like_count}</div>
                            </div>
                            <div className="detail__description">
                                {props.location.state.data.comment}
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
