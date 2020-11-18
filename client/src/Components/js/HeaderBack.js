import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../scss/headerBack.scss';

import btnBack from '../../assets/common/btn_bs.png';
import btnAlarm from '../../assets/common/btn_alarm.png';
import bi from '../../assets/common/BI.png';


function HeaderBack(props) {
    const history = useHistory();

    return (
            <div className="header__box">
                <img className="header__back"  onClick={() => {history.goBack()}} src={btnBack}/>
                <Link to="/main"><img className="header__bi" src={bi} alt="logo" /></Link>
                <img className="header__alarm" src={btnAlarm} alt="alarm" />
            </div>
        );
}

export default HeaderBack;
