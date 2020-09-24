/*global kakao*/
import React from 'react';


class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: "",
        }
    }
    componentDidMount() {
        // create and add script tag to the head
        const script = document.createElement("script");
        script.type = "text/javascript"
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=" + process.env.REACT_APP_KAKAO_KEY + "&autoload=false&libraries=services";
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
                const geocoder = new kakao.maps.services.Geocoder();
                let container = document.getElementById("main_map");
                let options = {
                    center: new kakao.maps.LatLng(lat, long),
                    level: 3 // 지도 확대 레벨
                };

                let addressContainer = document.getElementById("btn__address");

                if(addressContainer.innerHTML !== "주소지") {
                    if(this.props.place !== []) {
                        lat = this.props.place.place[1];
                        long = this.props.place.place[0];
                    }
                    let moveLatLong = new kakao.maps.LatLng(
                        lat, long
                    );
                    options.center = moveLatLong;
                }

                const map = new kakao.maps.Map(container, options);
                this.setState({ map: map });

                let marker;

                let markerPosition = new kakao.maps.LatLng(
                    lat, long
                );
                marker = new kakao.maps.Marker({
                    position: markerPosition,
                });

                // zoom control
                let zoomControl = new kakao.maps.ZoomControl();
                map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

                let infowindow = new kakao.maps.InfoWindow({zIndex:1});

                kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
                    searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                        if (status === kakao.maps.services.Status.OK) {
                            let detailAddr = !!result[0].road_address ? '<div style="padding:5px;font-size:12px;">도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                            detailAddr += '<div style="padding:5px; margin-bottom:5px;font-size:12px;">지번 주소 : ' + result[0].address.address_name + '</div>';
                            
                            let content = '<div class="bAddr" style="padding:5px;font-size:12px;">' + detailAddr + '</div>';

                            // 마커를 클릭한 위치에 표시합니다 
                            marker.setPosition(mouseEvent.latLng);
                            marker.setMap(map);

                            // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                            infowindow.setContent(content);
                            infowindow.open(map, marker);
                            }
                        });
                    });

                function searchDetailAddrFromCoords(coords, callback) {
                    // 좌표로 법정동 상세 주소 정보를 요청합니다
                    geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
                }
            });
        }
    }

    componentDidUpdate() {
        let addressContainer = document.getElementById("btn__address");
        let lat;
        let long;
        if(addressContainer.innerHTML !== "주소지") {
            if(this.props.place !== []) {
                lat = this.props.place.place[1];
                long = this.props.place.place[0];
            }
            let moveLatLong = new kakao.maps.LatLng(
                lat, long
            );
        this.state.map.panTo(moveLatLong);
        }
    }

    render() {
        return <div id="main_map"></div>;
    }
}

export default MainMap;
