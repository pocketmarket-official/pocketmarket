/*global kakao*/
import React from 'react';


class MainMap extends React.Component {
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
                let keyword;

                let keywordContainer = document.getElementById("btn__address");

                if(keywordContainer.innerHTML == "주소지") {
                    let markerPosition = new kakao.maps.LatLng(
                        lat, long
                    );
                    marker = new kakao.maps.Marker({
                        position: markerPosition,
                    });

                    marker.setMap(map);
                } else {
                    let markerPosition = new kakao.maps.LatLng(
                        lat, long
                    );
                    marker = new kakao.maps.Marker({
                        position: markerPosition,
                    });

                    marker.setMap(map);

                    let places = new kakao.maps.services.Places();
                    keyword = keywordContainer.innerHTML.split(":")[1];
                    places.keywordSearch(keyword, this.placesSearchCB);
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

/*                const placesSearchCB = (data, status, pagination) => {
                    if (status === kakao.maps.services.Status.OK) {

                        let bounds = new kakao.maps.LatLngBounds();

                        for (let i = 0; i < data.length; i++) {
                            displayMarker(data[i]);
                            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                        }
                        map.setBounds(bounds);
                    }
                }

                const displayMarker = (place) => {
                    let marker = new kakao.maps.Marker({
                        map: map,
                        position: new kakao.maps.LatLng(place.y, place.x) 
                    });

                    this.markers.push(marker);

                    let elt = document.createElement("div");
                    elt.innerHTML = `${place.place_name}`;

                    function displayInfowindow() {
                        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                        infowindow.open(map, marker);
                    }

                    kakao.maps.event.addListener(marker, 'click', displayInfowindow);
                    elt.classList.add("search__result");
                    elt.addEventListener("click", displayInfowindow);
                }
        */
            });
        }
    }

    render() {
        return (
            <>
                <div id="main_map"></div>
            </>
        );
    }
}

export default MainMap;
