import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import StoreJSX from "../Components/js/mainStoreJSX";
import '../Components/scss/festivalStore.scss';

import bg from '../assets/festival_store/top_bg.jpg';

function FestivalStore( {location} ) {
    const festival  = location.state.data;
    return (
            <>
                <HeaderBack url='/mypage' />
                <div className="festival-store">
                    <div className="festival__content">
                        <div className="festival__image"><img src={festival.imgUrl || bg} alt="festival" /></div>
                        <div className="festival__title">
                            Festival
                            {/*<div className="festival__name">{ festival.festivalName }</div>*/}
                            {/*<div className="festival__description">{ festival.descriptionHeader }</div>*/}
                            {/*<div className="festival__address">{ festival.addr1 }</div>*/}
                            <div className="festival__name">여의도 밤도깨비 야시장</div>
                            <div className="festival__description">세계각국의 음식과 상품이 가득한 글로벌 야시장! 한강으로 하룻밤의 세계여행을 떠나보세요!</div>
                        </div>
                    </div>
                    <StoreJSX data={festival}/>
                    <StoreJSX data={festival}/>
                    <StoreJSX data={festival}/>
                </div>
            </>
        );
}

export default FestivalStore;
