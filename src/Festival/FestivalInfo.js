import React, {useState} from "react";
import {Link} from 'react-router-dom';


function FestivalInfo() {
    return (
        <Link to="/main/festival/1">
            <div className="content__festival">
                <div>image</div>
                <div className="festival__detail">
                    <div className="detail__name">Festival Name</div>
                    <div className="detail__description">Festival Dscpt</div>
                    <div className="detail__address">Address</div>
                </div>
            </div>
        </Link>
    );
}
export default FestivalInfo;