import React from 'react';
import pay from '../bootpay.js';
import HeaderBiz from "../Components/js/HeaderBiz";
import {Link} from "react-router-dom";

import '../Components/scss/orderInfo.scss';

class OrderInfo extends React.Component {
    constructor(props) {
        super(props);
        const sellItemList = this.props.location.state.sellItemList;
        this.state = {
            sellItemList: sellItemList,
        }
    };

    render() {
        return (
            <>
                <HeaderBiz/>
                <div className="orderinfo">
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">포장선택</div>
                        <div className="orderinfo__choices" style={{paddingLeft: '26px'}}>
                            <input id="eatIn" type="radio" name="where" value="Eat in" defaultChecked={true} /><label htmlFor="eatIn">Eat-in</label>
                            <input id="takeOut" type="radio" name="where" value="Take out" /><label htmlFor="takeOut" style={{marginRight: '20px'}}>Take-out</label>
                        </div>
                    </div>
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">할인선택</div>
                        <div className="orderinfo__choices">
                            <input type="checkbox" value="쿠폰할인" />쿠폰할인
                            <span>></span>
                        </div>
                    </div>
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">결제수단선택</div>
                        <Link to="/main/store/C0001/orderinfo/payMethod">
                            <div className="orderinfo__choices">
                                <input type="checkbox" value="PG결제" />PG결제
                                <span>></span>
                            </div>
                        </Link>
                    </div>
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">주문 내역</div>
                        <div className="orderinfo__info">
                            <div className="info__store">조폭닭꼬치</div>
                            <div className="info__item--main">치즈핫도그 2</div>
                            <div className="info__item--option">- 머스타드 1</div>
                            <div className="info__item--option">- 케찹 1</div>
                            <div className="info__item--main">콘핫도그 2</div>
                        </div>
                    </div>
                    <div className="orderinfo__options">
                        <div className="orderinfo__title">결제금액</div>
                        <div className="orderinfo__pay">
                            <div className="pay__info">
                                <div>총 금액</div>
                                <div>5,000원</div>
                            </div>
                            <div className="pay__info">
                                <div>포켓머니</div>
                                <button>전액 사용</button>
                                <div>3,500원</div>
                            </div>
                        </div>
                    </div>
                    <div className="orderinfo__amount">
                        <div className="amount__title">최종 결제금액</div>
                        <div className="amount__amount">1,500원</div>
                    </div>
                    <div className="divide"/>
                    <div className="orderinfo__btn"
                         onClick={({sellItemList}) => pay({sellItemList: this.state.sellItemList})}>
                        결제하기
                    </div>
                </div>
            </>
        );
    }
}

export default OrderInfo;
