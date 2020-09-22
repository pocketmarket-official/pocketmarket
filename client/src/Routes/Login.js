import React from 'react';
import KaKaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import { Redirect } from "react-router-dom";

const axios = require('axios');


function Login({ authenticated, login, location }) {
    const responseKaKao = (res) => {
        const email = res.profile.kakao_account.email;
        try {
            login({ email })
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
    }

    const { from } = location.state || { from: { pathname: "/main" } }
    if (authenticated) return <Redirect to={from} />

    return (
        <div className="login">
            <div className="login__box">
                {/*<div className="kakao__login"><FontAwesomeIcon icon="comments" className="login__icon" />카카오 로그인</div>*/}
                <KaKaoBtn
                    //styled component 통해 style을 입혀 줄 예정
                    jsKey={process.env.REACT_APP_KAKAO_KEY}
                    //카카오에서 할당받은 jsKey를 입력
                    buttonText='카카오 계정으로 로그인'
                    //로그인 버튼의 text를 입력
                    onSuccess={responseKaKao}
                    onFailure={responseFail}
                    //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장
                    getProfile={true}
                />
            </div>
        </div>
        );
}

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;
