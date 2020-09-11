import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';

const ColoredLine = ({color}) => (
    <hr
        style={{
            color: color, 
            backgroundColor: color, 
            height: 0.5, 
            width: '50%'
        }}
    />
);

function FestivalStore( {location} ) {
    const festival  = location.state.festival;
    return (
            <>
                <HeaderBack url='/mypage' />
                <div className="festival-store">
                    <div className="festival__content">
                        <div className="festival__image"><img src={festival.imageUrl} /></div>
                        <div className="festival__title">
                            <div className="festival__name">{ festival.name }</div>
                            <div className="festival__description">{ festival.description }</div>
                            <div className="festival__address">{ festival.address }</div>

                        </div>
                    </div>
                    <ColoredLine color="black" />
                    <div className="content__store">
                        <div className="store__store">
                            <Link to="/main/store/1">
                            <div className="store__image">image</div>
                            <div className="store__detail">
                                <div className="detail__title">
                                    <div className="detail__name">강남 핫도그</div>
                                    <div className="detail__distance">0.7km</div>
                                    <div className="detail__likes">좋아요</div>
                                </div>
                                <div className="detail__description">
                                    설명설명설명설명설명설명설명설명설명설명설명
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="store__review">
                            리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰
                            <div className="review__likes">리뷰 좋아요</div>
                        </div>
                    </div>
                    <div className="content__store">
                        <div className="store__store">
                            <div className="store__image">image</div>
                            <div className="store__detail">
                                <div className="detail__title">
                                    <div className="detail__name">강남 핫도그</div>
                                    <div className="detail__distance">0.7km</div>
                                    <div className="detail__likes">좋아요</div>
                                </div>
                                <div className="detail__description">
                                    설명설명설명설명설명설명설명설명설명설명설명
                                </div>
                            </div>
                        </div>
                        <div className="store__review">
                            리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰
                            <div className="review__likes">리뷰 좋아요</div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default FestivalStore;