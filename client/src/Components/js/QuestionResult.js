import React from 'react';


class QuestionResult extends React.Component {
    render() {
        let result = this.props.result;

        return (
            result.map((data) => {
                let imgFlag;
                if(data.img1 === undefined || data.img1 === null) {
                    imgFlag = false;
                } else {
                    imgFlag = true;
                }
                return (
                    <>
                        <div className="result__date">{data.date}</div>

                        <div className="result__question">
                            <div className="result__text Q">Q<p>문의내용</p></div>
                            <div className="result__text quest"> {data.content}</div>
                            {
                                imgFlag ?
                                    <img src={data.img1} />
                                    :
                                    null
                            }
                        </div>
                        {/*data.answer.map((content) => {
                            return (
                                <>
                                    <div className="result__question" key={data.answer.indexOf(content)} >
                                        <div className="result__text A">A<p>답변내용</p></div>
                                        <div className="result__text answer"> {content}</div>
                                    </div>
                                </>
                            );
                        })*/}
                    {/*
                        <div className="result__input">
                            <input type="text" placeholder="댓글달기" id="input__comment" />
                            <input type="submit" value="전송" id="input__btn"/>
                        </div>
                    */}
                    </>
                );
            })
        );
    }
}

export default QuestionResult;
