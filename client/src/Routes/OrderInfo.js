import React from 'react';
import pay from '../bootpay.js';
import HeaderBiz from "../Components/js/HeaderBiz";

import axios from "axios";
import {cookieCheck_rejectGuest} from "../Components/js/CookieCheck.js"
import BootPay from "bootpay-js";
import cookie from "react-cookies";
import { toast } from 'react-toastify';
import logo from "../assets/common/logo.png";

let applicationId = process.env.REACT_APP_BOOTPAY_APP_ID;

window.identifyIosDevice = (function () {
    applicationId = process.env.REACT_APP_BOOTPAY_APPLE_ID;
    //
    // let meta = document.createElement('meta');
    // meta.name='bootpay-application-id';
    // meta.content=applicationId;
    // document.getElemeidentifyIosDevicentsByTagName('head')[0].appendChild(meta);
    //
    // let script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src = "https://cdn.bootpay.co.kr/js/bootpay-2.1.1.min.js";
    // document.getElementsByTagName('head')[0].appendChild(script);

    window.BootPay.setApplicationId(applicationId);
    window.setApplicationId(applicationId);
    window.BootPay.setDevice('IOS');
    BootPay.startTrace();
});

class OrderInfo extends React.Component {
    constructor(props) {
        super(props);
        this.setDiscountRadio = this.setDiscountRadio.bind(this);
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
            discountFlag: '0',
            discountName : '할인없음',
            dcAmt : 0,
            preDcAmt : 0,
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
            let user = res.data.find((elt) => {
                if(elt.email === user_email) {
                    return true;
                }
            });
            if(user.tmpFlag === '2'){
                this.setState({ userId: user.id, discountFlag:user.tmpFlag, preDcAmt:1000 });
            } else{
                this.setState({ userId: user.id, discountFlag:user.tmpFlag });
            }

        });
    }

    setDiscountRadio(event){
        if(event.target.value == 'no-discount'){
            this.setState({discountName:'할인없음', dcAmt:0});
        } else if(event.target.value == 'open-event'){
            this.setState({discountName:'오픈행사', dcAmt:2000});
        }
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
                            <div>
                                <input id="takeOut" type="radio" name="where" value="Take out" defaultChecked={true}/><label htmlFor="takeOut" style={{marginRight: '20px'}}>일회용기</label>
                                <input id="tray" type="radio" name="where" value="Tray"/><label htmlFor="tray">개인용기</label>
                                <input id="eatIn" type="radio" name="where" value="Eat in"/><label htmlFor="eatIn" style={{marginTop: '20px'}}>현장식사</label>
                            </div>
                        </div>

                    </div>
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">할인선택</div>
                        <div className="orderinfo__choices" style={{paddingLeft: '26px'}} onChange={this.setDiscountRadio}>
                            <input id="no-discount" type="radio" name="discount" value="no-discount" defaultChecked={true}/><label htmlFor="no-discount" style={{marginRight: '20px'}}>할인없음</label>
                            {
                                this.state.discountFlag==='4' || this.state.discountFlag==='5'?
                                    <>
                                        <input id="no-discount" type="radio" name="discount" value="no-discount" disabled={true}/><label htmlFor="no-discount">오픈행사</label>
                                    </>
                                    :
                                    <>
                                        <input id="open-event" type="radio" name="discount" value="open-event"/><label htmlFor="open-event">오픈행사</label>
                                    </>
                            }
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
                        <div className="orderinfo__title">주문내역</div>
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
                        <div className="orderinfo__title">판매금액</div>
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
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">할인금액</div>
                        <div className="orderinfo__pay">
                            <div className="pay__info">
                                <div>{this.state.discountName}</div>
                                <div>{this.state.dcAmt}원</div>
                            </div>
                            {
                                this.state.discountFlag==='2'?
                                    <>
                                        <div className="pay__info">
                                            <div>사전예약</div>
                                            <div>1000원</div>
                                        </div>
                                    </>
                                    :
                                    null
                            }
                            {/*<div className="pay__info">*/}
                            {/*    <div>포켓머니</div>*/}
                            {/*    <button>전액 사용</button>*/}
                            {/*    <div>0원</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    {/*<div className="orderinfo__options">*/}
                    {/*    <div className="orderinfo__title">휴대폰 번호</div>*/}
                    {/*    <div className="orderinfo__pay">*/}
                    {/*        <div className="call__info">*/}
                    {/*            <div>*/}
                    {/*                상품 준비 완료 시 <br/>*/}
                    {/*                알림톡 수신하실 연락처를 입력해주세요.*/}
                    {/*            </div>*/}
                    {/*            <input id="callNo" className="call__number" type="tel" name="callNo"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="orderinfo__amount">
                        <div className="amount__title">최종 결제금액</div>
                        <div className="amount__amount">{price - this.state.dcAmt - this.state.preDcAmt}원</div>
                    </div>
                    <div className="divide"/>
                    {/*TODO: location replace 마무리 지어야 함*/}
                    <div className="orderinfo__btn"
                         onClick={async ({sellItemList}) => {
                             let cardAmt = price-this.state.dcAmt-this.state.preDcAmt;

                             if(cardAmt<1000){
                                 toast(<div className="message-container"><img src={logo} /><div>PG사 정책에 의해 카드결제금액은 최소 1,000원이상이어야 합니다 ㅜ_ㅜ</div></div>, {
                                        position: "top-center",
                                        autoClose: 5000,
                                        closeOnClick: true,
                                        className: 'toast',
                                        hideProgressBar: false,
                                        closeButton: false,
                                    });
                             } else {
                                 let callNo = document.getElementById('callNo').value;
                                 let payments = {
                                     'price': price,
                                     'openDcAmt': this.state.dcAmt,
                                     'preDcAmt': this.state.preDcAmt
                                 };
                                 let result = await pay(tradesInfo, payments, applicationId, callNo, this.state.storeName, this.state.storeId, this.state.userId);
                                 if (result == 200){
                                     window.location.replace('/order/status');
                                 }
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
