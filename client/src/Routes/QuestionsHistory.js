import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';
import QuestionResult from '../Components/js/QuestionResult';
import { cookieCheck_rejectGuest } from "../Components/js/CookieCheck.js"
import calendar from "../assets/point_history/ico_date.png";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import search from "../assets/point_history/ico_search.png";
import ko from "date-fns/locale/ko";
import axios from "axios";

registerLocale('ko', ko);


class QuestionsHistory extends React.Component {
    constructor(props) {
        console.log('==1');
        super(props);
        this.searchHistory = this.searchHistory.bind(this);
        this.getDateStr = this.getDateStr.bind(this);
        this.strToDate = this.strToDate.bind(this);

        let today = new Date();
        let past = new Date();
        past.setMonth(past.getMonth() - 1);
        console.log('==2');
        console.log(past);

        this.state = {
            result: [],
            startDate: past,
            endDate: today,
            userId: '',
            questions: []
        }
    }

    componentDidMount() {
        let user_email = cookieCheck_rejectGuest();
        console.log('==3');
        console.log(user_email);


        axios.get("api/users_user/")
            .then((res) => {
                console.log('==4');
                console.log(res);

                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;
                console.log('==5');
                console.log(userId);


                axios.get("/api/users_question/")
                .then((res) => {
                    console.log('==6');
                    console.log(res);

                    const questions = res.data.filter((elt) => {
                        let questionDate = new Date(this.strToDate(elt.questionDate));
                        console.log('==7');
                        console.log(questionDate);
                        if(elt.user === userId && this.state.startDate <= questionDate && questionDate <= this.state.endDate) {
                            return true;
                        }
                    });
                    console.log('==8');
                    console.log(questions);

                    this.setState({ userId: userId, result: questions, questions: res.data });
                });
            }
        );
    }

    strToDate(str_date) {
        console.log('==9');
        console.log(str_date);

        let datestr = "";
        let _str = String(str_date);
        datestr = _str.slice(0, 4) + '.' + _str.slice(4, 6) + '.' + _str.slice(6, 8);
        console.log('==10');
        console.log(datestr);

        return datestr;
    }

    getDateStr(date) {
        console.log('==11');
        console.log(date);

        let month = date.getMonth();
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(month + 1).padStart(2, '0');
        let yyyy = date.getFullYear();
        date = yyyy + '-' + mm + '-' + dd;
        console.log('==12');
        console.log(date);

        return date;
    }

    searchHistory() {
        const val1 = document.getElementById("date1").value;
        const val2 = document.getElementById("date2").value;
        console.log('==12');
        console.log(val1);
        console.log(val2);
        let search_result = [];
        for (let t in this.state.questions) {
            if(this.state.startDate <= new Date(this.strToDate(this.state.questions[t].questionDate)) && new Date(this.strToDate(this.state.questions[t].questionDate)) <= this.state.endDate) {
                search_result.push(this.state.questions[t]);
            }
        }
        console.log('==13');
        console.log(search_result);
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
