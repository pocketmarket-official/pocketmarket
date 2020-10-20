import React from 'react';
import FestivalJSX from './mainFestivalJSX';
import axios from 'axios';


class MainFestivalContent extends React.Component {
    constructor(props) {
        super(props);

        this._getData = this._getData.bind(this);
        this._infiniteScroll = this._infiniteScroll.bind(this);

        this.state = {
            festivals: [],
            data: [],
            gap: 3,
            preItems: 0,
            items: 4,
        };

        axios.get("http://13.124.90.138:8000/api/festivals_festival/")
        .then((res) => {
            const festivals = res.data;
            this.setState({
                festivals: festivals,
                data: festivals.slice(0, 4),
            });
        });
    }

    _getData() {
        let result = this.state.festivals.slice(this.state.preItems, this.state.items);
        this.setState({
            data: this.state.data.concat(result),
            page: this.state.page + 1,
        });
        return result;
    }

    _infiniteScroll() {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;

        if( 10 >= scrollHeight - scrollTop - clientHeight ) {
            this.setState({
                preItems: this.state.items,
                items: this.state.items + this.state.gap,
            },
                () => this._getData()
            );
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this._infiniteScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this._infiniteScroll, true);
    }

    render() {
        return (
            this.state.data.map((data) => (
                    <FestivalJSX data={data} key={data.id} />
            ))
        );
    }
}

export default MainFestivalContent;
