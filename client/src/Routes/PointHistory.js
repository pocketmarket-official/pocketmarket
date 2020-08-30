import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function PointHistory() {
    return (
        <>
            <div className="modal__conversion hidden" id="modal__conversion" onClick={() => {
                const elt = document.getElementById("modal__conversion");
                elt.classList.add("hidden");
            }}>
                <div className="modal__modal" onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <div className="modal__header"></div>
                    <div className="modal__detail">100 likes -> 100 PM</div>
                    <button>전환</button>
                </div>
            </div>
            <HeaderBack url='/mypage' />
            <div className="pointhistory">
                <div className="pointhistory__container">
                    <div className="pointhistory__data">
                        <div className="pointhistory__title">현재까지 총 좋아요 수</div>
                        <div className="pointhistory__point">6054개</div>
                    </div>
                    <div className="pointhistory__data">
                        <div className="pointhistory__title">포인트 전환한 좋아요 수</div>
                        <div className="pointhistory__point">5000개</div>
                    </div>
                    <div className="pointhistory__data">
                        <div className="pointhistory__title">현재까지 전환한 총 포인트</div>
                        <div className="pointhistory__point">6000PM</div>
                    </div>
                    <div className="pointhistory__data">
                        <div className="pointhistory__title">현재까지 사용한 총 포인트</div>
                        <div className="pointhistory__point">4500PM</div>
                    </div>
                    <div className="pointhistory__data">
                        <div className="pointhistory__title">잔여 포인트</div>
                        <div className="pointhistory__point">1500PM</div>
                    </div>
                </div>
                <button className="pointhistory__conversion" onClick={() => {
                        const elt = document.getElementById("modal__conversion");
                        elt.classList.remove("hidden");
                    }}>포인트 전환</button>
                <div className="pointhistory__search">
                    <div className="search__title">포인트 이력</div>
                    <div className="search__input">
                        <input type="date" /> ~ <input type="date" />
                        <input type="submit" value="조회"/>
                    </div>
                    <div className="pointhistory__result">
                        <div className="result__date">2020년 7월 25일</div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__date">2020년 7월 25일</div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__date">2020년 7월 25일</div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__date">2020년 7월 25일</div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>
                        <div className="result__detail">
                            <div className="result__conversion">전환</div>
                            <div className="result__likes">-500 좋아요</div>
                            <div className="result__point">+550PM</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default PointHistory;
