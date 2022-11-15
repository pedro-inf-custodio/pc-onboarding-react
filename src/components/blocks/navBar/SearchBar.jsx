import React, { useState } from "react";
import { useNavigate, createSearchParams, Link } from "react-router-dom";
import Button from "../../atoms/Button.jsx";

export default function SearchBar({ search, setSearch }) {
  let navigate = useNavigate();
  const [mediaType, SetMediaType] = useState("");
  const [submitHidden, SetSubmitHidden] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "/results",
      search: `?${createSearchParams({
        search: `${search}`,
      })}`,
    });
  };

  return (
    <div className="w-full p-2 flex justify-end relative mr-4">
      <form className="flex justify-center w-1/2 " onSubmit={handleSubmit}>
        <input
          className="flex justify-center p-2 w-full rounded-full shadow font-thin pl-4"
          placeholder="Search your content here"
          onChange={(e) => setSearch(e.target.value)}
          onClick={() => SetSubmitHidden(false)}
        ></input>

        <div className="absolute right-2">
          <Link to={`/results?search=${search}`}>
            <Button
              onClick={null}
              buttonText={""}
              addedStyles={
                submitHidden
                  ? "hidden"
                  : "p-2 w-10 h-10 opacity-80 rounded-full"
              }
              search={true}
            />
          </Link>
        </div>
      </form>
    </div>
  );
}
