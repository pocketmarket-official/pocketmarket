import React from 'react';
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
            result: [],
            startDate: past,
            endDate: today,
            userId: '',
            questions: [],
            loading: true,
        }
    }

    componentDidMount() {
        let user_email = cookieCheck_rejectGuest();

        axios.get("api/users_user/")
            .then((res) => {
                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;

                axios.get("/api/users_question/")
                .then((res) => {
                    let questions = res.data.filter((elt) => {
                        let questionDate = new Date(this.strToDate(elt.questionDate));
                        if(elt.user === userId && this.state.startDate <= questionDate && questionDate <= this.state.endDate) {
                            return true;
                        }
                    });
                    questions = questions.sort(function(a, b) {
                        return a.insDt > b.insDt ? -1 : a.insDt < b.insDt ? 1 : 0;
                    });
                    this.setState({ 
                        userId: userId,
                        result: questions,
                        questions: res.data,
                        loading: false
                    });
                });
            }
        );
    }

    strToDate(str_date) {
        let datestr = "";
        let _str = String(str_date);
        datestr = _str.slice(0, 4) + '/' + _str.slice(4, 6) + '/' + _str.slice(6, 8);

        return datestr;
    }


    searchHistory() {
        let search_result = [];
        for (let t in this.state.questions) {
            if(this.state.startDate <= new Date(this.strToDate(this.state.questions[t].questionDate)) && new Date(this.strToDate(this.state.questions[t].questionDate)) <= this.state.endDate) {
                search_result.push(this.state.questions[t]);
            }
        }
        search_result = search_result.sort(function(a, b) {
            return a.insDt > b.insDt ? -1 : a.insDt < b.insDt ? 1 : 0;
        });

        this.setState({ result: search_result });
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
                            <input type="image" src={search} value="조회" id="search" onClick={() => this.searchHistory()}/>
                        </div>
                    </div>
                    <div className="question__result__container">
                        {
                            isLoading === false ?
                            jsx
                            :
                            <div className="loading">Loading...</div>
                        }
                    </div>
                    <div className="question__add"><Link to="/mypage/questions/write">문의하기</Link></div>
                </div>
            </>
        );
    }
}

export default QuestionsHistory;
