import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/header.scss';
import btnMenuImg from '../../assets/common/btn_menu.png';
import btnAlarm from '../../assets/common/btn_alarm.png';
import bi from '../../assets/common/BI.png';


function Header() {
    return (
            <div className="header__box">
                <Link to="/order/status"><img className="header__menu" src={btnMenuImg}/></Link>
                <Link to="/main"><img className="header__bi" src={bi}/></Link>
                <Link to="/mypage"><img className="header__alarm" src={btnAlarm}/></Link>
            </div>
        );
}

export default Header;
