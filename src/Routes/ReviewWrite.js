import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function ReviewWrite() {
    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="reviewwrite">
                <textarea className="reviewwrite__context" readOnly>context</textarea>
                <div className="review__content">
                    <div className="input__container">
                        아이스 아메리카노
                        <input type="range" min="0" max="5.0" step="0.5" />
                    </div>
                    <div className="input__container">
                        아이스 라떼
                        <input type="range" min="0" max="5.0" step="0.5" />
                    </div>
                    <div className="input__container">
                        프라푸치노
                        <input type="range" min="0" max="5.0" step="0.5" />
                    </div>
                    <div className="input__container">
                        뭐시기
                        <input type="range" min="0" max="5.0" step="0.5" />
                    </div>
                    <div className="input__container">
                        뭐시기
                        <input type="range" min="0" max="5.0" step="0.5" />
                    </div>
                    <div className="image__container" id="image__container">
                    {/* need to show image preview */}
                    </div>
                    <input type="file" multiple accept="image/*" id="review__image" />
                    <input type="submit" value="submit" id="review__submit" />
                </div>
            </div>
        </>
    );
}

export default ReviewWrite;
