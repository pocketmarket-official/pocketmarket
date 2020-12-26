import cookie from "react-cookies";
import storage from "../../storage";

function cookieCheck_rejectGuest(){
    // 쿠키 먼저 받아오고
    let cookie_token = cookie.load("access_token");

    //쿠키가 없으면 로그인 페이지로
    if(!cookie_token){
        window.location.href = '/login/';
        return;
    } //쿠키가 있는데 쿠키가 게스트용이면
    else if(cookie_token==='guest') {
        //storage를 삭제하고
        localStorage.removeItem(cookie_token);
        //쿠키도 삭제하고
        cookie.remove('access_token');
        //로그인페이지로
        window.location.href = '/login/';
        return;
    } else{
        //쿠키로 메일을 받아왔는데
        let user_email = storage.get(cookie_token);
        //메일이 없으면(=쿠키는 있는데 storage가 비어있으면)
        if(!user_email){
            //쿠키를 삭제하고
            cookie.remove('access_token');
            //로그인페이지로
            window.location.href = '/login/';
            return;
        } else {
            //쿠키도 이메일도 정상적으로 있으면
            return user_email;
        }
    }

}

function cookieCheck_approveGuest(){
    //쿠키 먼저 받아오고
    let cookie_token = cookie.load("access_token");
    let user_email;
    //쿠키가 없으면 로그인페이지로
    if(!cookie_token){
      window.location.href = '/login/';
    } //쿠키가 있는데 게스트용이면
    else if(cookie_token === 'guest'){
        //유저 메일을 테스트 메일로 고정하고
        user_email = 'pocketmarket.official@gmail.com'
    } else {
        // 게스트용이 아니면 storage에서 받아온다.
        user_email = storage.get(cookie_token);
        // 만약 storage에 토큰에 해당하는 메일이 없으면
        if(!user_email){
            // 해당 토큰의 쿠키를 삭제하고
            cookie.remove('access_token');
            // 로그인페이지로
            window.location.href = '/login/';
        }
    }

    return user_email;
}

export {cookieCheck_approveGuest, cookieCheck_rejectGuest}
