import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import MyplaceJSX from '../Components/js/myplaceJSX';


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
                    <div className="modal__title">my place의 이름을 입력하세요. </div>
                    <div className="modal__content">
                        <input type="text" />
                        <input type="submit" />
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
