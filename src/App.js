import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import DetailMovie from "./pages/DetailMovie";
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gradient-to-tr from-stone-200 to-stone-50 h-full font-light">
      <SearchBar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Search />} />
        <Route path="/movie/:movieId" element={<DetailMovie />} />
      </Routes>

      <Footer />
    </div>
  );
}
