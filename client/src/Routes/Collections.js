import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import mark from '../assets/store_fastorder/btn_pket_ico.png';
import emptymark from '../assets/store_fastorder/btn_code_store.png';
import img1 from '../assets/store_fastorder/14.jpg';
import img2 from '../assets/store_fastorder/21.jpg';
import img3 from '../assets/store_fastorder/24.jpg';
import img4 from '../assets/store_fastorder/32.jpg';
import base from '../assets/store_fastorder/store_base.jpg';
import {cookieCheck_rejectGuest} from '../Components/js/CookieCheck.js'
import axios from 'axios';
import defaultImg from '../assets/main/grayBI.png';
import {Link} from "react-router-dom";

class Collections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [],
        };
    }


    componentDidMount() {
        let user_email = cookieCheck_rejectGuest();
        let stores = [];

        axios.get("api/users_user/")
            .then ((res1)=>{
                axios.get("/api/stores_store/")
                .then((res2) => {
                    axios.get("/api/trades_saleHeader/")
                        .then((res3)=>{
                            axios.get("/api/reviews_review/")
                                .then((res4)=>{
                                    //user ID 가져오기
                                    let userId = res1.data.find(
                                        (elt) => {

                                            if (elt.email === user_email){
                                                return true;
                                            }
                                        }
                                    ).id;
                                    //자기가 구매한 이력의 storeCd만 가져와서 순서대로 정렬하고 중복값 제거하기
                                    let trades = [];
                                    res3.data.forEach(
                                        (elt) => {

                                    // console.log('===2');
                                    //         console.log(elt.user);
                                    //         console.log(userId);
                                    //         console.log('===2');
                                            if(elt.user === userId){
                                                trades.push(elt.storeCd);
                                            }
                                        }
                                    );
                                    trades = Array.from(new Set(trades)).sort();
                                    //자기가 작성한 리뷰의 store id만 가져와서 순서대로 정렬하고 중복값 제거하기
                                    let reviews = [];
                                    res4.data.forEach(
                                        (elt) => {
                                            if(elt.user === userId){
                                                reviews.push(elt.storeCd);
                                            }
                                        }
                                    );
                                    reviews = Array.from(new Set(reviews)).sort();
                                    //거래와 리뷰에서 가져온 storeCd/storeId를 탐색하기 위한 사전준비
                                    let tradeFlag = 0;
                                    let reviewFlag = 0;
                                    let current_trade;

                                    if(trades[tradeFlag]){
                                         current_trade = trades[tradeFlag];
                                    } else {
                                        current_trade = '00000'
                                    }
                                    let current_review;
                                    if(reviews[reviewFlag]){
                                        current_review = reviews[reviewFlag];
                                    } else {
                                        current_review = '00000'
                                    }

                                    //store목록을 돌면서 폐점업장 제거하고 거래,리뷰 이력과 비교하여 flag 설정하기
                                    res2.data.forEach(
                                        (elt)=>{
                                            if(elt.useYn === 'Y'){
                                                //현재 점포코드가 trade목록 상 점포코드와 동일하면 플래그를 바꾸고 trade목록 상 다음 점포코드를 가져온다.(다음 점포코드가 있다면)
                                                if(elt.storeCd === current_trade){
                                                    elt['defaultYn'] = 'N';
                                                    if(tradeFlag < trades.length-1){
                                                        tradeFlag++;
                                                        current_trade = trades[tradeFlag]
                                                    }
                                                } else {
                                                    elt['defaultYn'] = 'Y';
                                                }
                                                //현재 점포코드가 review목록 상 점포코드와 동일하면 플래그를 바꾸고 review목록 상 다음 점포코드를 가져온다.(다음 점포코드가 있다면)
                                                if(elt.id === current_review){
                                                    elt['grayYn'] = 'N';
                                                    if(reviewFlag < reviews.length-1){
                                                        reviewFlag++;
                                                        current_review = reviews[reviewFlag]
                                                    }
                                                } else {
                                                    elt['grayYn'] = 'Y';
                                                }

                                                stores.push(elt);
                                            }
                                        }
                                    );
                                    this.setState({stores})
                                });
                        });
                });
            this.setState({ stores: stores })
        });
    }

    render() {
        return (
            <>
                <HeaderBack url='/mypage' />
                <div className="fastorder">
                    <div className="nicemaster">좋아요 마스터</div>
                        <div className="fastorder__regionbox">
                            <div className="fastorder__region">
                                <div className="region__box">서울특별시</div>
                            {/*
                                <button className="selector">▼</button>
                            */}
                            </div>
                            <div className="fastorder__region__status">
                                <div className="region__store">
                                    <div className="store">매장</div>
                                    <div className="store__number">{this.state.stores.length}</div>
                                </div>
                            {/*
                                <div className="region__nice">
                                    <div className="nice">좋아요</div>
                                    <div className="nice__number">127</div>
                                </div>
                            */}
                            {/*
                                <div className="region__visit">
                                    <div className="visit">방문</div>
                                    <div className="visit__number">15</div>
                                </div>
                            */}
                            {/*
                                <div className="store__grid comment">
                                    <img className="store__image" src={elt.imgLogoUrl}/>
                                    <img className="mark" src={mark}/>
                                    <img className="none" src={emptymark}/>
                                </div>
                            */}
                            {/*
                                <div className="store__grid">
                                    <img className="store__image" src={defaultImg}/>
                                    <img className="mark" src={mark}/>
                                    <img className="none" src={emptymark}/>
                                </div>
                            */}
                            </div>
                        </div>
                        <div className="fastorder__store">
                            {
                                this.state.stores.map((data) => {
                                    if(data.imgLogoUrl===undefined || data.imgLogoUrl===null){
                                        data.imgLogoUrl = defaultImg
                                    }
                                        if (data.defaultYn === 'Y') {
                                            return(
                                                <>
                                                    <Link to={{
                                                        pathname: `/main/store/${data.id}`,
                                                        state: {data}
                                                    }}>

                                                        <div className="store__grid">
                                                            <img className="store__image" src={defaultImg}/>
                                                            {/*<img className="mark" src={mark}/>*/}
                                                            {/*<img className="none" src={emptymark}/>*/}
                                                        </div>
                                                    </Link>
                                                </>
                                            )
                                        } else {
                                            if (data.grayYn === 'Y') {
                                                return(
                                                    <>
                                                        <Link to={{
                                                            pathname: `/main/store/${data.id}`,
                                                            state: {data}
                                                        }}>
                                                            <div className="store__grid nice">
                                                                <img className="store__image" src={data.imgLogoUrl}/>
                                                                {/*<img className="mark" src={mark}/>*/}
                                                                {/*<img className="none" src={emptymark}/>*/}
                                                            </div>
                                                        </Link>
                                                    </>
                                                    )
                                            } else {
                                                return(
                                                    <>
                                                        <Link to={{
                                                            pathname: `/main/store/${data.id}`,
                                                            state: {data}
                                                        }}>
                                                            <div className="store__grid visit">
                                                                <img className="store__image" src={data.imgLogoUrl}/>
                                                                {/*<img className="mark" src={mark}/>*/}
                                                                {/*<img className="none" src={emptymark}/>*/}
                                                            </div>
                                                        </Link>
                                                    </>
                                                    )
                                            }
                                        }
                                })
                            }
                        </div>
                </div>
            </>
        );
    }
}

export default Collections;
