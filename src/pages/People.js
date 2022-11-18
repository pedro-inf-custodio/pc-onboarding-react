import React, { useState, useEffect } from "react";
import { SmallContentList } from "../components/blocks/SmallContent/SmallContentList.jsx";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_POPULAR_PEOPLE } from "../helpers/constants.js";
import Oscar from "../assets/oscar.jpg";
import Pagination from "../components/blocks/Pagination";
import { useNavigate } from "react-router-dom";
import getLocalStorageData from "../helpers/LoginTokens/getLocalStorageData.js";
import { initialStatePages } from "../helpers/initialStatePages.js";

const People = () => {
  const token = getLocalStorageData("token");
  const [peopleData, setPeopleData] = useState();
  const [page, setPage] = useState(initialStatePages(token));
  let navigate = useNavigate();

  useEffect(() => {
    fetchDataAPI(
      URL_POPULAR_PEOPLE.replace("{page_number}", page.toString()),
      setPeopleData
    );
    navigate("/people?page=" + page);
    localStorage.setItem("previousPage_" + token.token, "/people?page=" + page);
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
              media_type="people"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default People;
