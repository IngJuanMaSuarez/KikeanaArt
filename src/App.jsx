import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";

import { Home } from "./pages/Home";
import { News } from './pages/News';
import { Amigurumis } from './pages/Amigurumis';
import { FreePattern } from './pages/FreePattern';
import { AboutUs } from "./pages/AboutUs";

import './styles/mobile.css';
import './styles/tablet.css';
import './styles/desktop.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/News" element = { <News /> } />
        <Route path = "/Amigurumis" element = { <Amigurumis /> } />
        <Route path = "/FreePattern" element = { <FreePattern /> } />
        <Route path = "/AboutUs" element = { <AboutUs /> } />
      </Routes>
    </Router>
  );
}

export { App };