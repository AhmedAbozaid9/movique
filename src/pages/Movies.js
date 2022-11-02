import React from "react";

import useData from "../hooks/useData";
import LargeMovieList from "../components/LargeMovieList";
import { Outlet } from "react-router";

function Movies(props) {
  const { results } = useData("movie");
  return (
    <>
      <LargeMovieList data={results} />
      <Outlet />
    </>
  );
}

export default Movies;
