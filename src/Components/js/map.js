/*global kakao*/
import React from 'react';


class MapContent extends React.Component {

    componentDidMount() {
        // create and add script tag to the head
        const script = document.createElement("script");
        script.type = "text/javascript"
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=" + process.env.REACT_APP_JS_KEY + "&autoload=false&libraries=services";
        document.head.appendChild(script);
        let lat;
        let long;

        const success = (pos) => {
            const coords = pos.coords;
            lat = coords.latitude;
            long = coords.longitude;
        }

        // get current location
        navigator.geolocation.getCurrentPosition(success);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("map");
                let options = {
                    center: new kakao.maps.LatLng(lat, long),
                    level: 3
                };
                const map = new kakao.maps.Map(container, options);

                //처음에는 현 위치에 마커
                let markerPosition = new kakao.maps.LatLng(
                    lat, long
                );

                let marker = new kakao.maps.Marker({
                    position: markerPosition,
                });

                marker.setMap(map);

                // zoom control
                let zoomControl = new kakao.maps.ZoomControl();
                map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

                let infowindow = new kakao.maps.InfoWindow({zIndex:1});

                const btn = document.getElementById("search__map");

                // 장소 검색하기
                btn.onclick = () => {
                    const keyword = document.getElementById("keyword__map").value;

                    let places = new kakao.maps.services.Places();

                    places.keywordSearch(keyword, placesSearchCB);

                    function placesSearchCB (data, status, pagination) {
                        if (status === kakao.maps.services.Status.OK) {

                            let bounds = new kakao.maps.LatLngBounds();

                            for (let i = 0; i < data.length; i++) {
                                displayMarker(data[i]);
                                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                            }
                            map.setBounds(bounds);
                        }
                    }
                    function displayMarker(place) {
                        let marker = new kakao.maps.Marker({
                            map: map,
                            position: new kakao.maps.LatLng(place.y, place.x) 
                        });

                        kakao.maps.event.addListener(marker, 'click', function() {
                            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                            const address = document.getElementById("myplacedetail__address");
                            const street = document.getElementById("myplacedetail__street");
                            address.innerHTML = place.address_name;
                            street.innerHTML = place.road_address_name;
                            infowindow.open(map, marker);
                        });
                    }
                }
            });
        }
    };

    render() {
        return <div id="map"></div>;
    }
}

export default MapContent;
