import cookie from "react-cookies";
import storage from "../../storage";

function cookieCheck_rejectGuest(){
    let cookie_token = cookie.load("access_token");
    if(!cookie_token){
        window.location.href = '/login/';
    }
    else if(cookie_token==='guest') {
        localStorage.removeItem(cookie_token);
        cookie.remove('access_token');
        window.location.href = '/login/';
    }
    let user_email = storage.get(cookie_token);

    return user_email;
}

function cookieCheck_approveGuest(){
    let cookie_token = cookie.load("access_token");
    let user_email;
    if(!cookie_token){
      window.location.href = '/login/';
    } else if(cookie_token === 'guest'){
        user_email = 'pocketmarket.official@gmail.com'
    } else {
        user_email = storage.get(cookie_token);
    }

    return user_email;
}

export {cookieCheck_approveGuest, cookieCheck_rejectGuest}