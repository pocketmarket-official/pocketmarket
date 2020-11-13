import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import OrderResult from '../Components/js/OrderResult';

import '../Components/scss/OrderHistory.scss';
import calendar from "../assets/point_history/ico_date.png";
import DatePicker from "react-datepicker";
import search from "../assets/point_history/ico_search.png";
import close from "../assets/order_status_pop/btn_close.png";
import bill_icon from "../assets/order_status/btn_date.png";
import bill from "../assets/order_history_apprv/img_receipt.jpg";
import arw from "../assets/point_history_conversion/ico_arw.png";

class OrderHistory extends React.Component {
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
        let past = yyyy + '.' + mm + '.' + dd;

        let temp = [
                {
                    id: 1,
                    username: '노민철',
                    date: '2020.08.01',
                    place: '스타벅스',
                    review: "N",
                    order: [['아메리카노', 4100, 2], ['아이스 라떼', 4900, 1]],

                },
                {
                    id: 2,
                    username: '노민철',
                    date: '2020.08.27',
                    place: '강남핫도그',
                    review: "N",
                    order: [['아메리카노', 4100, 1], ['티라미수', 5900, 1]],
                },
                {
                    id: 3,
                    username: '노민철',
                    date: '2020.09.03',
                    place: '조폭떡볶이',
                    review: "Y",
                    order: [['아이스 라떼', 4900, 1]],
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
            jsx = <OrderResult result={this.state.result} />;
        }
        return (
            <>
                <div className="modal__conversion hidden" id="modal__conversion" onClick={() => {

                }}>
                    <div className="modal__modal" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div className="modal__header__bill">
                            <img src={bill_icon}/>영수증
                        </div>
                        <div className="modal__bill">
                            <img src={bill}/>
                        </div>

                        <div className="modal__close__btn" id="modal__close__btn" onClick={() =>{
                            const elt = document.getElementById("modal__conversion");
                            elt.classList.add("hidden");
                        }}><img src={close}/></div>

                    </div>
                </div>

                <HeaderBack url='/mypage' />
                <div className="orderhistory">
                    <div className="orderhistory__search__container">
                        <div className="search__input">
                            <span><img src={calendar}/></span>
                            <DatePicker className="dd" id="date1" value="2020.01.01"
                                        locale="ko"	// 언어설정 기본값은 영어
                                        dateFormat="yyyy-MM-dd"	// 날짜 형식 설정
                            ></DatePicker>
                            {/*<input type="text" id="date1"/>*/}
                            &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
                            <span><img src={calendar}/></span>

                            <DatePicker className="dd" id="date2" value="2020.10.10"
                                        locale="ko"		// 언어설정 기본값은 영어
                                        dateFormat="yyyy-MM-dd"	// 날짜 형식 설정
                            ></DatePicker>
                            <input type="image" src={search} value="조회" id="search" onClick={this.searchHistory}/>
                        </div>
                    </div>

                    <div className="orderhistory__result__container">
                        {jsx}
                    </div>
                </div>
            </>
        );
    }
}

export default OrderHistory;
