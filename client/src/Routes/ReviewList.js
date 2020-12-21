import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import ReviewJSX from '../Components/js/reviewJSX';
import cookie from "react-cookies";
import storage from "../storage";


class ReviewList extends React.Component {
    constructor(props) {
        let cookie_token = cookie.load("access_token");
        if(!cookie_token){
            window.location.href = '/login/';
        }
        else if(cookie_token==='guest') {
            localStorage.removeItem(cookie_token);
            cookie.remove('access_token');
            window.location.href = '/login/';
        }

        super(props);
    }

    render() {
        return (
            <>
                <HeaderBack url='/mypage' />
                <ReviewJSX props={this.props} />
            </>
        );
    }
}

export default ReviewList;
