import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="fixed bottom-0 w-full flex justify-center p-3 text-white bg-gradient-to-t from-stone-600 to-stone-500 drop-shadow-xl">
        <Link to="/">Back to Home Page</Link>
      </div>
    </div>
  );
}

export default Footer;
