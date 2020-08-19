import React from 'react';
import HeaderBizBack from '../Components/js/HeaderBizBack';


function BizSearchMonth() {
    return (
        <>
        <HeaderBizBack />
            <div className="bizsearch-month">
                <div className="bizsearch-month__search">
                    <input type="month" /> ~ <input type="month" />
                    <input type="submit" value="조회"/>
                </div>
                <div className="bizsearch-month__date">2020년 8월</div>
                <div className="bizsearch-month__result">
                    <div>카드</div>
                    <div>포인트</div>
                    <div>P.M.</div>
                </div>
            </div>
        </>
    );
}

export default BizSearchMonth;
