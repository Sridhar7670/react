import {BrowserRouter,  Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./Home"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ProfileDetail from "./ProfileDetail"
import Context from "./Context";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Favourites from "./Favourites";
import Logout from "./Logout";
import NotFound from "./Notfound";
import Cookies from "js-cookie"
function App() {
  const [movieData, setmovieData] = useState({});
  const [showSearch, setShowSearch] = useState(false);
  const [active, setActive] = useState(Cookies.get('activeTab') || 'home');

  return (  
  <BrowserRouter>
    <Context.Provider value={{ movieData, setmovieData, active, setActive }}>
      <Navbar onSearchClick={() => setShowSearch(prev => !prev)} />
      <Routes>
        <Route path="/" element={<Home showSearch={showSearch} />} />
        <Route path="/search/:moviename" element={<ProfileDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Context.Provider>
  </BrowserRouter>

  );
}

export default App;
