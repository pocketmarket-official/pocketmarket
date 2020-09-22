import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import QuestionResult from '../Components/js/QuestionResult';


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
        let past = yyyy + '-' + mm + '-' + dd;

        let temp = [
                {
                    id: 1,
                    date: "2020-08-01",
                    writer: "마진형",
                    question: "결제 오류가 있어요",
                    answer: ['저도요', '문의주셔서 감사합니다'],
                },
                {
                    id: 2,
                    date: "2020-08-26",
                    writer: "마진형",
                    question: "점주 등록은 어떻게 하나요?",
                    answer: ['전화주세요'],
                },
                {
                    id: 3,
                    date: "2020-09-17",
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
                    <div>검색 결과가 없습니다.</div>
                </>;
        } else {
            jsx = <QuestionResult result={this.state.result} />;
        }
        return (
            <>
                <HeaderBack url='/mypage' />
                <div className="question">
                    <div className="question__search">
                        <input type="date" id="date1" /> ~ <input type="date" id="date2" />
                        <input type="submit" value="조회" onClick={this.searchHistory} />
                    </div>
                    <div className="question__result">
                        {jsx}
                    </div>
                    <div className="question__add"><Link to="/mypage/questions/write">추가</Link></div>
                </div>
            </>
        );
    }
}

export default QuestionsHistory;
