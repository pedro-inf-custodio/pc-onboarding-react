import React, { useState, useEffect } from "react";
import { SmallContentList } from "../components/blocks/SmallContent/SmallContentList.jsx";
import { fetchDataAPI } from "../helpers/fetchDataAPI.js";
import { URL_POPULAR_PEOPLE } from "../helpers/constants.js";
import Oscar from "../assets/oscar.jpg";
import Pagination from "../components/blocks/Pagination";
import { useLocation, useNavigate } from "react-router-dom";
import { initialStatePages } from "../helpers/initialStatePages.js";
import setLocalStoragePrevPage from "../helpers/setLocalStoragePrevPage.js";

const People = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const [peopleData, setPeopleData] = useState();
  const [page, setPage] = useState(initialStatePages(location));

  useEffect(() => {
    setPage(Number(location.search.split("=")[1]));
  }, [location.search]);

  useEffect(() => {
    document.title = `/people?page=${page}`;

    fetchDataAPI(
      URL_POPULAR_PEOPLE.replace("{page_number}", page.toString()),
      setPeopleData
    );
    setLocalStoragePrevPage("/people?page=" + page);

    navigate("/people?page=" + page);
  }, [page]);

  return (
    <div className="mt-16 flex-row ">
      <div
        style={{ backgroundImage: `url(${Oscar})` }}
        className="relative h-80 shadow bg-fixed saturate-50"
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
