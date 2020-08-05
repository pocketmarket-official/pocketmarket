import React from 'react';
import { Link } from 'react-router-dom';


function HeaderBack() {
    return (
            <div className="header__box">
                <div>back</div>
                <Link to="/main"><div>Pocket Market</div></Link>
                <Link to="/mypage"><div>my</div></Link>
            </div>
        );
}

export default HeaderBack;
