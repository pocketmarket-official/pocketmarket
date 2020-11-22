import React from 'react';
import FestivalJSX from './mainFestivalJSX';
import axios from 'axios';


class MainFestivalContent extends React.Component {
    constructor(props) {
        super(props);

        this._getData = this._getData.bind(this);
        this._infiniteScroll = this._infiniteScroll.bind(this);
        this.sortCallback = this.sortCallback.bind(this);
        this.getPosition = this.getPosition.bind(this);

        this.state = {
            lat1: 0,
            long1: 0,
            festivals: [],
            data: [],
            gap: 3,
            preItems: 0,
            items: 4,
        };

        axios.get("/api/festivals_festival/")
        .then((res) => {
            const festivals = res.data;
            this.setState({
                festivals: festivals,
                data: festivals.slice(0, 4),
            });
        });
    }

    getPosition(options) {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
    }

    sortCallback() {
        this.state.festivals.forEach((data) => {
            let d = this.calcDistance(this.state.lat1, this.state.long1, data.xPosition, data.yPosition)[1];
            let dist = this.calcDistance(this.state.lat1, this.state.long1, data.xPosition, data.yPosition)[0];
            data["distance"] = d;
            data["show_dist"] = dist;
        });

        this.state.festivals.sort(this.sortData);
        this.setState({
            loading: false,
            data: this.state.festivals.slice(0, 4),
            preItems: 0,
            items: 4,
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
        let addressContainer = document.getElementById("btn__address");
        let getPositionBtn = document.getElementById("btn__map_list");

/*        getPositionBtn.onclick = () => {
            addressContainer.innerHTML = "주소지";
            this.getPosition().then((position) => {
                this.setState({
                    lat1: position.coords.latitude,
                    long1: position.coords.longitude,
                },
                    () => this.sortCallback()
                )
            })
            .catch((e) => console.log(e));
        }
*/
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
