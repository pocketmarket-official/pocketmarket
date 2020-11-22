import React, {useRef} from 'react';
import Flicking from "@egjs/react-flicking";
import axios from 'axios';
import cookie from 'react-cookies';
import storage from '../../storage.js';
import itemimg from "../../assets/review_list/list_img1.jpg";
import userimg from "../../assets/review_list/ico_user1.png";


class ReviewJSX extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        let cookie_token = cookie.load("access_token");
        let user_email = storage.get(cookie_token);

        axios.get('/api/users_user/')
        .then((res) => {
            let userId = res.data.find((elt) => {
                if (elt.email === user_email) {
                    return true;
                }
            }).id;
            axios.get("/api/reviews_review")
            .then((res) => {
                let data = res.data.filter((elt) => {
                    if(elt.user === userId) {
                        return true;
                    }
                });
                this.setState({ data: data });
                console.log(data);
            });
        });
    }

    render() {
        return (
            <>
                {
                    this.state.data ?
                    this.state.data.map((data) => {
                        return (
                            <>
                                <div className="review">
                                    <div className="review__list">
                                        <div className="image__container">
                                            <Flicking classPrefix="jumbo"
                                                      hanger={0}
                                                      anchor={0}
                                                      zIndex={0}
                                                      infinite={true}
                                                      //onChange={onChangeReviewItem}
                                                      className={"image"}>
                                                <img src={itemimg}/>
                                                <img src={itemimg}/>
                                                <img src={itemimg}/>
                                                <img src={itemimg}/>
                                                <img src={itemimg}/>
                                            </Flicking>
                                            <div className="pagination">
                                                <div className="pagination-item active"/>
                                                <div className="pagination-item"/>
                                                <div className="pagination-item"/>
                                                <div className="pagination-item"/>
                                                <div className="pagination-item"/>
                                            </div>
                                        </div>
                                        <div className="review_container">
                                            <div className="review__header">
                                                <div className="review__user">
                                                    <div className="user__avatar"><img className="image" src={userimg}/>
                                                    </div>
                                                    <div className="user__name">{data.username}</div>
                                                </div>
                                                <button className="review__like"><p>♥</p> {data.like_count}</button>
                                            </div>

                                            <div
                                                className="review__order">{data.id} {data.order_date} {data.order_list}</div>
                                            <div className="review__review">{data.comment}</div>
                                            <div>
                                                <div className="bar"></div>
                                            </div>
                                            {/*<button id="review__more" onClick={() => {*/}
                                            {/*    let i = data.id;*/}
                                            {/*    const elt = document.getElementById(i);*/}
                                            {/*    elt.classList.toggle("hidden");*/}
                                            {/*}}>...</button>*/}
                                            <div className="review__comment hidden" id={data.id}>
                                                <div className="review__box">
                                                    <div className="review__1">답글</div>
                                                    <div className="review__2"></div>
                                                    <div className="review__3"></div>
                                                </div>
                                                <div className="review__box">
                                                    <div className="review__1">답글</div>
                                                    <div className="review__2"></div>
                                                    <div className="review__3"></div>
                                                </div>
                                            </div>
                                            <div className="review__input">
                                                <input className="write-comment" placeholder="댓글달기"></input>
                                                <button className="write_comment_btn">전송</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })
                :
                null
                }
            </>
        );
    }
}

export default ReviewJSX;
