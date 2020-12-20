import React from 'react';
import storage from '../storage.js';
import cookie from 'react-cookies';


function MakingCookie(props) {
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
