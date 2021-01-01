import React from 'react';
import { Link } from 'react-router-dom';
import btnMenuImg from '../../assets/common/btn_menu.png';
import btnAlarm from '../../assets/common/btn_alarm.png';
import bi from '../../assets/common/BI.png';


function Header() {
    return (
            <div className="header__box">
                <Link to="/mypage" className="mypagelink"><img className="header__menu" id="header__menu" src={btnMenuImg} alt="hamburger button" /></Link>
                <Link to="/index"><img className="header__bi" src={bi} alt="logo" /></Link>
                <div className="fake"></div>
                {/*<img className="header__alarm" src={btnAlarm} alt="alarm" />*/}
            </div>
        );
}

export default Header;
