import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import '../Components/scss/ReviewWrite.scss';
import img_ico from '../../src/assets/review_write/img_up_ico.png';

function ReviewWrite() {
    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="reviewwrite">
                <div className="review__write__box">
                    <div className="review__write__caption">리뷰쓰기</div>
                    <textarea className="reviewwrite__context"></textarea>
                </div>
                {/*
                    <div className="review__content__box">
                    <div className="review__content__caption">리뷰평가</div>
                    <div className="review__content">
                        <div className="input__container">
                            <div className="menu__name">아이스 아메리카노</div>
                            <input className="review__controll" type="range" min="0" max="5.0" step="0.5" />
                            <div className="review__point">3.5</div>
                        </div>
                        <div className="input__container">
                            <div className="menu__name">아이스 라떼</div>
                            <input className="review__controll" type="range" min="0" max="5.0" step="0.5" />
                            <div className="review__point">1.5</div>
                        </div>
                        <div className="input__container">
                            <div className="menu__name">프라푸치노</div>
                            <input className="review__controll" type="range" min="0" max="5.0" step="0.5" />
                            <div className="review__point">1.5</div>
                        </div>
                        <div className="input__container">
                            <div className="menu__name">뭐시기</div>
                            <input className="review__controll" type="range" min="0" max="5.0" step="0.5" />
                            <div className="review__point">1.5</div>
                        </div>
                        <div className="input__container">
                            <div className="menu__name">뭐시기</div>
                            <input className="review__controll" type="range" min="0" max="5.0" step="0.5" />
                            <div className="review__point">1.5</div>
                        </div>
                        <div className="image__container" id="image__container">
                            need to show image preview 
                        </div>
                    </div>
                </div>
                */}
                <div className="photo__upload__box">
                    <div className="photo__upload__caption">사진업로드</div>
                    <div className="photo__upload">
                        <div className="upperline"></div>
                        <input type="file" multiple accept="image/*" id="review__image" hidden/>
                        <div className="fileupload">
                            <div className="file__image__box">IMAGE</div>
                            <div className="file__image__box">IMAGE</div>
                            <div className="file__image__box">IMAGE</div>
                            <div className="file__image__box">IMAGE</div>
                            <div className="file__image__box empty">
                                <img src={img_ico} className="image"/>
                            </div>
                        </div>
                        <div className="underline"></div>
                        <input type="submit" value="submit" id="review__submit" hidden/>
                        <div className="submit">등록하기</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReviewWrite;
