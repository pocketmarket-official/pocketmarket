import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/js/Header';
import Festival from '../Festival/FestivalInfo';
import StoreJSX from '../Components/js/mainStoreJSX';
import handleBtn from '../Components/js/storeBtn';


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
        tab: "축제보기",
        content:
        <Festival></Festival>,
        btn:
        <>
        </>
    }, 
    {
        tab: "매장보기",
        content:
        <StoreJSX />,
        btn:
        <>
            <div className="main__btns">
                <button className="btn__current"><Link to="/mypage/myplace/search">현위치</Link></button>
                <button className="btn__address" id="btn__address" onClick={handleBtn}>주소지</button>
                <button className="btn__map_list" id="btn__map_list" onClick={handleBtn}>목록</button>
            </div>
        </>
    },
];

const temp = [
    {
        id: 1,
        username: '노민철',
        name: '집',
        address: '경기도 안양시',
    },
    {
        id: 2,
        username: '노민철',
        name: '학교',
        address: '서울특별시 성북구 안암동',
    },
    {
        id: 3,
        username: '노민철',
        name: '회사',
        address: '서울특별시 강남구',
    },
]

function Main() {
    const { currentItem, changeItem } = useTabs(0, content);

    function handleModalContent(e) {
        const button1 = document.getElementById("btn__address");
        const modal = document.getElementById("modal__address");
        let address_test = e.target.innerHTML;
        button1.innerHTML = address_test;
        modal.classList.toggle("hidden");
    }

    return (
            <>
                <Header />
                <div className="main">
                    {currentItem.btn}
                    <div className="modal__address hidden" id="modal__address">
                        {temp.map((data) => {
                            let contentId = `modal__content${data.id}`;
                            return (
                                <div id={contentId} onClick={(e) => handleModalContent(e)}>{data.name}: {data.address}</div>
                            );
                        })}
                    </div>
                    <div className="main__navigation">
                        {content.map((section, index) =>  (
                                <button onClick={() => changeItem(index)} key={index}>{section.tab}</button>
                            ))}
                    </div>
                    {currentItem.content}
                </div>
            </>
        );
}

export default Main;
