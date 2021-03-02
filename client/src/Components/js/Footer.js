import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        content: "서울특별시 강남구 개포로 508, B1 203호",
    },
];

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

let year = new Date();
year = year.getFullYear();

function Footer() {
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <>
            <footer>
                <div className="footer__top">
                    <Link to="/mypage/notice/1">
                        <div>개인정보처리방침</div>
                    </Link>
                    <Link to="/mypage/notice/2">
                        <div>전자상거래 이용약관</div>
                    </Link>
                    <Link to="/mypage/notice/3">
                        <div>위치기반서비스 이용약관</div>
                    </Link>
                </div>
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
                    © {year} all rights reserved
                </div>

            </footer>
        </>
    );
}

export default Footer;
