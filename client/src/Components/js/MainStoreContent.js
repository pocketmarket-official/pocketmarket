import React from 'react';
import StoreJSX from './mainStoreJSX';
import Loading from './Loading';
import axios from 'axios';

class MainStoreContent extends React.Component {
    constructor(props) {
        super(props);
        this.calcDistance = this.calcDistance.bind(this);
        this.sortData = this.sortData.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.sortCallback = this.sortCallback.bind(this);
        this._getData = this._getData.bind(this);
        this._infiniteScroll = this._infiniteScroll.bind(this);
        this.searchData = this.searchData.bind(this);

        this.state = {
            loading: false,
            stores: [],
            data: [],
            gap: 5,
            preItems: 0,
            items: 5,
            userId: this.props.userId,
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
/*        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
*/    }

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
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop); //내릴수록 늘어남
        let clientHeight = document.documentElement.clientHeight; //고정

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
        // axios.get("http://localhost:8000/api/stores_store/") // URL EXCHANGE LOCAL
        axios.get("/api/stores_store/") // URL EXCHANGE RELATIVE
        // axios.get("http://13.124.90.138:8000/api/stores_store/") // URL EXCHANGE SERVER
        .then((res) => {
            console.log("===1======");
            console.log(res);
            const stores = res.data.filter((elt) => {
                if(elt.useYn === 'Y'){
                    return true;
                }
            });
            this.setState({
                loading: true,
                stores: stores,
            }, () => {
                // get current location
/*                this.getPosition().then((position) => {
                    window.sessionStorage.setItem("latitude", position.coords.latitude);
                    window.sessionStorage.setItem("longitude", position.coords.longitude);
                    this.sortCallback();
                })
                .catch((e) => console.log(e));
*/                this.sortCallback();
            });
        });

        let addressContainer = document.getElementById("btn__address");
        let getPositionBtn = document.getElementById("btn__map_list");

/*        if(addressContainer.innerHTML !== "현위치") {
            if(this.props.place !== []) {
                window.sessionStorage.setItem("longitude", this.props.place[0]);
                window.sessionStorage.setItem("latitude", this.props.place[1]);
                this.sortCallback();
            }
        }
*/
/*        getPositionBtn.onclick = () => {
            addressContainer.innerHTML = "현위치";
            this.getPosition().then((position) => {
                window.sessionStorage.setItem("latitude", position.coords.latitude);
                window.sessionStorage.setItem("longitude", position.coords.longitude);
                this.sortCallback();
            })
            .catch((e) => console.log(e));
        }
*/
        window.addEventListener("scroll", this._infiniteScroll, true);

        const elt = document.getElementById("navigation__search");
        elt.onclick = () => this.searchData();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this._infiniteScroll, true);
    }

    sortCallback() {
        this.state.stores.forEach((data) => {
            let calc = this.calcDistance(window.sessionStorage.getItem("latitude"), window.sessionStorage.getItem("longitude"), data.xPosition, data.yPosition);
            let d = calc[1];
            let dist = calc[0];
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

    searchData() {
        const elt = document.getElementById("navigation__query");
        let value = elt.value;
        elt.value = "";

        let searched = this.state.stores.filter(
            (elt) => {
                if(elt.storeName.indexOf(value) > -1 && elt.storeName.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    return true;
                }
            }
        );

        window.removeEventListener("scroll", this._infiniteScroll, true);

        this.setState({
            data: searched,
        });
    }

    componentDidUpdate() {
        let addressContainer = document.getElementById("btn__address");
        let prev = window.sessionStorage.getItem("latitude");

/*        if(addressContainer.innerHTML !== "현위치") {
            if(this.props.place !== []) {
                if(window.sessionStorage.getItem("latitude") !== this.props.place[1]) {
                    window.sessionStorage.setItem("longitude", this.props.place[0]);
                    window.sessionStorage.setItem("latitude", this.props.place[1]);

                    this.state.stores.forEach((data) => {
                        let calc = this.calcDistance(window.sessionStorage.getItem("latitude"), window.sessionStorage.getItem("longitude"), data.xPosition, data.yPosition);
                        let d = calc[1];
                        let dist = calc[0];
                        data["distance"] = d;
                        data["show_dist"] = dist;
                    });

                    this.state.stores.sort(this.sortData);

                    if(prev !== window.sessionStorage.getItem("latitude")) {
                        this.setState({
                            data: this.state.stores.slice(0, 5)
                        });
                    }
                }
            }
        }
*/    }

    render() {
        const isLoading = this.state.loading;
        return (
            <div id="storeContent">
            {
                isLoading ? (
                    <Loading />
                ) : (
                    <>
                        {/*<div className="content__partition">50m 이내</div>*/}
                        {
                            this.state.data !== undefined ?
                            this.state.data.map((data) => (
                                <StoreJSX data={data} key={data.storeCd} userId={this.state.userId} />
                            ))
                            :
                            null
                        }
                    </>
                )
            }
            </div>
        );
    }
}

export default MainStoreContent;
