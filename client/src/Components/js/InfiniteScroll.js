import React from 'react';
import { Link } from 'react-router-dom';


class InfiniteScroll extends React.Component {

    render() {
        return(
            this.props.data.map((data) => {
                return (
                    <>
                        <div className="review__container">
                            <Link to="/review">
                            <div className="review__content">
                                <div>image</div>
                                <div className="review__title">
                                    <div className="review__name">{data.username}</div>
                                    <div className="review__detail">{data.review}</div>
                                </div>
                            </div>
                            </Link>
                            <div className="review__common">
                                <div className="common__btns">
                                    <div>{data.order_date}</div>
                                    <div className="review__order">{data.order_list}</div>
                                    <div className="review__likes">{data.like_count}</div>
                                </div>
                                {data.comments.map((content) => {
                                    return (
                                        <div>{content}</div>
                                    );
                                })}
                            </div>
                        </div>
                    </>
                );
            })
        );
    }
}

export default InfiniteScroll;
