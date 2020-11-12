import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import MyplaceJSX from '../Components/js/myplaceJSX';
import '../Components/scss/Myplace.scss';
import rewrite from '../assets/my_place_full/img_name.png';
import close from "../assets/my_place_full/btn_close.png";
import ico_close from "../assets/my_place_full/ico_close.png";
import search from "../assets/my_place_full/ico_search.png";

function Myplace() {
    return (
        <>
            <div className="myplace__modal hidden" id="myplace__modal" onClick={() => {
                const elt = document.getElementById("myplace__modal");
                elt.classList.add("hidden")
            }}>
                <div className="modal__modal" onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <div className="modal__close__btn" id="modal__close__btn" onClick={() =>{
                        const elt = document.getElementById("myplace__modal");
                        elt.classList.add("hidden");
                    }}><img src={close}/></div>
                    <span><img className="modal__picture" src={rewrite}/></span>
                    <div className="modal__title">My Place 이름을 입력하세요. </div>
                    <div className="modal__content">
                        <input className="modal__contenttext" type="text" />
                        <div className="modal__contentsubmit">제출</div>
                    </div>
                </div>
            </div>
            <HeaderBack url='/mypage' />
            <div className="myplace">
                <div className="myplace__favorite">
                    <div className="myplace__title">
                        <text>My Place</text>
                    </div>
                    <table className="myplace__savePlace">
                        <th colSpan="4" className="myplace__tableHeader">
                            <td>저장 장소</td>
                        </th>
                        <MyplaceJSX />
                    </table>

                    <table className="myplace__addressSave">
                        <th>
                            <td>주소 저장</td>
                        </th>
                        <tr className="myplace__content">
                            <td className="myplace__message">지번, 도로명, 건물명을 입력하세요</td>
                        </tr>
                        <tr className="myplace__content">
                            <td className="myplace__addrSearch">
                                <form>
                                    <input type="text" placeholder="예) 배민동 12-3 또는 배민아파트"></input>
                                    <Link to="/mypage/myplace/search">
                                        <button type="submit"><img src={search}/></button>
                                    </Link>
                                </form>
                            </td>
                        </tr>
                        <tr className="myplace__content">
                            <td className="myplace__button">
                                <button>현 위치로 주소 설정</button>
                            </td>
                        </tr>
                    </table>

                    <table className="myplace__recentAddress">
                        <th colSpan="3" className="myplace__tableHeader">
                            <td>최근 주소</td>
                        </th>
                        <tr className="myplace__content">
                            <td colSpan="2" className="myplace__address">안양시 동안구 호계동 1027 안양 아이티밸리 801호 아이엠티소프트</td>
                            <td rowSpan="2" className="myplace__button">
                                <td className="myplace__delete"><img src={ico_close}/></td>
                            </td>
                        </tr>
                        <tr className="myplace__content2">
                            <td className="myplace__newZipCdNm">
                                <div>도로명</div>
                            </td>
                            <td className="myplace__newZipCd">엘에스로91번길 16-39 안양it밸리 801호.아이엠티소프트</td>
                        </tr>
                        <tr className="myplace__content">
                            <td colSpan="2" className="myplace__address">서울시 강동구 천호동 154-2 13521호</td>
                            <td rowSpan="2" className="myplace__button">
                                <td className="myplace__delete"><img src={ico_close}/></td>
                            </td>
                        </tr>
                        <tr className="myplace__content2">
                            <td className="myplace__newZipCdNm">
                                <div>도로명</div>
                            </td>
                            <td className="myplace__newZipCd">성안로 173번길 서울시 13521호</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Myplace;
