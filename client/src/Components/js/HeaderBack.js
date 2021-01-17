import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import btnBack from '../../assets/common/btn_bs.png';
import btnAlarm from '../../assets/common/btn_alarm.png';
import bi from '../../assets/common/BI.png';
import { clearCache } from 'react-router-cache-route'


function HeaderBack(props) {
    const history = useHistory();

    return (
            <div className="header__box">
                <img className="header__back"  onClick={() => {history.goBack();}} src={btnBack}/>
                <Link to="/index" onClick={()=>clearCache()}><img className="header__bi" src={bi} alt="logo" /></Link>
                <div className="fake"></div>
                {/*<img className="header__alarm" src={btnAlarm} alt="alarm" />*/}
            </div>
        );
}

export default HeaderBack;
