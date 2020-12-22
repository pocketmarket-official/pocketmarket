import React from 'react';
import { Link } from 'react-router-dom';
import HeaderBack from '../Components/js/HeaderBack';
import StoreJSX from "../Components/js/mainStoreJSX";
import axios from 'axios';

import bg from '../assets/festival_store/top_bg.jpg';

class FestivalStore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [],
            festival: this.props.location.state.data
        }
    }

    componentDidMount() {
        let stores = [];

        axios.get("/api/festivals_join/")
        .then((res) => {
            let storesId = res.data.filter(
                (elt) => {
                    if (elt.festivalCd === this.state.festival.id) {
                        return true;
                    }
                }
            );
            axios.get("/api/stores_store/") // URL EXCHANGE RELATIVE
                .then((res) => {
                    let stores = res.data.filter(
                        (elt) => {
                            let flag = false;
                            storesId.forEach((row) => {
                                if (row.storeCd === elt.id) {
                                    flag = true;
                                }
                            });
                            if (flag) return true;
                        });
                    this.setState({stores});
                });
        });
    }

    render() {
        return (
                <>
                    <HeaderBack />
                    <div className="festival-store">
                        <div className="festival__content">
                            <div className="festival__image"><img src={this.state.festival.imgUrl || bg} alt="festival" /></div>
                            <div className="festival__title">
                                Festival
                                <div className="festival__name">{ this.state.festival.festivalName }</div>
                                <div className="festival__description">{ this.state.festival.descriptionHeader }</div>
                                {/*<div className="festival__address">{ this.state.festival.addr1 }</div>*/}
                            </div>
                        </div>
                        {
                            this.state.stores.map((store) => {
                                return (
                                    <>
                                        <StoreJSX data={store} key={store.storeCd} />
                                        {/*<StoreJSX data={this.state.stores} key={this.state.stores.storeCd}/>*/}
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
