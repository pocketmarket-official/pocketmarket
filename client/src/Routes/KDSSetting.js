import React from 'react';
import { Link } from 'react-router-dom';


function KDSSetting() {
    return (
        <div className="kdssetting">
            <div className="kdssetting__cell-1">
                <div className="kdssetting__setting">점포코드 : </div>
                <div className="kdssetting__detail">store code</div>
            </div>
            <div className="kdssetting__cell-2">
                <div className="kdssetting__btn"><Link to="/kds/main">메인화면</Link></div>
            </div>
        </div>
    );
}

export default KDSSetting;
