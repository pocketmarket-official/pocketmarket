import React from 'react';
import { Link, useHistory } from 'react-router-dom';


function HeaderBack() {
    const history = useHistory();

    return (
            <div className="header__box">
                <div id="back-btn" onClick={() => {
                    history.goBack();
                }}>back</div>
                <Link to="/main"><div>Pocket Market</div></Link>
                <Link to="/biz/mypage"><div>my</div></Link>
            </div>
        );
}

export default HeaderBack;
