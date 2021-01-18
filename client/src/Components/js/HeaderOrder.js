import {useHistory} from "react-router-dom";
import btnBack from "../../assets/common/btn_bs.png";
import React from "react";

export default function HeaderOrder({storeName}) {
    const history = useHistory();

    return (
        <div className="header__box">
            <img className="header__back" alt="back-btn"  onClick={() => {history.goBack()}} src={btnBack}/>
            <div className="header__store-name" onClick={() => {history.goBack()}}>
                {storeName}
            </div>
            <div className="header__waiting">
                <div className="waiting__txt">대기인원</div>
                <div className="waiting__num" id="waitingCount"></div>
            </div>
            {/*<img className="header__alarm" src={btnAlarm} alt="alarm" />*/}
        </div>
    );
}
