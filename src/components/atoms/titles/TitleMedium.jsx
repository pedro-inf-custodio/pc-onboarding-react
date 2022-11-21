import React from "react";
import { ellipsisLongTitle } from "../../../helpers/ellipsisLongTitle";

const TitleMedium = ({ data, styles = "" }) => {
  return (
    <div className="flex justify-center transition-all rounded hover:bg-black hover:text-stone-100">
      <p className={`text-lg font-bold text-center ${styles}`}>
        {`${
          data.title
            ? ellipsisLongTitle(data.title, 30)
            : ellipsisLongTitle(data.name, 30)
        }`}
      </p>
    </div>
  );
};

export default TitleMedium;
