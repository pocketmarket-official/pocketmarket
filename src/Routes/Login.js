import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from '@fortawesome/free-solid-svg-icons';
import fontawesome from '@fortawesome/fontawesome';

fontawesome.library.add(faComments);

function Login() {
    return (
        <div className="login">
            <div className="login__box">
                <div className="kakao__login"><FontAwesomeIcon icon="comments" className="login__icon" />카카오 로그인</div>
                <div className="kakao__signup"><FontAwesomeIcon icon="comments" className="login__icon" />카카오 회원가입</div>
            </div>
        </div>
        );
}

export default Login;
