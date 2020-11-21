import React from 'react';
import {Link} from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';

import KakaoMap from "../Components/js/kakaomap";
import img_pick from "../assets/my_place_full/img_pick.png";
import search from "../assets/my_place_full/btn_check_tmp.png";

function Myplace() {
    return (
        <>
            <HeaderBiz url='/mypage/MyplaceDetailList'/>

            <div className="MyplaceDetailMap">
                <div className="myplacedetailmap__kakaomap">
                    <KakaoMap icon={img_pick}/>
                </div>
                <div className="myplaceDetailMap__favorite">
                    <div className="myplaceDetailMap__address">
                        <table className="myplace__recentAddress">
                            <tbody>
                                <tr className="myplace__content">
                                    <td colSpan="2" className="myplace__address">경기 안양시 동안구 호계동 1027</td>
                                    <td rowSpan="2" className="myplace__button">
                                        <td className="myplace__delete"></td>
                                    </td>
                                </tr>
                                <tr className="myplace__content2">
                                    <td className="myplace__newZipCdNm">
                                        <div>도로명</div>
                                    </td>
                                    <td className="myplace__newZipCd">엘에스로91번길 16-39</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="myplaceDetailMap__searchForm">
                        <span>
                            <input type="text" placeholder="상세주소를 입력하세요 (건물명, 동/호수 등)"></input>
                            <Link to="/mypage/myplace/detailList">
                                <button id="search__map"><img src={search}/></button>
                            </Link>
                        </span>
                    </div>
                    <div className="myplaceDetailMap__addButton">
                        <form>
                            <button className="myplaceDetailMap__submit">내 장소에 추가</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Myplace;
