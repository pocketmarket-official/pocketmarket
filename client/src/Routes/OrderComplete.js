import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';
import cookie from "react-cookies";
import storage from "../storage";


class OrderComplete extends React.Component{
    constructor(props){
        super(props);

        let cookie_token = cookie.load("access_token");
        if(!cookie_token){
            window.location.href = '/login/';
        }
        else if(cookie_token==='guest') {
            cookie.remove('access_token');
            window.location.href = '/login/';
        }

        console.log(props.location.state.order);

        this.state={
            order: props.location.state.order
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <>
            {/*
            <div className="modal__fastorder hidden" id="modal__fastorder" onClick={(e) => {
                const elt = document.getElementById("modal__fastorder");
                elt.classList.add("hidden");
            }}>
                <div className="modal__modal" id="modal__modal" onClick={(e) => {
                    e.stopPropagation();
                }}>
                    <div className="modal__text">Fast order의 이름을 입력해주세요. </div>
                    <div className="modal__btns">
                        <input type="text" />
                        <input type="submit" value="제출" />
                    </div>
                </div>
            </div>
            */}
            <HeaderBiz/>
            <div className="ordercomplete">
                <div className="ordercomplete__close"><p>주문완료</p></div>
                <div className="ordercomplete__text">
                    <div className="ordercomplete__line1">· 매장 <p>{this.state.order.storeName}</p></div>
                    <div className="ordercomplete__line2">· 주문 <p>
                        {
                            this.state.order.detail.map((elt)=>{
                                if(elt.itemSellLevel === '1'){
                                    return(
                                    <>
                                        {elt.itemName}{elt.qty}개
                                    </>
                                )
                                }
                            })
                        }
                    </p> </div>
                    <div className="ordercomplete__line3">· 가격 <p>{this.state.order.saleAmt}원</p></div>
                    <div className="ordercomplete__line"></div>
                    <div className="ordercomplete__line4"><p>고객님의 호출번호는 <b>{this.state.order.billNo}</b> 입니다.
                        {/*<br/> 3명의 고객이 대기중입니다. */}
                        </p></div>
                </div>
                <div className="ordercomplete__container">
                    <div className="ordercomplete__confirm"><Link to="/order/status"><p>확인</p></Link></div>
                    {/*<div className="ordercomplete__fastorder" onClick={() => {*/}
                    {/*    const elt = document.getElementById("modal__fastorder");*/}
                    {/*    elt.classList.remove("hidden");*/}
                    {/*}}><p>도감추가</p></div>*/}
                </div>
            </div>
        </>
        )
    }
}

export default OrderComplete;
