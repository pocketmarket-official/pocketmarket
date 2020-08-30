import React from 'react';
import HeaderBiz from '../Components/js/HeaderBiz';


function BizMaster() {
    return (
        <>
            <HeaderBiz />
            <div className="bizmaster">
                <div className="bizmaster__item">Contact Us</div>
                <div className="bizmaster__item">Mail</div>
                <div className="bizmaster__item">Phone</div>
                <div className="bizmaster__item">담당자</div>
            </div>
        </>
    );
}

export default BizMaster;
