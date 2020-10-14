import React, {useState} from "react";
import KaKaoLogin from "react-kakao-login";
import {Redirect} from "react-router-dom";
import bgVideo from "../assets/intro/intro.mp4";
import bgImage from "../assets/intro/bg.jpg";
import '../Components/scss/intro.scss';

const axios = require('axios');

/**
 * Entry component
 *
 * when error on video playing, show login button immediately
 */
function Intro({authenticated, login, location}) {
    const [playingVideo, setPlayingVideo] = useState(false);

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

    const {from} = location.state || {from: {pathname: "/main"}};
    if (authenticated) return <Redirect to={from}/>;

    return (
        <>
            <div className="bg">
                {playingVideo ?
                    <video className="bg__video" autoPlay={true} muted={true}
                           onError={() => setPlayingVideo(false)}
                           onEnded={() => setPlayingVideo(false)}>
                        <source src={bgVideo} type={"video/mp4"}/>
                    </video> :
                    <img className="bg__image" src={bgImage}/>
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
                            onSuccess={responseKaKao}
                            onFailure={responseFail}
                            //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장
                            getProfile={true}
                        />
                        <button className="login__sign-up">
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
