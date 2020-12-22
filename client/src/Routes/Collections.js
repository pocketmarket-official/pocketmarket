import React from 'react';
import HeaderBack from '../Components/js/HeaderBack';
import mark from '../assets/store_fastorder/btn_pket_ico.png';
import emptymark from '../assets/store_fastorder/btn_code_store.png';
import img1 from '../assets/store_fastorder/14.jpg';
import img2 from '../assets/store_fastorder/21.jpg';
import img3 from '../assets/store_fastorder/24.jpg';
import img4 from '../assets/store_fastorder/32.jpg';
import base from '../assets/store_fastorder/store_base.jpg';
import axios from 'axios';

class Collections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [],
        };
    }

    componentDidMount() {
        axios.get("/api/stores_store/")
        .then((res) => {
            this.setState({ stores: res.data })
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
                            </div>
                        </div>
                        <div className="fastorder__store">
                            {/*<div className="store__grid">
                                <img className="store__image" src={base}/>
                                <img className="mark" src={mark}/>
                                <img className="none" src={emptymark}/>
                                <div className="store__code">001</div>
                            </div>
                            <div className="store__grid visit">
                                <img className="store__image" src={img2}/>
                                <img className="mark" src={mark}/>
                                <img className="none" src={emptymark}/>
                                <div className="store__code">001</div>
                            </div>
                            <div className="store__grid comment">
                                <img className="store__image" src={img3}/>
                                <img className="mark" src={mark}/>
                                <img className="none" src={emptymark}/>
                                <div className="store__code">001</div>
                            </div>
                            <div className="store__grid nice">
                                <img className="store__image" src={img1}/>
                                <img className="mark" src={mark}/>
                                <img className="none" src={emptymark}/>
                                <div className="store__code">001</div>
                            </div>*/}
                            {
                                this.state.stores.map((elt) => {
                                    if(elt.imgLogoUrl !== undefined && elt.imgLogoUrl !== null) {
                                        return (
                                            <>
                                                <div className="store__grid visit">
                                                    <img className="store__image" src={elt.imgLogoUrl} />
                                                    <div className="store__code">{elt.storeCd}</div>
                                                </div>
                                            </>
                                        );
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
