import React from 'react';


function Footer() {
    return (
        <>
            <footer>
                <div className="footer__top">
                    <div className="footer__column">
                        <div>상호명</div>
                        <div>포켓마켓</div>
                    </div>
                    <div className="footer__column">
                        <div>사업자번호</div>
                        <div>165 11 01485</div>
                    </div>
                    <div className="footer__column">
                        <div>대표</div>
                        <div>장문진</div>
                    </div>
                    <div className="footer__column">
                        <div>연락처</div>
                        <div>010-9410-9188</div>
                    </div>
                </div>
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
