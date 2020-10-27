import React from 'react';


class PointResult extends React.Component {
    render() {
        let result = this.props.result;
        return (
            result.map((data) => {
                return (
                        <>
                            <div className="result__date">{data.date}</div>
                            {data.point.map((item) => {
                                return (
                                    <>
                                        <div className="result__detail">
                                            <div className="result__conversion">전환</div>
                                            <div className="result__likes">-{item} 좋아요</div>
                                            <div className="result__point">+{item}PM</div>
                                        </div>
                                    </>
                                );
                            })}
                        </>
                );
            })
        );
    }
}

export default PointResult;
