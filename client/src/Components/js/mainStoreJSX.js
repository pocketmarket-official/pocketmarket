import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/mainStoreJSX.scss';

import storImg from '../../assets/store/img1.png';


class StoreJSX extends React.Component {
    render() {
        let d = this.props.data.show_dist;
        let data = this.props.data;
        return(
                <div className="content__store">
                    <Link to={{
                        pathname: `/main/store/${this.props.data.storeCd}`,
                        state: {data, d}
                    }}>
                    <div className="store__store">
                        <img className="store__image" src={storImg} alt="store"/>
                        <div className="store__detail">
                            <div className="detail__tags">
                                <div className="tags__new">NEW</div>
                                <div className="tags__tag">@반포 낭만달빛마켓</div>
                                <div className="tags__likes">♥ 256</div>
                            </div>
                            <div className="detail__title">
                                <div className="detail__name">{this.props.data.storeName}</div>
                                <div className="detail__distance">거리 {this.props.data.show_dist}</div>
                            </div>
                            <div className="detail__description">
                                백종원의 푸드트럭에서 가장 핫한 매장 중 하나인 바로
                                그 강남 핫도그입니다. 최고급 수제 소시지와 치즈를
                                사용하고 있으니 직접 한번 드셔보세요.
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
