import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import KakaoMap from '../Components/js/kakaomap';


function MyplaceDetail() {
    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="myplacedetail">
                <KakaoMap />
                <div className="myplacedetail__api">
                    <div className="myplacedetail__address" id="myplacedetail__address"></div>
                    <div className="myplacedetail__street" id="myplacedetail__street"></div>
                </div>
                <input type="text" placeholder="상세주소를 입력하세요(건물명, 동 / 호수 등)" id="keyword__map" />
                <input type="submit" value="완료" id="search__map" />
            </div>
        </>
    );
}

export default MyplaceDetail;
