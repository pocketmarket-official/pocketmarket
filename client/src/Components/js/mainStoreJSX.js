import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/mainStoreJSX.scss';

import storImg from '../../assets/store/img1.png';
import star1 from '../../assets/store/star1.png';
import star2 from '../../assets/store/star2.png';
import star3 from '../../assets/store/star3.png';


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
                        <img className="store__image" src={this.props.data.imgLogoUrl} alt="store"/>
                        <div className="store__detail">
                            <div className="detail__tags">
                                <div className="tags__new">NEW</div>
                                <div className="tags__tag">@반포 낭만달빛마켓</div>
                                <button className="tags__likes" onClick={(e) => {
                                    e.preventDefault();
                                    console.log('hi');
                                    // 좋아요 기능 추가 예정
                                }}>♥ {this.props.data.likeCount}</button>
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
                        <div className="store__stars">
                            <img src={star1}/>
                            <img src={star1}/>
                            <img src={star1}/>
                            <img src={star3}/>
                            <img src={star2}/>
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
                                console.log('hi');
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
