import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cars from "./pages/types/Cars";
import Rentals from "./pages/types/Rentals";
import Activity from "./pages/types/Activities";
import  Login  from "./pages/Login"
import Signup from "./pages/Signup"
import IndividualListing from "./components/IndividualListing";
import Form from "./components/ReservationForm.jsx"
import Reservations from "./pages/Reservations";
import Footer from "./components/Footer"
function App() {
  fetch("https://seahorse-app-469qs.ondigitalocean.app/api/reservable-items/").then(resp => resp.json()).then(json => console.log(json))
  return (//
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/categories/activities" element={<Activity/>}/>
        <Route path="/categories/cars" element={<Cars/>}/>
        <Route path="/categories/rentals" element={<Rentals/>}/>
        <Route path="/listing/:id" element={<IndividualListing/>} />
        <Route path="/reserve/:id" element={<Form/>} />
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/reservations" element={<Reservations/>}/>
      </Routes>
      <Footer className="object-bottom"/>
    </div>
  );
}

export default App;
