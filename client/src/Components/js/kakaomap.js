import React from "react";
import MapContent from "./map";


class KakaoMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            long: null,
        }
    }

    componentDidMount() {
        // get current location
        navigator.geolocation.getCurrentPosition((success) => {
            this.setState({
                lat: success.coords.latitude,
                long: success.coords.longitude,
            })
        });
    }

    render() {
        return (
            <div className="kakaomap">
                {
                    this.state.lat !== null && this.state.long !== null ?
                        <MapContent icon={this.props.icon} lat={this.state.lat} long={this.state.long} />
                    :
                        null
                }
            </div>
        );
    }
}

export default KakaoMap;
