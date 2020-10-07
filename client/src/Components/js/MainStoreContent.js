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
            },
            {
                id: 4,
                store_nm: '강남 카페베네',
                image: '',
                comment: '커피커피',
                like_count: 42,
                latlong: [127.02866, 37.49858]
            },
            {
                id: 5,
                store_nm: '강남 파리바게트',
                image: '',
                comment: '맛있는 빵',
                like_count: 7,
                latlong: [127.02861, 37.49781]
            },
            {
                id: 6,
                store_nm: '노브랜드버거 고려대점',
                image: '',
                comment: '버거버거버거',
                like_count: 27,
                latlong: [127.02961, 37.58385]
            },
            {
                id: 7,
                store_nm: '서브웨이 안암',
                image: '',
                comment: '샌드위치',
                like_count: 3,
                latlong: [127.02898, 37.58609]
            },
            {
                id: 8,
                store_nm: '비야 부대찌개 본점',
                image: '',
                comment: '부대찌개 안암',
                like_count: 33,
                latlong: [127.02937, 37.58820]
            },
        ];

        this.state = {
            lat1: 0,
            long1: 0,
            temp: temp,
        }

        this.calcDistance = this.calcDistance.bind(this);
        this.sortData = this.sortData.bind(this);
        this.getPosition = this.getPosition.bind(this);

        let lat;
        let long;

        // get current location
        this.getPosition().then((position) => {
            this.setState({
                lat1: position.coords.latitude,
                long1: position.coords.longitude,
            })
        })
        .catch((e) => console.log(e));
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

    getPosition(options) {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
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
