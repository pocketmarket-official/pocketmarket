import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import btnAlarm from '../../assets/common/btn_alarm.png';
import bi from '../../assets/common/BI.png';
import { logout } from "./CookieCheck.js";


function HeaderGuest(props) {
    const history = useHistory();

    return (
            <div className="header__box">
                <svg onClick={() => logout()} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout header__back" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#b4022f" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>
                <Link to="/index"><img className="header__bi" src={bi} alt="logo" /></Link>
                <div className="fake"></div>
                {/*<img className="header__alarm" src={btnAlarm} alt="alarm" />*/}
            </div>
        );
}

export default HeaderGuest;
