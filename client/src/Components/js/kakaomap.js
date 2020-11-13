import React from "react";
import MapContent from "./map";


function KakaoMap(props) {
    return (
        <div className="kakaomap">
            <MapContent icon={props.icon} />
        </div>
    );
}

export default KakaoMap;
