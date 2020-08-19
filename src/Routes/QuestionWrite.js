import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';


function QuestionWrite() {
    return (
        <>
            <HeaderBack url='/mypage' />
            <div className="write">
                <textarea type="text" id="question__write" required />
                <input type="submit" value="전송" id="question__submit" />
            </div>
        </>
    );
}

export default QuestionWrite;
