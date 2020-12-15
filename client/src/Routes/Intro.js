import React, {useState} from "react";
import KaKaoLogin from "react-kakao-login";
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies';
import bgVideo from "../assets/intro/intro.mp4";
import bgImage from "../assets/intro/bg.jpg";
import storage from '../storage.js';


/**
 * Entry component
 *
 * when error on video playing, show login button immediately
 */
function Intro({authenticated, login, location}) {
    // window.native.pushSend('test');

    const [playingVideo, setPlayingVideo] = useState(true);

    // kakao login api built in django backend
    const responseLogin = (res) => {
        alert('df');
        console.log('ddff');
//         let access_token = res.response.access_token;
//         let email = res.profile.kakao_account.email;
//
//         const expires = new Date();
//         expires.setDate(expires.getDate() + 1);
//
//         cookie.save("access_token", access_token, {
//             path: '/',
//             expires: expires,
// //            httpOnly: true,
// //            secure: true,
//         });
//         storage.add(access_token, email);
        // window.location.href = "http://localhost:8000/login/kakao/"; //URL EXCHANGE LOCAL
        // window.location.href = "http://13.124.90.138:8000/login/kakao/"; URL EXCHANGE SERVER
        // window.location.href = "/login/kakao/";
        let url;
        let reactRestApiToken = process.env.REACT_APP_KAKAO_KEY_API;
        if(process.env.REACT_APP_STATE === 'local') {
            let redirect_uri = 'http://13.124.90.138:8000/login/kakao/callback/'; //ma exchange
            url = `https://kauth.kakao.com/oauth/authorize?client_id=${reactRestApiToken}&redirect_uri=${redirect_uri}&response_type=code`;
        } else if(process.env.REACT_APP_STATE === 'dev') {
            url = "http://13.124.90.138/login/kakao/";
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
                        <KaKaoLogin
                            className="login__sign-in"
                            //styled component 통해 style을 입혀 줄 예정
                            jsKey={process.env.REACT_APP_KAKAO_KEY_JS}
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
        </div>
    );
}

export default Intro;
