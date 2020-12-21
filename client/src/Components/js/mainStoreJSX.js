import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import defaultImg from '../../assets/main/grayBI.png';
import cookie from "react-cookies";
import storage from "../../storage";


class StoreJSX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: null,
            storeId: this.props.data.id,
            userId: '',
            likeYn: null,
            userEmail: '',
        }
    }

    componentDidMount() {

        let cookie_token = cookie.load("access_token");
        if(!cookie_token) window.location.href = '/login/';
        let user_email;
        if(!cookie_token){
          window.location.href = '/login/';
        } else if(cookie_token === 'guest'){
            user_email = 'pocketmarket.official@gmail.com'
        } else {
            user_email = storage.get(cookie_token);
        }

        this.setState({user_email});
        let userId;

        //axios.get("http://localhost:8000/api/users_user/") // URL EXCHANGE LOCAL
        axios.get("/api/users_user/") // URL EXCHANGE RELATIVE
        // axios.get("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/users_user/") // URL EXCHANGE SERVER
            .then((res) => {
                userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;
                axios.post("/storeLike/", { // URL EXCHANGE RELATIVE
                    "storeId": this.props.data.id,
                    "userId": userId,
                })
                    .then((res) => {
                        this.setState({
                            like: res.data.likeCnt,
                            likeYn: res.data.likeYn,
                            likeId: res.data.likeId,
                        });
                    });
                this.setState({userId: userId});
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
                                    this.state.like !== undefined ?
                                    <button className={`tags__likes ${this.state.likeYn === 'Y' ? 'active' : ''}`} onClick={(e) => {
                                        e.preventDefault();

                                        let id = this.state.likeId;
                                        if(this.state.user_email !== 'pocketmarket.official@gmail.com'){
                                            if(id === "") {
                                            // axios.post("http://localhost:8000/api/stores_storeLike/", { //URL EXCHANGE LOCAL
                                            axios.post("/api/stores_storeLike/", { // URL EXCHANGE RELATIVE
                                            // axios.post("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/stores_storeLike/", { //URL EXCHANGE SERVER
                                                likeYn: 'Y',
                                                user: this.state.userId,
                                                store: this.state.storeId,
                                            })
                                            .then(() => {
                                                // axios.post("http://localhost:8000/storeLike/", { //URL EXCHANGE LOCAL
                                                axios.post("/storeLike/", { // URL EXCHANGE RELATIVE
                                                // axios.post("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/storeLike/", { //URL EXNCAHNGE SERVER
                                                    "storeId": this.props.data.id,
                                                    "userId": this.state.userId,
                                                })
                                                .then((res) => {
                                                    this.setState({
                                                        like: res.data.likeCnt,
                                                        likeYn: res.data.likeYn,
                                                        likeId: res.data.likeId,
                                                    });
                                                })
                                            })
                                            } else {
                                                if(this.state.likeYn === 'Y') {
                                                    // axios.put(`http://localhost:8000/api/stores_storeLike/${id}/`, { //URL EXCHANGE LOCAL
                                                    axios.put(`/api/stores_storeLike/${id}/`, { //URL EXCHANGE RELATIVE
                                                    // axios.put(`http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/stores_storeLike/${id}/`, { //URL EXCHANGE SERVER
                                                        likeYn: 'N',
                                                        user: this.state.userId,
                                                        store: this.state.storeId,
                                                    })
                                                    .then(() => {
                                                        // axios.post("http://localhost:8000/storeLike/", { //URL EXCHANGE LOCAL
                                                        axios.post("/storeLike/", { // URL EXCHANGE RELATIVE
                                                        // axios.post("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/storeLike/", { //URL EXCHANGE SERVER
                                                            "storeId": this.props.data.id,
                                                            "userId": this.state.userId,
                                                        })
                                                        .then((res) => {
                                                            this.setState({
                                                                like: res.data.likeCnt,
                                                                likeYn: res.data.likeYn,
                                                                likeId: res.data.likeId,
                                                            });
                                                        })
                                                    })
                                                } else if(this.state.likeYn === 'N') {
                                                    // axios.put(`http://localhost:8000/api/stores_storeLike/${id}/`, { //URL EXCHANGE LOCAL
                                                    axios.put(`/api/stores_storeLike/${id}/`, { //URL EXCHANGE RELATIVE
                                                    // axios.put(`http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/stores_storeLike/${id}/`, { //URL EXCHANGE SERVER
                                                        likeYn: 'Y',
                                                        user: this.state.userId,
                                                        store: this.state.storeId,
                                                    })
                                                    .then(() => {
                                                        // axios.post("http://localhost:8000/storeLike/", { //URL EXCHANGE LOCAL
                                                        axios.post("/storeLike/", { //URL EXCHANGE RELATIVE
                                                        // axios.post("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/storeLike/", { //URL EXCHANGE SERVER
                                                            "storeId": this.props.data.id,
                                                            "userId": this.state.userId,
                                                        })
                                                        .then((res) => {
                                                            this.setState({
                                                                like: res.data.likeCnt,
                                                                likeYn: res.data.likeYn,
                                                                likeId: res.data.likeId,
                                                            });
                                                        })
                                                    })
                                                }
                                            }
                                        }
                                    }}>
                                        <span className="likes__heart">♥</span> {this.state.like}
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
