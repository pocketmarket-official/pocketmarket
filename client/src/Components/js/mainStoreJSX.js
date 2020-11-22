import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import storImg from '../../assets/store/img1.png';
import star1 from '../../assets/store/star1.png';
import star2 from '../../assets/store/star2.png';
import star3 from '../../assets/store/star3.png';
import defaultImg from '../../assets/main/grayBI.png';


class StoreJSX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: null,
            storeId: this.props.data.id,
            userId: this.props.userId,
            likeYn: null,
        }
    }

    componentDidMount() {
        // axios.post("http://localhost:8000/storeLike/", {  URL EXCHANGE
            axios.post("http://13.124.90.138:8000/storeLike/", {
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
    }

    render() {
        let d = this.props.data.show_dist;
        let data = this.props.data;
        return (
                <div className="content__store">
                    <Link to={{
                        pathname: `/main/store/${this.props.data.storeCd}`,
                        state: {data, d}
                    }}>
                    <div className="store__store">
                        <img className="store__image" src={data.imgLogoUrl || defaultImg} alt="store"/>
                        <div className="store__detail">
                            <div className="detail__tags">
                                {/* <div className="tags__new">NEW</div> */}
                                <div className="tags__tag">@반포 낭만달빛마켓</div>
                                {
                                    this.state.like !== undefined ?
                                    <button className="tags__likes" onClick={(e) => {
                                        e.preventDefault();

                                        let id = this.state.likeId;
                                        if(id === "") {
                                            alert(this.state.userId);
                                            alert(this.state.storeId);
                                            // axios.post("http://localhost:8000/api/stores_storeLike/", { URL EXCHANGE
                                                axios.post("/api/stores_storeLike/", {
                                                likeYn: 'Y',
                                                user: this.state.userId,
                                                store: this.state.storeId,
                                            })
                                            .then(() => {
                                                alert('2');
                                                // axios.post("http://localhost:8000/storeLike/", { URL EXCHANGE
                                                axios.post("http://13.124.90.138:8000/storeLike/", {
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
                                                alert('3');
                                                // axios.put(`http://localhost:8000/api/stores_storeLike/${id}/`, { URL EXCHANGE
                                                axios.put(`/api/stores_storeLike/${id}/`, {
                                                    likeYn: 'N',
                                                    user: this.state.userId,
                                                    store: this.state.storeId,
                                                })
                                                .then(() => {
                                                    alert('4');
                                                    // axios.post("http://localhost:8000/storeLike/", { URL EXCHANGE
                                                    axios.post("http://13.124.90.138:8000/storeLike/", {
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
                                                alert('5');
                                                // axios.put(`http://localhost:8000/api/stores_storeLike/${id}/`, { URL EXCHANGE
                                                axios.put(`/api/stores_storeLike/${id}/`, {
                                                    likeYn: 'Y',
                                                    user: this.state.userId,
                                                    store: this.state.storeId,
                                                })
                                                .then(() => {
                                                    alert('6');
                                                    // axios.post("http://localhost:8000/storeLike/", { URL EXCHANGE
                                                    axios.post("http://13.124.90.138:8000/storeLike/", {
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

                                    }}>♥ {this.state.like}</button>
                                    :
                                    null
                                }
                            </div>
                            <div className="detail__title">
                                <div className="detail__name">{data.storeName}</div>
                                <div className="detail__distance">거리 {data.show_dist}</div>
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
                        <div className="store__review">
                            <div className="review__content">
                                한입 와앙! 물고 놨는데 한도끝도 없이 끊어지지 않고 늘어나는 치즈 (;;;)
                                ㅋㅋㅋㅋ 사진으로 그게 표현이 안되는게 아쉽네..ㅜ?
                                한입 와앙! 물고 놨는데 한도끝도 없이 끊어지지 않고 늘어나는 치즈 (;;;)
                                ㅋㅋㅋㅋ 사진으로 그게 표현이 안되는게 아쉽네..ㅜ?
                            </div>
                            <button className="review__likes" onClick={(e) => {
                                e.preventDefault();
                                // 좋아요 기능 추가 예정
                            }}>
                                <p>♥</p> 56
                            </button>
                        </div>
                    </div>
                    </Link>
                </div>
        );
    }
}

export default StoreJSX;
