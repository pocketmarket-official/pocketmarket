import React from 'react';
import FestivalJSX from './mainFestivalJSX';


class MainFestivalContent extends React.Component {
    constructor(props) {
        super(props);

        // fake data
        const temp = [
            {
                id: 1,
                address: "강원도 평창군 봉평면 태기로 174",
                description: "평창에서 열리는 푸드트럭 행사로 겨울 스포츠와 더불어 다양한 이벤트를 제공",
                image: require("../../assets/festival/fv_img1.png"),
                name: "제 4회 맛있는 푸드트럭",
            },
            {
                id: 2,
                address: "경기 광주시 도척면 도척윗로 278",
                description : "서울특별시 주최행사로 핸드메이드제품, 푸드트럭, 장터운영 문화공연 등이 진행",
                image: require("../../assets/festival/fv_img2.png"),
                name: "서울 밤도깨비 야시장",
            },
            {
                id: 3,
                address: "경기 광주시 도척면 도척윗로 278",
                description : "곤지암리조트에서 진행하는 행사로 공연이벤트와 푸드트럭 진행",
                image: require("../../assets/festival/fv_img3.png"),
                name: "패밀리 페스티발",
            },
            {
                id: 4,
                address: "경기 광주시 도척면 도척윗로 278",
                description : "문화공연 및 전시회를 진행하고 32개 푸드트럭 참여 및 문화공연을 진행",
                image: require("../../assets/festival/fv_img4.png"),
                name: "여의도 문화축제",
            },
            {
                id: 5,
                address: "경기 광주시 도척면 도척윗로 278",
                description : "곤지암리조트에서 진행하는 행사로 공연이벤트와 푸드트럭 진행",
                image: require("../../assets/festival/fv_img4.png"),
                name: "패밀리 페스티발",
            },
        ];

        this.state = {
            temp: temp,
            gap: 5,
            preItems: 0,
            items: 5,
        }
    }

    render() {
        return (
            this.state.temp.map((data) => (
                    <FestivalJSX data={data} key={data.id} />
            ))
        );
    }
}

export default MainFestivalContent;
