import React from 'react';
import HeaderBizBack from '../Components/js/HeaderBizBack';


function BizSearchDaily() {
    return (
        <>
        <HeaderBizBack />
            <div className="bizsearch-daily">
                <div className="bizsearch-daily__search">
                    <input type="date" /> ~ <input type="date" />
                    <input type="submit" value="조회"/>
                </div>
                <div className="bizsearch-daily__date">2020년 8월 19일</div>
                <div className="bizsearch-daily__result">
                    <div>카드</div>
                    <div>포인트</div>
                    <div>P.M.</div>
                </div>
            </div>
        </>
    );
}

export default BizSearchDaily;
