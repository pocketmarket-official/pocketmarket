import React from 'react';
import storage from '../storage.js';
import cookie from 'react-cookies';


function MakingCookie(props) {
    //쿠키는 있는데 storage에 메일이 없으면 쿠키 삭제
    let cookie_token = cookie.load("access_token");
    let user_email = storage.get(cookie_token);
    if(!user_email){
        cookie.remove('access_token');
    }

    const params = props.match.params;
    let access_token = params.access_token;
    let email = params.email;

    const expires = new Date();
    expires.setDate(expires.getDate() + 1);

    cookie.save("access_token", access_token, {
        path: '/',
        expires: expires,
        //            httpOnly: true,
        //            secure: true,
    });
    storage.add(access_token, email);
    window.location.href = '/index';

    return (
        <>

        </>
    );
}

export default MakingCookie;
