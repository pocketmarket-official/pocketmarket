import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/js/Header';
import Festival from '../Festival/FestivalInfo';
import StoreJSX from '../Components/js/mainStoreJSX';
import MainMapContent from '../Components/js/MainMapContent';

class Main extends React.Component {
    constructor(props) {
        super(props);
        // this binding
        this.handlePageRender = this.handlePageRender.bind(this);
        this.handlePage0Render = this.handlePage0Render.bind(this);
        this.handlePage1Render = this.handlePage1Render.bind(this);
        this.handlePage2Render = this.handlePage2Render.bind(this);

        // fake data
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

        this.state = {
            temp: temp,
            current: 0,
            latlong: [],
        }
    }

    // renders jsx
    // same as usestate in function component
    handlePageRender() {
        if(this.state.current === 0) {
            return <Festival />;
        } else if(this.state.current === 1) {
            return <StoreJSX />;
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

    render() {
        return (
            <>
                <Header />
                <div className="main">
                    {this.state.current !== 0 ?
                    <div className="main__btns">
                        <button className="btn__current"><Link to="/mypage/myplace/search">현위치</Link></button>
                        <button className="btn__address" id="btn__address" onClick={this.handleAddress}>주소지</button>
                        <button className="btn__map_list" id="btn__map_list" onClick={() => this.handleBtn()}>목록</button>
                    </div>
                    : null
                    }
                    <div className="modal__address hidden" id="modal__address">
                        {this.state.temp.map((data) => {
                            let contentId = `modal__content${data.id}`;
                            return (
                                <div id={contentId} onClick={(e) => this.handleModalContent(e)}>{data.name}: {data.address}</div>
                            );
                        })}
                    </div>
                    <div className="main__navigation">
                        <button onClick={this.handlePage0Render}>축제보기</button>
                        <button onClick={this.handlePage1Render}>매장보기</button>
                    </div>
                    {this.handlePageRender()}
                </div>
            </>
        );
    }
}

export default Main;
