import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/js/Header";
import HeaderGuest from "../Components/js/HeaderGuest";
import Footer from "../Components/js/Footer";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";

import jumboImg from "../assets/index/index_ad.jpg";
import showFestivalImg from "../assets/index/btn_index1.png";
import showStoreImg from "../assets/index/btn_index2.png";
import showCollectionImg from "../assets/index/btn_index3.png";
import showOrderImg from "../assets/index/btn_index4.png";

import { cookieCheck_approveGuest } from "../Components/js/CookieCheck.js"
import Toast from '../Components/js/Toast';
import axios from "axios";
import { logout } from "../Components/js/CookieCheck";

function Index() {
    const paginationElem = useRef(null);
    const autoPlayPlugin = useMemo(() => {
        return new AutoPlay({
            duration: 4000,
            direction: "NEXT"
        });
    }, []);

    let user_email = cookieCheck_approveGuest();
    let [user, setUser] = useState(null);
    let [toast, setToast] = useState("off");

    function getUser() {
        return axios.get("/api/users_user/")
                .then((res) => {
                    let _user = res.data.find((elt) => {
                        if(elt.email === user_email) {
                            return true;
                        }
                    });
                    return _user;
                })
    }

    if(!user) {
        getUser().then((res) => {
                setUser(res);
        });
    }

/*    if(user){
        if(user.guestYn === 'Y'){
            document.getElementById('header__menu').classList.add("hide");
        }
    }
*/

    function onChangeJumboItem(e) {
        for (let item of paginationElem.current.children) {
            item.classList.remove('active');
        }
        paginationElem.current.children[e.index].classList.add('active');
    }

    // const {from} = location.state || {from: {pathname: "/index"}};
    // if (authenticated) return <Redirect to={from}/>;
    return (
        <>
            {
                user !== null && user.guestYn === 'Y' ?
                    <HeaderGuest />
                    :
                    <Header />
            }
            {user !== null && user.guestYn === 'Y'?
                <>
                    <Toast message="로그인 후 사용하실 수 있는 컨텐츠입니다. " turn={toast} />
                </>
                :
                null
            }
            <div className="index">
                <Flicking classPrefix="jumbo"
                          hanger={0}
                          anchor={0}
                          zIndex={0}
                          circular={true}
                          onChange={onChangeJumboItem}
                          className={"jumbotron"}
                          plugins={[autoPlayPlugin]}
                          >
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
                    <Link to="/mypage/collections" onClick={(e) => {
                        if(user !== null && user.guestYn === 'Y') {
                            e.preventDefault();
                            setToast("on");
                        }
                    }}>
                        <div className="content-item">
                                <img src={showCollectionImg} alt="포켓도감" />
                                <span>포켓도감</span>
                        </div>
                    </Link>
                    <Link to="/order/status">
                        <div className="content-item">
                                <img src={showOrderImg} alt="주문상태" />
                                <span>주문상태</span>
                        </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Index;
