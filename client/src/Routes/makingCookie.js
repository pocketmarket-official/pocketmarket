import React from 'react';
import storage from '../storage.js';
import cookie from 'react-cookies';


function MakingCookie(props) {
    const params = props.match.params;
    let access_token = params.store_info.split('=', 2)[1];
    let email = params.email.split('=', 2)[1];

    const expires = new Date();
    expires.setDate(expires.getDate() + 1);

    cookie.save("access_token", access_token, {
        path: '/',
        expires: expires,
        //            httpOnly: true,
        //            secure: true,
    });
    storage.add(access_token, email);
    console.log(props);
    window.location.href = 'localhost:3000/index';

    return (
        <>



        </>
    );
}

export default MakingCookie;
