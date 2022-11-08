import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full flex justify-center p-4 text-white bg-slate-800">
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}

export default Footer;
