import React from 'react';


let temp = [
    {
        user_id: '노민철',
        seq: 1,
        stor_addr1: '경기도 안양시 동안구',
        stor_addr2: '어쩌구저쩌구',
        title: '집',
    },
    {
        user_id: '노민철',
        seq: 2,
        stor_addr1: '서울특별시 강남구 역삼동',
        stor_addr2: '어쩌구저쩌구',
        title: '회사',
    },
    {
        user_id: '노민철',
        seq: 3,
        stor_addr1: '서울특별시 성북구 안암동',
        stor_addr2: '어쩌구저쩌구',
        title: '학교',
    },
]

function MyplaceJSX() {
    return (
        temp.map((data) => {
            return (
                <>
                    <div className="myplace__container">
                        <div className="myplace__content">
                            <div className="myplace__name">{data.title}</div>
                            <div className="myplace__address">{data.stor_addr1} {data.stor_addr2}</div>
                            <div className="myplace__button">
                                <div className="myplace__write" onClick={() => {
                                    const elt = document.getElementById("myplace__modal");
                                    elt.classList.remove("hidden")
                                }}>Write</div>
                                <div className="myplace__delete">X</div>
                            </div>
                        </div>
                    </div>
                </>
            );
        })
    );
}

export default MyplaceJSX;
