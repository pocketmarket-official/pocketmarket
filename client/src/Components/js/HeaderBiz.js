import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import btnBack from "../../assets/common/btn_bs.png";
import bi from "../../assets/common/BI.png";
import btnMy from "../../assets/common/btn_my.png";
import btnAlarm from "../../assets/common/btn_alarm.png";

function HeaderBiz() {
    const history = useHistory();

    return (
        <div className="header__box">
            <img className="header__back"  onClick={() => {history.goBack()}} src={btnBack}/>
            <Link to="/main"><img className="header__bi" src={bi} alt="logo" /></Link>
            {/*<Link to="/biz/mypage"><img className="header__my" src={btnMy} alt="my" /></Link>*/}
            <img className="header__alarm" src={btnAlarm} alt="alarm" />
        </div>
    );
}


export default HeaderBiz;
