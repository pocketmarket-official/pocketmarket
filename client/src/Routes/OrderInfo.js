import React from 'react';
import pay from '../bootpay.js';
import HeaderBiz from "../Components/js/HeaderBiz";

import axios from "axios";
import {cookieCheck_rejectGuest} from "../Components/js/CookieCheck.js"
import BootPay from "bootpay-js";
import cookie from "react-cookies";

let applicationId = process.env.REACT_APP_BOOTPAY_APP_ID;

window.identifyIosDevice = (function () {
    applicationId = process.env.REACT_APP_BOOTPAY_APPLE_ID;
    //
    // let meta = document.createElement('meta');
    // meta.name='bootpay-application-id';
    // meta.content=applicationId;
    // document.getElementsByTagName('head')[0].appendChild(meta);
    //
    // let script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src = "https://cdn.bootpay.co.kr/js/bootpay-2.1.1.min.js";
    // document.getElementsByTagName('head')[0].appendChild(script);

    console.log("=====1=====");

    window.BootPay.setApplicationId(applicationId);
    // window.setApplicationId(applicationId);
    window.BootPay.setDevice('IOS');
    BootPay.startTrace();
});

class OrderInfo extends React.Component {
    constructor(props) {
        super(props);
        const sellItemList = this.props.location.state.sellItemList;
        const order = this.props.location.state.order;
        const storeName = this.props.location.state.storeName;
        const storeId = this.props.location.state.storeId;
        const storeCd = this.props.location.state.storeCd;

        this.props.history.go(1);

        this.state = {
            sellItemList: sellItemList,
            order: order,
            storeName: storeName,
            storeId: storeId,
            storeCd: storeCd,
            userId: null,
        }
     };

    componentDidMount(){
        let user_email = cookieCheck_rejectGuest();
        let fcmToken = cookie.load("fcmToken");

        if(fcmToken){
            let transData = {"user_email":user_email, "fcmToken":fcmToken};

            axios.post('/saveToken/', transData)
        }

        axios.get("/api/users_user/")
        .then((res) => {
            let userId = res.data.find((elt) => {
                if(elt.email === user_email) {
                    return true;
                }
            }).id;
            this.setState({ userId: userId });
        });

    }

    render() {
        let cnt = 0;
        let price = 0;
        let order_list = [];
        for(let index in this.state.order) {
            cnt += this.state.order[index][1];
            price += this.state.order[index][0].price * this.state.order[index][1];
            if(this.state.order[index][0].option) {
                for(let item in this.state.order[index][0].option) {
                    price += this.state.order[index][0].option[item][0].price * this.state.order[index][0].option[item][1] * this.state.order[index][1];
                }
            }

            let menu = [];
            let menu_options = [];
            if(this.state.order[index][0].option) {
                for(let i in this.state.order[index][0].option) {
                    let opt = [this.state.order[index][0].option[i][0].itemName, this.state.order[index][0].option[i][1]];
                    menu_options.push(opt);
                }
            }
            menu.push([this.state.order[index][0].itemName, menu_options]);
            menu.push(this.state.order[index][1]);
            order_list.push(menu);
        }

        let tradesInfo = [];
        let sellGroup = 1;
        for(let idx in this.state.order) {
            let option = 1;
            if(this.state.order[idx][0].option || this.state.order[idx][0].option === []) {
                option = 3;
                for(let i in this.state.order[idx][0].option) {
                    let tradesInfoRow1 = {
                        storeId: this.state.storeId,
                        seq: idx,
                        orderType: 1,
                        itemCd: this.state.order[idx][0].option[i][0].itemCd,
                        itemName: this.state.order[idx][0].option[i][0].itemName,
                        qty: this.state.order[idx][0].option[i][1] * this.state.order[idx][1],
                        itemSellGroup: sellGroup,
                        itemSellLevel: 2,
                        itemSellType: option,
                    };
                    tradesInfo.push(tradesInfoRow1);
                }
            }
            let tradesInfoRow = {
                storeId: this.state.storeId,
                seq: idx,
                orderType: 1,
                itemCd: this.state.order[idx][0].itemCd,
                itemName: this.state.order[idx][0].itemName,
                qty: this.state.order[idx][1],
                itemSellGroup: sellGroup,
                itemSellLevel: 1,
                itemSellType: option,
            };
            sellGroup += 1;
            tradesInfo.push(tradesInfoRow);
        }


        return (

            <>
                <HeaderBiz/>
                <div className="orderinfo">
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">포장선택</div>
                        <div className="orderinfo__choices" style={{paddingLeft: '26px'}}>
                            <input id="takeOut" type="radio" name="where" value="Take out" defaultChecked={true}/><label htmlFor="takeOut" style={{marginRight: '20px'}}>방문포장</label>
                            <input id="eatIn" type="radio" name="where" value="Eat in" disabled={true}/><label htmlFor="eatIn">현장식사</label>

                        </div>
                    </div>
                    {/*<div className="orderinfo__options">*/}
                    {/*    <div className="orderinfo__title">할인선택</div>*/}
                    {/*    <Link to="/main/store/C0001/orderinfo/payMethod">*/}
                    {/*        <div className="orderinfo__choices">*/}
                    {/*            <input type="checkbox" value="쿠폰할인" />쿠폰할인*/}
                    {/*            <span>></span>*/}
                    {/*        </div>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">결제수단선택</div>
                        {/*<Link to="/main/store/C0001/orderinfo/payMethod">*/}
                            <div className="orderinfo__choices">
                                <input type="checkbox" value="PG결제"/>카드결제
                                <span>></span>
                            </div>
                        {/*</Link>*/}
                    </div>
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">주문 내역</div>
                        <div className="orderinfo__info">
                            <div className="info__store">{this.state.storeName}</div>
                            {
                                this.state.order.map((data) => {
                                    return (
                                        <>
                                            <div className="info__item--main">{data[0].itemName} {data[1]}</div>
                                            {
                                                data[0].option !== undefined ?
                                                data[0].option.map((item) => {
                                                    return (
                                                        <>
                                                            <div className="info__item--option">- {item[0].itemName} {item[1]}</div>
                                                        </>
                                                    );
                                                })
                                                :
                                                null
                                            }
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">결제금액</div>
                        <div className="orderinfo__pay">
                            <div className="pay__info">
                                <div>총 금액</div>
                                <div>{price}원</div>
                            </div>
                            {/*<div className="pay__info">*/}
                            {/*    <div>포켓머니</div>*/}
                            {/*    <button>전액 사용</button>*/}
                            {/*    <div>0원</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="orderinfo__amount">
                        <div className="amount__title">최종 결제금액</div>
                        <div className="amount__amount">{price}원</div>
                    </div>
                    <div className="divide"/>
                    {/*TODO: location replace 마무리 지어야 함*/}
                    <div className="orderinfo__btn"
                         onClick={async ({sellItemList}) => {
                             let result = await pay(tradesInfo, price, applicationId, this.state.storeName, this.state.storeId, this.state.userId)
                             if (result == 200){
                                 window.location.replace('/order/status');
                             }
                         }}>
                        결제하기
                    </div>
                </div>
            </>
        );
    }
}

export default OrderInfo;
