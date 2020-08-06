import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';


function QuestionsHistory() {
    return (
        <>
            <HeaderBack />
            <div className="question">
                <div className="question__search">
                    <input type="date" /> ~ <input type="date" />
                    <input type="submit" value="조회"/>
                </div>
                <div className="question__result">
                    <div className="result__container">
                        <div className="result__date">2020년 8월 1일</div>
                        <div className="result__question">문의 내용</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__input">
                            <input type="text" placeholder="댓글달기" id="input__comment" /><input type="submit" value="전송" />
                        </div>
                    </div>
                    <div className="result__container">
                        <div className="result__date">2020년 8월 1일</div>
                        <div className="result__question">문의 내용</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__input">
                            <input type="text" placeholder="댓글달기" id="input__comment" /><input type="submit" value="전송" />
                        </div>
                    </div>
                    <div className="result__container">
                        <div className="result__date">2020년 8월 1일</div>
                        <div className="result__question">문의 내용</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__input">
                            <input type="text" placeholder="댓글달기" id="input__comment" /><input type="submit" value="전송" />
                        </div>
                    </div>
                    <div className="result__container">
                        <div className="result__date">2020년 8월 1일</div>
                        <div className="result__question">문의 내용</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__answer">답변답변</div>
                        <div className="result__input">
                            <input type="text" placeholder="댓글달기" id="input__comment" /><input type="submit" value="전송" />
                        </div>
                    </div>
                </div>
                <div className="question__add"><Link to="/mypage/questions/write">추가</Link></div>
            </div>
        </>
    );
}

export default QuestionsHistory;
