import React from 'react';
import { Link } from 'react-router-dom';


class StoreJSX extends React.Component {
    render() {
        let d = this.props.data.show_dist;
        let data = this.props.data
        return(
                <div className="content__store">
                    <Link to={{
                        pathname: `/main/store/${this.props.data.id}`,
                        state: {data, d}
                    }}>
                    <div className="store__store">
                        <img className="store__image" src={this.props.data.image}></img>
                        <div className="store__detail">
                            <div className="detail__title">
                                <div className="detail__name">{this.props.data.store_nm}</div>
                                <div className="detail__distance">{this.props.data.show_dist}</div>
                                <div className="detail__likes">{this.props.data.like_count}</div>
                            </div>
                            <div className="detail__description">
                                {this.props.data.comment}
                            </div>
                        </div>
                    </div>
                    </Link>
                    <div className="store__review">
                        리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰
                        <div className="review__likes">리뷰 좋아요</div>
                    </div>
                </div>
        );
    }
}

export default StoreJSX;
