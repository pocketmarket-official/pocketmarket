import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/scss/KDSSetting.scss'

function KDSSetting() {
    return (
        <div className="kdssetting">
            <div className="wrap">
                <div className="header">
                    <div className="title">네트워크설정</div>
                </div>
                <div className="content-wrap">
                    <div className="guide">내용을 변경하시려면 <label>수정</label>버튼을 눌러주세요.</div>
                    <div className="content">
                        <div>
                            <div>
                                <div>버전</div>
                                <select>
                                    <option value="production">production</option>
                                    <option value="beta">beta</option>
                                    <option value="alpha">alpha</option>
                                </select>
                            </div>
                            <div>
                                <div>DB-Type</div>
                                <select>
                                    <option value="MSSQL">MSSQL</option>
                                    <option value="MYSQL">MYSQL</option>
                                </select>
                            </div>
                            <div>
                                <div>회사코드</div>
                                <input type="text"/>
                            </div>
                            <div>
                                <div>매장코드</div>
                                <input type="text"/>
                            </div>
                            <div>
                                <div>기기번호</div>
                                <input type="text"/>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>서버IP</div>
                                <input type="text"/>
                            </div>
                            <div>
                                <div>서버PORT</div>
                                <input type="text"/>
                            </div>
                            <div>
                                <div>DB이름</div>
                                <input type="text"/>
                            </div>
                            <div>
                                <div>로그인ID</div>
                                <input type="text"/>
                            </div>
                            <div>
                                <div>로그인PW</div>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="button-container">
                        <button>저장</button>
                        <button>수정</button>
                    </div>
                </div>
                <div className="bottom">
                    <div><Link to="/kds/main" style={{color:'white'}}>이전</Link></div>
                </div>
            </div>

            {/*<div className="kdssetting__cell-1">*/}
            {/*    <div className="kdssetting__setting">점포코드 : </div>*/}
            {/*    <div className="kdssetting__detail">store code</div>*/}
            {/*</div>*/}
            {/*<div className="kdssetting__cell-2">*/}
            {/*    <div className="kdssetting__btn"><Link to="/kds/main">메인화면</Link></div>*/}
            {/*</div>*/}
        </div>
    );
}

export default KDSSetting;
