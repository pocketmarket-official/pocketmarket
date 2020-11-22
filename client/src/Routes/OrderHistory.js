import React from 'react';
import HeaderBiz from '../Components/js/HeaderBiz';
import OrderResult from '../Components/js/OrderResult';

import calendar from "../assets/point_history/ico_date.png";
import DatePicker from "react-datepicker";
import search from "../assets/point_history/ico_search.png";
import close from "../assets/order_status_pop/btn_close.png";
import bill_icon from "../assets/order_status/btn_date.png";
import bill from "../assets/order_history_apprv/img_receipt.jpg";
import cookie from "react-cookies";
import storage from "../storage";
import axios from "axios";

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
        if (month === 0) {
            mm = '12';
            yyyy = today.getFullYear() - 1;
        } else {
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
            if (temp[t].date >= past && temp[t].date <= today) {
                search_result.push(temp[t]);
            }
        }

        this.state = {
            today: today,
            past: past,
            result: search_result,
            temp: temp,
            saleHeader: [],
            saleDetail: [],
            matched: [],
        }
    }

    searchHistory() {
        const val1 = document.getElementById("date1").value;
        const val2 = document.getElementById("date2").value;
        let search_result = [];
        for (let t in this.state.temp) {
            if (this.state.temp[t].date >= val1 && this.state.temp[t].date <= val2) {
                search_result.push(this.state.temp[t]);
            }
        }
        this.setState({result: search_result});
    }

    componentDidMount() {
        const date1 = document.getElementById("date1");
        const date2 = document.getElementById("date2");
        date1.value = this.state.past;
        date2.value = this.state.today;
        this.searchHistory();

        let cookie_token = cookie.load("access_token");
        let user_email = storage.get(cookie_token);

        // axios.get('http://localhost:8000/api/users_user/') URL EXCHANGE
        axios.get('/api/users_user/')
            .then((res) => {
                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;
                // axios.get('http://localhost:8000/api/trades_saleHeader') URL EXCHANGE
                axios.get('/api/trades_saleHeader')
                    .then((res) => {
                        let saleHeader = res.data.filter((elt) => {
                            if (elt.user === userId) {
                                return true;
                            }
                        });
                        // axios.get('http://localhost:8000/api/trades_cardLog?ordering=saleDt,storeCd,billNo') URL EXCHANGE
                        axios.get('/api/trades_cardLog?ordering=saleDt,storeCd,billNo')
                            .then((res) => {
                                let cardLogs = res.data;
                                // axios.get("http://localhost:8000/api/trades_saleDetail?ordering=saleDt,storeCd,billNo") URL EXCHANGE
                                axios.get("/api/trades_saleDetail?ordering=saleDt,storeCd,billNo")
                                    .then((res) => {
                                        let matched = [];
                                        let saleDetail = res.data;
                                        // sale dt 기준으로 정렬되어 있는 데이터
                                        saleHeader.forEach((elt) => {
                                            let detail = [];
                                            let cardLog = [];
                                            for (let item in saleDetail) {
                                                if (saleDetail[item].saleDt === elt.saleDt) {
                                                    if (saleDetail[item].storeCd === elt.storeCd) {
                                                        if (saleDetail[item].billNo === elt.billNo) {
                                                            detail.push(saleDetail[item]);
                                                        }
                                                    }
                                                }
                                            }
                                            for (let item in cardLogs) {
                                                if (cardLogs[item].saleDt === elt.saleDt) {
                                                    if (cardLogs[item].storeCd === elt.storeCd) {
                                                        if (cardLogs[item].billNo === elt.billNo) {
                                                            cardLog.push(cardLogs[item]);
                                                        }
                                                    }
                                                }
                                            }
                                            elt["card"] = cardLog;
                                            elt["detail"] = detail;
                                            matched.push(elt);
                                        });
                                        this.setState({
                                            userId: userId,
                                            saleHeader: saleHeader,
                                            matched: matched,
                                        }, () => {
                                            // axios.get("http://localhost:8000/api/stores_store/") URL EXCHANGE
                                            axios.get("/api/stores_store/")
                                                .then((res) => {
                                                    this.state.matched.forEach((elt) => {
                                                        let storeName = res.data.find((dt) => {
                                                            if (elt.storeCd === dt.storeCd) {
                                                                return true;
                                                            }
                                                        }).storeName;
                                                        elt["storeName"] = storeName;
                                                    });
                                                    this.setState({
                                                        loading: false,
                                                    })
                                                });
                                        });
                                    });
                            });
                    });
            });
    }

/*    componentDidUpdate(){
        console.log(this.state.matched);
    }
*/
    render(){
        console.log(this.state);
        let jsx;
        if (this.state.result.length === 0) {
            jsx =
                <>
                    <div className="result__nodata">검색 결과가 없습니다.</div>
                </>;
        } else {
            jsx = <OrderResult result={this.state.result}/>;
        }
        return (
            <>
                <div className="modal__conversion hidden" id="modal__conversion" onClick={() => {}}>
                    <div className="modal__modal" onClick={(e) => {e.stopPropagation();}}>
                        <div className="modal__header__bill">
                            <img src={bill_icon}/>영수증
                        </div>
                        <div className="modal__bill">
                            <img src={bill}/>
                        </div>

                        <div className="modal__close__btn" id="modal__close__btn" onClick={() => {
                            const elt = document.getElementById("modal__conversion");
                            elt.classList.add("hidden");}
                        }>
                            <img src={close}/>
                        </div>
                    </div>
                </div>

                <HeaderBiz url='/mypage'/>
                <div className="orderhistory">
                    <div className="orderhistory__search__container">
                        <div className="search__input">
                            <span><img src={calendar}/></span>
                            <DatePicker className="dd" id="date1" value="2020.01.01"
                                        locale="ko"    // 언어설정 기본값은 영어
                                        dateFormat="yyyy-MM-dd"    // 날짜 형식 설정
                            ></DatePicker>
                            {/*<input type="text" id="date1"/>*/}
                            &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
                            <span><img src={calendar}/></span>

                            <DatePicker className="dd" id="date2" value="2020.10.10"
                                        locale="ko"        // 언어설정 기본값은 영어
                                        dateFormat="yyyy-MM-dd"    // 날짜 형식 설정
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
