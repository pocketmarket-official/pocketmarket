import React from 'react';

function KDSCnrStats() {
    return (
        <div className="cnrstats">
            <div className="wrap">
                <div className="wrap-body">
                    <div className="body-main">
                        <div className="cnr-container">
                            <div className="corner normal">
                                <div>
                                    <span>원활</span>
                                </div>
                            </div>
                            <div className="corner crowded">
                                <div>
                                    <span>혼잡</span>
                                </div>
                            </div>
                            <div className="corner unable">
                                <div>
                                    <span>불가</span>
                                </div>
                            </div>
                            <div className="corner selected">
                                <div>
                                    <span>선택</span>
                                </div>
                            </div>
                            <div className="corner selected">
                                <div>
                                    <span>선택</span>
                                </div>
                            </div>
                            <div className="corner selected">
                                <div>
                                    <span>선택</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="msg-info">
                        <span style={{fontSize: '35px', fontWeight: 'bold'}}>코너상태는 마감 후 자동으로 초기화 됩니다.</span>
                        <div className="label normal"/>
                        <span>원활코너</span>
                        <div className="label focus"/>
                        <span>선택코너</span>
                        <div className="label crowded"/>
                        <span>혼잡코너</span>
                        <div className="label unable"/>
                        <span>주문불가코너</span>
                    </div>
                </div>
                <div className="wrap-tail">
                    <div className="btn-control">
                        <div className="tail-btn prev">
                            <span>이전</span>
                        </div>
                        <div className="tail-btn save">
                            <span>저장</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KDSCnrStats
