import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import '../Components/scss/QuestionWrite.scss';
import img_ico from "../assets/review_write/img_up_ico.png";

function QuestionWrite() {
    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="questionwrite">
                <div className="question__write__box">
                    <div className="question__write__caption">문의하기</div>
                    <textarea className="questionwrite__context"></textarea>
                </div>
                <div className="photo__upload__box">
                    <div className="photo__upload__caption">사진업로드</div>
                    <div className="photo__upload">
                        <div className="upperline"></div>
                        <input type="file" multiple accept="image/*" id="question__image" hidden/>
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
                        <input type="submit" value="submit" id="question__submit" hidden/>
                        <div className="submit">등록하기</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionWrite;
