import React from 'react';
import order from "../../assets/order_history/ico_order.png";
import { Link } from 'react-router-dom';
import close from "../../assets/order_status_pop/btn_close.png";
import arw from "../../assets/point_history_conversion/ico_arw.png";
import btnMenuImg from "../../assets/common/btn_menu.png";

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
        return (
            result.map((data) => {
                let contentId = "content" + data.id;
                let eltId = "orderhistory" + data.id;
                let total = data.saleAmt;
                const review = "";
                let review_txt ="";
                const link = `/main/store/${data.storeId}/order`;
                total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                {
                    if (data.reviewYn == "N") {
                        return (
                            <>
                                <div className="orderhistory__date">{data.date}</div>

                                <div className="orderhistory__content" id={contentId}>

                                    <div className="orderhistory__detail">
                                        <div className="orderhistory__name">{data.storeName}</div>
                                        <div className="orderhistory__price">{total}원</div>
                                        <button className="orderhistory__btn info" onClick={() => {
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
                                    <Link to={link}>
                                        <button className="orderhistory__btn rebuy"><img src={order}/></button>
                                    </Link>
                                </div>

                            </>
                        );
                    } else {
                        return (
                            <>
                                <div className="orderhistory__date">{data.date}</div>

                                <div className="orderhistory__content" id={contentId}>

                                    <div className="orderhistory__detail">
                                        <div className="orderhistory__name">{data.storeName}</div>
                                        <div className="orderhistory__price">{total}원</div>
                                        <button className="orderhistory__btn info" onClick={() => {
                                            const elt = document.getElementById("modal__conversion");
                                            elt.classList.remove("hidden")
                                        }}>구매내역
                                        </button>
                                        <button className="orderhistory__btn__review review__end">
                                           작성완료
                                        </button>
                                    </div>
                                    <Link to={link}>
                                        <button className="orderhistory__btn rebuy"><img src={order}/></button>
                                    </Link>
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
