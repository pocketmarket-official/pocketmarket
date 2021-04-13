import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import bgVideo from "../assets/intro/intro.mp4";
import bgImage from "../assets/intro/bg.jpg";
import cookie from "react-cookies";

window.makeFcmTokenCookie = (function (token) {
   // code here
    console.log("==1==");
    console.log(token);
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);

    cookie.save("fcmToken", token, {
        path: '/',
        expires: expires,
        //            httpOnly: true,
        //            secure: true,
    });
});


function Intro({authenticated, location}) {
    const [playingVideo, setPlayingVideo] = useState(true);

    // kakao login api built in django backend
    const responseLogin = (res) => {
        let url;
        let redirect_uri;
        let reactRestApiToken = process.env.REACT_APP_KAKAO_KEY_API;
        let STATE = process.env.REACT_APP_STATE;
        let DOMAIN = process.env.REACT_APP_DOMAIN;
        // kakao developer allowed redirect uri
        if(STATE === 'local:start') {
            redirect_uri = 'http://localhost:8000/login/kakao/callback/';
        } else if(STATE === 'local:build') {
            redirect_uri = 'http://localhost:8000/login/kakao/callback/';
        } else if(STATE === 'dev') {
            redirect_uri = 'http://13.124.90.138:8000/login/kakao/callback/';
        } else if(STATE === 'prod') {
            redirect_uri = `${DOMAIN}/login/kakao/callback/`;
        } else if(STATE === 'jh') {
            redirect_uri = 'http://13.124.90.138:8000/login/kakao/callback/';
        }

        url = `https://kauth.kakao.com/oauth/authorize?client_id=${reactRestApiToken}&redirect_uri=${redirect_uri}&response_type=code`;
        window.location.href = url;
    };

    const guestLogin = (res) => {
        let url;
        let STATE = process.env.REACT_APP_STATE;
        if(STATE === 'local:start') {
            url =  'http://localhost:3000/makingCookie/guest/test.pocketmarket@gmail.com'
        } else {
            url =  '/makingCookie/guest/test.pocketmarket@gmail.com'
        }
        window.location.href = url;
    };

    const responseFail = (err) => {
        console.log(err);
    };

    const {from} = location.state || {from: {pathname: "/index"}};
    if (authenticated) return <Redirect to={from}/>;

    return (
        <div className='intro'>
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
                        <button className="login__sign-in" onClick={responseLogin} type="button">
                                카카오 로그인 >
                        </button>
                        <button className="login__sign-up" onClick={guestLogin} type="button">
                                guest 로그인 >
                        </button>
                    </div>
                    <div className="footer">all rights reserved pocketmarket</div>
                </>
            )}
        </div>
    );
}

export default Intro;
