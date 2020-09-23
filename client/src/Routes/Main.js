import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/js/Header';
import Festival from '../Festival/FestivalInfo';
import StoreJSX from '../Components/js/mainStoreJSX';
import MainMapContent from '../Components/js/MainMapContent';


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

function handleAddress() {
    const btn = document.getElementById("btn__address");
    const modal = document.getElementById("modal__address");

    btn.onclick = function() {
        modal.classList.toggle("hidden");
    }
}

const temp = [
    {
        id: 1,
        username: '노민철',
        name: '집',
        address: '경기도 안양시',
        latlong: [126.950783, 37.389696],
    },
    {
        id: 2,
        username: '노민철',
        name: '학교',
        address: '서울특별시 성북구 안암동',
        latlong: [127.025875, 37.584892],
    },
    {
        id: 3,
        username: '노민철',
        name: '회사',
        address: '서울특별시 강남구',
        latlong: [127.025875, 37.584892],
    },
]

function Main() {
    const content = [
        {
            id: 1,
            tab: "축제보기",
            content:
            <Festival></Festival>,
            btn:
            <>
            </>
        }, 
        {
            id: 2,
            tab: "매장보기",
            content:
            <StoreJSX />,
            btn:
            <>
                <div className="main__btns">
                    <button className="btn__current"><Link to="/mypage/myplace/search">현위치</Link></button>
                    <button className="btn__address" id="btn__address" onClick={handleAddress}>주소지</button>
                    <button className="btn__map_list" id="btn__map_list" onClick={handleBtn}>목록</button>
                </div>
            </>
        },
        {
            id: 3,
            content:
            <MainMapContent></MainMapContent>,
            btn:
            <>
                <div className="main__btns">
                    <button className="btn__current"><Link to="/mypage/myplace/search">현위치</Link></button>
                    <button className="btn__address" id="btn__address" onClick={handleAddress}>주소지</button>
                    <button className="btn__map_list" id="btn__map_list" onClick={handleBtn}>목록</button>
                </div>
            </>
        }
    ];

    const { currentItem, changeItem } = useTabs(0, content);

    function handleBtn() {
        const btn = document.getElementById("btn__map_list");

        btn.onclick = function() {
            if(btn.innerHTML === "목록") {
                btn.innerHTML = "지도";
                changeItem(2);
            } else if(btn.innerHTML === "지도") {
                btn.innerHTML = "목록";
                changeItem(1);
            }
        }
    }

    function handleModalContent(e) {
        const button1 = document.getElementById("btn__address");
        const modal = document.getElementById("modal__address");
        let address_test = e.target.innerHTML;
        button1.innerHTML = address_test;
        modal.classList.toggle("hidden");
    }

    function handleTabBtn() {
        const elt = document.getElementById("btn__map_list");
        if(elt) {
            if(elt.innerHTML === "지도") {
                changeItem(1);
                elt.innerHTML = "목록";
            } else {
                changeItem(1);
            }
        } else {
            changeItem(1);
        }
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
                        <button onClick={() => changeItem(0)}>{content[0].tab}</button>
                        <button onClick={handleTabBtn}>{content[1].tab}</button>
                    </div>
                    {currentItem.content}
                </div>
            </>
        );
}

export default Main;
