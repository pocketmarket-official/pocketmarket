import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import menu from '../../assets/store_list/grid_img1.jpg';
import Loading from "./Loading";
import {Link} from "react-router-dom";
import axios from "axios";

class StoreList extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            // temp: this.temp,
            data: this.props.reviews.slice(0, 5),
            gap: 4,
            preItems: 0,
            items: 4,
            page: 1,
        };

        this._getData = this._getData.bind(this);
        this._infiniteScroll = this._infiniteScroll.bind(this);
    }

    _getData() {
        let result = this.props.reviews.slice(this.state.preItems, this.state.items);
        this.setState({
            data: this.state.data.concat(result),
            page: this.state.page + 1,
        });
        return result;
    }

    _infiniteScroll() {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;

        if (10 >= scrollHeight - scrollTop - clientHeight) {
            this.setState({
                    preItems: this.state.items,
                    items: this.state.items + this.state.gap,
                },
                () => this._getData()
            );
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this._infiniteScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this._infiniteScroll, true);
    }

    render() {
        const isLoading = this.state.loading;

        return (
            isLoading ? (
                <Loading/>
            ) : (
                <>
                    {
                        this.props.reviews !== undefined ?
                            this.props.reviews.map((review) => {
                                let user = this.props.users.find((elt)=>{
                                    if(elt.id === review.user){
                                        return true;
                                    }
                                });
                                    return (
                                        <>
                                            <Link to={{
                                                pathname: `/review/${review.id}`,
                                                state: {review: review},
                                            }}>
                                                <div className="storeList__grid">
                                                    <div className="storeList__box">
                                                        <div className="storeList_publisherBox">
                                                            <div className="storeList__photo"><img src={review.img1}/></div>
                                                            <div className="storeList__name">{user.profileName}</div>
                                                            {/*<div className="storeList__likes"><p className="listLikesButton">♥</p>53</div>*/}
                                                            <div className="storeList__publisher">{user.email}</div>
                                                            {/*<div className="storeList__publisher">{user.email} 20.09.20 [치즈핫도그,
                                                                콘핫도그x2]
                                                            </div>*/}
                                                            <div className="storeList__description">{review.context}
                                                            </div>
                                                        </div>
                                                        {/*<div className="storeList__replyBox">*/}
                                                        {/*    <div className="storeList__replyButton"><p*/}
                                                        {/*        className="replyButton">답글</p></div>*/}
                                                        {/*    <div className="storeList__replyId">KinS****</div>*/}
                                                        {/*    <div className="storeList__replyDescription">아 여기 치즈는 ㄹㅇ 인정이져.*/}
                                                        {/*        핫도그*/}
                                                        {/*        안에 치즈 생산공장 들엇는줄*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    );
                                })
                            :
                            null
                    }
                </>
            )
        );
    }
}


export default StoreList;