import React from 'react';
import { Link } from 'react-router-dom';


class StoreJSX extends React.Component {
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

        let lat;
        let long;

        const success = (pos) => {
            const coords = pos.coords;
            lat = coords.latitude;
            long = coords.longitude;
        };

        // get current location
        navigator.geolocation.getCurrentPosition(success);

        this.state = {
            lat1: 0,
            long1: 0,
            temp: temp,
        };
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
                rtn = dist + "m";
            }
        } else {
            rtn = dist + "km";
        }

        return rtn;
    }

    componentDidMount() {
        if(this.props.place.place !== []) {
            this.setState({
                lat1: this.props.place.place[1],
                long1: this.props.place.place[0]
            });
        }
    }

    render() {
        console.log(this.state);
        return(
            this.state.temp.map((data) => {
                let d = this.calcDistance(this.state.lat1, this.state.long1, data.latlong[1], data.latlong[0]);
                return (
                <div className="content__store">
                    <Link to={{
                        pathname: `/main/store/${data.id}`,
                        state: {data, d}
                    }}>
                    <div className="store__store">
                        <img className="store__image" src={data.image}></img>
                        <div className="store__detail">
                            <div className="detail__title">
                                <div className="detail__name">{data.store_nm}</div>
                                <div className="detail__distance">{d}</div>
                                <div className="detail__likes">{data.like_count}</div>
                            </div>
                            <div className="detail__description">
                                {data.comment}
                            </div>
                        </div>
                    </div>
                    </Link>
                    <div className="store__review">
                        리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰리뷰
                        <div className="review__likes">리뷰 좋아요</div>
                    </div>
                </div>
                );
            }
        ));
    }
}

export default StoreJSX;
