import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import defaultImg from '../../assets/main/grayBI.png';

import {cookieCheck_approveGuest} from "./CookieCheck"

class StoreJSX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCnt: '',
            storeId: this.props.data.id,
            user: '',
            likeYn: '',
        }
    }

    componentDidMount() {
        let user_email = cookieCheck_approveGuest();

        this.setState({user_email});
        axios.get("/api/users_user/")
            .then((res) => {
                let user = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                });
                axios.post("/storeLike/", {
                    "storeId": this.props.data.id,
                    "userId": user.id,
                })
                    .then((res) => {
                        this.setState({
                            likeCnt: res.data.likeCnt,
                            likeYn: res.data.likeYn,
                            likeId: res.data.likeId,
                        });
                    });
                this.setState({user: user});
            });
    }

    render() {
        let d = this.props.data.show_dist;
        let data = this.props.data;

        let renderBody =
            <>
                <div className="store__store">
                        <img className="store__image" src={data.imgLogoUrl || defaultImg} alt="store"/>
                        <div className="store__detail">
                            <div className="detail__tags">
                                {/* <div className="tags__new">NEW</div> */}
                                {data.openYn === 'N'?
                                    <>
                                        <div className="tags__tag">금일영업종료</div>
                                    </>
                                    :
                                    null
                                }

                                {
                                    this.state.likeCnt !== undefined ?
                                    <button className={`tags__likes ${this.state.likeYn === 'Y' ? 'active' : ''}`} onClick={(e) => {
                                        e.preventDefault();

                                        let id = this.state.likeId;
                                        if(this.state.user.guestYn === 'N'){
                                            if(id === "") {
                                            axios.post("/api/stores_storeLike/", {
                                                likeYn: 'Y',
                                                user: this.state.user.id,
                                                store: this.state.storeId,
                                            })
                                            .then(() => {
                                                axios.post("/storeLike/", {
                                                    "storeId": this.props.data.id,
                                                    "userId": this.state.user.id,
                                                })
                                                .then((res) => {
                                                    this.setState({
                                                        likeCnt: res.data.likeCnt,
                                                        likeYn: res.data.likeYn,
                                                        likeId: res.data.likeId,
                                                    });
                                                })
                                            })
                                            } else {
                                                if(this.state.likeYn === 'Y') {
                                                    axios.put(`/api/stores_storeLike/${id}/`, {
                                                        likeYn: 'N',
                                                        user: this.state.user.id,
                                                        store: this.state.storeId,
                                                    })
                                                    .then(() => {
                                                        axios.post("/storeLike/", {
                                                            "storeId": this.props.data.id,
                                                            "userId": this.state.user.id,
                                                        })
                                                        .then((res) => {
                                                            this.setState({
                                                                likeCnt: res.data.likeCnt,
                                                                likeYn: res.data.likeYn,
                                                                likeId: res.data.likeId,
                                                            });
                                                        })
                                                    })
                                                } else if(this.state.likeYn === 'N') {
                                                    axios.put(`/api/stores_storeLike/${id}/`, {
                                                        likeYn: 'Y',
                                                        user: this.state.user.id,
                                                        store: this.state.storeId,
                                                    })
                                                    .then(() => {
                                                        axios.post("/storeLike/", {
                                                            "storeId": this.props.data.id,
                                                            "userId": this.state.user.id,
                                                        })
                                                        .then((res) => {
                                                            this.setState({
                                                                likeCnt: res.data.likeCnt,
                                                                likeYn: res.data.likeYn,
                                                                likeId: res.data.likeId,
                                                            });
                                                        })
                                                    })
                                                }
                                            }
                                        }
                                    }}>
                                        <span className="likes__heart">♥</span> {this.state.likeCnt}
                                    </button>
                                    :
                                    null
                                }
                            </div>
                            <div className="detail__title">
                                <div className="detail__name">{data.storeName}</div>
                                {/*<div className="detail__distance">거리 {data.show_dist}</div>*/}
                            </div>
                            <div className="detail__description">
                                {data.description}
                            </div>
                        </div>
                        <div className="store__stars">
                    {/*
                            <img src={star1}/>
                            <img src={star1}/>
                            <img src={star1}/>
                            <img src={star3}/>
                            <img src={star2}/>
                    */}
                        </div>
                        {/*<div className="store__review">*/}
                        {/*    <div className="review__content">*/}
                        {/*        맛도 맛인데 대기하지 않고 받을 수 있어서 너무 좋았어요!!*/}
                        {/*    </div>*/}
                        {/*    <button className={`review__likes ${Math.random() > 0.5 ? 'active' : ''}`} onClick={(e) => {*/}
                        {/*        e.preventDefault();*/}
                        {/*        // 좋아요 기능 추가 예정*/}
                        {/*    }}>*/}
                        {/*        <p className="likes__heart">♥</p> 56*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
            </>;

        return (
                <div className="content__store">
                    {data.openYn === 'Y' ?
                        <>
                            <Link to={{
                                pathname: `/main/store/${this.props.data.id}`,
                                state: {data, d}
                            }}>
                                {renderBody}
                            </Link>
                        </>
                        :
                        <>
                            {renderBody}
                        </>
                    }
                </div>
        );
    }
}

export default StoreJSX;
