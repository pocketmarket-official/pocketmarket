import React from 'react';
import bg from '../assets/kds/B_img.png';
import timer from '../assets/kds/ic_timer.svg';
import axios from 'axios';
import Clock from 'react-live-clock';
import cookie from "react-cookies";

class KDSMain extends React.Component{
    constructor(props){
        super(props);

        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth()+1;
        let day = today.getDate();

        this.state = {
            storeCd: '',
            store: '',
            saleDetail: [],
            matched: [],
            loading: true,
            year: year,
            month: month,
            day: day
        };

        this._timeTickling = this._timeTickling.bind(this);
    }

    _timeTickling(current){
        let tmpMatched = [];
        let curDttm = new Date(current);
        let curYear = curDttm.getFullYear();
        let curMonth = curDttm.getMonth()+1;
        let curDate = curDttm.getDate();
        let curHour = curDttm.getHours();
        let curMinute = curDttm.getMinutes();
        let curSec = curDttm.getSeconds();

        this.state.matched.forEach(elt=>{
            let saleDate = elt.saleDt;
            let saleTime = elt.detail[0].saleTime;
            let ordYear = saleDate.slice(0,4);
            let ordMonth = saleDate.slice(4,6);
            let ordDate = saleDate.slice(6,8);
            let ordHour = saleTime.slice(0,2);
            let ordMinute = saleTime.slice(2,4);
            let ordSec = saleTime.slice(4,6);
            let ordDttm = new Date(ordYear, ordMonth-1, ordDate, ordHour, ordMinute, ordSec, 0);

            let timelaps = Math.abs(curDttm - ordDttm) / 1000;
            let daylaps = Math.floor(timelaps / 86400);
            let hourlaps = Math.floor(timelaps / 3600) % 24;
            let minutelaps = Math.floor(timelaps / 60) % 60;
            let seclaps = timelaps % 60;

            elt.timeLaps = minutelaps;
            tmpMatched.push(elt);
        });

        console.log(tmpMatched[0].timeLaps);
        this.setState({matched : tmpMatched});
    }

    componentDidMount(){
        let storeCd = cookie.load("storeCd");

        if (!storeCd){
            storeCd = prompt('점포코드를 입력하세요.');

            const expires = new Date();
            expires.setDate(expires.getDate() + 1);

            cookie.save("storeCd", storeCd, {
                path: '/',
                expires: expires,
    //            httpOnly: true,
    //            secure: true,
            });
        }
        this.setState({storeCd});


        // axios.get('http://localhost:8000/api/stores_store/') // URL EXCHANGE LOCAL
        axios.get('/api/stores_store/') // URL EXCHANGE RELATIVE
        // axios.get('http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/stores_store/') // URL EXCHANGE SERVER
            .then((res)=> {
                let store = res.data.find((elt) => {
                    if(elt.storeCd === this.state.storeCd){
                        return true;
                    }
                });
                if(!store) {
                    let storeCd = prompt('사용 불가능한 점포코드입니다. 점포코드 확인 부탁드려요!.')
                    const expires = new Date();
                    expires.setDate(expires.getDate() + 1);

                    cookie.save("storeCd", storeCd, {
                        path: '/',
                        expires: expires,
            //            httpOnly: true,
            //            secure: true,
                    });

                    window.location.reload();
                    }
                        // axios.get("http://localhost:8000/api/trades_saleHeader/") // URl EXCHANGE LOCAL
                        axios.get("/api/trades_saleHeader/") // URl EXCHANGE RELATIVE
                        // axios.get("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/trades_saleHeader/") // URl EXCHANGE SERVER
                            .then((res)=> {
                                let saleHeader = res.data.filter((elt) => {
                                    if (elt.storeCd === this.state.storeCd) {
                                        return true;
                                    }
                                });

                                // axios.get('http://localhost:8000/api/trades_saleDetail?ordering=saleDt,storeCd,billNo') //URL EXCHANGE LOCAL
                                axios.get('/api/trades_saleDetail?ordering=saleDt,storeCd,billNo') //URL EXCHANGE RELATIVE
                                // axios.get('http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/trades_saleDetail?ordering=saleDt,storeCd,billNo') //URL EXCHANGE SERVER
                                // axios.get('http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/trades_saleDetail/') //URL EXCHANGE SERVER
                                    .then((res) => {
                                        let matched = [];
                                        // sale dt 기준으로 정렬되어있는 데이터
                                        saleHeader.forEach((elt) => {
                                            let detail = [];
                                            for (let index in res.data) {
                                                if (res.data[index].saleDt === elt.saleDt) {
                                                    if (res.data[index].storeCd === elt.storeCd) {
                                                        if (res.data[index].billNo === elt.billNo) {
                                                            detail.push(res.data[index]);

                                                        }
                                                    }
                                                }
                                            }
                                            if (detail !== [] && elt.orderStatus == '2') {
                                                elt["detail"] = detail;
                                                matched.push(elt);
                                            }
                                        });
                                        this.setState({
                                            matched: matched,
                                            store: store,
                                            loading: false,
                                        })
                                    });
                    });
            });
    }

    render(){
        return (
            <div className="kds">
                <div className="header">
                    <div>
                        <span>{this.state.store.storeName}</span>
                    </div>
                    <div>
                        <span>{this.state.year}.{this.state.month}.{this.state.day}</span>
                        {/*<span>AM</span>*/}
                        <span><Clock format={"HH:mm:ss"} ticking={true} onChange={(res)=>
                        {
                            this._timeTickling(res);
                        }}/></span>
                    </div>
                </div>
                <div className="body">
                    <div className="order">
                        <div className="lane">
                            {
                                this.state.loading === true?
                                <div>loading...</div>
                                :
                                    this.state.matched.map((elt)=>{
                                        return(
                                        <>
                                            {/*ORDER_BOX*/}
                                            <div className="orderBox" onClick={(e) => {
                                                    e.preventDefault();
                                                    let id = elt.id;
                                                    let d = new Date();
                                                    let complete_time = d.getHours().toString().padStart(2, "0") + d.getMinutes().toString().padStart(2, "0") + d.getSeconds().toString().padStart(2, "0");
                                                    // axios.put(`http://localhost:8000/api/trades_saleHeader/${id}/`, { //URL EXCHANGE LOCAL
                                                axios.put(`/api/trades_saleHeader/${id}/`, { //URL EXCHANGE RELATIVE
                                                // axios.put(`http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/trades_saleHeader/${id}/`, { //URL EXCHANGE SERVER
                                                        orderStatus: 3,
                                                        completeTime: complete_time,
                                                    })
                                                    .then(() => {
                                                        window.location.reload();
                                                    })
                                                }}>
                                                <div className="orderWrap">
                                                    <div className="orderHeader">
                                                        <div className="wrap">
                                                            <div className="left">
                                                                <div className="billNo">{elt.billNo}</div>
                                                                <div className="elapsedTime">
                                                                    <img src={timer} alt=""/>
                                                                    <div className="step1">{elt.timeLaps}분 경과</div>
                                                                </div>
                                                            </div>
                                                            {/*<div className="right">*/}
                                                                {/*<div>94</div>*/}
                                                                {/*<div>EAT-IN</div>*/}
                                                            {/*</div>*/}
                                                        </div>
                                                    </div>
                                                    {
                                                        elt.detail.map((elt2)=>{
                                                            return(
                                                                <>
                                                                    <div className="orderDetail" >
                                                                        <div className="itemGroup">
                                                                            {
                                                                                elt2.itemSellLevel == '1' ?
                                                                                    <>
                                                                                        <div className="item">
                                                                                            <div
                                                                                                className="quantity">{elt2.qty}</div>
                                                                                            <div className="name">{elt2.itemName}
                                                                                            </div>
                                                                                        </div>
                                                                                    </>
                                                                                    :
                                                                                    elt2.qty > 0 ?
                                                                                        <>
                                                                                            <div
                                                                                                className="item indent">
                                                                                                <div
                                                                                                    className="quantity">{elt2.qty}</div>
                                                                                                <div
                                                                                                    className="name">{elt2.itemName}
                                                                                                </div>
                                                                                            </div>
                                                                                        </>
                                                                                        :
                                                                                        <>
                                                                                            <div
                                                                                                className="item negative indent">
                                                                                                <div
                                                                                                    className="quantity">{elt2.qty}
                                                                                                </div>
                                                                                                <div
                                                                                                    className="name">{elt2.itemName}
                                                                                                </div>
                                                                                            </div>
                                                                                        </>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            );
                                                        }).reverse()
                                                    }

                                                </div>
                                            </div>
                                        </>
                                        );
                                    })
                            }
                        </div>
                    </div>
                </div>

                <div className="tail">
                    <div className="info">
                        <div className="msg1">
                            <span>P.M</span><br/>
                        </div>
                        <div className="msg2">
                            <span>Help</span>
                        </div>
                        <div className="msg2">
                            <span>010-9410-9188</span>
                        </div>
                    </div>

                    <div className="techCtl">
                        <button className="myButton cnrStats">LABEL_CNR_STATS</button>
                        <button className="myButton cnrStats">LABEL_SOLDOUT</button>
                    </div>
                    <div className="pageCtl">
                        {/*<button className="myButton">*/}
                        {/*    이전*/}
                        {/*</button>*/}
                        {/*<div className="page">*/}
                        {/*    <span>1/2</span>*/}
                        {/*</div>*/}
                        {/*<button className="myButton active">다음</button>*/}
                        <buton className="myButton" onClick={(e) => {
                            e.preventDefault();
                            let storeCd = prompt('매장코드를 입력해주세요.');
                            const expires = new Date();
                            expires.setDate(expires.getDate() + 1);

                            cookie.save("storeCd", storeCd, {
                                path: '/',
                                expires: expires,
                    //            httpOnly: true,
                    //            secure: true,
                            });
                            window.location.reload();
                            }}>매장변경</buton>
                        {
                            this.state.store.openYn == 'Y' ?
                                <>
                                    <buton className="myButton soldout" onClick={(e) => {
                                        e.preventDefault();
                                        let store = this.state.store;
                                        // axios.put(`http://localhost:8000/api/stores_store/${store.id}/`, { //URL EXCHANGE LOCAL
                                        axios.put(`/api/stores_store/${store.id}/`, { //URL EXCHANGE RELATIVE
                                        // axios.put(`http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/stores_store/${store.id}/`, { //URL EXCHANGE SERVER
                                                    openYn: 'N',
                                                });
                                        store.openYn = 'N';
                                        this.setState({store});
                                        }}>마감하기</buton>
                                </>
                                :
                                <>
                                    <buton className="myButton active" onClick={(e) => {
                                        e.preventDefault();
                                        let store = this.state.store;
                                        // axios.put(`http://localhost:8000/api/stores_store/${store.id}/`, { //URL EXCHANGE LOCAL
                                        axios.put(`/api/stores_store/${store.id}/`, { //URL EXCHANGE RELATIVE
                                        // axios.put(`http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/stores_store/${store.id}/`, { //URL EXCHANGE SERVER
                                                    openYn: 'Y',
                                                });
                                        store.openYn = 'Y';
                                        this.setState({store});
                                        }}>개점하기</buton>
                                </>
                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default KDSMain;
