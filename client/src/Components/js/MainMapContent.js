import React from "react";
import MapContent from "./map";


function MainMapContent(props) {
    return (
        <div className="mainmapcontent">
            <MapContent place={props} />
        </div>
    );
}

export default MainMapContent;
