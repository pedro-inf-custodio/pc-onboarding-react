import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/blocks/navBar/NavBar";
import Detail from "./pages/Detail";
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";

export default function App() {
  const [search, setSearch] = useState("");
  const [showError, setShowError] = useState(false);

  return (
    <div className="bg-gradient-to-tr from-stone-200 to-stone-50 h-full font-light antialiased">
      <NavBar search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={<Home showError={showError} setShowError={setShowError} />}
        />
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
