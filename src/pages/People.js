import React, { useState, useEffect } from "react";
import { SmallContentList } from "../components/blocks/SmallContent/SmallContentList.jsx";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_POPULAR_PEOPLE } from "../helpers/constants.js";
import Oscar from "../assets/oscar.jpg";
import Pagination from "../components/blocks/Pagination";

const People = () => {
  const [peopleData, setPeopleData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchDataAPI(
      URL_POPULAR_PEOPLE.replace("{page_number}", page.toString()),
      setPeopleData
    );
  }, [page, !peopleData]);

  return (
    <div className="mt-10 flex-row ">
      <div
        style={{ backgroundImage: `url(${Oscar})` }}
        className="relative h-96 shadow bg-fixed saturate-50"
      >
        <div className="absolute top-0 left-0 font-bold text-9xl p-4 text-stone-900">
          <span className="p-4 text-white">Most Popular People </span>
        </div>
      </div>

      <div>
        <div className="flex w-full justify-center">
          <Pagination page={page} setPage={setPage} />
        </div>
        <div className="m-4 flex justify-center rounded">
          {peopleData && (
            <SmallContentList
              fetchedData={peopleData.results}
              media_type="person"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default People;
