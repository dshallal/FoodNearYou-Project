import DNBodyPage from '../components/DNBodyPage';
import HeaderRest from '../components/HeaderRest';
import './App.css';

import React, { useState, useEffect } from "react";


function DNPage(){
    return(
        <div className='container'>
            <HeaderRest class1 = "buttons" class2 = "buttons2" class3 = "buttons" />
            <DNBodyPage />
        </div>
    );
}

export default DNPage;