import React, { useMemo, useRef } from "react";
import cookie from 'react-cookies';

import axios from "axios";

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

        console.log('==3');
        console.log(storeCd);
        console.log(fcmToken);

        if(storeCd && fcmToken){
            let transData = {"storeCd":storeCd, "fcmToken":fcmToken};

            axios.post('/saveTokenStore/', transData) //URL EXCHANGE RELATIVE
                .then((res)=>{
                    document.location.href='/kds/main';
                });
        } else {
            document.location.href = '/kds/main';
        }

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
