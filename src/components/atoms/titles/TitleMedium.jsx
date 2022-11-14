import React from "react";

const TitleMedium = ({ data }) => {
  return (
    <div className="grid content-center h-20 transition-all rounded hover:bg-stone-200">
      <p className="capitalize text-xl font-bold text-center p-2 mt-2">
        {`${data.title ? data.title : data.name}
        ${
          data.title !== data.original_title || data.name !== data.original_name
            ? `(${
                data.original_title ? data.original_title : data.original_name
              })`
            : ""
        }`}
      </p>
    </div>
  );
};

export default TitleMedium;
