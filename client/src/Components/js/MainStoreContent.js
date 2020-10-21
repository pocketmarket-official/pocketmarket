import React from 'react';
import StoreJSX from './mainStoreJSX';
import Loading from './Loading';
import axios from 'axios';
import '../scss/mainStoreContent.scss';

class MainStoreContent extends React.Component {
    constructor(props) {
        super(props);
        this.calcDistance = this.calcDistance.bind(this);
        this.sortData = this.sortData.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.sortCallback = this.sortCallback.bind(this);
        this.sortCallbackUpdate = this.sortCallbackUpdate.bind(this);
        this._getData = this._getData.bind(this);
        this._infiniteScroll = this._infiniteScroll.bind(this);

        this.state = {
            lat1: 0,
            long1: 0,
            loading: false,
            stores: [],
            data: [],
            gap: 5,
            preItems: 0,
            items: 5,
        };

        axios.get("http://13.124.90.138:8000/api/stores_store/")
        .then((res) => {
            const stores = res.data;
            this.setState({
                stores: stores,
                data: stores.slice(0, 5),
            });
        });

        // get current location
        this.getPosition().then((position) => {
            this.setState({
                lat1: position.coords.latitude,
                long1: position.coords.longitude,
                loading: true,
            },
                () => this.sortCallback()
            )
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

    _getData() {
        let result = this.state.stores.slice(this.state.preItems, this.state.items);
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

        if(addressContainer.innerHTML !== "주소지") {
            if(this.props.place !== []) {
                this.setState({
                    lat1: this.props.place[1],
                    long1: this.props.place[0],
                    loading: true,
                },
                    () => this.sortCallback()
                );
            }
        }

        getPositionBtn.onclick = () => {
            addressContainer.innerHTML = "주소지";
            this.getPosition().then((position) => {
                this.setState({
                    lat1: position.coords.latitude,
                    long1: position.coords.longitude,
                    loading: true,
                },
                    () => this.sortCallback()
                )
            })
            .catch((e) => console.log(e));
        }

        window.addEventListener("scroll", this._infiniteScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this._infiniteScroll, true);
    }

    sortCallback() {
        this.state.stores.forEach((data) => {
            let d = this.calcDistance(this.state.lat1, this.state.long1, data.xPosition, data.yPosition)[1];
            let dist = this.calcDistance(this.state.lat1, this.state.long1, data.xPosition, data.yPosition)[0];
            data["distance"] = d;
            data["show_dist"] = dist;
        });

        this.state.stores.sort(this.sortData);
        this.setState({
            loading: false,
            data: this.state.stores.slice(0, 5),
            preItems: 0,
            items: 5,
        });
    }

    sortCallbackUpdate() {
        this.state.stores.forEach((data) => {
            let d = this.calcDistance(this.state.lat1, this.state.long1, data.xPosition, data.yPosition)[1];
            let dist = this.calcDistance(this.state.lat1, this.state.long1, data.xPosition, data.yPosition)[0];
            data["distance"] = d;
            data["show_dist"] = dist;
        });

        this.state.stores.sort(this.sortData);
        this.setState({
            loading: false,
            data: this.state.stores.slice(0, 4),
            preItems: 0,
            items: 4,
        });
    }

    componentDidUpdate() {
        let addressContainer = document.getElementById("btn__address");

        if(addressContainer.innerHTML !== "주소지") {
            if(this.props.place !== []) {
                if(this.state.lat1 !== this.props.place[1]) {
                    this.setState({
                        lat1: this.props.place[1],
                        long1: this.props.place[0],
                        loading: true,
                    },
                        () => this.sortCallbackUpdate()
                    );
                }
            }
        }
    }

    render() {
        const isLoading = this.state.loading;
        return (
            <div id="storeContent">
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <div className="content__partition">50m 이내</div>
                        {this.state.data.map((data) => (
                            <StoreJSX data={data} key={data.storeCd} />
                        ))}
                    </>
                )
            }
            </div>
        );
    }
}

export default MainStoreContent;
