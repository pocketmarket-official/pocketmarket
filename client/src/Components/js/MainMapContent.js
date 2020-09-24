import React from "react";
import MainMap from "./mainMap";


function MainMapContent(props) {
    return (
        <div className="mainmapcontent">
            <MainMap place={props} />
        </div>
    );
}

export default MainMapContent;
