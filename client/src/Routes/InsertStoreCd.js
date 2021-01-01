import React, { useMemo, useRef } from "react";
import cookie from 'react-cookies';
import {cookieCheck_approveGuest} from "../Components/js/CookieCheck"

import axios from "axios";
import {cookieCheck_rejectGuest} from "../Components/js/CookieCheck";

class InsertStoreCd extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){

        const storeCd = document.getElementById("storeCd").value;
        const expires = new Date();
        expires.setDate(expires.getDate() + 1);

        cookie.save("storeCd", storeCd, {
            path: '/',
            expires: expires,
//            httpOnly: true,
//            secure: true,
        });

        let fcmToken = cookie.load("fcmToken");
        let user_email = cookieCheck_rejectGuest();
        axios.get("api/users_user/")
            .then ((res)=>{
                let userId = res.data.find((elt) => {
                    if (elt.email === user_email) {
                        return true;
                    }
                }).id;
                if(storeCd && fcmToken){
                    let transData = {"storeCd":storeCd, "fcmToken":fcmToken, "userId":userId};
                    console.log(transData);
                    alert(storeCd);
                    alert(fcmToken);

                    axios.post('/saveTokenStore/', transData)
                        .then((res)=>{
                            document.location.href='/kds/main';
                        });
                } else {
                    document.location.href = '/kds/main';
                }
            });



    }

    render(){
        return(
            <>
                <div>점포코드를 입력해주세요</div>
                <textarea id='storeCd'></textarea>
                <div className="submit" onClick={() => this.handleSubmit()}>등록하기</div>
            </>
        )

    }
}

export default InsertStoreCd;
