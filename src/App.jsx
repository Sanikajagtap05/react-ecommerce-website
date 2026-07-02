import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import RunningShoes from "./pages/RunningShoes";
import Sneakers from "./pages/Sneakers";
import SportsShoes from "./pages/SportsShoes";
import CasualShoes from "./pages/CasualShoes";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import NewArrivels from "./pages/NewArrivels";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Props from "./props/Props";
import Props1 from "./props1/Props1";
import State from "./state/State";
import State1 from "./state/State1";
import Conditionalstatement from "./conditionalstatement/Conditionalstatement";
import Login from "./conditionalstatement/Login";
import Map from "./map/Map";


export default function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/props" element={<Props />} />
        <Route path="/props1" element={<Props1 />} />
        <Route path="/state" element={<State />} />
        <Route path="/state1" element={<State1 />} />
        <Route path="/map" element={<Map />} />
        <Route path="/conditional" element={<Conditionalstatement />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/runningShoes" element={<RunningShoes />} />
        <Route path="/sneakers" element={<Sneakers />} />
        <Route path="/sportsShoes" element={<SportsShoes />} />
        <Route path="/casualShoes" element={<CasualShoes />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/new-arrivals" element={<NewArrivels />} />

        

        
       </Routes>
       <Footer />
    </BrowserRouter>

      

      
      
    </>
  );
}