import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/js/Header';
import Festival from '../Festival/FestivalInfo';
import StoreJSX from '../Components/js/mainStoreJSX';

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
        <Festival></Festival>
    }, 
    {
        tab: "매장보기", 
        content:
        <StoreJSX />
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
                                <button onClick={() => changeItem(index)} key={index}>{section.tab}</button>
                            ))}
                    </div>
                    <div className="current-position">
                        <button>▼</button>
                        <div>내 현재 위치</div>
                        <div>GPS icon</div>
                    </div>
                    {currentItem.content}
                </div>
            </>
        );
}

export default Main;
