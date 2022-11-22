import React from "react";

const DropdownMedia = ({ SetMediaType }) => {
  return (
    <div className="flex shadow">
      <select
        name="options"
        id="dropdown"
        className="rounded transition-all hover:bg-stone-300"
        onChange={(e) => SetMediaType(e.target.value)}
      >
        <option value="--" label="--" selected="selected">
          --
        </option>

        <option value="movie" label="Movie">
          Movie
        </option>
        <option value="tv" label="Tv">
          TV Series
        </option>
        <option value="person" label="Person">
          Person
        </option>
      </select>
    </div>
  );
};

export default DropdownMedia;
