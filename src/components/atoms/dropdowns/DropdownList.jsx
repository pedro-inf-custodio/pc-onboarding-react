import React from "react";

const DropdownList = ({ season, SetSeason, Seasons }) => {
  let arraySeasons = [];
  for (var i = 1; i <= Seasons; i++) {
    arraySeasons.push(
      <option value={i} label={i} selected={season === i ? "selected" : ""}>
        {i}
      </option>
    );
  }

  return (
    <div className="flex shadow">
      <select
        name="options"
        id="dropdown"
        defaultValue={1}
        className="rounded transition-all hover:bg-stone-300 w-16"
        onChange={(e) => SetSeason(e.target.value)}
      >
        {arraySeasons}
      </select>
    </div>
  );
};

export default DropdownList;
