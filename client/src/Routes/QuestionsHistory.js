import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';
import QuestionResult from '../Components/js/QuestionResult';

import '../Components/scss/QuestionsHistory.scss';
import calendar from "../assets/point_history/ico_date.png";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import search from "../assets/point_history/ico_search.png";

import ko from "date-fns/locale/ko";
registerLocale('ko', ko);


class QuestionsHistory extends React.Component {
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
            jsx = <QuestionResult result={this.state.result} />;
        }

        return (
            <>
                <HeaderBiz url='/mypage' />
                <div className="question">
                    <div className="pointhistory__search__container">
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
