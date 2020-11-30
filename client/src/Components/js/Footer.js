import React, { useState } from 'react';

const content = [
    {
        tab: "상호명",
        content: "포켓마켓",
    },
    {
        tab: "사업자번호",
        content: "165 11 01485",
    },
    {
        tab: "대표",
        content: "장문진",
    },
    {
        tab: "연락처",
        content: "070-4629-3908",
    },
    {
        tab: "주소",
        content: "서울특별시 서초구 한강대로 369, 12층 89호",
    },
];

/*
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

function Footer() {
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <>
            <footer>
                <div className="footer__top">
                    {
                        content.map((section, index) => (
                            <div onClick={() => changeItem(index)}>
                                <div>{section.tab}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="footer__column">{currentItem.content}</div>
                <div className="footer__middle">
                    포켓마켓은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 포켓마켓은 상품, 거래정보 및 거래에 책임을 지지 않습니다. 
                </div>
                <div className="footer__bottom">
                    © 2020 all rights reserved
                </div>

            </footer>
        </>
    );
}
*/

function Footer() {
    return (
        <>
            <footer>
                {
                    content.map((elt) => {
                        return (
                            <>
                                <div className="footer__top">
                                {elt.tab}
                                <div className="footer__column">
                                {elt.content}
                                </div>
                                </div>
                            </>
                        );
                    })
                }
                <div className="footer__middle">
                    포켓마켓은 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 포켓마켓은 상품, 거래정보 및 거래에 책임을 지지 않습니다. 
                </div>
                <div className="footer__bottom">
                    © 2020 all rights reserved
                </div>

            </footer>
        </>
    );
}

export default Footer;
