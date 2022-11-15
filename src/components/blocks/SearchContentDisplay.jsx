import React from "react";
import { SmallContentList } from "./SmallContent/SmallContentList";
import { top5Selection } from "../../helpers/top5Selection";

const SearchContentDisplay = ({ data, media_type, title }) => {
  return (
    <div>
      {data && top5Selection(data.results, media_type).length !== 0 ? (
        <div className="pt-10">
          {data && (
            <SmallContentList
              fetchedData={top5Selection(data.results, media_type)}
              media_type={media_type}
            />
          )}
          <hr></hr>
        </div>
      ) : null}
    </div>
  );
};

export default SearchContentDisplay;
