import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';

import reviewButton from '../assets/order_status_pop/bttm_bi.png';
import market from '../assets/order_status_pop/top_bi.png';
import close from "../assets/order_status_pop/btn_close.png";

function BigStatus() {
    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="orderStatus__Modal">
                <div className="bigstatus">
                    <div className="modal__close__btn" id="modal__close__btn" onClick={() =>{
                        //write modal close code
                    }}><img src={close}/></div>
                    <div className="bigstatus__topImg">
                        <img src={market}></img>
                    </div>
                    <div className="bigstatus__storeNm">
                        <div className="bigstatus__detail">조폭닭꼬치</div>
                    </div>
                    <div className="bigstatus__datetime">
                        <div className="bigstatus__date">2020. 09. 23 </div>
                        <div className="bigstatus__dayOfWeek">수요일</div>
                    </div>
                    <div className="bigstatus__orderNum">
                        <div className="bigstatus__detail">0023</div>
                    </div>
                    <div className="bigstatus__orderDetail">
                        <div className="bigstatus__detail">조폭닭꼬치 1개</div>
                        <div className="bigstatus__detail">핵닭꼬치 2개</div>
                        <div className="bigstatus__detail">조폭닭꼬치 1개</div>
                        <div className="bigstatus__detail">핵닭꼬치 2개</div>
                        <div className="bigstatus__detail">조폭닭꼬치 1개</div>
                        <div className="bigstatus__detail">핵닭꼬치 2개</div>

                    </div>
                    <div className="bigstatus__reviewButton">
                        <Link to="/order/review">
                            <img src={reviewButton}></img>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BigStatus;
