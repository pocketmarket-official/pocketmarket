/*global kakao*/
import React from 'react';


class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 2,
        };
        this.temp = [
            {
                id: 1,
                username: '노민철',
                name: '집',
                address: '경기도 안양시',
                latlong: [126.950783, 37.389696],
            },
            {
                id: 2,
                username: '노민철',
                name: '학교',
                address: '서울특별시 성북구 안암동',
                latlong: [127.028015, 37.582367],
            },
            {
                id: 3,
                username: '노민철',
                name: '회사',
                address: '서울특별시 강남구',
                latlong: [127.028015, 37.582367],
            },
        ];
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
                    level: 3
                };
                const map = new kakao.maps.Map(container, options);

                let marker;

                let keywordContainer = document.getElementById("btn__address");

                let markerPosition = new kakao.maps.LatLng(
                    lat, long
                );
                marker = new kakao.maps.Marker({
                    position: markerPosition,
                });

                marker.setMap(map);

                if(keywordContainer.innerHTML !== "주소지") {
                    let keyword = keywordContainer.innerHTML;
                    let parsed = keyword.split(":")[1].trim();
                    for(let item in this.temp) {
                        if(this.temp[item].address === parsed) {
                            lat = this.temp[item].latlong[1];
                            long = this.temp[item].latlong[0];
                            break;
                        }
                    }
                    let moveLatLon = new kakao.maps.LatLng(
                        lat, long
                    );
                    map.setCenter(moveLatLon);
                }

                // zoom control
                let zoomControl = new kakao.maps.ZoomControl();
                map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

                let infowindow = new kakao.maps.InfoWindow({zIndex:1});

                let content = '<div style="padding:5px;font-size:12px;">현위치</div>';
                infowindow.setContent(content);
                infowindow.open(map, marker);

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

    render() {
        return <div id="main_map"></div>;
    }
}

export default MainMap;
