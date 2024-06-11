import React from "react";
import "./BodyPage.css";
import thumbsup from "./thumbsup.png";
function BodyPage2(){
    return(
        <div class = "location_div">
        <img src = {thumbsup} class = "loc_img"></img>
        <p class = "loc_p">Welcome!</p>
        <p class = "loc_p2">Now click from the options above to see what's near you!</p>
        </div>
    )
}

export default BodyPage2;