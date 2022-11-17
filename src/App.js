import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/blocks/NavBar/NavBar";
import Detail from "./pages/Detail";
import Home from "./pages/Home.js";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Search from "./pages/Search.js";
import TvSeries from "./pages/TvSeries";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SignOutBar from "./components/blocks/Auth/SignOutBar";
import getLocalStorageData from "./helpers/LoginTokens/getLocalStorageData";

export default function App() {
  const token = getLocalStorageData("token");
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      }, 20000000);
    }
  }, [isLoggedIn]);

  return (
    <div className="bg-gradient-to-tr from-stone-200 to-stone-50 h-full font-light antialiased">
      {isLoggedIn ? (
        <>
          <SignOutBar setIsLoggedIn={setIsLoggedIn} />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TvSeries />} />
            <Route path="/people" element={<People />} />
            <Route path="/results" element={<Search />} />
            <Route path="/:media_type/:id" element={<Detail />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </>
      )}
    </div>
  );
}
