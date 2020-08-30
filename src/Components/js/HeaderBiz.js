import React from 'react';
import { Link } from 'react-router-dom';


function HeaderBiz() {
    return (
            <div className="header__box">
                <div>=</div>
                <Link to="/main"><div>Pocket Market</div></Link>
                <Link to="/biz/mypage"><div>my</div></Link>
            </div>
        );
}

export default HeaderBiz;
