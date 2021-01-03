import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import btnBack from '../../assets/common/btn_bs.png';
import btnAlarm from '../../assets/common/btn_alarm.png';
import bi from '../../assets/common/BI.png';
import logoutBtn from '../assets/my_page/ico_logout.png';
import { logout } from "../Components/js/CookieCheck.js";


function HeaderBack(props) {
    const history = useHistory();

    return (
            <div className="header__box">
                <img className="header__back"  onClick={() => {logout()}} src={logoutBtn}/>
                <Link to="/index"><img className="header__bi" src={bi} alt="logo" /></Link>
                <div className="fake"></div>
                {/*<img className="header__alarm" src={btnAlarm} alt="alarm" />*/}
            </div>
        );
}

export default HeaderBack;
