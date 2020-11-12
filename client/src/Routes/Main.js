import React from 'react';
import { Link } from 'react-router-dom';
import cookie from 'react-cookies';
import storage from '../storage.js';
import Header from '../Components/js/Header';
import MainFestivalContent from '../Components/js/MainFestivalContent';
import MainStoreContent from '../Components/js/MainStoreContent';
import MainMapContent from '../Components/js/MainMapContent';
import '../Components/scss/main.scss';

import btnSearchImg from '../assets/common/btn_sceach.png';

class Main extends React.Component {
    constructor(props) {
        super(props);
        // this binding
        this.handlePageRender = this.handlePageRender.bind(this);
        this.handlePage0Render = this.handlePage0Render.bind(this);
        this.handlePage1Render = this.handlePage1Render.bind(this);
        this.handlePage2Render = this.handlePage2Render.bind(this);
        this.handleTop = this.handleTop.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);


        let current;

        try {
            current = this.props.location.state.current;
        } catch(e) {
            current = 0;
        }

        let temp = [
            {
                id: 1,
                username: '노민철',
                name: '집',
                address: '경기도 안양시',
                latlong: [126.951485, 37.389939],
            },
            {
                id: 2,
                username: '노민철',
                name: '학교',
                address: '서울특별시 성북구 안암동',
                latlong: [127.025875, 37.584892],
            },
            {
                id: 3,
                username: '노민철',
                name: '회사',
                address: '서울특별시 강남구',
                latlong: [127.027810, 37.496971],
            },
        ];

        let cookie_token = cookie.load("access_token");
        console.log(storage.get(cookie_token));

        this.state = {
            temp: temp,
            current: current,
            latlong: [],
        }
    }

    // renders jsx
    // same as usestate in function component
    handlePageRender() {
        if(this.state.current === 0) {
            return <MainFestivalContent />;
        } else if(this.state.current === 1) {
            return <MainStoreContent place={this.state.latlong} />;
        } else if(this.state.current === 2) {
            return <MainMapContent place={this.state.latlong} />;
        } else {
            return null;
        }
    }

    // define functions that change state
    handlePage0Render() {
        this.setState(() => ({ current: 0 }));
    }

    handlePage1Render() {
        const btn = document.getElementById("btn__map_list");
        if(this.state.current === 2) {
            btn.innerHTML = "목록";
        }
        this.setState(() => ({ current: 1 }));
    }

    handlePage2Render() {
        this.setState(() => ({ current: 2 }));
    }

    // 목록과 지도 전환 버튼 컨트롤
    handleBtn() {
        const btn = document.getElementById("btn__map_list");
        const modal = document.getElementById("modal__address");
        modal.classList.add("hidden");
        if(btn.innerHTML === "목록") {
            btn.innerHTML = "지도";
            this.handlePage2Render();
        } else if(btn.innerHTML === "지도") {
            btn.innerHTML = "목록";
            this.handlePage1Render();
        }
    }

    // handle modal
    handleAddress() {
        const btn = document.getElementById("btn__address");
        const modal = document.getElementById("modal__address");

        btn.onclick = () => {
            modal.classList.toggle("hidden");
        }
    }

    handleModalContent(e) {
        const button1 = document.getElementById("btn__address");
        const modal = document.getElementById("modal__address");
        let address_test = e.target.innerHTML;
        button1.innerHTML = address_test;
        modal.classList.toggle("hidden");
        let keyword = address_test.split(":")[1].trim();
        for(let item in this.state.temp) {
            if(this.state.temp[item].address === keyword) {
                let target = this.state.temp[item].latlong;
                this.setState({ latlong: target });
                break;
            }
        }
    }

    handleRefresh() {
        const btn = document.getElementById("refresh");
        btn.onclick = () => {
            window.location.reload(true);
        };
    }

    handleTop() {
        const btn = document.getElementById("top");
        btn.onclick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    componentDidMount() {
        this.handleRefresh();
        this.handleTop();
    }

    render() {
        return (
            <>
                <Header />
                <div className="main">
                    <div className="main__btns">
                        <div className="btn__left">
                            <button id="refresh" className="btn__refresh"/>
                            <button id="top" className="btn__goto-top"/>
                        </div>
                        <div className="btn__right">
                            <Link to="/mypage/myplace/search"><button className="btn__current"/></Link>
                            <button className="btn__address" id="btn__address" onClick={this.handleAddress}>주소지</button>
                            <button className="btn__map_list" id="btn__map_list" onClick={() => this.handleBtn()}/>
                        </div>
                    </div>
                    <div className="modal__address hidden" id="modal__address" onClick={() => {
                        const elt = document.getElementById("modal__address");
                        elt.classList.add("hidden");
                    }}>
                        <div className="modal__modal" onClick={(e) => {
                            e.stopPropagation();
                        }}>
                            {this.state.temp.map((data) => {
                                let contentId = `modal__content${data.id}`;
                                return (
                                    <div id={contentId} key={contentId} onClick={(e) => this.handleModalContent(e)}>{data.name}: {data.address}</div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="main__navigation">
                        <div className="navigation">
                            <div className="navigation__btns">
                                <button className={this.state.current === 0 ? 'active' : undefined} onClick={this.handlePage0Render}>축제</button>
                                <button className={this.state.current === 1 ? 'active' : undefined} onClick={this.handlePage1Render}>매장</button>
                            </div>
                            <input type="text" className="navigation__query"/>
                            <img className="navigation__search" src={btnSearchImg} alt="search button" />
                        </div>
                    </div>
                    <div className="main__content">
                        {this.handlePageRender()}
                    </div>
                    <Link to="/order/status">
                        <div className="main__order-status">
                            <div className="order-status__count">1</div>
                        </div>
                    </Link>
                </div>
            </>
        );
    }
}

export default Main;
