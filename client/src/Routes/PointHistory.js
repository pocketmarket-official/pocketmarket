import React from 'react';
import DatePicker, { } from "react-datepicker";
import HeaderBiz from "../Components/js/HeaderBiz";
import PointResult from '../Components/js/PointResult';
import search from '../assets/my_place_full/ico_search.png';
import close from '../assets/order_status_pop/btn_close.png';
import calendar from '../assets/order_status/btn_date.png';
import { ko } from "date-fns/esm/locale";


import '../Components/scss/PointHistory.scss';
import "react-datepicker/dist/react-datepicker.css";

class PointHistory extends React.Component {


    constructor(props) {
        super(props);
        this.searchHistory = this.searchHistory.bind(this);

        let today = new Date();
        let month = today.getMonth();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(month + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        if(month === 0) {
            mm = '12';
            yyyy = today.getFullYear() - 1;
        }
        else {
            mm = String(month).padStart(2, '0');
        }
        let past = yyyy + '-' + mm + '-' + dd;

        let temp = [
            {
                id: 1,
                date: '2020-07-25',
                point: [300, 200, "쉬림프킹"],
            },
            {
                id: 2,
                date: '2020-08-25',
                point: [500, 200, 100],
            },
            {
                id: 3,
                date: '2020-09-25',
                point: [800, 100, 400],
            },
        ];

        let search_result = [];
        for (let t in temp) {
            if(temp[t].date >= past && temp[t].date <= today) {
                search_result.push(temp[t]);
            }
        }

        this.state = {
            today: today,
            past: past,
            result: search_result,
            temp: temp,
        }
    }

    searchHistory() {
        const val1 = document.getElementById("date1").value;
        const val2 = document.getElementById("date2").value;
        let search_result = [];
        for (let t in this.state.temp) {
            if(this.state.temp[t].date >= val1 && this.state.temp[t].date <= val2) {
                search_result.push(this.state.temp[t]);
            }
        }
        this.setState({ result: search_result });
    }

    componentDidMount() {
        const date1 = document.getElementById("date1");
        const date2 = document.getElementById("date2");
        date1.value = this.state.past;
        date2.value = this.state.today;
        this.searchHistory();
    }

    render() {
        let jsx;
        if(this.state.result.length === 0) {
            jsx =
                <>
                    <div className="result__nodata">검색 결과가 없습니다.</div>
                </>;
        } else {
            jsx = <PointResult result={this.state.result} />;
        }
        return (
            <>
                <div className="modal__conversion hidden" id="modal__conversion" onClick={() => {

                }}>
                    <div className="modal__modal" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div className="modal__header">
                            보유 정보
                        </div>
                        <div className="modal__close__btn" id="modal__close__btn" onClick={() =>{
                            const elt = document.getElementById("modal__conversion");
                            elt.classList.add("hidden");
                        }}><img src={close}/></div>
                        <div className="modal__convert__info__container">
                            <div className="modal__convert__info divide">좋아요<p>(개)</p></div>
                            <div className="modal__convert__info divide">포켓머니<p>(PM)</p></div>
                            <div className="modal__convert__info divide">3500</div>
                            <div className="modal__convert__info divide">2500</div>
                        </div>
                        <div className="modal__header">
                            포인트 전환
                        </div>
                        <div className="modal__detail__container">
                            <div className="orderinfo__choices">
                                <input id="pg" name="A" type="radio" value="100" defaultChecked={true}/><label htmlFor="pg"><span> 100 개 </span><span className="red"> ➜ </span> <span> 100 PM</span></label>
                                <input id="easy" name="A" type="radio" value="500" /><label htmlFor="easy"><span> 500 개 </span><span className="red"> ➜ </span> <span> 600 PM</span></label>
                                <input id="transfer" name="A" type="radio" value="1000" /><label htmlFor="transfer"><span> 1000 개 </span><span className="red"> ➜ </span> <span> 1300 PM</span></label>
                                <input id="withoutBankbook" name="A" type="radio" value="2000" /><label htmlFor="withoutBankbook"><span> 2000 개 </span><span className="red"> ➜ </span> <span> 3000 PM</span></label>
                                <input id="phone" name="A" type="radio" value="5000" /><label htmlFor="phone"><span> 5000 개 </span><span className="red"> ➜ </span> <span> 8500 PM</span></label>
                            </div>
                        </div>
                        <button className="modal__convert__button">전환하기</button>
                    </div>
                </div>


                <HeaderBiz url='/biz/mypage' />
                <div className="pointhistory">
                    <div className="pointhistory__info__container">
                        <div className="pointhistory__info__title">포인트 정보</div>
                        <div className="pointhistory__point__container">
                            <div className="pointhistory__data">
                                <div className="pointhistory__title">현재까지 총 좋아요 수</div>
                                <div className="pointhistory__point">96054</div>
                                <div className="pointhistory__unit"> 개</div>
                            </div>
                            <div className="pointhistory__data">
                                <div className="pointhistory__title">포인트 전환한 좋아요 수</div>
                                <div className="pointhistory__point">95000</div>
                                <div className="pointhistory__unit"> 개</div>
                            </div>
                            <div className="pointhistory__data">
                                <div className="pointhistory__title">현재까지 전환한 총 포인트</div>
                                <div className="pointhistory__point">96000</div>
                                <div className="pointhistory__unit">PM</div>
                            </div>
                            <div className="pointhistory__data">
                                <div className="pointhistory__title">현재까지 사용한 총 포인트</div>
                                <div className="pointhistory__point red">94500</div>
                                <div className="pointhistory__unit">PM</div>
                            </div>
                            <div className="pointhistory__data">
                                <div className="pointhistory__title">잔여 포인트</div>
                                <div className="pointhistory__point red2">91500</div>
                                <div className="pointhistory__unit">PM</div>
                            </div>
                            <button className="pointhistory__conversion" onClick={() => {
                                const elt = document.getElementById("modal__conversion");
                                elt.classList.remove("hidden");
                            }}>포인트 전환</button>
                        </div>

                    </div>

                    <div className="pointhistory__search__container">
                        <div className="search__title">포인트 이력</div>
                        <div className="search__input">
                            <span><img src={calendar}/></span>
                            <DatePicker className="dd" id="date1" value="2020-01-01"
                                        locale={ko}	// 언어설정 기본값은 영어
                                        dateFormat="yyyy-MM-dd"	// 날짜 형식 설정
                            ></DatePicker>
                            {/*<input type="text" id="date1"/>*/}
                            &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
                            <span><img src={calendar}/></span>

                            <DatePicker className="dd" id="date2" value="2020-10-10"
                                        locale={ko}	// 언어설정 기본값은 영어
                                        dateFormat="yyyy-MM-dd"	// 날짜 형식 설정
                            ></DatePicker>
                            <input type="image" src={search} value="조회" id="search" onClick={this.searchHistory}/>
                        </div>
                    </div>
                    <div className="pointhistory__result__container">
                        <div className="pointhistory__search">
                            <div className="pointhistory__result">
                                {jsx}
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default PointHistory;
