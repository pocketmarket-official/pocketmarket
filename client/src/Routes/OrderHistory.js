import React from 'react';
import HeaderBiz from '../Components/js/HeaderBiz';
import OrderResult from '../Components/js/OrderResult';

import calendar from "../assets/point_history/ico_date.png";
import DatePicker, {registerLocale} from "react-datepicker";
import search from "../assets/point_history/ico_search.png";
import close from "../assets/order_status_pop/btn_close.png";
import bill_icon from "../assets/order_status/btn_date.png";
import bill from "../assets/order_history_apprv/img_receipt.jpg";
import {cookieCheck_rejectGuest} from "../Components/js/CookieCheck.js"
import ko from "date-fns/locale/ko";
import axios from "axios";

registerLocale('ko', ko);

class OrderHistory extends React.Component {
    constructor(props) {
        super(props);
        this.searchHistory = this.searchHistory.bind(this);
        this.getDateStr = this.getDateStr.bind(this);
        this.strToDate = this.strToDate.bind(this);

        let today = new Date();
        let past = new Date();
        past.setMonth(past.getMonth() - 1);

        let temp = [
                {
                    id: 1,
                    username: '노민철',
                    date: '2020.08.01',
                    place: '스타벅스',
                    review: "Y",
                    order: [['아메리카노', 4100, 2], ['아이스 라떼', 4900, 1]],

                },
                {
                    id: 2,
                    username: '노민철',
                    date: '2020.08.27',
                    place: '강남핫도그',
                    review: "Y",
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

        this.state = {
            startDate: past,
            endDate: today,
            saleHeader: [],
            saleDetail: [],
            matched: [],
            storeId: ''
        }
    }

    strToDate(str_date) {
        let datestr = "";
        let _str = String(str_date);
        datestr = _str.slice(0, 4) + '.' + _str.slice(4, 6) + '.' + _str.slice(6, 8);
        return datestr;
    }

    getDateStr(date) {
        let month = date.getMonth();
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(month + 1).padStart(2, '0');
        let yyyy = date.getFullYear();
        date = yyyy + '-' + mm + '-' + dd;
        return date;
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
        let user_email = cookieCheck_rejectGuest();

        axios.get('/api/users_user/')
        .then((res1) => {
            axios.get('/api/trades_saleHeader/')
            .then((res2) => {
                axios.get("/api/trades_saleDetail/")
                .then((res3) => {
                    let userId = res1.data.find((elt) => {
                        if (elt.email === user_email) {
                            return true;
                        }
                    }).id;

                    let saleHeader = res2.data.filter((elt) => {
                        let saleDt = new Date(this.strToDate(elt.saleDt));
                        if (elt.user === userId && this.state.startDate <= saleDt && saleDt <= this.state.endDate) {
                            return true;
                        }
                    });

                    let matched = [];
                    let saleDetail = res3.data;
                    // sale dt 기준으로 정렬되어 있는 데이터
                    saleHeader.forEach((elt) => {
                        let detail = [];
                        for (let index in saleDetail) {
                            if (saleDetail[index].saleDt === elt.saleDt) {
                                if (saleDetail[index].storeCd === elt.storeCd) {
                                    if (saleDetail[index].billNo === elt.billNo) {
                                        detail.push(saleDetail[index]);
                                    }
                                }
                            }
                        }
                        elt["detail"] = detail;
                        matched.push(elt);
                    });

                    this.setState({
                        userId: userId,
                        saleHeader: saleHeader,
                        matched: matched,
                    })
                });
            });
        });
    }

    render() {
        let jsx;
        if(this.state.matched.length === 0) {
            jsx =
                <>
                    <div className="result__nodata">검색 결과가 없습니다.</div>
                </>;
        } else {
            jsx = <OrderResult result={this.state.matched} />;
        }
        console.log(this.state);
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

                <HeaderBiz url='/mypage' />
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
                            <input type="image" src={search} alt="search" value="조회" id="search" onClick={this.searchHistory}/>
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
