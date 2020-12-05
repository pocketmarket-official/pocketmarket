import React from 'react';
import bg from '../assets/kds/B_img.png';
import timer from '../assets/kds/ic_timer.svg';
import axios from 'axios';

let storeCd = '00401';

class KDSMain extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            store: '',
            saleDetail: [],
            matched: [],
            loading: true,
        };
    }

    componentDidMount(){
        axios.get('/api/stores_store/')
            .then((res)=> {
                let store = res.data.find((elt) => {
                    if(elt.storeCd === storeCd){
                        return true;
                    }
                });
                axios.get("/api/trades_saleHeader/")
                    .then((res)=>{
                        let saleHeader = res.data.filter((elt) => {
                            if (elt.storeCd === storeCd) {
                                return true;
                            }
                        });

                        axios.get('/api/trades_saleDetail?ordering=saleDt,storeCd,billNo')
                            .then((res)=>{
                                let matched = [];
                                // sale dt 기준으로 정렬되어있는 데이터
                                saleHeader.forEach((elt)=>{
                                    let detail = [];
                                    for(let index in res.data){
                                        if(res.data[index].saleDt === elt.saleDt){
                                            if(res.data[index].storeCd === elt.storeCd){
                                                if(res.data[index].billNo === elt.billNo){
                                                    detail.push(res.data[index]);

                                                }
                                            }
                                        }
                                    }
                                    if(detail !== [] && elt.orderStatus == '2') {
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
                        <span>01. 주방KDS</span>
                    </div>
                    <div>
                        <span>2020.11.11</span>
                        <span>AM</span>
                        <span>11:11:11</span>
                    </div>
                </div>
                <div className="body">
                    <div className="order">
                        <div className="lane">
                            {/*ORDER_BOX*/}
                            <div className="orderBox">
                                <div className="orderWrap">
                                    <div className="orderHeader">
                                        <div className="wrap">
                                            <div className="left">
                                                <div className="billNo">0001</div>
                                                <div className="elapsedTime">
                                                    <img src={timer} alt=""/>
                                                    <div className="step1">00:59</div>
                                                </div>
                                            </div>
                                            <div className="right">
                                                <div>94</div>
                                                <div>EAT-IN</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*DETAIL*/}
                                    <div className="orderDetail">
                                        <div className="itemGroup">
                                            <div className="item">
                                                <div className="quantity">1</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item negative">
                                                <div className="quantity">-1</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item indent">
                                                <div className="quantity">0</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item">
                                                <div className="quantity">0</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item">
                                                <div className="quantity">0</div>
                                                <div className="name">TEST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*END*/}

                            {/*ORDER_BOX*/}
                            <div className=" orderBox">
                                <div className=" orderWrap">
                                    <div className=" orderHeader void">
                                        <div className=" wrap">
                                            <div className=" left">
                                                <div className=" billNo">0001</div>
                                                <div className=" elapsedTime">
                                                    <img src={timer} alt=""/>
                                                    <div className=" step2">02:00</div>
                                                </div>
                                            </div>
                                            <div className=" right">
                                                <div>94</div>
                                                <div>VOID</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*DETAIL*/}
                                    <div className="orderDetail">
                                        <div className="itemGroup">
                                            <div className="item">
                                                <div className="quantity">1</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item negative">
                                                <div className="quantity">-1</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item indent">
                                                <div className="quantity">0</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item">
                                                <div className="quantity">0</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item">
                                                <div className="quantity">0</div>
                                                <div className="name">TEST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*END*/}
                            {/*ORDER_BOX*/}
                            <div className=" orderBox">
                                <div className=" orderWrap">
                                    <div className=" orderHeader revert">
                                        <div className=" wrap">
                                            <div className=" left">
                                                <div className=" billNo">0001</div>
                                                <div className=" elapsedTime">
                                                    <img src={timer} alt=""/>
                                                    <div className=" step3">03:00</div>
                                                </div>
                                            </div>
                                            <div className=" right">
                                                <div>94</div>
                                                <div>REVERT</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*DETAIL*/}
                                    <div className="orderDetail">
                                        <div className="itemGroup">
                                            <div className="item">
                                                <div className="quantity">1</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item negative">
                                                <div className="quantity">-1</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item indent">
                                                <div className="quantity">0</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item">
                                                <div className="quantity">0</div>
                                                <div className="name">TEST</div>
                                            </div>
                                            <div className="item">
                                                <div className="quantity">0</div>
                                                <div className="name">TEST</div>
                                            </div>
                                        </div>
                                        <div className="itemGroup">
                                            <div className="item">
                                                <div className="quantity">1</div>
                                                <div className="name">TEST</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*END*/}
                            <div className=" bg">
                                <img src={bg} alt=""/>
                            </div>
                        </div>

                        <div className=" lane">
                            <div className=" bg">
                                <img src={bg} alt=""/>
                            </div>
                            <div className=" bg">
                                <img src={bg} alt=""/>
                            </div>
                            <div className=" bg">
                                <img src={bg} alt=""/>
                            </div>
                            <div className=" bg">
                                <img src={bg} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="total-order">
                        <div className="order">
                            <div className="orderHeader">
                                <div className="info1">
                                    <span>Summary</span>
                                </div>
                            </div>

                            <div className="orderDetail">
                                <div className="itemGroup">
                                    <div className="item">
                                        <div className="quantity">1</div>
                                        <div className="name">TEST</div>
                                    </div>
                                </div>
                            </div>
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
                            <span>010-1010-1010</span>
                        </div>
                    </div>

                    <div className="techCtl">
                        <button className="myButton cnrStats">LABEL_CNR_STATS</button>
                        <button className="myButton soldout">LABEL_SOLDOUT</button>
                    </div>
                    <div className="pageCtl">
                        <button className="myButton">
                            이전
                        </button>
                        <div className="page">
                            <span>1/2</span>
                        </div>
                        <button className="myButton active">다음</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default KDSMain;
