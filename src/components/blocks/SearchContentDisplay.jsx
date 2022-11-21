import React from "react";
import { SmallContentList } from "./SmallContent/SmallContentList";
import { top5Selection } from "../../helpers/top5Selection";
import MovieHeaderImage from "../../assets/movie-start.jpg";
import TvHeaderImage from "../../assets/tvseries-start.jpg";
import Oscar from "../../assets/oscar.jpg";
import SearchHeader from "../atoms/SearchHeader.jsx";

const SearchContentDisplay = ({ data, media_type, title }) => {
  return (
    <div>
      {data && top5Selection(data.results, media_type).length !== 0 ? (
        <>
          <SearchHeader
            HeaderImage={
              title === "Movies"
                ? MovieHeaderImage
                : title === "Tv Series"
                ? TvHeaderImage
                : Oscar
            }
            title={title}
            styles={title === "Tv Series" ? "right-0" : "left-0"}
          />

          <div className="pt-10">
            {data && (
              <SmallContentList
                fetchedData={top5Selection(data.results, media_type)}
                media_type={media_type}
              />
            )}
            <hr></hr>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SearchContentDisplay;
