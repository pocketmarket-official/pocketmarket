/*global kakao*/
import React from 'react';


class MapContent extends React.Component {

    componentDidMount() {
        // create and add script tag to the head
        const script = document.createElement("script");
        script.type = "text/javascript"
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=" + process.env.REACT_APP_JS_KEY + "&autoload=false&libraries=services";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("map");
                let options = {
                    center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
                    level: 7
                };
                const map = new kakao.maps.Map(container, options);

                let markerPosition = new kakao.maps.LatLng(
                    37.62197524055062,
                    127.16017523675508
                );

                let marker = new kakao.maps.Marker({
                    position: markerPosition,
                });

                marker.setMap(map);

                let zoomControl = new kakao.maps.ZoomControl();
                map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
            });
        };
    }

    render() {
        return <div id="map"></div>;
    }
}

export default MapContent;
