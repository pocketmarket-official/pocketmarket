import React from 'react';


class OrderResult extends React.Component {
    componentDidMount() {
        let result = this.props.result;
        result.forEach((data) => {
            let eltId = "orderhistory" + data.id;
            let contentId = "content" + data.id;
            const elt = document.getElementById(eltId);
            const content = document.getElementById(contentId);
            if(elt) {
                if(content) {
                    content.onclick = () => {
                        elt.classList.toggle("hidden");
                    };
                }
            }
        });
    }

    render() {
        let result = this.props.result;
        return (
            result.map((data) => {
                let contentId = "content" + data.id;
                let eltId = "orderhistory" + data.id;
                let total = 0
                for(let i in data.order) {
                    total += (data.order[i][1] * data.order[i][2])
                }
                return (
                    <>
                        <div className="orderhistory__container">
                            <div className="orderhistory__date">{data.date}</div>
                            <div className="orderhistory__content" id={contentId}>
                                <div className="orderhistory__detail">
                                    <div className="orderhistory__name">{data.place}</div>
                                    <div className="orderhistory__price">{total} 원</div>
                                </div>
                                <div className="orderhistory__btn">재주문</div>
                            </div>
                            <div className="orderhistory__menu hidden" id={eltId}>
                                {data.order.map((content) => {
                                    return (
                                        <>
                                            <div className="menu__detail">
                                                <div className="menu__name">{content[0]}</div>
                                                <div className="menu__count">{content[2]} 개</div>
                                                <div className="menu__price">{content[1]} 원</div>
                                                <div className="menu__button-container">
                                                    <button>리뷰</button>
                                                    <button>재주문</button>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                                <div className="menu__receipt" onClick={() => {
                                    const elt = document.getElementById("receipt1");
                                    elt.classList.remove("hidden");
                                }}>승인전표조회</div>
                                <div className="receipt__container hidden" id="receipt1" onClick={() => {
                                    const elt = document.getElementById("receipt1");
                                    elt.classList.add("hidden");
                                }}>
                                    <div className="receipt__image" onClick={(e) => {
                                        e.stopPropagation();
                                    }}>영수증 이미지</div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })
        );
    }
}

export default OrderResult;
