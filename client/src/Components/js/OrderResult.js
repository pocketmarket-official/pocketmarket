import React from 'react';
import { Link } from 'react-router-dom';
import order from "../../assets/order_history/ico_order.png";
import bill_icon from "../../assets/order_status/btn_date.png";
import close from "../../assets/order_status_pop/btn_close.png";

class OrderResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [],
        }
    }
    // componentDidMount() {
    //     let result = this.props.result;
    //     result.forEach((data) => {
    //         let eltId = "orderhistory" + data.id;
    //         let contentId = "content" + data.id;
    //         const elt = document.getElementById(eltId);
    //         const content = document.getElementById(contentId);
    //         if(elt) {
    //             if(content) {
    //                 content.onclick = () => {
    //                     elt.classList.toggle("hidden");
    //                 };
    //             }
    //         }
    //     });
    // }

    render() {
        let result = this.props.result;
        return (
                <>
                <div className="modal__conversion hidden" id="modal__conversion" onClick={() => {
                    const elt = document.getElementById("modal__conversion");
                    elt.classList.add("hidden");
                }}>
                    <div className="modal__modal" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div className="modal__header__bill">
                            <img src={bill_icon}/>구매내역
                        </div>
                        <div className="modal__bill">
                            <div className="result__item">
                                <div>{this.state.selected.storeName}</div>
                                <div className="result__detail">
                                    <div className="result__phone">
                                        <div className="phone__phone">Tel:</div>
                                        <div>{this.state.selected.tel}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="result__item">
                                <div className="result__name">
                                    <div className="name__name">대표자:</div>
                                    <div>{this.state.selected.ceo}</div>
                                </div>
                            </div>
                            <hr />
                            <div className="result__item">
                                <div>{this.state.selected.saleDt}</div>
                                <div className="result__detail">
                                    <div className="result__posno">
                                        <div className="posno__posno">POSNO:</div>
                                        <div>{this.state.selected.posNo}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="result__item">
                                <div className="result__receipt">
                                    <div className="receipt__receipt">영수증번호:</div>
                                    <div>{this.state.selected.billNo}</div>
                                </div>
                            </div>
                            <hr />
                            <div className="result__items">
                                <div className="item__list">
                                    <div className="list__detail">품목명</div>
                                    <div className="list__detail">단가</div>
                                    <div className="list__detail">수량</div>
                                    <div className="list__detail">금액</div>
                                </div>
                                {
                                    this.state.selected.detail?
                                        this.state.selected.detail.map((elt) => {
                                            return (
                                                <>
                                                    <div className="item__list">
                                                        <div className="list__detail">{elt.itemName}</div>
                                                        <div className="list__detail">{elt.salePrice}원</div>
                                                        <div className="list__detail">{elt.qty}</div>
                                                        <div className="list__detail">{elt.totSaleAmt}원</div>
                                                    </div>
                                                </>
                                            );
                                        })
                                        :
                                        null
                                }
                            </div>
                            <hr />
                            {
                                this.state.selected.cardLog?
                                    <>
                                        <div className="result__item">
                                            <div>카드사</div>
                                            <div>{this.state.selected.cardLog[0].cardName}</div>
                                        </div>
                                        <div className="result__item">
                                            <div>카드번호</div>
                                            <div>{this.state.selected.cardLog[0].cardNo}</div>
                                        </div>
                                        <div className="result__item">
                                            <div>승인번호</div>
                                            <div>{this.state.selected.cardLog[0].apprNo}</div>
                                        </div>
                                        <div className="result__item">
                                            <div>결제금액</div>
                                            <div>{this.state.selected.cardLog[0].cardAmt}</div>
                                        </div>
                                        <hr />
                                        <div className="result__item last">
                                            <div>합계</div>
                                            <div>{this.state.selected.cardLog[0].cardAmt}</div>
                                        </div>
                                    </>
                                    :
                                    null
                            }
                            </div>
                        <div className="modal__close__btn" id="modal__close__btn" onClick={() =>{
                            const elt = document.getElementById("modal__conversion");
                            elt.classList.add("hidden");
                        }}><img src={close}/></div>
                    </div>
                </div>

            {result.map((data) => {
                let contentId = "content" + data.id;
                let total = data.saleAmt;
                let review_txt ="";
                const link = `/main/store/${data.storeId}/order`;
                total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                {
                    if (data.reviewYn == "N") {
                        return (
                            <>
                                <div className="orderhistory__date">{data.saleDt}</div>
                                <div className="orderhistory__content" id={contentId}>
                                    <div className="orderhistory__detail">
                                        <div className="orderhistory__name">{data.storeName}</div>
                                        <div className="orderhistory__price">{total}원</div>
                                        <button className="orderhistory__btn info" onClick={() => {
                                            console.log(data);
                                            this.setState({ selected: data });
                                            const elt = document.getElementById("modal__conversion");
                                            elt.classList.remove("hidden")
                                        }}>구매내역
                                        </button>
                                        <button className="orderhistory__btn__review review__start" onClick={() => {

                                        }}>
                                            <Link to={{pathname: '/order/review', state: {
                                                matched: data,
                                            }}}>
                                                {review_txt}리뷰쓰기</Link>
                                        </button>
                                    </div>
                                    <button className="orderhistory__btn rebuy">
                                        <Link to={link}>
                                            <img src={order}/>
                                        </Link>
                                    </button>
                                </div>
                            </>
                        );
                    } else {
                        return (
                            <>
                                <div className="orderhistory__date">{data.saleDt}</div>
                                <div className="orderhistory__content" id={contentId}>
                                    <div className="orderhistory__detail">
                                        <div className="orderhistory__name">{data.storeName}</div>
                                        <div className="orderhistory__price">{total}원</div>
                                        <button className="orderhistory__btn info" onClick={() => {
                                            this.setState({ selected: data });
                                            const elt = document.getElementById("modal__conversion");
                                            elt.classList.remove("hidden")
                                        }}>구매내역
                                        </button>
                                        <button className="orderhistory__btn__review review__end">
                                           작성완료
                                        </button>
                                    </div>
                                        <button className="orderhistory__btn rebuy">
                                            <Link to={link}>
                                                <img src={order}/>
                                            </Link>
                                        </button>
                                </div>

                            </>
                        );
                    }
                }
            })
        }
        </>
        );
    }
}

export default OrderResult;
