
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';
import QuestionResult from '../Components/js/QuestionResult';
import {cookieCheck_rejectGuest} from "../Components/js/CookieCheck.js"

import calendar from "../assets/point_history/ico_date.png";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import search from "../assets/point_history/ico_search.png";

import ko from "date-fns/locale/ko";
import axios from "axios";
registerLocale('ko', ko);


class QuestionsHistory extends React.Component {
    constructor(props) {
        super(props);
        this.searchHistory = this.searchHistory.bind(this);
        this.getDateStr = this.getDateStr.bind(this);

        let today = new Date();
        let past = new Date();
        past.setMonth(past.getMonth() - 1);

        let temp = [
                {
                    id: 1,
                    date: "2020.08.01",
                    writer: "마진형",
                    question: "좋아요 포켓머니로 전환을 하였는데 300PM이 사라졌습니다. \n 포인트 돌려주세요~ \n 돌려주세요~ 돌려주세요~ 돌려주세요~ ",
                    answer: ['저도요', '문의주셔서 감사합니다'],
                },
                {
                    id: 2,
                    date: "2020.08.26",
                    writer: "마진형",
                    question: "점주 등록은 어떻게 하나요?",
                    answer: ['전화주세요'],
                },
                {
                    id: 3,
                    date: "2020.09.17",
                    writer: "마진형",
                    question: "버그가 있어요",
                    answer: ['감사합니다'],
                },
        ];

        let search_result = [];
        for (let t in temp) {
            if(new Date(temp[t].date).getTime() >= past.getTime() && new Date(temp[t].date).getTime() <= today.getTime()) {
                search_result.push(temp[t]);
            }
        }

        this.state = {
            result: search_result,
            startDate: past,
            endDate: today,
            userId: '',
            questions: []
        }
    }

    componentDidMount() {
        let user_email = cookieCheck_rejectGuest();

        axios.get("api/users_user/")
            .then((res)=>{
                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;

                axios.get("/api/users_question/")
                .then((res) => {
                    const questions = res.data.filter((elt) => {
                        console.log('==1');
                        console.log(this.state.startDate);
                        console.log(elt.insDt);
                        console.log(this.state.endDate);
                        console.log('==1');
                        if(elt.user === userId && this.state.startDate <= elt.insDt && elt.insDt <= this.state.endDate){
                            return true;
                        }
                    });

                    this.setState({userId: userId, questions:questions})
                });
            });

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
            if(new Date(this.state.temp[t].date).getTime() >= new Date(val1).getTime() && new Date(this.state.temp[t].date).getTime() <= new Date(val2).getTime()) {
                search_result.push(this.state.temp[t]);
            }
        }
        this.setState({ result: search_result });
    }

    render() {
        let jsx;
        if(this.state.result.length === 0) {
            jsx =
                <>
                    <div className="result__nodata">검색 결과가 없습니다.</div>
                </>;
        } else {
            jsx = <QuestionResult result={this.state.result} />;
        }

        return (
            <>
                <HeaderBiz url='/mypage' />
                <div className="question">
                    <div className="pointhistory__search__container">
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
                            ~
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
                            <input type="image" src={search} value="조회" id="search" onClick={() => this.searchHistory()}/>
                        </div>
                    </div>
                    <div className="question__result__container">
                        {jsx}
                    </div>
                    <div className="question__add"><Link to="/mypage/questions/write">문의하기</Link></div>
                </div>
            </>
        );
    }
}

export default QuestionsHistory;
