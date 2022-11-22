import React from "react";

const SearchHeader = ({ HeaderImage, title, styles }) => {
  return (
    <div
      style={{ backgroundImage: `url(${HeaderImage})` }}
      className="relative h-20 shadow bg-fixed bg-bottom bg-cover saturate-50"
    >
      <span
        className={`absolute -top-4 font-bold text-7xl p-4 text-white ${styles}`}
      >
        {title}
      </span>
    </div>
  );
};

export default SearchHeader;
