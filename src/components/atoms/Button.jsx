import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Button({ onClick, buttonText, addedStyles, search = false }) {
  return (
    <div className="flex">
      <button
        className={`transition-all bg-stone-200 rounded hover:bg-stone-300 shadow ${addedStyles}`}
        onClick={onClick}
      >
        {search ? <AiOutlineSearch className="ml-1" size={18} /> : buttonText}
      </button>
    </div>
  );
}

export default Button;
