import React from 'react';

import '../scss/myPlaceJSX.scss';

import rewrite from '../../assets/my_place_full/ico_rewrite.png';
import trash from '../../assets/my_place_full/ico_trash.png';

let temp = [
    {
        user_id: '노민철',
        seq: 1,
        stor_addr1: '서울특별시 종로구 간석동',
        stor_addr2: '1124-12',
        title: '집',
    },
    {
        user_id: '노민철',
        seq: 2,
        stor_addr1: '경기 여수시 장현동',
        stor_addr2: '537-52',
        title: '회사',
    },
    {
        user_id: '노민철',
        seq: 3,
        stor_addr1: '충북 음성군 금왕읍 무곡로',
        stor_addr2: '514-22',
        title: '학교',
    },
]

function MyplaceJSX() {
    return (
        temp.map((data) => {
            return (
                <>

                        <tr className="myplace__content">
                            <td className="myplace__name">
                                <div>{data.title}</div>
                            </td>
                            <td className="myplace__address">{data.stor_addr1} {data.stor_addr2}</td>
                            <td colSpan="2" className="myplace__button">
                                <td className="myplace__write" onClick={() => {
                                    const elt = document.getElementById("myplace__modal");
                                    elt.classList.remove("hidden")
                                }}><img src={rewrite}/></td>
                                <td className="myplace__delete"><img src={trash}/></td>
                            </td>
                        </tr>

                </>
            );
        })
    );
}

export default MyplaceJSX;
