import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";

import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";

import './styles/mobile.css';
import './styles/tablet.css';
import './styles/desktop.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = { <Home /> } />
        <Route path = "/AboutUs" element = { <AboutUs /> } />
      </Routes>
    </Router>
  );
}

export { App };