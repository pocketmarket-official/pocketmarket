import React from 'react';
import HeaderBiz from '../Components/js/HeaderBiz';


function BizCertification() {
    return (
        <>
            <HeaderBiz />
            <div className="biz__certification">
                <div className="biz__message">마진형님은 사업자 인증이 되어있지 않은 상태입니다. 정보를 모두 입력하시면 사업자 인증 절차가 진행됩니다. </div>
                <div className="biz__detail">
                    <div>상호</div>
                    <div>대표자</div>
                    <div>개업년월일</div>
                    <div>사업자 등록번호</div>
                    <div>사업장 소재지</div>
                    <div>본점 소재지</div>
                    <div>사업의 종류</div>
                    <div>은행</div>
                    <div>계좌번호</div>
                    <div>예금주</div>
                </div>
                <div className="biz__button">
                    <div className="button__two">
                        <button className="">사업자등록증 업로드</button>
                        <button className="">통장사본 업로드</button>
                    </div>
                    <div className="button__three">
                        <button className="">문의하기</button>
                        <button className="">사용자모드</button>
                        <button className="">로그아웃</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BizCertification;
