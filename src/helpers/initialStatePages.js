import React from "react";

export const initialStatePages = (token) => {
  return localStorage.getItem("previousPage_" + token.token).split("/")[1] ===
    "tv"
    ? Number(
        localStorage
          .getItem("previousPage_" + token.token)
          .split("=")
          .slice(-1)
      )
    : 1;
};
