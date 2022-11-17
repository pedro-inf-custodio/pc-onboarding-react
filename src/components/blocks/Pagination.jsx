import React from "react";
import Button from "../atoms/Button";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex flex-row ">
      {page !== 1 ? (
        <MdArrowBackIosNew
          size={24}
          className="mt-12 cursor-pointer transition-all hover:scale-110"
          onClick={() => {
            setPage(page - 1);
          }}
        />
      ) : null}
      {Array.from({ length: 10 }).map((pageNumber, index) => (
        <Button
          key={index.toString()}
          onClick={() => {
            setPage(index + 1);
          }}
          buttonText={index + 1}
          addedStyles={`mt-10 m-1 w-8 flex justify-center rounded font-thin p-2 ${
            index + 1 === page
              ? "font-bold bg-stone-400 text-white hover:bg-stone-400"
              : "hover:font-bold focus:bg-stone-400 focus:text-white focus:font-bold"
          }`}
        />
      ))}
      {page !== 10 ? (
        <MdArrowForwardIos
          size={24}
          className="mt-12 cursor-pointer transition-all  hover:scale-110"
          onClick={() => {
            setPage(page + 1);
          }}
        />
      ) : null}
    </div>
  );
};

export default Pagination;
