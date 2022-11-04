import React from "react";
import useData from "../hooks/useData";
import LargeMovieList from "../components/LargeMovieList";
import { Outlet } from "react-router";

function Items({ type }) {
  const { results } = useData(type);
  return (
    <>
      <LargeMovieList data={results} />
      <Outlet />
    </>
  );
}

export default Items;
