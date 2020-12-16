import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
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
            matched: [],
            loading: true,
            storeId: null,
        }
    };

    componentDidMount(){
        let cookie_token = cookie.load("access_token");
        let user_email = storage.get(cookie_token);
        if(!user_email) window.location.href = '/login/';

        // axios.get('http://localhost:8000/api/users_user/') //URL EXCHANGE LOCAL
        // axios.get('/api/users_user/') // URL EXCHANGE RELATIVE
        axios.get('http://13.124.90.138:8000/api/users_user/') //URL EXCHANGE SERVER
            .then((res) => {
                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;
                // axios.get('http://localhost:8000/api/trades_saleHeader/') //URL EXCHANGE LOCAL
                // axios.get('/api/trades_saleHeader/') //URL EXCHANGE RELATIVE
                axios.get('http://13.124.90.138:8000/api/trades_saleHeader/') //URL EXCHANGE SERVER
                .then((res) => {
                    let saleHeader = res.data.filter((elt) => {
                        if(elt.user === userId){
                            return true;
                        }
                    });
                    // axios.get("http://localhost:8000/api/trades_saleDetail?ordering=saleDt,storeCd,billNo") //URL EXCHANGE LOCAL
                    // axios.get("/api/trades_saleDetail?ordering=saleDt,storeCd,billNo") //URL EXCHANGE RELATIVE
                    // axios.get("http://13.124.90.138:8000/api/trades_saleDetail?ordering=saleDt,storeCd,billNo") //URL EXCHANGE SERVER
                    axios.get("http://13.124.90.138:8000/api/trades_saleDetail/") //URL EXCHANGE SERVER
                    .then((res) => {
                        let matched = [];
                        let saleDetail = res.data;
                        // sale dt 기준으로 정렬되어 있는 데이터
                        saleHeader.forEach((elt) => {
                            let detail = [];
                            for(let index in saleDetail) {
                                if(saleDetail[index].saleDt === elt.saleDt) {
                                    if(saleDetail[index].storeCd === elt.storeCd) {
                                        if(saleDetail[index].billNo === elt.billNo) {
                                            detail.push(saleDetail[index]);
                                        }
                                    }
                                }
                            }
                            if(detail !== [] && elt.orderStatus == '6' && elt.orderStatus !== '7') {
                                elt["detail"] = detail;
                                matched.push(elt);
                            }
                        });
                        this.setState({
                            userId:userId,
                            saleHeader: saleHeader,
                            matched: matched,
                        }, () => {
                            // axios.get("http://localhost:8000/api/stores_store/") //URL EXCHANGE LOCAL
                            // axios.get("/api/stores_store/") // URL EXCHANGE RELATIVE
                            axios.get("http://13.124.90.138:8000/api/stores_store/") //URL EXCHANGE SERVER
                            .then((res) => {
                                this.state.matched.forEach((elt) => {
                                    let store = res.data.find((dt) => {
                                        if(elt.storeCd === dt.storeCd) {
                                            return true;
                                        }
                                    });
                                    let storeName = store.storeName;
                                    let storeId = store.id;
                                    elt["storeName"] = storeName;
                                    elt["storeId"] = storeId;
                                });
                                this.setState({
                                    loading: false,
                                })
                            });
                        });
                    });
                });
            });
    }

    render() {
        return (
            <>
                <HeaderBack url='/mypage'/>
                <div className="orderstatus">
                {
                    this.state.loading === true?
                    <div>loading...</div>
                    :
                    this.state.matched.map((elt) => {
                        let status;
                        let deleteButton;
                        let button;
                        let time = "";
                        let text = "";
                        if(elt.orderStatus === '1') {
                            status = "주문중";
                            deleteButton = (<></>);
                            button = (
                                <>
                                    <div className="pickup active">
                                        <div className="pickup__message">
                                            주문한 음식을 수령하셨다면 픽업완료를 눌러주세요 ▶
                                        </div>
                                        <button className="pickup__btn" onClick={(e) => {
                                            e.preventDefault();
                                        }}>주문중
                                        </button>
                                    </div>
                                </>
                            );
                        } else if(elt.orderStatus === '2') {
                            status = "조리중";
                            deleteButton = (<></>);
                            button = (
                                <>
                                </>
                            );
                        } else if(elt.orderStatus === '3') {
                            status = "조리완료";
                            time = elt.completeTime;
                            time = time.substring(0, 2) + ':' + time.substring(2, 4) + ':' + time.substring(4, 6);
                            text = "완료시간";
                            let d = new Date();
                            let pickup_time = d.getHours().toString().padStart(2, "0") + d.getMinutes().toString().padStart(2, "0") + d.getSeconds().toString().padStart(2, "0");
                            deleteButton = (<></>);
                            button = (
                                <>
                                    <div className="pickup active">
                                        <div className="pickup__message">
                                            주문한 음식을 수령하셨다면 픽업완료를 눌러주세요 ▶
                                        </div>
                                        <button className="pickup__btn" onClick={(e) => {
                                            e.preventDefault();
                                            let id = elt.id;
                                            // axios.put(`http://localhost:8000/api/trades_saleHeader/${id}/`, { //URL EXCHANGE LOCAL
                                            // axios.put(`/api/trades_saleHeader/${id}/`, { //URL EXCHANGE RELATIVE
                                            axios.put(`http://13.124.90.138:8000/api/trades_saleHeader/${id}/`, { //URL EXCHANGE SERVER
                                                orderStatus: 4,
                                                pickupTime: pickup_time,
                                            })
                                            .then(() => {
                                                window.location.reload();
                                            })
                                        }}>픽업완료
                                        </button>
                                    </div>
                                </>
                            );
                        } else if(elt.orderStatus === '4' || elt.orderStatus === '5') {
                            status = "픽업완료";
                            time = elt.pickupTime;
                            time = time.substring(0, 2) + ':' + time.substring(2, 4) + ':' + time.substring(4, 6);
                            text = "픽업시간";
                            deleteButton = (<>
                                <button className="card__delete" onClick={(e) => {
                                    e.preventDefault();
                                    let id = elt.id;
                                    // axios.put(`http://localhost:8000/api/trades_saleHeader/${id}/`, { //URL EXCHANGE LOCAL
                                    // axios.put(`/api/trades_saleHeader/${id}/`, { //URL EXCHANGE RELATIVE
                                    axios.put(`http://13.124.90.138:8000/api/trades_saleHeader/${id}/`, { //URL EXCHANGE SERVER
                                        orderStatus: 7,
                                    })
                                        .then((res) => {
                                            window.location.reload();
                                        });
                                }}>X
                                </button>
                                </>);
                            button = (
                                <>
                                    <div className="pickup active">
                                        <div className="pickup__message">
                                            리뷰를 등록하면 다양한 혜택을 누리실 수 있습니다 ▶
                                        </div>
                                        <Link to={{pathname: '/order/review', state: {
                                            userId: this.state.userId,
                                            saleDt: elt.saleDt,
                                            storeId: elt.storeId,
                                            billNo: elt.billNo,
                                                id: elt.id,
                                        }}}><button className="pickup__btn">리뷰작성</button></Link>
                                    </div>
                                </>
                            );
                        }

                        return (
                            <>
                                <div className="orderstatus__card">
                                    <div className="card__info">
                                        <div className="card__title">{elt.storeName}</div>
                                        <div className="card__title__info">
                                            <div className="order__date">
                                                <img className="cal" alt="calendar" src={btnCal}/>
                                                {elt.saleDt}
                                            </div>
                                            {deleteButton}
                                        </div>
                                    </div>
                                    <div className="card__info__detail cooked">
                                        <div className="order__list">
                                            <div className="line__title">주문목록</div>
                                            <div className="line__detail">{
                                                elt.detail.map((elt) => {
                                                    if(elt.itemSellLevel === '1') {
                                                        return (
                                                            <>
                                                                <div>{elt.itemName} {elt.qty}개</div>
                                                            </>
                                                        );
                                                    } else {
                                                        return null;
                                                    }
                                                })
                                            }</div>
                                        </div>
                                        <div className="order__number">
                                            <div className="line__title">주문번호</div>
                                            <div className="line__detail">{elt.billNo}</div>
                                        </div>
                                        <div className="order__status">
                                            <div className="line__title">주문상태</div>
                                            <div className="line__detail">{status}</div>
                                        </div>
                                        {
                                            time !== "" ?
                                            <div className="order__time">
                                                <div className="line__title">{text}</div>
                                                <div className="line__detail">{time}</div>
                                            </div>
                                            :
                                            null
                                        }
                                    </div>
                                    {button}
                                </div>
                            </>
                        );
                    })
                }
                </div>
            </>
        );
    }
}

export default OrderStatus;
