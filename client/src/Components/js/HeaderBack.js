import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import btnBack from '../../assets/common/btn_bs.png';
import bi from '../../assets/common/BI.png';


function HeaderBack(props) {
    const history = useHistory();

    return (
            <div className="header__box">
                <img className="header__back" alt="back-btn"  onClick={() => {history.goBack()}} src={btnBack}/>
                <Link to="/index"><img className="header__bi" src={bi} alt="logo" /></Link>
                <div className="fake"></div>
                {/*<img className="header__alarm" src={btnAlarm} alt="alarm" />*/}
            </div>
        );
}

export default HeaderBack;
