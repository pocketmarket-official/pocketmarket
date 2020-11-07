import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/js/Header';
// import MainFestivalContent from '../Components/js/MainFestivalContent';
// import MainStoreContent from '../Components/js/MainStoreContent';
// import MainMapContent from '../Components/js/MainMapContent';
// import '../Components/scss/main.scss';

// import btnSearchImg from '../assets/common/btn_sceach.png';

class PocketDIctionary extends React.Component {
    constructor(props) {
        super(props);

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

    componentDidMount() {
        this.handleRefresh();
        this.handleTop();
    }

    render() {
        return (
            <>
                <Header />
                <div className="main">
                    <div className="dictionary">
                        <div className="dict-row">
                            <div className="dict-store"></div>
                            <div className="dict-store"></div>
                            <div className="dict-store"></div>
                        </div>
                        <div className="dict-row">
                            <div className="dict-store"></div>
                            <div className="dict-store"></div>
                            <div className="dict-store"></div>
                        </div>
                        <div className="dict-row">
                            <div className="dict-store"></div>
                            <div className="dict-store"></div>
                            <div className="dict-store"></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Main;
