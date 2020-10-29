import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import OptionModal from '../Components/js/OptionModal';


class Order extends React.Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.storeId;
        const link = "/main/store/" + id + "/orderinfo";

        this.getKeymap = this.getKeymap.bind(this);
        this.clearOrderList = this.clearOrderList.bind(this);

        //trades info
        //Trade common information
        const posNo = this.props.match.params.posNo;
        const saleFlag = '1';
        //Trade Detail
        let seq = 0;
        let orderType = '';
        let itemCd = '';
        let itemName = '';
        let qty = 0;
        let itemSellGroup = '';
        let itemSellLevel = '';
        let itemSellType = '';
        let tradesInfo= [];

        // sample data for trade
        for(let i=0; i<5; i++){
            seq += 1;
            let tradesInfoRow = {
                storeId: id,
                posNo: posNo,
                saleFlag: saleFlag,
                seq: seq,
                orderType: orderType,
                itemCd: itemCd,
                itemName: itemName,
                qty: qty,
                itemSellGroup: itemSellGroup,
                itemSellLevel: itemSellLevel,
                itemSellType: itemSellType
            };
            tradesInfo.push(tradesInfoRow);
        }

        // keymap -> 카테고리 가져오고 카테고리로 다시 메뉴 가져와야함
        let touch_group = [
            {
                name: '음료',
                code: 1,
            },
            {
                name: '디저트',
                code: 2,
            },
            {
                name: '햄버거',
                code: 3,
            },
            {
                name: '기타',
                code: 4,
            },
        ];

        let keymap = [
            {
                group_cd: 1,
                menu: '아이스아메리카노',
                price: 4500,
            },
            {
                group_cd: 2,
                menu: '초코케잌',
                price: 6500,
            },
            {
                group_cd: 1,
                menu: '아이스라떼',
                price: 5500,
            },
            {
                group_cd: 3,
                menu: '치즈버거',
                price: 4000,
            },
            {
                group_cd: 2,
                menu: '티라미수',
                price: 5000,
            },
            {
                group_cd: 2,
                menu: '쿠앤크',
                price: 6500,
            },
            {
                group_cd: 1,
                menu: '초콜릿라떼',
                price: 6000,
            },
            {
                group_cd: 2,
                menu: '생크림',
                price: 5500,
            },
            {
                group_cd: 3,
                menu: '빅맥',
                price: 7500,
            },
        ];

        this.state = {
            link: link,
            sellItemList: tradesInfo,
            touch_group: touch_group,
            keymap: keymap,
            keymap_Cd: 1,
            selected: "",
            order_list: [],
        }
    }

    getKeymap(e) {
        this.setState({
            keymap_Cd: e.target.id,
        });
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    clearOrderList() {
        this.setState({
            order_list: []
        });
    }

    render() {
        let temp_list = this.state.keymap.filter((item) => item.group_cd == this.state.keymap_Cd);
        return (
            <>
                <OptionModal menu={this.state.selected} />
                <HeaderBack url='/mypage' />
                <div className="orderpage">
                    <div className="order__category">
                        {this.state.touch_group.map((data) => {
                            return (
                                <div className="category__content" id={data.code} onClick={(e) => this.getKeymap(e)}>{data.name}</div>
                            );
                        })}
                    </div>
                    <div className="order__menu">
                    {
                        temp_list.map((data) => {
                            return (
                                <>
                                    <div className="menu__container" onClick={() => {
                                                const elt = document.getElementById("optionmodal");
                                                this.setState({
                                                    selected: data.menu,
                                                });
                                                elt.classList.remove("hidden");
                                            }}>
                                        <div className="menu__image">image</div>
                                        <div className="menu__name">{data.menu}</div>
                                    </div>
                                </>
                            );
                        })
                    }
                    </div>

                    <div className="order__container">
                        <div className="order__result">
                            <div onClick={this.clearOrderList}>초기화</div>
                            <div className="order__quantity">
                                수량
                                <div className="order__total-quantity">8개</div>
                            </div>
                            <div className="order__cost">
                                금액
                                <div className="cost__cost">12,000원</div>
                            </div>
                            <div><Link to={{
                                pathname: this.state.link,
                                state: {
                                    sellItemList: this.state.sellItemList,
                                }}
                            }>주문결제</Link></div>
                        </div>
                        <div className="order__detail">
                            <div className="order__item">
                                <div className="item__name">상품명</div>
                                <div onClick={() => {
                                    const elt = document.getElementById("optionmodal");
                                    elt.classList.remove("hidden");
                                }}>옵션변경</div>
                                <input type="number" name="quantity" id="quantity" />
                                <button>X</button>
                            </div>
                            <div className="order__item">
                                <div className="item__name">상품명</div>
                                <div>옵션변경</div>
                                <input type="number" name="quantity" id="quantity" />
                                <button>X</button>
                            </div>
                            <div className="order__item">
                                <div className="item__name">상품명</div>
                                <div>옵션변경</div>
                                <input type="number" name="quantity" id="quantity" />
                                <button>X</button>
                            </div>
                            <div className="order__item">
                                <div className="item__name">상품명</div>
                                <div>옵션변경</div>
                                <input type="number" name="quantity" id="quantity" />
                                <button>X</button>
                            </div>
                            <div className="order__item">
                                <div className="item__name">상품명</div>
                                <div>옵션변경</div>
                                <input type="number" name="quantity" id="quantity" />
                                <button>X</button>
                            </div>
                            <div className="order__item">
                                <div className="item__name">상품명</div>
                                <div>옵션변경</div>
                                <input type="number" name="quantity" id="quantity" />
                                <button>X</button>
                            </div>
                            <div className="order__item">
                                <div className="item__name">상품명</div>
                                <div>옵션변경</div>
                                <input type="number" name="quantity" id="quantity" />
                                <button>X</button>
                            </div>
                            <div className="order__item">
                                <div className="item__name">상품명</div>
                                <div>옵션변경</div>
                                <input type="number" name="quantity" id="quantity" />
                                <button>X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Order;
