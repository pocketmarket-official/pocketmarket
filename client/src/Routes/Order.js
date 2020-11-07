import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import axios from 'axios';
import lodash from 'lodash';
import '../Components/scss/order.scss';


class Order extends React.Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.storeId;
        const link = "/main/store/" + id + "/orderinfo";

        this.getKeymap = this.getKeymap.bind(this);
        this.clearOrderList = this.clearOrderList.bind(this);

        this.state = {
            link: link,
            storeName: "",
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
            orderContainerClosed: false,
        };

        // initialization of the touch group code
        let storeCd = this.props.history.location.pathname.split("/")[3]; // 주소로부터 가져온 store code
        axios.get("/api/stores_store/")
        .then((res) => {
            let store = res.data.find(
                (elt) => {
                    if (elt.storeCd === storeCd) {
                        return true;
                    }
                }
            );
            let storeId = store.id;
            axios.get("/api/stores_pos/")
            .then((res) => {
                let keymapCd = res.data.find(
                    (elt) => {
                        if(elt.id === storeId) {
                            return true;
                        }
                    }
                ).keymapCd;
                axios.get("/api/keymaps_touchGroup/")
                .then((res) => {
                    let touch_group_id = res.data.find(
                        (elt) => {
                            if(elt.storeCd === storeId && elt.keymapCd === keymapCd) {
                                return true;
                            }
                        }
                    ).id;

                    this.setState({
                        touchGroupCd: touch_group_id,
                        storeName: store.storeName,
                    })
                })
            });
        });

        // 각 item에 대해서 옵션 연결 성공
        axios.get("/api/items_item/")
        .then((res) => {
            let item_data = res.data;
            let options = {}
            axios.get("/api/items_itemAdd/")
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
        axios.get("/api/keymaps_keymap/")
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
        axios.get("/api/stores_store/")
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
            axios.get("/api/stores_pos/")
            .then((res) => {
                let keymapCd = res.data.find(
                    (elt) => {
                        if(elt.id === storeId) {
                            return true;
                        }
                    }
                ).keymapCd;
                axios.get("/api/keymaps_touchGroup/")
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
                    axios.get("/api/keymaps_keymap/")
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
        // 수량 가격
        let cnt = 0;
        let price = 0;
        let order = [];
        for(let index in this.state.order_list) {
            cnt += this.state.order_list[index][1];
            price += this.state.order_list[index][0].price * this.state.order_list[index][1];
            if(this.state.order_list[index][0].option) {
                for(let item in this.state.order_list[index][0].option) {
                    price += this.state.order_list[index][0].option[item][0].price * this.state.order_list[index][0].option[item][1] * this.state.order_list[index][1];
                }
            }
        }

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
                                                    if(lodash.isEqual(this.state.modal_options[i][0], data)) {
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
                                <button className="optionmodal__select" onClick={() => {
                                    let menu = lodash.cloneDeep(this.state.selected);
                                    menu["option"] = lodash.cloneDeep(this.state.modal_options);
                                    this.setState({
                                        order_list: this.state.order_list.concat([[menu, 1]]),
                                        modal_options: [],
                                        selected: "",
                                        price: price,
                                        order: order,
                                    });
                                    const elt = document.getElementById("optionmodal");
                                    elt.classList.add("hidden");
                                }}>주문담기</button>
                                <button className="optionmodal__clear" onClick={() => {
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
                            <div className="order__store">{this.state.storeName}</div>
                            <div className="order__store__wait">waiting</div>
                        </div>
                    </div>
                    <div className="order__category">
                        <div className="category__left scroll"><span>{"<"}</span></div>
                        {/*<div className="category__left"><span>{"<"}</span></div>*/}
                        <div className="content__box">
                            {this.state.touch_group.map((data) => {
                                return (
                                    <div className="category__content" id={data.id} key={data.id} onClick={() => this.getKeymap(data)}>{data.touchGroupName}</div>
                                );
                            })}
                        </div>
                        <div className="category__right"><span>{">"}</span></div>
                        {/*<div className="category__right scroll"><span>{">"}</span></div>*/}
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
                                                        elt.classList.remove("hidden");
                                                    } else {
                                                        let flag = false;
                                                        for(let i in this.state.order_list) {
                                                            if(this.state.order_list[i][0] === data) {
                                                                this.state.order_list[i][1] += 1;
                                                                this.setState(this.state);
                                                                flag = true;
                                                            }
                                                        }

                                                        if(!flag) {
                                                            this.setState({
                                                                order_list: this.state.order_list.concat([[data, 1]]),
                                                            })
                                                        }
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

                    <div className={"order__container " + (this.state.orderContainerClosed ? 'close' : '')}>
                        <div className="container__control__box" onClick={() => this.setState({orderContainerClosed: !this.state.orderContainerClosed})}>
                            <div className="container__controller">{">"}</div>
                        </div>
                        <div className="order__result">
                            <div className="order__result__box">
                                <div className="reset__button">
                                    <div className="reset__image">
                                        <div onClick={this.clearOrderList}>⟳</div>
                                    </div>
                                </div>
                                <div className="result__box">
                                    <div className="order__quantity">
                                        수량
                                        <div className="order__total-quantity">{cnt}개</div>
                                    </div>
                                    <div className="order__cost">
                                        금액
                                        <div className="cost__cost">{price}원</div>
                                    </div>
                                </div>
                            </div>
                            <Link to={{
                                pathname: this.state.link,
                                state: {
                                    order: this.state.order_list,
                                    storeName: this.state.storeName,
                                    storeId: this.state.storeId,
                                }}}>
                                <div className="order__pass">주문결제</div>
                            </Link>
                        </div>
                        <div className="order__detail">
                            {
                                this.state.order_list.map((data) => {
                                    return (
                                        <>
                                            <div className="order__item">
                                                <div className="item__list">1</div>
                                                <div className="item__name">{data[0].itemName}</div>
                                                <div className="item__option__box">
                                                    <div className="item__option" onClick={() => {
                                                        if(data[0].option) {
                                                            const elt = document.getElementById("optionmodal");
                                                            console.log(data[0].option);
                                                            this.setState({
                                                                selected: data[0],
                                                                modal_options: data[0].option,
                                                            }, () => {
                                                                const idx = this.state.order_list.indexOf(data);
                                                                this.state.order_list.splice(idx, 1);
                                                                elt.classList.remove("hidden");
                                                            })
                                                        }
                                                    }}>옵션변경</div>
                                                </div>
                                                <div className="item__quantity__box">
                                                    <div className="item__decrease__button" onClick={() => {
                                                        data[1] -= 1;
                                                        if(data[1] === 0) {
                                                            const idx = this.state.order_list.indexOf(data);
                                                            this.state.order_list.splice(idx, 1);
                                                        }
                                                        this.setState(this.state);
                                                    }}>
                                                        <div className="item__decrease">-</div>
                                                    </div>
                                                    <div className="item__quantity">
                                                        {data[1]}
                                                    </div>
                                                    <div className="item__increase__button" onClick={() => {
                                                        data[1] += 1;
                                                        this.setState(this.state);
                                                    }}>
                                                        <div className="item__increase">+</div>
                                                    </div>
                                                </div>
                                                <div className="cancel__button">
                                                    X
                                                </div>
                                            </div>
                                            <div className="item__line"></div>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Order;
