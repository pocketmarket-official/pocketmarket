import React, {useState} from "react";
// import KaKaoLogin from "react-kakao-login";
import {Redirect} from "react-router-dom";
// import bgVideo from "../assets/intro/intro.mp4";
// import bgImage from "../assets/intro/bg.jpg";
// import '../Components/scss/intro.scss';

const axios = require('axios');

/**
 * Entry component
 *
 * when error on video playing, show login button immediately
 */
function Index({authenticated, login, location}) {
    const [playingVideo, setPlayingVideo] = useState(true);

    const responseKaKao = (res) => {
        const email = res.profile.kakao_account.email;
        try {
            login({email})
        } catch (e) {
            alert("Failed to login");
        }
        axios.get(`/users?email=${email}`)
            .then(res => {
                if (res.data.length === 0) {
                    axios.post(`/users`, {
                        email
                    })
                        .then(res => {
                            console.log(email + '신규등록 되었습니다.');
                        })
                }
                console.log(res);
            })
    };

    const responseFail = (err) => {
        alert(err);
    };

    const {from} = location.state || {from: {pathname: "/index"}};
    if (authenticated) return <Redirect to={from}/>;

    return (
        <>
            <div>
                <div>축제보기</div>
                <div>매장보기</div>
                <div>포켓맛집도감</div>
                <div>주문상태</div>
            </div>
        </>
    );
}

export default Index;
