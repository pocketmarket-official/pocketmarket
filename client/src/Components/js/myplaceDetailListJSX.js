import React from 'react';

import { Link } from "react-router-dom";


let temp = [
    {
        user_id: '노민철',
        seq: 1,
        stor_addr1: '경기도 안양시 동안구 호계동 1027',
        stor_addr2: '엘에스로91번길 16-39',
        title: '경기도 안양시 동안구 호계동 1027',
    },
    {
        user_id: '노민철',
        seq: 2,
        stor_addr1: '경기도 안양시 동안구 호계동 1027-5',
        stor_addr2: '엘에스로91번길 16-27',
        title: '경기도 안양시 동안구 호계동 1027-5',
    },
    {
        user_id: '노민철',
        seq: 3,
        stor_addr1: '경기도 안양시 동안구 호계동 1027-6',
        stor_addr2: '엘에스로91번길 16-17',
        title: '경기도 안양시 동안구 호계동 1027-6',
    },
];

function MyplaceDetailListJSX() {
    return (
        temp.map((data) => {
            return (
                <>
                    <div className="myplace__detail__container">
                        <Link to="/mypage/myplace/detailMap">
                            <div className="myplace__detail__content">
                                <div className="myplace__detail__name">{data.title}</div>
                                <div className="myplace__detail__address1">{data.stor_addr1}</div>
                                <input className="myplace__detail__roadname_icon" readOnly="readOnly" value="도로명" />
                                <div className="myplace__detail__address2">{data.stor_addr2}</div>
                                <div className="myplace__detail__button">
                                  {/*<div className="myplace__delete">X</div>*/}
                                </div>
                            </div>
                        </Link>
                    </div>
                </>
            );
        })
    );
}

export default MyplaceDetailListJSX;
