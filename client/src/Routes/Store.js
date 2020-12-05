import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import StoreList from '../Components/js/StoreList';

import bg from '../assets/store_grid/grid_top_bg.jpg';
import axios from "axios";
import StoreJSX from "../Components/js/mainStoreJSX";

class StoreView extends React.Component {
    constructor(props) {
        super(props);
        const id = this.props.location.state.data.id;
        const storeName = this.props.location.state.data.storeName;
        const link = "/main/store/" + id + "/order";

        this.state = {
            id: id,
            current: 0,
            link: link,
            storeName: storeName,
            reviews: [],
            users: [],
        };

        this.handlePageSlide = this.handlePageSlide.bind(this);
        this.handlePageRender = this.handlePageRender.bind(this);
        this.handleMultipleImage = this.handleMultipleImage(this);
    }

    componentDidMount() {
        axios.get("/api/reviews_review/")
            .then((res) => {
                let reviews = res.data.filter(
                    (elt) => {
                        if (elt.storeCd === this.state.id && elt.deleteYn === 'N') {
                            return true;
                        }
                    }
                );
                axios.get('/api/users_user/')
                    .then((res) => {
                        this.setState({
                            users: res.data,
                            reviews: reviews,
                        });
                    });
            });
    }

    handlePageSlide() {
        this.setState((prev) => ({ current: (prev.current + 1) % 2 }));
    }

    handleMultipleImage(){

    }

    handlePageRender() {
        if(this.state.current === 0) {
            return (
            <>
                <div className="store__review__grid" id="review__container">
                    {
                        <>
                            {
                                this.state.reviews !== undefined ?
                                    this.state.reviews.map((review) => {
                                        return (
                                            <>
                                                <Link to={{
                                                    pathname: `/review/${review.id}`,
                                                    state: {review: review},
                                                }}>
                                                    {
                                                        (review.img2 === null || review.img2 === '') ?
                                                            <div><img src={review.img1}/></div> //추가이미지 없는애
                                                            :
                                                            <div className="photo"><img src={review.img1}/></div> //추가이미지 있는애
                                                    }
                                                </Link>
                                            </>
                                        );
                                    })
                                :
                                null
                            }
                        </>
                    }
                </div>
            </>
            );
        } else if(this.state.current === 1) {
            return <StoreList reviews={this.state.reviews} users={this.state.users} />;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className='page__store'>
                <HeaderBack />
                <div className="storeGrid-store">
                    <div className="storeGrid__content">
                        {/*<div className="store__store">*/}
                            <div className="storeGrid__image"><img src={bg}/></div>
                            <div className="storeGrid__detail">
                                <div className="storeGrid__title">
                                    <div className="storeGrid__name">{this.props.location.state.data.storeName}</div>
                                    <div className="storeGrid__distance">{this.props.location.state.d}</div>
                                    <div className="storeGrid__likes"><p className="likesButton">♥</p>{this.props.location.state.data.like_count || 123}</div>
                                    <div className="storeGrid__description">{this.props.location.state.data.description}</div>
                                </div>
                                <div className="storeGrid__description">
                                    {this.props.location.state.data.comment}
                                </div>
                            </div>
                        {/*</div>*/}
                        <div className="button__container" onClick={this.handlePageSlide}>
                            <button><p className="simple">간단</p></button>
                            <div className="slide">
                                <div className="subslide">
                                    <div className={"slideBall " + (this.state.current === 1 ? 'right' : '')}/>
                                </div>
                            </div>
                            <button><p className="detail">상세</p></button>
                        </div>
                    </div>
                    {this.handlePageRender()}
                </div>
                <div className="order">
                    <Link to={this.state.link}>
                        <p className="orderButton">주문하기</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default StoreView;
