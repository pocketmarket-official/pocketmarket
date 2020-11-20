import React from 'react';
import { Link } from 'react-router-dom';


class InfiniteScroll extends React.Component {
    render() {
        return (
            <>
                <div className="review__container">
                    <Link to="/review">
                    <div className="review__content">
                        <div>image</div>
                        <div className="review__title">
                            <div className="review__name">{this.props.data.username}</div>
                            <div className="review__detail">{this.props.data.review}</div>
                        </div>
                    </div>
                    </Link>
                    <div className="review__common">
                        <div className="common__btns">
                            <div>{this.props.data.order_date}</div>
                            <div className="review__order">{this.props.data.order_list}</div>
                            <div className="review__likes">{this.props.data.like_count}</div>
                        </div>
                        {this.props.data.comments.map((content) => {
                            return (
                                <div key={this.props.data.comments.indexOf(content)} >{content}</div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default InfiniteScroll;
