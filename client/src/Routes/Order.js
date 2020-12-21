import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import axios from 'axios';
import lodash from 'lodash';
import closeBtn from '../assets/order_status_pop/btn_close.png';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderOrder from "../Components/js/HeaderOrder";
import cookie from "react-cookies";
import storage from "../storage";


function makeTokenSaveScript(token) {
        // let cookie_token = cookie.load("access_token");
        // if(!cookie_token){
        //     window.location.href = '/login/';
        // }
        // else if(cookie_token==='guest') {
        //     cookie.remove('access_token');
        //     window.location.href = '/login/';
        // }
        //
        // let user_email = storage.get(cookie_token);
        // let userId;
        //
        // // if(!user_email) window.location.href = 'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:3000/'; // URL EXCHANGE LOCAL
        // if(!user_email) window.location.href = '/'; // URL EXCHANGE RELATIVE
        // // if(!user_email) window.location.href = 'http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:3000/'; // URL EXCHANGE SERVER
        // //axios.get("http://localhost:8000/api/users_user/") // URL EXCHANGE LOCAL
        // axios.get("/api/users_user/") // URL EXCHANGE RELATIVE
        // // axios.get("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/users_user/") // URL EXCHANGE SERVER
        //     .then((res) => {
        //         userId = res.data.find((elt) => {
        //             if (elt.email === user_email) {
        //                 return true;
        //             }
        //         }).id;
        //     });
        // let transData = {"userId":userId, 'token':token};
        //
        // // axios.post('http://localhost:8000/saveToken/', transData); //URL EXCHANGE LOCAL
        // axios.post('/saveToken/', transData) //URL EXCHANGE RELATIVE
        // // axios.post('http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/saveToken/', transData) //URL EXCHANGE SERVER
    }


class Order extends React.Component {
    constructor(props) {
        super(props);
        const id = this.props.match.params.storeId;
        const link = "/main/store/" + id + "/orderinfo";
        this.categoryScrollDom = null;

        this.getKeymap = this.getKeymap.bind(this);
        this.clearOrderList = this.clearOrderList.bind(this);
        this.handleCategoryScroll = this.handleCategoryScroll.bind(this);

        let storeId = this.props.history.location.pathname.split("/")[3]; // 주소로부터 가져온 store code

        this.state = {
            link: link,
            storeName: "",
            storeId: storeId,
            storeCd: "",
            keymapCd: "",
            touchGroupCd: null,
            brandCd: "",
            touch_group: [],
            keymap: [],
            keymaps: [],
            item_data: [],
            order_list: [],
            options: {},
            modal_options: [],
            selected: "",
            orderContainerClosed: true,
            canScrollLeft: false,
            canScrollRight: false,
        };
    }

    getKeymap(data) {
        // 각 카테고리를 누르면 메뉴가 바뀔 수 있도록 state 변경
        let touchGroupCd = data.id;
        let keymap = this.state.keymaps.filter(
            (elt) => {
                if(elt.storeCd === this.state.storeId && elt.keymapCd === this.state.keymapCd && elt.touchGroupCd === touchGroupCd) {
                    return true;
                }
            }
        );
        this.setState({
            touchGroupCd: touchGroupCd,
            keymap: keymap,
        });
    }

    componentDidMount() {
        let cookie_token = cookie.load("access_token");
        if(!cookie_token){
            window.location.href = '/login/';
        }
        else if(cookie_token==='guest') {
            cookie.remove('access_token');
            window.location.href = '/login/';
        }
        let user_email = storage.get(cookie_token);

        let fcmToken = cookie.load("fcmToken");

        if(fcmToken){
            let transData = {"user_email":user_email, "fcmToken":fcmToken};

            axios.post('/saveToken/', transData) //URL EXCHANGE RELATIVE
            // axios.post('http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/trade/', transData) //URL EXCHANGE SERVER
                .then((res)=>{

                });
        }


        //axios.get("http://localhost:8000/api/stores_store/") //URL EXCHANGE LOCAL
        axios.get("/api/stores_store/") // URL EXCHANGE RELATIVE
        // axios.get("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/stores_store/") //URL EXCHANGE SERVER
        .then((res) => {
            let store = res.data.find(
                (elt) => {
                    //todo: ===이랑 ==이랑 다르게 동작
                    if (elt.id == this.state.storeId) {
                        return true;
                    }
                }
            );
            let storeId = store.id;
            let brandCd = store.brandCd;
            // axios.get("http://localhost:8000/api/stores_pos/") // URL EXCHANGE LOCAL
        axios.get("/api/stores_pos/") // URL EXCHANGE RELATIVE
        // axios.get("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/stores_pos/") // URL EXCHANGE SERVER
            .then((res) => {
                let keymapCd = res.data.find(
                    (elt) => {
                        if(elt.storeCd === storeId) {
                            return true;
                        }
                    }
                ).keymapCd;
                // axios.get("http://localhost:8000/api/keymaps_touchGroup/") //URL EXCHANGE LOCAL
                axios.get("/api/keymaps_touchGroup/") //URL EXCHANGE RELATIVE
                // axios.get("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/keymaps_touchGroup/") //URL EXCHANGE SERVER
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
                    // axios.get("http://localhost:8000/api/keymaps_keymap/") //URL EXCHANGE LOCAL
                axios.get("/api/keymaps_keymap/") //URL EXCHANGE RELATIVE
                // axios.get("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/keymaps_keymap/") //URL EXCHANGE SERVER
                    .then((res) => {
                        let keymap = res.data.filter(
                            (elt) => {
                                if(elt.storeCd === arr[1] && elt.keymapCd === arr[2] && elt.touchGroupCd === arr[0][0].id) {
                                    return true;
                                }
                            }
                        );


                        this.setState({
                            touch_group: arr[0],
                            storeId: arr[1],
                            keymapCd: arr[2],
                            brandCd: brandCd,
                            keymaps: res.data,
                            touchGroupCd: arr[0][0].id,
                            keymap: keymap,
                            storeName: store.storeName,
                        });

                        // init category scroll handle state
                        setTimeout(() => this.categoryScrollDom.dispatchEvent(new Event('scroll')));
                    })
                })
            });
        });

        // 각 item에 대해서 옵션 연결 성공
        // axios.get("http://localhost:8000/api/items_item/") //URL EXCHANGE LOCAL
        axios.get("/api/items_item/") //URL EXCHANGE RELATIVE
        // axios.get("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/items_item/") //URL EXCHANGE SERVER
        .then((res) => {
            let item_data = res.data;
            let options = {}
        // axios.get("http://localhost:8000/api/items_itemAdd/") //URL EXCHANGE LOCAL
        axios.get("/api/items_itemAdd/") //URL EXCHANGE RELATIVE
        // axios.get("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/items_itemAdd/") //URL EXCHANGE SERVER
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

    // 초기화 버튼
    clearOrderList() {
        this.setState({
            order_list: []
        });
    }

    handleCategoryScroll(e) {
        let scrollWidth = e.target.scrollWidth;
        let domWidth = e.target.clientWidth;
        let prevCanScrollLeft = this.state.canScrollLeft;
        let prevCanScrollRight = this.state.canScrollRight;
        let canScrollLeft = e.target.scrollLeft > 0;
        let canScrollRight = domWidth + e.target.scrollLeft < scrollWidth;

        if (prevCanScrollLeft !== canScrollLeft
            || prevCanScrollRight !== canScrollRight) {
            this.setState({canScrollLeft, canScrollRight});
        }
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
                        <img className="optionmodal__close" alt="close button"  src={closeBtn} onClick={() => {
                            const elt = document.getElementById("optionmodal");
                            elt.classList.add("hidden");
                            this.setState({
                                modal_options: []
                            });
                        }}/>
                        <div className="optionmodal__header">
                            <img src={this.state.selected.imgSmallUrl} alt="menu" />
                            <div className="optionmodal__title">
                                <div className="optionmodal__name">{this.state.selected.itemName}</div>
                                <div className="optionmodal__description">처음부터 끝까지 모자렐라 치즈의 풍미를 즐길 수 있는 핫도그</div>
                                <div className="optionmodal__content">{this.state.selected.price}원</div>
                            </div>
                        </div>
                        {/*<div className="optionmodal__category">
                            <div className="category__category active">소스</div>
                            <div className="category__category">토핑</div>
                            <div className="category__category">치즈</div>
                        </div>*/}
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
                                                {data.itemName}
                                            </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                        <div className="optionmodal__result">
                            <div className="result__container">
                                {
                                    this.state.modal_options.map((item, index) => {
                                        return (
                                            <div className="result__content">
                                                <div className="seq">{index + 1}</div>
                                                <div className="name">{item[0].itemName}</div>
                                                <div className="price">{item[0].price}원</div>
                                                <div className="decrease" onClick={() => {
                                                    item[1] -= 1;
                                                    if(item[1] === 0) {
                                                        this.state.modal_options.splice(index, 1);
                                                    }
                                                    this.setState(this.state);
                                                }}>-</div>
                                                <div className="qty">{item[1]}</div>
                                                <div className="increase" onClick={() => {
                                                    item[1] += 1;
                                                    this.setState(this.state);
                                                }}>+</div>
                                                <div className="remove__box">
                                                    <div className="remove" onClick={() => {
                                                        for(let i in this.state.modal_options) {
                                                            if(this.state.modal_options[i][0] === item[0]) {
                                                                this.state.modal_options.splice(i, 1);
                                                                this.setState(this.state);
                                                            }
                                                        }
                                                    }}>X</div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="optionmodal__btn">
                            <button className="optionmodal__clear" onClick={() => {
                                this.setState({
                                    modal_options: []
                                });
                            }}>초기화</button>
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
                            <div className="optionmodal__occupant"/>
                        </div>
                    </div>
                </div>

                <HeaderOrder url='/mypage' storeName={this.state.storeName} />
                <div className="orderpage">
                    <div className="order__category">
                        <div className={`category__left ${this.state.canScrollLeft ? 'scroll' : ''}`}><span>{"<"}</span></div>
                        <div ref={instance => this.categoryScrollDom = instance} className="content__box" onScroll={this.handleCategoryScroll}>
                            {this.state.touch_group.map((data) => {
                                return (
                                    <div className={"category__content " + (this.state.touchGroupCd === data.id ? 'active' : '')} id={data.id} key={data.id} onClick={() => this.getKeymap(data)}>{data.touchGroupName}</div>
                                );
                            })}
                        </div>
                        <div className={`category__right ${this.state.canScrollRight ? 'scroll' : ''}`}><span>{">"}</span></div>
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
                                        <div onClick={this.clearOrderList}>
                                            <FontAwesomeIcon icon={faRedo}/>
                                        </div>
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
                                    storeCd: this.state.storeCd,
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
                                                <div className="cancel__button" onClick={() => {
                                                    const idx = this.state.order_list.indexOf(data);
                                                    this.state.order_list.splice(idx, 1);
                                                    this.setState(this.state);
                                                }}>
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
