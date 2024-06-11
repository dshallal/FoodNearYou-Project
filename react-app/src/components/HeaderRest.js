import React from "react";
import "./Header.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function HeaderRest(props){
    const navigate = useNavigate();
    function stayOn1(){
        navigate("/ffpage");
    }
    function stayOn2(){
        navigate("/dnpage");
    }
    function stayOn3(){
        navigate("/gcpage");
    }
    function return_home2(){
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
            if (result.state === "granted") {
              navigate("/app2");
            } else if (result.state === "prompt") {
              navigate("/app1");
          }
        });
    }
   return(<div class = "header">
   <h1 class = "title" onClick={return_home2}>Food Near You
   </h1>
   <div class = "button_container">
   <div class = {props.class1} onClick={stayOn1}>Fast Food</div>
   <div class = {props.class2} onClick={stayOn2}>Dine-In Restaurants</div>
   <div class = {props.class3} onClick={stayOn3}>Grocery Stores</div>
   <div class = "loc_container"><div class = "location2">Location ON</div></div>
   </div>
   </div>
   )
}

export default HeaderRest;
