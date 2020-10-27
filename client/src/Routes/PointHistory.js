import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import PointResult from '../Components/js/PointResult';


class PointHistory extends React.Component {
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
                date: '2020-07-25',
                point: [300, 200, 500],
            },
            {
                id: 2,
                date: '2020-08-25',
                point: [500, 200, 100],
            },
            {
                id: 3,
                date: '2020-09-25',
                point: [800, 100, 400],
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
            jsx = <PointResult result={this.state.result} />;
        }
        return (
            <>
                <div className="modal__conversion hidden" id="modal__conversion" onClick={() => {
                    const elt = document.getElementById("modal__conversion");
                    elt.classList.add("hidden");
                }}>
                    <div className="modal__modal" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div className="modal__header"></div>
                        <div className="modal__detail">100 likes -> 100 PM</div>
                        <button>전환</button>
                    </div>
                </div>
                <HeaderBack url='/mypage' />
                <div className="pointhistory">
                    <div className="pointhistory__container">
                        <div className="pointhistory__data">
                            <div className="pointhistory__title">현재까지 총 좋아요 수</div>
                            <div className="pointhistory__point">6054개</div>
                        </div>
                        <div className="pointhistory__data">
                            <div className="pointhistory__title">포인트 전환한 좋아요 수</div>
                            <div className="pointhistory__point">5000개</div>
                        </div>
                        <div className="pointhistory__data">
                            <div className="pointhistory__title">현재까지 전환한 총 포인트</div>
                            <div className="pointhistory__point">6000PM</div>
                        </div>
                        <div className="pointhistory__data">
                            <div className="pointhistory__title">현재까지 사용한 총 포인트</div>
                            <div className="pointhistory__point">4500PM</div>
                        </div>
                        <div className="pointhistory__data">
                            <div className="pointhistory__title">잔여 포인트</div>
                            <div className="pointhistory__point">1500PM</div>
                        </div>
                    </div>
                    <button className="pointhistory__conversion" onClick={() => {
                            const elt = document.getElementById("modal__conversion");
                            elt.classList.remove("hidden");
                        }}>포인트 전환</button>
                    <div className="pointhistory__search">
                        <div className="search__title">포인트 이력</div>
                        <div className="search__input">
                            <input type="date" id="date1" /> ~ <input type="date" id="date2" />
                            <input type="submit" value="조회" onClick={this.searchHistory} />
                        </div>
                        <div className="pointhistory__result">
                            {jsx}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PointHistory;
