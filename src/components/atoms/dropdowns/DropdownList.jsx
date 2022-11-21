import React from "react";

const DropdownList = ({ season, setSeason, Seasons }) => {
  return (
    <div className="flex shadow">
      <select
        name="options"
        id="dropdown"
        defaultValue={1}
        className="rounded transition-all hover:bg-stone-300 w-16"
        onChange={(e) => setSeason(e.target.value)}
      >
        {Array.from({ length: Seasons }).map((pageNumber, index) => (
          <option
            value={index + 1}
            label={index + 1}
            selected={season === index + 1 ? "selected" : ""}
          >
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;
