import BootPay from "bootpay-js";
import axios from "axios";

function pay(sellItemList, price, applicationId, callNo, storeName, storeId, userId) {
    console.log("==4==");
    console.log(applicationId);

    BootPay.request({
        // price: trInfo.Price,
        price: price,
        application_id: applicationId,
        // name: trInfo.storeName,
        name: storeName,
        pg: 'nicepay',
        // method: 'card',
        show_agree_window: 0,
        sellItemList: sellItemList,
        order_id: `${Date.now()}_사용자_이름`,
//        params: {callback1: '그대로 콜백받을 변수 1', callback2: '그대로 콜백받을 변수 2', customvar1234: '변수명도 마음대로'},
//        account_expire_at: '2018-05-25', // 가상계좌 입금기간 제한 ( yyyy-mm-dd 포멧으로 입력해주세요. 가상계좌만 적용됩니다. )
    }).error(function (data) {
        console.log('==1');
        //TODO:toast message
        console.log(data.msg);
    }).cancel(function (data) {
        console.log('==2');
        console.log(data);
    }).ready(function (data) {
        // 가상계좌 입금 계좌번호가 발급되면 호출되는 함수입니다.
        console.log(data);
    }).confirm(function (data) {
        //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
        //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
        console.log('==3');
        console.log(data);
        var enable = true; // 재고 수량 관리 로직 혹은 다른 처리
        if (enable) {
            console.log('==4');
            BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
        } else {
            console.log('==5');
            BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
        }
    }).close(function (data) {
        console.log('==6');
        // 결제창이 닫힐때 수행됩니다. (성공,실패,취소에 상관없이 모두 수행됨)
        // console.log(data);
    }).done(function (data) {
        //결제가 정상적으로 완료되면 수행됩니다
        //비즈니스 로직을 수행하기 전에 결제 유효성 검증을 하시길 추천합니다.
        console.log('==7');
        let transData = {"data":data, "sellItemList":sellItemList, 'storeId':storeId, 'userId':userId, 'callNo':callNo};
        axios.post('/trade/', transData)
            .then((res)=>{
                console.log(res.data);
                if(res.data.result==='200'){
                    window.location.href = res.data.url;
                } else if(res.data.result==='202'){

                } else if(res.data.result==='500'){
                    // toast message after page redirect
                }

            });
    });
}

export default pay;
