import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import bgVideo from "../assets/intro/intro.mp4";
import bgImage from "../assets/intro/bg.jpg";
import cookie from "react-cookies";
import storage from "../storage";
import axios from "axios";

// function tmp(){
//     console.log('tmp');
//     alert('tmp');
//     // axios.post("http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com:8000/api/trades_test/",{
//     //     char:'test2'
//     // });
// }

window.makeFcmTokenCookie = (function (token) {
   // code here
    const expires = new Date();
    expires.setDate(expires.getDate() + 1);

    console.log('token');

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
        let reactRestApiToken = process.env.REACT_APP_KAKAO_KEY_API;
        if(process.env.REACT_APP_STATE === 'local') {
            let redirect_uri = '/login/kakao/callback/'; //URL EXCHANGE RELATIVE
            url = `https://kauth.kakao.com/oauth/authorize?client_id=${reactRestApiToken}&redirect_uri=${redirect_uri}&response_type=code`;
        } else if(process.env.REACT_APP_STATE === 'local:dev') {
            let redirect_uri = 'http://localhost:8000/login/kakao/callback/';
            url = `https://kauth.kakao.com/oauth/authorize?client_id=${reactRestApiToken}&redirect_uri=${redirect_uri}&response_type=code`;
        } else if(process.env.REACT_APP_STATE === 'dev') {
            url = "http://Pocketmarket-dev.eba-qcrhvmux.ap-northeast-2.elasticbeanstalk.com/login/kakao/";
        } else if(process.env.REACT_APP_STATE === 'server:appDeploy') {
            let redirect_uri = 'http://13.124.90.138:8000/login/kakao/callback/';
            url = `https://kauth.kakao.com/oauth/authorize?client_id=${reactRestApiToken}&redirect_uri=${redirect_uri}&response_type=code`;
        }
        window.location.href = url;
    };

    const guestLogin = (res) => {
        let url;
        if(process.env.REACT_APP_STATE === 'local') {
            url =  'http://localhost:3000/makingCookie/guest/pocketmarket.official@gmail.com'  // URL EXCHANGE RELATIVE
        } else if(process.env.REACT_APP_STATE === 'local:dev') {
            url =  'http://localhost:3000/makingCookie/guest/pocketmarket.official@gmail.com'  // URL EXCHANGE RELATIVE
        } else if(process.env.REACT_APP_STATE === 'dev') {
            url =  'http://localhost:3000/makingCookie/guest/pocketmarket.official@gmail.com'  // URL EXCHANGE RELATIVE
        } else if(process.env.REACT_APP_STATE === 'server:appDeploy') {
            url =  'http://13.124.90.138:3000/makingCookie/guest/pocketmarket.official@gmail.com'  // URL EXCHANGE RELATIVE
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