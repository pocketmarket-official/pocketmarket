import React, {useState} from "react";
import KaKaoLogin from "react-kakao-login";
import { Redirect } from "react-router-dom";
import bgVideo from "../assets/intro/intro.mp4";
import bgImage from "../assets/intro/bg.jpg";


/**
 * Entry component
 *
 * when error on video playing, show login button immediately
 */
function Intro({authenticated, login, location}) {
    // window.native.pushSend('test');

    const [playingVideo, setPlayingVideo] = useState(false);

    // kakao login api built in django backend
    const responseLogin = (res) => {
        // window.location.href = "http://localhost:8000/login/kakao/"; //URL EXCHANGE LOCAL
        // window.location.href = "http://13.124.90.138:8000/login/kakao/"; //URL EXCHANGE SERVER
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
                        <button className="login__sign-in" onClick={responseLogin} type="button">
                                카카오 로그인 >
                        </button>
                    </div>
                    <div className="footer">all rights reserved pocketmarket</div>
                </>
            )}
        </div>
    );
}

export default Intro;
