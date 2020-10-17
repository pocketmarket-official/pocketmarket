import React from 'react';
import { Link } from 'react-router-dom';
import FestivalJSX from './mainFestivalJSX';
import axios from "axios";


class Festival extends React.Component {
    constructor(props) {
        super(props);

        // fake data
        const temp = [
            {
                id: 1,
                address: "서울시 송파구 문정동",
                description: "귤 맛있징~",
                image: "festival/festival1.jpeg",
                name: "귤축제",
            },
            {
                id: 2,
                address: "서울시 강남구 서초동",
                description :"고양이들아 모여라",
                image: "festival/festival2.jpeg",
                name: "고양이축제",
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

export default Festival;
