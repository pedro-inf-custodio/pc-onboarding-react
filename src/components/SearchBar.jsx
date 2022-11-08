import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

export default function SearchBar({ search, setSearch }) {
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/results",
      search: `?${createSearchParams({
        search: `${search}`,
      })}`,
    });
  };

  return (
    <div className="fixed top-0 w-full flex justify-center bg-slate-100 drop-shadow-md z-20">
      <div className="w-full flex justify-center p-4 ">
        <form
          className="relative flex justify-center w-1/2"
          onSubmit={handleSubmit}
        >
          <input
            className="flex justify-center p-2 w-full rounded shadow"
            placeholder="Search your movie here"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            className="absolute transition-all right-0 bg-slate-200 rounded p-2 hover:bg-slate-300 shadow"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
