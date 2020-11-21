import React from 'react';
import {Link} from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import '../Components/scss/orderStatus.scss';
import btnCal from '../assets/order_status/btn_date.png'
import axios from "axios";
import cookie from "react-cookies";
import storage from "../storage";

class OrderStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: null,
            saleHeader: [],
            saleDetail: [],
        }
    };

    componentDidMount(){
        let cookie_token = cookie.load("access_token");
        let user_email = storage.get(cookie_token);

        axios.get('http://localhost:8000/api/users_user/')
            .then((res) => {
                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;
                axios.get('http://localhost:8000/api/trades_saleHeader/')
                .then((res) => {
                    let saleHeader = res.data.filter((elt) => {
                        if(elt.user === this.state.userId){
                            return true;
                        }
                    });
                    axios.get("http://localhost:8000/api/trades_saleDetail/")
                    .then((res) => {
                        let saleDetail = res.data.filter((elt) => {
                            if(elt.user === this.state.userId){
                                return true;
                            }
                        });
                        this.setState({
                            userId:userId,
                            saleHeader: saleHeader,
                            saleDetail: saleDetail,
                        });
                    });
                });
            });
    }

    render() {
        console.log(this.state);
        return (
            <>
                <HeaderBack url='/mypage'/>
                <div className="orderstatus">
                    <div className="orderstatus__card">
                        <Link to="/order/status/1">
                            <div className="card__info">
                                <div className="card__title">서초강산 Story</div>
                                <div className="card__title__info">
                                    <div className="order__date">
                                        <img className="cal" src={btnCal}/>
                                        2020.10.27
                                    </div>
                                    <button className="card__delete" onClick={(e) => {
                                        e.preventDefault();
                                    }}>X
                                    </button>
                                </div>
                            </div>
                            <div className="card__info__detail">
                                <div className="order__list">
                                    <div className="line__title">주문목록:</div>
                                    <div className="line__detail">아이스 아메리카노 1잔</div>
                                </div>
                                <div className="order__number">
                                    <div className="line__title">주문번호:</div>
                                    <div className="line__detail">Receipt no</div>
                                </div>

                                <div className="order__status">
                                    <div className="line__title">상태:</div>
                                    <div className="line__detail">제조중</div>
                                </div>
                                <div className="order__time">
                                    <div className="line__title">주문완료시간:</div>
                                    <div className="line__detail">hh:mm</div>
                                </div>
                                <div className="pickup">
                                    <button id="pickup" onClick={(e) => {
                                        e.preventDefault();
                                    }}>픽업완료
                                    </button>
                                </div>
                                <div className="writereview">
                                    div.
                                    <button id="review" onClick={(e) => {
                                        e.preventDefault();
                                    }}>리뷰작성</button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="orderstatus__card">
                        <div className="card__info">
                            <div className="card__title">조폭닭꼬치</div>
                            <div className="card__title__info">
                                <div className="order__date">
                                    <img className="cal" src={btnCal}/>
                                    2020. 10. 27
                                </div>
                                <button className="card__delete" onClick={(e) => {
                                    e.preventDefault();
                                }}>X
                                </button>
                            </div>
                        </div>
                        <div className="card__info__detail cooked">
                            <div className="order__list">
                                <div className="line__title">주문목록</div>
                                <div className="line__detail">핵닭꼬치 2개, 조폭닭꼬치 1개</div>
                            </div>
                            <div className="order__number">
                                <div className="line__title">주문번호</div>
                                <div className="line__detail">202456</div>
                            </div>

                            <div className="order__status">
                                <div className="line__title">주문상태</div>
                                <div className="line__detail">조리완료</div>
                            </div>
                            <div className="order__time">
                                <div className="line__title">완료시간</div>
                                <div className="line__detail">19:25</div>
                            </div>
                        </div>
                        <div className="pickup active">
                            <div className="pickup__message">
                                주문한 음식을 수령하셨다면 픽업완료를 눌러주세요 ▶
                            </div>
                            <button className="pickup__btn" onClick={(e) => {
                                e.preventDefault();
                            }}>픽업완료
                            </button>
                        </div>
                        <div className="writereview">
                            <div className="review__message">
                                리뷰를 등록하면 다양한 혜택을 누리실 수 있습니다 ▶
                            </div>
                            <button className="review__btn" onClick={(e) => {
                                e.preventDefault();
                            }}>리뷰작성
                            </button>
                        </div>
                    </div>
                    <div className="orderstatus__card">
                        <div className="card__info">
                            <div className="card__title">조폭닭꼬치</div>
                            <div className="card__title__info">
                                <div className="order__date">
                                    <img className="cal" src={btnCal}/>
                                    2020. 10. 27
                                </div>
                                <button className="card__delete" onClick={(e) => {
                                    e.preventDefault();
                                }}>X
                                </button>
                            </div>
                        </div>
                        <div className="card__info__detail cooked">
                            <div className="order__list">
                                <div className="line__title">주문목록</div>
                                <div className="line__detail">핵닭꼬치 2개, 조폭닭꼬치 1개</div>
                            </div>
                            <div className="order__number">
                                <div className="line__title">주문번호</div>
                                <div className="line__detail">202456</div>
                            </div>

                            <div className="order__status">
                                <div className="line__title">주문상태</div>
                                <div className="line__detail">조리완료</div>
                            </div>
                            <div className="order__time">
                                <div className="line__title">완료시간</div>
                                <div className="line__detail">19:25</div>
                            </div>
                        </div>
                        <div className="pickup">
                            <div className="pickup__message">
                                주문한 음식을 수령하셨다면 픽업완료를 눌러주세요 ▶
                            </div>
                            <button className="pickup__btn" onClick={(e) => {
                                e.preventDefault();
                            }}>픽업완료
                            </button>
                        </div>
                        <div className="writereview active">
                            <div className="review__message">
                                리뷰를 등록하면 다양한 혜택을 누리실 수 있습니다 ▶
                            </div>
                            <button className="review__btn" onClick={(e) => {
                                e.preventDefault();
                            }}>리뷰작성
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default OrderStatus;
