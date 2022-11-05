import React from "react";
import useData from "../hooks/useData";
import LargeMovieList from "../components/LargeMovieList";
import { Outlet, useLocation } from "react-router";

function Items({ type }) {
  const { results } = useData(type, 1);
  return (
    <>
      <LargeMovieList data={results} />
      <Outlet />
    </>
  );
}

export default Items;
