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
        console.log(result);
        return (
            result.map((data) => {
                let contentId = "content" + data.id;
                let eltId = "orderhistory" + data.id;
                let total = 0
                const review = "";
                let review_txt ="";
                for(let i in data.order) {
                    total += (data.order[i][1] * data.order[i][2])
                }
                total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                // if(data.review == "N"){
                //     const review = document.getElementById("orderhistory__btn__review");
                //     console.log(review);
                //     console.log("22");
                //     review.classList.add("review__start");
                //     review_txt = "리뷰쓰기";
                // }else{
                //     const review = document.getElementById("orderhistory__btn__review")
                //    review.classList.add("review__end")
                //     console.log(review);
                //     review_txt = "작성완료";
                // }
                return (
                    <>
                        <div className="orderhistory__date">{data.date}</div>

                        <div className="orderhistory__content" id={contentId}>

                            <div className="orderhistory__detail">
                                <div className="orderhistory__name">{data.place}</div>
                                <div className="orderhistory__price">{total}원</div>
                                <button className="orderhistory__btn info" onClick={() => {
                                    const elt = document.getElementById("modal__conversion");
                                    elt.classList.remove("hidden")
                                }}>구매내역</button>
                                <button className="orderhistory__btn__review review__start"  id="orderhistory__btn__review" onClick={() => {
                                    const review = document.getElementById("orderhistory__btn__review");
                                        console.log(review);
                                }}>
                                    <Link to="/order/review">{review_txt}</Link>
                                    리뷰쓰기
                                </button>
                            </div>
                            <button className="orderhistory__btn rebuy"><img src={order}/></button>
                        </div>

                    </>
                );
            })
        );
    }
}

export default OrderResult;
