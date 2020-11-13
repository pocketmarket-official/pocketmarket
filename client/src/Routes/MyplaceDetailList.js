import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';
import MyplaceDetailListJSX from '../Components/js/myplaceDetailListJSX';
import '../Components/scss/MyplaceDetailList.scss';
import rewrite from '../assets/my_place_full/img_name.png';
import close from "../assets/order_status_pop/btn_close.png";
import search from '../assets/my_place_full/ico_search.png';

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
            <HeaderBiz url='/mypage' />
            <div className="myplaceDetailList">
                <div className="myplace__favorite">

                    <div className="myplace__search__container">
                      <div className="search__input">
                        <input id="content" placeholder=""/>
                        <input type="image" src={search} value="조회" id="search"/>
                      </div>
                    </div>
                    <MyplaceDetailListJSX />
                </div>
            </div>
        </>
    );
}

export default Myplace;
