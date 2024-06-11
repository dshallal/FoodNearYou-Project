import './App.css';
import App1 from "./App1.js";
import App2 from "./App2.js";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import FFPage from './FFPage.js';
import DNPage from './DNPage.js';
import GCPage from './GCPage.js';

import React, { useState, useEffect } from "react";

function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element = {<App1 />} />
        <Route path = "/app1" element = {<App1 />} />
        <Route path = "/app2" element = {<App2 />} />
        <Route path = "/ffpage" element = {<FFPage />} />
        <Route path = "/dnpage" element = {<DNPage />} />
        <Route path = "/gcpage" element = {<GCPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
