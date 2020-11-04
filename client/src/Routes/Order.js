import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import axios from 'axios';
import '../Components/scss/order.scss';


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

        this.state = {
            link: link,
            sellItemList: tradesInfo,
            storeId: "",
            keymapCd: "",
            touchGroupCd: 0,
            brandCd: "",
            touch_group: [],
            keymap: [],
            item_data: [],
            order_list: [],
            options: {},
            modal_options: [],
            selected: "",
        }

        // initialization of the touch group code
        let storeCd = this.props.history.location.pathname.split("/")[3]; // 주소로부터 가져온 store code
        axios.get("http://13.124.90.138:8000/api/stores_store/")
        .then((res) => {
            let store = res.data.find(
                (elt) => {
                    if (elt.storeCd === storeCd) {
                        return true;
                    }
                }
            );
            let storeId = store.id;
            axios.get("http://13.124.90.138:8000/api/stores_pos/")
            .then((res) => {
                let keymapCd = res.data.find(
                    (elt) => {
                        if(elt.id === storeId) {
                            return true;
                        }
                    }
                ).keymapCd;
                axios.get("http://13.124.90.138:8000/api/keymaps_touchGroup/")
                .then((res) => {
                    let touch_group_id = res.data.find(
                        (elt) => {
                            if(elt.storeCd === storeId && elt.keymapCd === keymapCd) {
                                return true;
                            }
                        }
                    ).id;

                    this.setState({
                        touchGroupCd: touch_group_id
                    })

                })
            });
        });

        // 각 item에 대해서 옵션 연결 성공
        axios.get("http://13.124.90.138:8000/api/items_item/")
        .then((res) => {
            let item_data = res.data;
            let options = {}
            axios.get("http://13.124.90.138:8000/api/items_itemAdd/")
            .then((res) => {
                res.data.map((item) => {
                    let itemAddCd = item.itemAddCd;
                    let elt = item_data.find((element) => {if(element.id === item.itemCd) { return true;}});
                    let option = []
                    itemAddCd.map((data) => {
                        for(let i in item_data) {
                            if(item_data[i].id === data) {
                                option.push(item_data[i]);
                                break;
                            }
                        }
                        options[elt.id] = option;
                    });
                });
                this.setState({
                    options: options,
                    item_data: item_data,
                });
            });
        });
    }

    getKeymap(data) {
        // 각 카테고리를 누르면 메뉴가 바뀔 수 있도록 state 변경
        let touchGroupCd = data.id;
        axios.get("http://13.124.90.138:8000/api/keymaps_keymap/")
        .then((res) => {
            let keymap = res.data.filter(
                (elt) => {
                    if(elt.storeCd === this.state.storeId && elt.keymapCd === this.state.keymapCd && elt.touchGroupCd === touchGroupCd) {
                        return true;
                    }
                });
            this.setState({
                touchGroupCd: touchGroupCd,
                keymap: keymap,
            });
        })
    }

    componentDidMount() {
        let storeCd = this.props.history.location.pathname.split("/")[3]; // 주소로부터 가져온 store code
        axios.get("http://13.124.90.138:8000/api/stores_store/")
        .then((res) => {
            let store = res.data.find(
                (elt) => {
                    if (elt.storeCd === storeCd) {
                        return true;
                    }
                }
            );
            let storeId = store.id;
            let brandCd = store.brandCd;
            axios.get("http://13.124.90.138:8000/api/stores_pos/")
            .then((res) => {
                let keymapCd = res.data.find(
                    (elt) => {
                        if(elt.id === storeId) {
                            return true;
                        }
                    }
                ).keymapCd;
                axios.get("http://13.124.90.138:8000/api/keymaps_touchGroup/")
                .then((res) => {
                    let touch_group = res.data.filter(
                        (elt) => {
                            if(elt.storeCd === storeId && elt.keymapCd === keymapCd) {
                                return true;
                            }
                        }
                    );
                    return [touch_group, storeId, keymapCd];
                })
                .then((arr) => {
                    axios.get("http://13.124.90.138:8000/api/keymaps_keymap/")
                    .then((res) => {
                        let keymap = res.data.filter(
                            (elt) => {
                                if(elt.storeCd === arr[1] && elt.keymapCd === arr[2] && elt.touchGroupCd === this.state.touchGroupCd) {
                                    return true;
                                }
                            });
                        return keymap;
                    })
                    .then((keymap) => {
                        this.setState({
                            touch_group: arr[0],
                            storeId: arr[1],
                            keymapCd: arr[2],
                            brandCd: brandCd,
                            keymap: keymap,
                        });
                    })
                })
            });
        });
    }

    // 초기화 버튼
    clearOrderList() {
        this.setState({
            order_list: []
        });
    }

    render() {
        let selected_touchgroup = this.state.item_data.filter((item) => {
            for(let i in this.state.keymap) {
                if(this.state.keymap[i].itemCd === item.id) {
                    return true;
                }
            }
        });
        let options = this.state.options[this.state.selected.id] || [];
        return (
            <>
                <div className="optionmodal hidden" id="optionmodal" onClick={() => {
                    const elt = document.getElementById("optionmodal");
                    elt.classList.add("hidden");
                    this.setState({
                        modal_options: []
                    });
                }}>
                    <div className="optionmodal__container" onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <div className="optionmodal__header">
                            <img src={this.state.selected.imgSmallUrl} alt="menu" />
                            <div className="optionmodal__title">
                                <div className="optionmodal__name">{this.state.selected.itemName}</div>
                                <div className="optionmodal__content">{this.state.selected.price}원</div>
                            </div>
                        </div>
                        {/*
                        <div className="optionmodal__category">
                            {
                                this.state.opt_cat.map((data) => {
                                    return (
                                        <div className="category__category">{data}</div>
                                    );
                                })
                            }
                        </div>
                        */}
                        <div className="optionmodal__options">
                            {
                                options.map((data) => {
                                    return (
                                        <>
                                            <div className="options__option" onClick={() => {
                                                let flag = false;
                                                for (let i in this.state.modal_options) {
                                                    if(this.state.modal_options[i][0] === data) {
                                                        this.state.modal_options[i][1] += 1
                                                        this.setState(this.state);
                                                        flag = true;
                                                    }
                                                }
                                                if(!flag) {
                                                    this.setState({
                                                        modal_options: this.state.modal_options.concat([[data, 1]])
                                                    });
                                                }
                                            }}>
                                                <div>{data.itemName}</div>
                                                <div>{data.price}원</div>
                                            </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                        <div className="optionmodal__result">
                            <div className="result__container">
                                <div className="result__content">
                                    {
                                        this.state.modal_options.map((item) => {
                                            return (
                                                <>
                                                    <div>{item[0].itemName}</div>
                                                    <input type="number" id="option__quantity" value={item[1]} />
                                                    <button onClick={() => {
                                                        for(let i in this.state.modal_options) {
                                                            if(this.state.modal_options[i][0] === item[0]) {
                                                                this.state.modal_options.splice(i, 1);
                                                                this.setState(this.state);
                                                            }
                                                        }
                                                    }}>X</button>
                                                </>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className="optionmodal__btn">
                                <button className="optionmodal__select">주문담기</button>
                                <button className="optionmodal__clear" onClick={() => {
                                    const elt = document.getElementById("optionmodal");
                                    this.setState({
                                        modal_options: []
                                    });
                                }}>초기화</button>
                            </div>
                        </div>
                    </div>
                </div>

                <HeaderBack url='/mypage' />
                <div className="orderpage">
                    <div className="order__wait__box">
                        <div className="order__wait__message_box">
                            <div className="order__store">storeName</div>
                            <div className="order__store__wait">waiting</div>
                        </div>
                    </div>
                    <div className="order__category">
                        <div className="category__left"><span>{"<"}</span></div>
                        <div className="category__right"><span>{">"}</span></div>
                        {this.state.touch_group.map((data) => {
                            return (
                                <div className="category__content" id={data.code} onClick={() => this.getKeymap(data)}>{data.touchGroupName}</div>
                            );
                        })}
                    </div>
                    <div className="order__menu">
                    {
                        selected_touchgroup.map((data) => {
                            return (
                                <>
                                    <div className="menu__container" onClick={() => {
                                                const elt = document.getElementById("optionmodal");
                                                this.setState({
                                                    selected: data,
                                                }, () => {
                                                    if(this.state.options[this.state.selected.id]) {
                                                        elt.classList.remove("hidden"); // option 있는 뇨속만 modal 띄우기 없는 녀석은 바로 추가
                                                    }
                                                });
                                            }}>
                                        <img className="menu__image" src={data.imgSmallUrl} alt="menu" />
                                        <div className="menu__name">{data.itemName}</div>
                                        <div className="menu__price">{data.price}원</div>
                                    </div>
                                </>
                            );
                        })
                    }
                    </div>

                    <div className="order__container">
                        <div className="order__result">
                            <div className="order__result__box">
                                <div className="reset__button">
                                    <div onClick={this.clearOrderList}>초기화</div>
                                </div>
                                <div className="result__box">
                                    <div className="order__quantity">
                                        수량
                                        <div className="order__total-quantity">8개</div>
                                    </div>
                                    <div className="order__cost">
                                        금액
                                        <div className="cost__cost">12,000원</div>
                                    </div>
                                </div>
                            </div>
                            <Link to={{
                                pathname: this.state.link,
                                state: {
                                    sellItemList: this.state.sellItemList,
                                }}}>
                                <div className="order__pass">주문결제</div>
                            </Link>
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
                                <div className="item__list">1</div>
                                <div className="item__name">상품명</div>
                                <div className="item__option__box">
                                    <div className="item__option">옵션변경</div>
                                </div>
                                <div className="item__decrease__button">
                                    <div className="item__decrease">-</div>
                                </div>
                                <div className="item__quantity">
                                    2
                                </div>
                                <div className="item__increase__button">
                                    <div className="item__increase">+</div>
                                </div>
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
