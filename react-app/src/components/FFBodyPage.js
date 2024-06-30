import "./BodyPage.css";
import React, { useState, useEffect } from "react";
import star1 from "./star1.png";
import star2 from "./star2-Photoroom.png";
import star3 from "./star3-Photoroom.png";
import star4 from "./star4-Photoroom.png";
import star5 from "./star5-Photoroom.png";
import arrow from "./arrow.png"
import arrow2 from "./arrow2.png";
import { getDistance } from "geolib";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";

const geolib = require("geolib");
setKey("#######");
setLanguage("en");
setRegion("es");
function FFBodyPage(){
    var [BEData, setBEData] = useState("");
    var[BEData2, setBEData2] = useState("");
    const [class_change, changer] = useState("star_img");
    const [c_change, changerr] = useState("afford");
    var [indexer, change_index] = useState(2);
    var [indexer2, change_index2] = useState(2);
    const [fonts, fonter] = useState("title_h");
    const [distance, changerdist] = useState(null);
    const [nimage, nimges] = useState(arrow);
    const [vimage, vimages] = useState("");
    useEffect(() => {
      fetch("http://localhost:3010/details1")
        .then((res) => res.json())
        .then((data) => setBEData(data));
    }, []);

  useEffect(() => {
       fetch("http://localhost:3010/details2")
     .then((res) => res.json())
       .then((data) => setBEData2(data));
   }, []);

    var arr_total = ["", "", "", "", ""];
    if(BEData != ""){
        arr_total = BEData?.details1;
    }
   var arr_total2 = ["", "", "", "", ""];
    if(BEData2 != ""){
     arr_total2 = BEData2?.details2;
   }
    function nimgez(){
        const id2 = document.querySelector(".d");
        id2.onmousedown =  function(event){
            if(event.button == 0){
            nimges(arrow2);
            }
        }
        id2.onmouseup = async function(){
            await new Promise((resolve) => {
                setTimeout(resolve, 200);
            });
            nimges(arrow);
        }
    }
    
    function splitter(){
        return arr_total[indexer].split("\n");
    }
    function round(num, places) {
        var multiplier = Math.pow(10, places);
        return Math.round(num * multiplier) / multiplier;
    }
    const options = {
        enableHighAccuracy: true
      };
  function distancer(){
        fromAddress(splitter()[3])
        .then(({ results }) => {
          const { lat, lng } = results[0].geometry.location;
            navigator.geolocation.getCurrentPosition(success, error, options);
            function success(position){
              const d = geolib.getPreciseDistance({latitude: position.coords.latitude, longitude: position.coords.longitude}, {
                  latitude: lat,
                  longitude: lng,
              })
              const result = round(0.000621371 * d, 2);
              if(result < 10){
              changerdist("Approximately " + result + " miles away");
              }
              else{
                changerdist("");
              }
            }
            function error(){
              alert("nope");
            }
          })
    } 
          
   useEffect(() => {
        var starss = document.querySelector(".stars");
        if(starss.innerHTML.charAt(0) == "3"){
            changer("star_img3");
            document.querySelector("." + class_change).src = star3;
        }
        else if(starss.innerHTML.charAt(0) == "2"){
            changer("star_img2");
            document.querySelector("." + class_change).src = star2;
        }
        else if(starss.innerHTML.charAt(0) == "4"){
            changer("star_img4");
            document.querySelector("." + class_change).src = star4;

        }
        else if(starss.innerHTML.charAt(0) == "5"){
            changer("star_img5");
            document.querySelector("." + class_change).src = star5;

        }
        else if(starss.innerHTML.charAt(0) == "1"){
            changer("star_img");
            document.querySelector("." + class_change).src = star1;

        }
        var affordd = document.querySelector("." + c_change);
        var checkk = document.querySelector(".check");
        if(checkk.innerHTML.includes("$$$") || checkk.innerHTML.includes("100")){
            affordd.innerHTML = "Costly";
            changerr("afford3");
        }
        else if((checkk.innerHTML.includes("20")) || (checkk.innerHTML.includes("$$"))){
            affordd.innerHTML = "Slightly Costly";
            changerr("afford2");
        }
        else{
            affordd.innerHTML = "Affordable";
            changerr("afford");
        }
        var checkk2 = document.querySelector("." + fonts);
        if(checkk2.innerHTML.length > 15){
            fonter("title_h2");
        }
        else{
            fonter("title_h");
        }
        nimgez();
        if(indexer == 2){
            vimages(arr_total2[1]);
        }
    });
    function indexx(){
        if(indexer == arr_total.length -1){
            change_index(2);
          //distancer();
        }
        else{
              //distancer();
              if(indexer2 == arr_total2.length -1){
                change_index2(2);
              }
              else{
              change_index2((c) => c+1);
              }
            vimages(arr_total2[indexer2]);
            change_index((c) => c +1);
        }

    }
    return(
        <div class = "body_page">
        <div class = "acc_div">
            <div>
            <h1 class = {fonts}>{splitter()[0]}</h1>
            </div>
            <div>
            <div>
            <p class = "stars">{splitter()[1]}</p>
            <img class = {class_change} src></img>
            </div>
            <p class = "check">Review Amount: {splitter()[2]}</p>
            <p class = {c_change}></p>
            <p>{splitter()[3]}</p>
            <p>{splitter()[4]}</p>
            </div>
        </div>
        <div class = "pic_div">
            <div class = "pic_div3">
            <img src = {vimage} class = "res_img2"></img>
            </div>
            <div class = "divver">{distance}</div>
        </div>
        <button class = "d" onClick={() => indexx()}><img src = {nimage} class = "arrow_img"></img></button>
        </div>
    );

}

export default FFBodyPage;
