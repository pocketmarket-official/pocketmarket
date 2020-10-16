import BootPay from "bootpay-js";


function pay() {
    BootPay.request({
        price: '1000',
        application_id: process.env.REACT_APP_BOOTPAY_APP_ID,
        name: '식당 이름',
        pg: 'kakao',
        method: 'easy',
        show_agree_window: 0,
        items: [
            {
                item_name: '아이스 아메리카노',
                qty: 1,
                unique: '123', //해당 상품을 구분짓는 primary key
                price: 1000,
                cat1: '음료',
            }
        ],
        user_info: {
            username: '노민철',
            email: 'rmc2@naver.com',
            addr: '경기도 안양시',
            phone: '010-8222-9249'
        },
        order_id: `${Date.now()}_사용자_이름`,
//        params: {callback1: '그대로 콜백받을 변수 1', callback2: '그대로 콜백받을 변수 2', customvar1234: '변수명도 마음대로'},
//        account_expire_at: '2018-05-25', // 가상계좌 입금기간 제한 ( yyyy-mm-dd 포멧으로 입력해주세요. 가상계좌만 적용됩니다. )
    }).error(function (data) {
        console.log(data);
    }).cancel(function (data) {
        console.log(data);
    }).ready(function (data) {
        // 가상계좌 입금 계좌번호가 발급되면 호출되는 함수입니다.
        console.log(data);
    }).confirm(function (data) {
        //결제가 실행되기 전에 수행되며, 주로 재고를 확인하는 로직이 들어갑니다.
        //주의 - 카드 수기결제일 경우 이 부분이 실행되지 않습니다.
        console.log(data);
        var enable = true; // 재고 수량 관리 로직 혹은 다른 처리
        if (enable) {
            BootPay.transactionConfirm(data); // 조건이 맞으면 승인 처리를 한다.
        } else {
            BootPay.removePaymentWindow(); // 조건이 맞지 않으면 결제 창을 닫고 결제를 승인하지 않는다.
        }
    }).close(function (data) {
        // 결제창이 닫힐때 수행됩니다. (성공,실패,취소에 상관없이 모두 수행됨)
        console.log(data);
    }).done(function (data) {
        //결제가 정상적으로 완료되면 수행됩니다
        //비즈니스 로직을 수행하기 전에 결제 유효성 검증을 하시길 추천합니다.
        console.log(data);
    });
}

export default pay;
