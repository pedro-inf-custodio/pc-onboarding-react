import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/blocks/NavBar/NavBar";
import Detail from "./pages/Detail";
import Home from "./pages/Home.js";
import Movies from "./pages/Movies";
import People from "./pages/People";
import Search from "./pages/Search.js";
import TvSeries from "./pages/TvSeries";
import Login from "./pages/Login";
import SignInBar from "./components/blocks/Login/SignInBar";

export default function App() {
  const [token, setToken] = useState();
  const [search, setSearch] = useState("");
  const [showError, setShowError] = useState(false);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="bg-gradient-to-tr from-stone-200 to-stone-50 h-full font-light antialiased">
      <SignInBar />
      <NavBar search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={<Home showError={showError} setShowError={setShowError} />}
        />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TvSeries />} />
        <Route path="/people" element={<People />} />

        <Route
          path="/results"
          element={<Search showError={showError} setShowError={setShowError} />}
        />
        <Route
          path="/:media_type/:id"
          element={<Detail showError={showError} setShowError={setShowError} />}
        />
      </Routes>
    </div>
  );
}
