import {BrowserRouter,  Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./Home"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ProfileDetail from "./ProfileDetail"
import { useParams } from 'react-router-dom';
import Context from "./Context";
import { useState } from "react";

function App() {

const[profiledata,setProfiledata]=useState({})
  return (

   <BrowserRouter>
   <Navbar/>
   <Context.Provider value={{profiledata,setProfiledata}}>
   <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="search/:moviename" element={<ProfileDetail />} /> 

   </Routes>
   </Context.Provider>
   <Footer/> 
   </BrowserRouter>

  )
}

export default App;
