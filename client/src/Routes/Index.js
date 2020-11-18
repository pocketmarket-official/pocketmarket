import React, {useEffect, useRef, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import HeaderBack from "../Components/js/HeaderBack";
import '../Components/scss/index.scss';
import Flicking from "@egjs/react-flicking";

import jumboImg from "../assets/index/index_ad.jpg";
import showFestivalImg from "../assets/index/btn_index1.png";
import showStoreImg from "../assets/index/btn_index2.png";
import showCollectionImg from "../assets/index/btn_index3.png";
import showOrderImg from "../assets/index/btn_index4.png";

function Index({authenticated, login, location}) {
    const paginationElem = useRef(null);

    function onChangeJumboItem(e) {
        for (let item of paginationElem.current.children) {
            item.classList.remove('active');
        }
        paginationElem.current.children[e.index].classList.add('active');
    }

    const {from} = location.state || {from: {pathname: "/index"}};
    if (authenticated) return <Redirect to={from}/>;

    return (
        <>
            <HeaderBack/>
            <div className="index">
                <Flicking classPrefix="jumbo"
                          hanger={0}
                          anchor={0}
                          zIndex={0}
                          infinite={true}
                          circular={true}
                          onChange={onChangeJumboItem}
                          className={"jumbotron"}>
                    <img src={jumboImg}/>
                    <img src={jumboImg}/>
                    <img src={jumboImg}/>
                    <img src={jumboImg}/>
                </Flicking>
                <div ref={paginationElem} className="pagination">
                    <div className="pagination-item active"/>
                    <div className="pagination-item"/>
                    <div className="pagination-item"/>
                    <div className="pagination-item"/>
                </div>
                <div className="content">
                    <Link to={{pathname: "/main", state: { current: 0 }}}>
                        <div className="content-item">
                            <img src={showFestivalImg} alt="축제보기" />
                            <span>축제보기</span>
                        </div>
                    </Link>
                    <Link to={{pathname: "/main", state: { current: 1 }}}>
                        <div className="content-item">
                            <img src={showStoreImg} alt="매장보기" />
                            <span>매장보기</span>
                        </div>
                    </Link>
                    <Link to="/mypage/collections">
                        <div className="content-item">
                            <img src={showCollectionImg} alt="포켓도감" />
                            <span>포켓도감</span>
                        </div>
                    </Link>
                    <div className="content-item">
                        <img src={showOrderImg} alt="주문상태" />
                        <span>주문상태</span>
                    </div>
                </div>
                <div className="footer">all rights reserved pocketmarket</div>
            </div>
        </>
    );
}

export default Index;
