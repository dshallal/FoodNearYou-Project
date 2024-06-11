import React from "react";
import "./BodyPage.css";
import location from "./location.png";
function LocationIssue(){
    return(
        <div class = "location_div">
        <img src = {location} class = "loc_img"></img>
        <p class = "loc_p">Please enable your location to continue!</p>
        <p class = "loc_p2">Click the blue button at the top right to do so.</p>
        <p class = "loc_p2">Powered by Google Search</p>
        </div>
    )
}

export default LocationIssue;
