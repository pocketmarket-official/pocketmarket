import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';


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
                    <div className="myplace__container">
                        <div className="myplace__content">
                            <div className="myplace__name">집</div>
                            <div className="myplace__address">서울특별시 종로구 어쩌구</div>
                            <div className="myplace__button">
                                <div className="myplace__write" onClick={() => {
                                    const elt = document.getElementById("myplace__modal");
                                    elt.classList.remove("hidden")
                                }}>Write</div>
                                <div className="myplace__delete">X</div>
                            </div>
                        </div>
                        <div className="myplace__content">
                            <div className="myplace__name">회사</div>
                            <div className="myplace__address">서울특별시 종로구 어쩌구</div>
                            <div className="myplace__button">
                                <div className="myplace__write">Write</div>
                                <div className="myplace__delete">X</div>
                            </div>
                        </div>
                        <div className="myplace__content">
                            <div className="myplace__name">본가</div>
                            <div className="myplace__address">서울특별시 종로구 어쩌구</div>
                            <div className="myplace__button">
                                <div className="myplace__write">Write</div>
                                <div className="myplace__delete">X</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="myplace__search">
                    <div className="myplace__searchbar">
                        <input type="text" />
                        <input type="submit" value="search" />
                        <button>+</button>
                    </div>
                    <div className="myplace__result">
                        <div className="result__content">
                            <Link to="/mypage/myplace/1">
                                <div className="result__title">강동구 천호동 151-2 1305호</div>
                                <div className="result__detail">
                                    <div className="result__address">성안로 173 1305호</div>
                                    <div className="result__button" onClick={(e) => {
                                        e.preventDefault();
                                    }}>X</div>
                                </div>
                            </Link>
                        </div>
                        <div className="result__content">
                            <Link to="/mypage/myplace/2">
                                <div className="result__title">강동구 천호동 151-2 1305호</div>
                                <div className="result__detail">
                                    <div className="result__address">성안로 173 1305호</div>
                                    <div className="result__button" onClick={(e) => {
                                        e.preventDefault();
                                    }}>X</div>
                                </div>
                            </Link>
                        </div>
                        <div className="result__content">
                            <Link to="/mypage/myplace/3">
                                <div className="result__title">강동구 천호동 151-2 1305호</div>
                                <div className="result__detail">
                                    <div className="result__address">성안로 173 1305호</div>
                                    <div className="result__button" onClick={(e) => {
                                        e.preventDefault();
                                    }}>X</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Myplace;
