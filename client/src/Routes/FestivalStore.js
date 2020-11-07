import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import StoreJSX from "../Components/js/mainStoreJSX";
import axios from 'axios';
import '../Components/scss/festivalStore.scss';

import bg from '../assets/festival_store/top_bg.jpg';

class FestivalStore extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        let festivalCd = this.props.location.state.data.festivalCd;
        let stores = [];

        axios.get("/api/festivals_join/")
        .then((res) => {
            stores = res.data.filter(
                (elt) => {
                    if (elt.festivalCd === festivalCd) {
                        return true;
                    }
                }
            )
        })

        this.state = {
            festival: this.props.location.state.data,
            stores: stores,
        }
    }

    render() {
        return (
                <>
                    <HeaderBack url='/mypage' />
                    <div className="festival-store">
                        <div className="festival__content">
                            <div className="festival__image"><img src={this.state.festival.imgUrl || bg} alt="festival" /></div>
                            <div className="festival__title">
                                Festival
                                {/*<div className="festival__name">{ festival.festivalName }</div>*/}
                                {/*<div className="festival__description">{ festival.descriptionHeader }</div>*/}
                                {/*<div className="festival__address">{ festival.addr1 }</div>*/}
                                <div className="festival__name">여의도 밤도깨비 야시장</div>
                                <div className="festival__description">세계각국의 음식과 상품이 가득한 글로벌 야시장! 한강으로 하룻밤의 세계여행을 떠나보세요!</div>
                            </div>
                        </div>
                        {
                            this.state.stores.map((data) => {
                                return (
                                    <>
                                        <StoreJSX data={this.state.festival}/>
                                    </>
                                );
                            })
                        }
                    </div>
                </>
        );
    }
}

export default FestivalStore;
