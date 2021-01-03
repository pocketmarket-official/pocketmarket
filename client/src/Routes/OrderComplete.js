import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBiz from '../Components/js/HeaderBiz';
import {cookieCheck_rejectGuest} from "../Components/js/CookieCheck.js"

class OrderComplete extends React.Component{
    constructor(props){
        super(props);

        this.state={
            order: props.location.state.order
        }
    }

    componentDidMount(){
        let user_email = cookieCheck_rejectGuest()
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
                                        <br />
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
                    <div className="ordercomplete__confirm" onClick={() => {this.props.history.go(-1);}}><p>확인</p></div>
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
