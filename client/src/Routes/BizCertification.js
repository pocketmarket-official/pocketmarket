import React from 'react';
import HeaderBiz from '../Components/js/HeaderBiz';
import '../Components/scss/BizCertification.scss';
import biz from '../assets/business_certification/top_img.png';
import userchg from '../assets/business_certification/ico_user_chg.png';
import logout from '../assets/business_certification/ico_logout.png';
import {Link} from "react-router-dom";

function BizCertification() {
    return (
        <>
            <HeaderBiz />
            <div className="biz__certification">
                <div className="Bizinfomation__box">
                    <div className="biz__certification__img">
                        <img src={biz}/>
                        <p>사업자 인증을 진행해주세요.</p>
                    </div>
                    <div className="biz__message">
                        마진형님은 사업자 인증이 되어있지 않은 상태입니다.<br/>
                        아래 정보를 모두 입력하시면 사업자 인증 절차가 진행됩니다.
                    </div>
                </div>
                <div className="Bizinput__box">
                    <div className="biz__detail">
                        <div className="input__container">
                            <div className="stor__name">
                                · 상호<br/>
                                <input type ="text" placeholder={"불타는 쭈꾸미"}/>
                            </div>

                            <div className="manager__name">
                                · 대표자<br/>
                                <input type ="text" placeholder={"마진형"}/>
                            </div>

                            <div className="open__date">
                                · 개업년월일<br/>
                                <input type ="text"/>
                            </div>

                            <div className="stor__no">
                                · 사업자 등록번호<br/>
                                <input type ="text"/>
                            </div>


                            <div className="stor__address">
                                · 사업장 소재지<br/>
                                <input type ="text"/>
                            </div>
                            <div className="bonstor__address">
                                · 본점 소재지<br/>
                                <input type ="text"/>
                            </div>

                            <div className="stor__gun">
                                · 사업의 종류<br/>
                                <input type ="text"/>
                            </div>

                            <div className="account_num">
                                · 계좌번호<br/>
                                <input type ="text"/>
                            </div>

                            <div className="stor__bank">
                                · 은행<br/>
                                <input type ="text"/>
                            </div>

                            <div className="account_num">
                                · 예금주<br/>
                                <input type ="text"/>
                            </div>
                        </div>


                        <div className="button__two">
                            <button className="" id ="upload1">사업자등록증 업로드</button>
                            <button className="" id ="upload2">통장사본 업로드</button>
                        </div>

                    </div>
                </div>

                <div className="biz__button">
                    <div className="button__three">
                        {/*<button className="">문의하기</button>*/}
                        <Link to="/"><button className="usermode"><img src={userchg}/>사용자 모드</button></Link>
                        <button className="logout"><img src={logout}/> 로그아웃</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BizCertification;
