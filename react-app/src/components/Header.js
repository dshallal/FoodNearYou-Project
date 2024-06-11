import React from "react";
import "./Header.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Header(){
   const navigate = useNavigate();
   async function navigateTo(){
      if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition(success, error);
       }
   }
   const [on_off, isLocation] = useState("OFF");
   const [color, colorChange] = useState("location");
   function success(){
      isLocation("ON");
      colorChange("location2");
      navigate("/app2");
   }
   function error(){

   }
   function return_home(){
      navigate("/app1");
   }
   return(<div class = "header">
   <h1 class = "title" onClick={return_home}>Food Near You
   </h1>
   <div class = "button_container">
   <div class = "buttons">Fast Food</div>
   <div class = "buttons">Dine-In Restaurants</div>
   <div class = "buttons">Grocery Stores</div>
   <div class = "loc_container"><div class = {color} onClick={navigateTo}>Location {on_off}</div></div>
   </div>
   </div>
   )
}

export default Header;
