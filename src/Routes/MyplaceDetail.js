import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function MyplaceDetail() {
    return (
        <>
            <HeaderBack />
            <div className="myplacedetail">
                <div className="myplacedetail__map">지도</div>
                <div className="myplacedetail__api">
                    <div className="myplacedetail__address">안양시 동안구 호계동 1027</div>
                    <div className="myplacedetail__street">엘에스로 91번길 16-39</div>
                </div>
                <input type="text" placeholder="상세주소를 입력하세요(건물명, 동 / 호수 등)" />
                <input type="submit" value="완료" />
            </div>
        </>
    );
}

export default MyplaceDetail;
