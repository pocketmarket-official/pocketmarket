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
                <div className="modal__conversion hidden" id="modal__conversion" onClick={() => {

                }}>
                    <div className="modal__modal" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div className="modal__header__bill">
                            <img src={bill_icon}/>구매내역
                        </div>
                        <div className="modal__bill">
                            <div className="result__item">
                                <div>가게이름</div>
                                <div className="result__detail">
                                    <div className="result__phone">
                                        <div className="phone__phone">Tel:</div>
                                        <div>01012345678</div>
                                    </div>
                                </div>
                            </div>
                            <div className="result__item">
                                <div className="result__name">
                                    <div className="name__name">대표자:</div>
                                    <div>마진형</div>
                                </div>
                            </div>
                            <hr />
                            <div className="result__item">
                                <div>판매일자</div>
                                <div className="result__detail">
                                    <div className="result__posno">
                                        <div className="posno__posno">POSNO:</div>
                                        <div>01</div>
                                    </div>
                                </div>
                            </div>
                            <div className="result__item">
                                <div className="result__receipt">
                                    <div className="receipt__receipt">영수증번호:</div>
                                    <div>001</div>
                                </div>
                            </div>
                            <hr />
                            <div className="result__items">
                                <div className="item__list">
                                    <div>품목명</div>
                                    <div>단가</div>
                                    <div>수량</div>
                                    <div>금액</div>
                                </div>
                            {/* 여기서 for문 돌려가며 데이터 뽑으면 됨 */}
                                <div className="item__list">
                                    <div>아이스 망고</div>
                                    <div>2500원</div>
                                    <div>2</div>
                                    <div>5000원</div>
                                </div>
                                <div className="item__list">
                                    <div>아이스 망고</div>
                                    <div>2500원</div>
                                    <div>2</div>
                                    <div>5000원</div>
                                </div>
                                <div className="item__list">
                                    <div>아이스 망고</div>
                                    <div>2500원</div>
                                    <div>2</div>
                                    <div>5000원</div>
                                </div>
                            </div>
                            <hr />
                            <div className="result__item">
                                <div>카드사</div>
                                <div>신한</div>
                            </div>
                            <div className="result__item">
                                <div>카드번호</div>
                                <div>52728961****4089</div>
                            </div>
                            <div className="result__item">
                                <div>승인번호</div>
                                <div>1609486156428</div>
                            </div>
                            <div className="result__item">
                                <div>결제금액</div>
                                <div>5500원</div>
                            </div>
                            <div className="result__item">
                                <div>승인번호</div>
                                <div>1609486156428</div>
                            </div>
                            <hr />
                            <div className="result__item last">
                                <div>합계</div>
                                <div>5500원</div>
                            </div>
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
