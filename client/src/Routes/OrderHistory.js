import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import OrderResult from '../Components/js/OrderResult';


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
        if(month == 0) {
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
                    username: '노민철',
                    date: '2020-08-01',
                    place: '스타벅스',
                    order: [['아메리카노', 4100, 2], ['아이스 라떼', 4900, 1]],
                },
                {
                    id: 2,
                    username: '노민철',
                    date: '2020-08-27',
                    place: '강남핫도그',
                    order: [['아메리카노', 4100, 1], ['티라미수', 5900, 1]],
                },
                {
                    id: 3,
                    username: '노민철',
                    date: '2020-09-03',
                    place: '조폭떡볶이',
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
        if(this.state.result.length == 0) {
            jsx =
                <>
                    <div>검색 결과가 없습니다.</div>
                </>;
        } else {
            jsx = <OrderResult result={this.state.result} />;
        }
        return (
            <>
                <HeaderBack url='/mypage' />
                <div className="orderhistory">
                    <div className="orderhistory__search">
                        <input type="date" id="date1" /> ~ <input type="date" id="date2" />
                        <input type="submit" value="조회" onClick={this.searchHistory} />
                    </div>
                    <div className="orderhistory__result">
                        {jsx}
                    </div>
                </div>
            </>
        );
    }
}

export default OrderHistory;
