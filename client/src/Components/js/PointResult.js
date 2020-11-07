import React from 'react';


class PointResult extends React.Component {
    render() {
        let result = this.props.result;
        return (
            result.map((data) => {
                return (
                        <>
                            <div className="result__date">{data.date}</div>
                            <div className="result__detail2">
                            {data.point.map((item) => {
                                {if(item>=0){
                                    return (
                                        <>
                                            <div className="result__detail">
                                                <div className="result__conversion">전환</div>
                                                <div className="result__likes">-{item} 좋아요</div>
                                                <div className="result__point">+{item} PM</div>
                                            </div>
                                        </>
                                    );
                                }
                                else{
                                    return (
                                        <>
                                            <div className="result__detail">
                                                <div className="result__use">사용</div>
                                                <div className="result__likes">{item}</div>
                                                <div className="result__point">-500 PM</div>
                                            </div>
                                        </>
                                    );
                                }

                                };
                            })}
                            </div>
                        </>
                );
            })
        );
    }
}

export default PointResult;
