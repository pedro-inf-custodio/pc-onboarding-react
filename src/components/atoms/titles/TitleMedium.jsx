import React from "react";

const TitleMedium = ({ data, styles = "" }) => {
  return (
    <div className="grid content-center transition-all rounded hover:bg-black hover:text-stone-100">
      <p className={`text-lg font-bold text-center ${styles}`}>
        {`${data.title ? data.title : data.name}
        ${
          data.title !== data.original_title || data.name !== data.original_name
            ? `${data.original_title ? data.original_title : ""}`
            : ""
        }`}
      </p>
    </div>
  );
};

export default TitleMedium;
