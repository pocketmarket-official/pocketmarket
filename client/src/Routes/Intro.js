import React, {useState} from "react";
import KaKaoLogin from "react-kakao-login";
import {Redirect} from "react-router-dom";
import bgVideo from "../assets/intro/intro.mp4";
import bgImage from "../assets/intro/bg.jpg";
import '../Components/scss/intro.scss';
import storage from '../storage.js';

const axios = require('axios');

/**
 * Entry component
 *
 * when error on video playing, show login button immediately
 */
function Intro({authenticated, login, location}) {
    const [playingVideo, setPlayingVideo] = useState(true);

    // kakao login api built in django backend
    const responseLogin = (res) => {
//        window.location.href = "http://localhost:8000/login/kakao/";
//        let access_token = res.response.access_token;
//       let email = res.profile.kakao_account.email;
//        storage.add(access_token, email);
    };

    const responseFail = (err) => {
        console.log(err);
    };

    const {from} = location.state || {from: {pathname: "/index"}};
    if (authenticated) return <Redirect to={from}/>;

    return (
        <>
            <div className="bg">
                {playingVideo ?
                    <video className="bg__video" autoPlay={true} muted={true} playsInline={true}
                           onError={() => setPlayingVideo(false)}
                           onEnded={() => setPlayingVideo(false)}>
                        <source src={bgVideo} type={"video/mp4"}/>
                    </video> :
                    <img className="bg__image" src={bgImage} alt="bgimage" />
                }
            </div>
            {!playingVideo && (
                <>
                    <div className="login">
                        <KaKaoLogin
                            className="login__sign-in"
                            //styled component 통해 style을 입혀 줄 예정
                            jsKey={process.env.REACT_APP_KAKAO_KEY}
                            //카카오에서 할당받은 jsKey를 입력
                            buttonText='카카오 로그인'
                            //로그인 버튼의 text를 입력
                            onSuccess={responseLogin}
                            onFailure={responseFail}
                            //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장
                            getProfile={true}
                        />
                        <button className="login__sign-up" onClick={responseLogin} type="button">
                                카카오 회원가입 >
                        </button>
                    </div>
                    <div className="footer">all rights reserved pocketmarket</div>
                </>
            )}
        </>
    );
}

export default Intro;
