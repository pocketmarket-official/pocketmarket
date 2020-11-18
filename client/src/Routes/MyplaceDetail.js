import React from 'react';
import KakaoMap from '../Components/js/kakaomap';
import {Link} from "react-router-dom";
import '../Components/scss/myPlaceDetail.scss';

import btnBack from '../assets/map/btn_back.png';
import btnClocation from '../assets/map/btn_clocation.png';
import btnPoc from '../assets/map/ico_poc.png';

function MyplaceDetail() {
    return (
        <div className="myplacedetail">
            <div className="header__box">
                <div className="box__left">
                    <Link to="/main"><img className="header__back" src={btnBack} alt="BACK button" /></Link>
                    <Link to="/mypage/myplace"><input className="header__search" readonly/></Link>
                    <img className="header__mapLocation" id="header__mapLocation" src={btnClocation} alt="location" />
                </div>
                <Link to="/mypage"><img className="header__logo" src={btnPoc} alt="logo" /></Link>
            </div>

            <KakaoMap/>
        </div>
    );
}

export default MyplaceDetail;
