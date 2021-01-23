import React from 'react';
import HeaderBiz from '../Components/js/HeaderBiz';
import OrderResult from '../Components/js/OrderResult';
import calendar from "../assets/point_history/ico_date.png";
import DatePicker, {registerLocale} from "react-datepicker";
import search from "../assets/point_history/ico_search.png";
import { cookieCheck_rejectGuest } from "../Components/js/CookieCheck.js"
import ko from "date-fns/locale/ko";
import axios from "axios";

registerLocale('ko', ko);

class OrderHistory extends React.Component {
    constructor(props) {
        super(props);
        this.searchHistory = this.searchHistory.bind(this);
        this.strToDate = this.strToDate.bind(this);

        let today = new Date();
        today.setHours(0,0,0,0);
        let past = new Date();
        past.setHours(0,0,0,0);
        past.setMonth(past.getMonth() - 1);

        this.state = {
            today: today,
            past: past,
            startDate: past,
            endDate: today,
            result: [],
            saleHeader: [],
            saleDetail: [],
            matched: [],
            storeId: '',
            loading: true,
            selected: {},
        }
    }

    strToDate(str_date) {
        let datestr = "";
        let _str = String(str_date);
        datestr = _str.slice(0, 4) + '/' + _str.slice(4, 6) + '/' + _str.slice(6, 8);
        return datestr;
    }

    searchHistory() {
        let result = [];
        for (let t in this.state.matched) {
            let saleDt = new Date(this.strToDate(this.state.matched[t].saleDt));
            if(this.state.startDate <= saleDt && saleDt <= this.state.endDate) {
                result.push(this.state.matched[t]);
            }
        }
        result = result.sort(function(a, b) {
            return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
        });
        this.setState({ result });
    }


    componentDidMount() {
        let user_email = cookieCheck_rejectGuest();

        axios.get('/api/users_user/')
        .then((res1) => {
            axios.get('/api/trades_saleHeader/')
            .then((res2) => {
                axios.get("/api/trades_saleDetail/")
                .then((res3) => {
                    axios.get("/api/stores_store/")
                    .then((res4)=>{
                        let userId = res1.data.find((elt) => {
                            if (elt.email === user_email) {
                                return true;
                            }
                        }).id;

                        let matched = [];
                        let saleDetail = res3.data;
                        // sale dt 기준으로 정렬되어 있는 데이터
                        res2.data.forEach((elt) => {
                            if(elt.user === userId){
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

                                let stores = res4.data;
                                for (let index in stores){
                                    if(stores[index].storeCd === elt.storeCd){
                                        elt["storeName"] = stores[index].storeName;
                                        elt["storeId"] = stores[index].id;
                                        elt["tel"] = stores[index].tel;
                                        elt["ceo"] = stores[index].storeCeo;
                                    }
                                }
                                matched.push(elt);
                            }
                        });

                        let result = matched.filter((elt) => {
                            let saleDt = new Date(this.strToDate(elt.saleDt));
                            if (this.state.startDate <= saleDt && saleDt <= this.state.endDate) {
                                return true;
                            }
                        });

                        result = result.sort(function(a, b) {
                            return a.id > b.id ? -1 : a.id < b.id ? 1 : 0;
                        });


                        this.setState({
                            userId: userId,
                            result: result,
                            matched: matched,
                            loading: false,
                        })
                    });
                });
            });
        });
    }

    render() {
        let jsx;
        let isLoading = this.state.loading;
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
                <HeaderBiz url='/mypage' />
                <div className="orderhistory">
                    <div className="orderhistory__search__container">
                        <div className="search__input">
                            <span><img src={calendar}/></span>
                            <DatePicker className="dd" id="date1"
                                        locale="ko"	// 언어설정 기본값은 영어
                                        dateFormat="yyyy-MM-dd"	// 날짜 형식 설정
                                        value={this.state.past}
                                        selected={this.state.startDate}
                                        onChange={(date) => {
                                            let elt = document.getElementById("date1");
                                            elt.value = date;
                                            this.setState({ startDate: date });
                                        }}
                            ></DatePicker>
                            <div className="tilda">~</div>
                            <span><img src={calendar}/></span>
                            <DatePicker className="dd" id="date2"
                                        locale="ko"		// 언어설정 기본값은 영어
                                        dateFormat="yyyy-MM-dd"	// 날짜 형식 설정
                                        value={this.state.today}
                                        selected={this.state.endDate}
                                        onChange={(date) => {
                                            let elt = document.getElementById("date2");
                                            elt.value = date;
                                            this.setState({ endDate: date });
                                        }}
                            ></DatePicker>
                            <input type="image" src={search} alt="search" value="조회" id="search" onClick={this.searchHistory}/>
                        </div>
                    </div>

                    <div className="orderhistory__result__container">
                        {
                            isLoading === false ?
                            jsx
                            :
                            <div className="loading">Loading...</div>
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default OrderHistory;
