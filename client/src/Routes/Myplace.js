import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import MyplaceJSX from '../Components/js/myplaceJSX';
import '../Components/scss/Myplace.scss';
import rewrite from '../assets/my_place_full/img_name.png';
import close from "../assets/order_status_pop/btn_close.png";

function Myplace() {
    return (
        <>
            <div className="myplace__modal hidden" id="myplace__modal" onClick={() => {
                const elt = document.getElementById("myplace__modal");
                elt.classList.add("hidden")
            }}>
                <div className="modal__close__btn" id="modal__close__btn" onClick={() =>{
                    const elt = document.getElementById("myplace__modal");
                    elt.classList.add("hidden");
                }}><img src={close}/></div>
                <div className="modal__modal" onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <span><img className="modal__picture" src={rewrite}/></span>
                    <div className="modal__title">My Place 이름을 입력하세요. </div>
                    <div className="modal__content">
                        <input className="modal__contenttext" type="text" />
                        <input className="modal__contentsubmit" type="submit" />
                    </div>
                </div>
            </div>
            <HeaderBack url='/mypage' />
            <div className="myplace">
                <div className="myplace__favorite">
                    <div className="myplace__title">My Place</div>
                    <MyplaceJSX />
                    <Link to="/mypage/myplace/search"><input type="button" value="위치 검색하기" /></Link>
                </div>
            </div>
        </>
    );
}

export default Myplace;
