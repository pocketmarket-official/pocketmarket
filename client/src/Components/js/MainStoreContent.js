import React from 'react';
import StoreJSX from './mainStoreJSX';


class MainStoreContent extends React.Component {
    constructor(props) {
        super(props);
        let temp = [
            {
                id: 1,
                store_nm: '스타벅스',
                image: '',
                comment: '커피전문점 스타벅스입니다. ',
                like_count: 21,
                latlong: [126.95982, 37.38302]
            },
            {
                id: 2,
                store_nm: '강남핫도그',
                image: '',
                comment: '맛있는 핫도그',
                like_count: 13,
                latlong: [126.96062, 37.38362]
            },
            {
                id: 3,
                store_nm: '이디야커피',
                image: '',
                comment: '커피커피',
                like_count: 14,
                latlong: [126.95351, 37.38997]
            }
        ];

        this.state = {
            lat1: 0,
            long1: 0,
            temp: temp,
        }

        let lat;
        let long;
    }

    calcDistance(latitude1, longitude1, latitude2, longitude2) {
        const EARTH_R = 6371000.0;
        const Rad = Math.PI / 180;
        const radLat1 = Rad * latitude1;
        const radLat2 = Rad * latitude2;
        const radDist = Rad * (longitude1 - longitude2);

        let distance = Math.sin(radLat1) * Math.sin(radLat2);
        distance += Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radDist);
        let ret = EARTH_R * Math.acos(distance);

        let rtn = Math.round(Math.round(ret) / 1000);

        let dist = (Math.round(ret) / 1000).toFixed(1);

        if(rtn < 1) {
            if(dist <= 0.05) {
                rtn = "50m 이내";
            } else if(dist <= 0.1) {
                rtn = "100m 이내";
            } else if(dist <= 0.2) {
                rtn = "200m 이내";
            } else {
                rtn = dist*1000 + "m";
            }
        } else {
            rtn = dist + "km";
        }

        return [rtn, dist];
    }

    sortData(a, b) {
        return (a.distance - b.distance);
    }

    componentWillMount() {
        // get current location
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lat1: position.coords.latitude,
                long1: position.coords.longitude,
            })
        });
    }

    componentDidMount() {
        let addressContainer = document.getElementById("btn__address");

        if(addressContainer.innerHTML !== "주소지") {
            if(this.props.place !== []) {
                this.setState({
                    lat1: this.props.place[1],
                    long1: this.props.place[0],
                });
            }
        }
    }

    componentDidUpdate() {
        let addressContainer = document.getElementById("btn__address");

        if(addressContainer.innerHTML !== "주소지") {
            if(this.props.place !== []) {
                if(this.state.lat1 !== this.props.place[1]) {
                    this.setState({
                        lat1: this.props.place[1],
                        long1: this.props.place[0],
                    });
                }
            }
        }
    }

    render() {
        this.state.temp.map((data) => {
            let d = this.calcDistance(this.state.lat1, this.state.long1, data.latlong[1], data.latlong[0])[1];
            let dist = this.calcDistance(this.state.lat1, this.state.long1, data.latlong[1], data.latlong[0])[0];
            data["distance"] = d;
            data["show_dist"] = dist;
        });

        this.state.temp.sort(this.sortData);

        return (
            <StoreJSX place={this.state} />
        );
    }
}

export default MainStoreContent;
