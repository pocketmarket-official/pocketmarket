import React from 'react';
import order from "../../assets/order_history/ico_order.png";
import { Link } from 'react-router-dom';

class OrderResult extends React.Component {
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
        let receipt_index = -1;
        return (
            result.map((data) => {
                let contentId = "content" + data.id;
                let total = data.saleAmt;
                let review_txt ="";
                receipt_index += 1;
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
                                        <button className="orderhistory__btn info" id={receipt_index} onClick={() => {

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
                                        <button className="orderhistory__btn info" id={receipt_index} onClick={() => {
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
        );
    }
}

export default OrderResult;
