import React from 'react';


class QuestionResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let result = this.props.result;

        return (
            result.map((data) => {
                return (
                    <>
                        <div className="result__container">
                            <div className="result__date">{data.date}</div>
                            <div className="result__question">{data.question}</div>
                            {data.answer.map((content) => {
                                return (
                                    <>
                                        <div className="result__answer">{content}</div>
                                    </>
                                );
                            })}
                            <div className="result__input">
                                <input type="text" placeholder="댓글달기" id="input__comment" /><input type="submit" value="전송" />
                            </div>
                        </div>
                    </>
                );
            })
        );
    }
}

export default QuestionResult;
