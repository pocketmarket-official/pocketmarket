import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return (
            <div className="header__box">
                <Link to="/order/status"><div>image</div></Link>
                <Link to="/main"><div>Pocket Market</div></Link>
                <Link to="/mypage"><div>my</div></Link>
            </div>
        );
}

export default Header;
