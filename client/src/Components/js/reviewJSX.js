import React from 'react';

import defaultImg from '../../assets/main/grayBI.png';
import Flicking from "@egjs/react-flicking";
import axios from "axios";

class ReviewJSX extends React.Component {
    constructor(props){
        super(props);
        this.onChangeReviewItem = this.onChangeReviewItem.bind(this);

        // const paginationElem = useRef(null);
        const paginationElem = React.createRef();
        // let paginationElem = '';

        this.state = {
            paginationElem: paginationElem,
            review: props.props.location.state.review,
            reviewUser: '',
        }
    }

    onChangeReviewItem = (e) => {
        for (let item of this.state.paginationElem.current.children) {
            item.classList.remove('active');
        }
        this.state.paginationElem.current.children[e.index].classList.add('active');
    };

    componentDidMount(){
        axios.get("/api/users_user/")
            .then((res) => {
                let reviewUser = res.data.find((elt) => {
                    if (elt.id === this.state.review.user) {
                        return true;
                    }
                });
                this.setState({ reviewUser});
            });
    }

    render() {
        let email;
        if(this.state.reviewUser) {
            let parseEmail = this.state.reviewUser.email.split("@");
            let email_front;
            let email_back = parseEmail[1];
            if(parseEmail[0].length === 1) {
                email_front = "*";
            } else if(parseEmail[0].length === 2) {
                email_front = parseEmail[0].slice(0, 1) + "*";
            } else {
                email_front = parseEmail[0].slice(0, 2) + "*".repeat(parseEmail[0].length - 2);
            }
            email = email_front + "@" + email_back;
        }

        return(
            <>
                <div className="review">
                    <div className="review__list">
                        <div className="review__header">
                            <div className="review__user">
                                <div className="user__avatar">
                                    <img className="image user__evatar" src={this.state.reviewUser.profileImage || defaultImg}/>
                                </div>
                                <div className="user__info">
                                    <div className="user__name">{this.state.reviewUser.profileName}</div>
                                    <div className="user__email">{email}</div>
                                </div>
                            </div>
                        </div>
                        <div className="bar"></div>
                        <div className="image__container">
                            <Flicking classPrefix="jumbo"
                                      hanger={0}
                                      anchor={0}
                                      zIndex={0}
                                      infinite={false}
                                      onChange={this.onChangeReviewItem}
                                      className={"image"}>
                                <img src={this.state.review.img1}/>
                                {this.state.review.img2 === null?
                                null
                                :
                                <>
                                    <img src={this.state.review.img2}/>
                                </>
                                }
                                {this.state.review.img3 === null?
                                null
                                :
                                <>
                                    <img src={this.state.review.img3}/>
                                </>
                                }
                                {this.state.review.img4 === null?
                                null
                                :
                                <>
                                    <img src={this.state.review.img4}/>
                                </>
                                }
                                {this.state.review.img5 === null?
                                null
                                :
                                <>
                                    <img src={this.state.review.img5}/>
                                </>
                                }
                            </Flicking>
                            <div className="bar"></div>
                            <div ref={this.state.paginationElem} className="pagination">
                                <div className="pagination-item active"/>
                                {this.state.review.img2 !== null ?
                                    <>
                                        <div className="pagination-item"/>
                                    </>
                                    :
                                    null
                                }
                                {this.state.review.img3 !== null ?
                                    <>
                                        <div className="pagination-item"/>
                                    </>
                                    :
                                    null
                                }
                                {this.state.review.img4 !== null ?
                                    <>
                                        <div className="pagination-item"/>
                                    </>
                                    :
                                    null
                                }
                                {this.state.review.img5 !== null ?
                                    <>
                                        <div className="pagination-item"/>
                                    </>
                                    :
                                    null
                                }
                            </div>
                        </div>
                        <div className="review_container">
                            {/*<button className="review__like"><p>♥ 1</p></button>*/}
                            {/*<div className="review__order">
                                {data.id} {data.order_date} {data.order_list}
                            </div>*/}
                            <div className="review__review">{this.state.review.context}</div>
                            {/*<button id="review__more" onClick={() => {*/}
                            {/*    let i = data.id;*/}
                            {/*    const elt = document.getElementById(i);*/}
                            {/*    elt.classList.toggle("hidden");*/}
                            {/*}}>...</button>*/}
                            {/*<div className="review__comment hidden" id={data.id}>*/}
                            {/*    <div className="review__box">*/}
                            {/*        <div className="review__1">답글</div>*/}
                            {/*        <div className="review__2">{data.recoment[0].id}</div>*/}
                            {/*        <div className="review__3">{data.recoment[0].comment}</div>*/}
                            {/*    </div>*/}
                            {/*    <div className="review__box">*/}
                            {/*        <div className="review__1">답글</div>*/}
                            {/*        <div className="review__2">{data.recoment[1].id}</div>*/}
                            {/*        <div className="review__3">{data.recoment[1].comment}</div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className="review__input">*/}
                            {/*    <input className="write-comment" placeholder="댓글달기"></input>*/}
                            {/*    <button className="write_comment_btn">전송</button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ReviewJSX;
