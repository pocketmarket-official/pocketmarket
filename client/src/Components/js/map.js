/*global kakao*/
import React from 'react';

import markerImageSrc from '../../assets/map/map_store_ico.png';

class MapContent extends React.Component {
    componentDidMount() {
        // create and add script tag to the head
        const script = document.createElement("script");
        script.type = "text/javascript"
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=" + process.env.REACT_APP_KAKAO_KEY + "&autoload=false&libraries=services";
        document.head.appendChild(script);
        let lat;
        let long;
        let markers = [];
        let markerImageSrc;

        try {
            markerImageSrc = this.props.icon;
            if(markerImageSrc === undefined) {
                import('../../assets/map/map_store_ico.png').then(img => {
                    markerImageSrc = img.default;
                })
            }
        } catch {
            import('../../assets/map/map_store_ico.png').then(img => {
                markerImageSrc = img.default;
            })
        }

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

                let markerImage = new kakao.maps.MarkerImage(
                    markerImageSrc,
                    new kakao.maps.Size(20, 22),
                );

                let marker = new kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage
                });

                marker.setMap(map);

                // zoom control
                let zoomControl = new kakao.maps.ZoomControl();
                map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);

                let infowindow = new kakao.maps.InfoWindow({zIndex:1});

                let content = '<div style="padding:5px;font-size:12px;">현위치</div>';
                infowindow.setContent(content);
                infowindow.open(map, marker);

                const btn = document.getElementById("search__map");

                kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
                    searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                        if (status === kakao.maps.services.Status.OK) {
                            let detailAddr = !!result[0].road_address ? '<div style="padding:5px;font-size:12px;">도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                            detailAddr += '<div style="padding:5px; margin-bottom:5px;font-size:12px;">지번 주소 : ' + result[0].address.address_name + '</div>';

                            let content = '<div class="bAddr" style="padding:5px;font-size:12px;">' + detailAddr + '</div>';

                            // 마커를 클릭한 위치에 표시합니다
                            marker.setPosition(mouseEvent.latLng);
                            marker.setMap(map);

                            const address = document.getElementById("myplacedetail__address");
                            const street = document.getElementById("myplacedetail__street");
                            const btn = document.getElementById("addList");
                            let addressName;
                            let roadAddress;

                            try {
                                addressName = result[0].address.address_name;
                            }
                            catch {
                                addressName = ""
                            }

                            try {
                                roadAddress = result[0].road_address.address_name;
                            }
                            catch {
                                roadAddress = ""
                            }

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

                const toCurrent = document.getElementById("header__mapLocation");
                if(toCurrent) {
                    toCurrent.onclick = () => {
                        navigator.geolocation.getCurrentPosition(success);

                        const geocoder = new kakao.maps.services.Geocoder();
                        map.panTo(new kakao.maps.LatLng(lat, long));

                        // 클릭해서 봤던 marker 삭제
                        marker.setMap(null);

                        marker = new kakao.maps.Marker({
                            position: markerPosition,
                            image: markerImage
                        });

                        marker.setMap(map);

                        let content = '<div style="padding:5px;font-size:12px;">현위치</div>';
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                    };
                }
            });
        }
    };

    render() {
        return <div id="map"></div>;
    }
}

export default MapContent;
