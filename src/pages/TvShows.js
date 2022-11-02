import React from "react";

import useData from "../hooks/useData";
import LargeMovieList from "../components/LargeMovieList";
import { Outlet } from "react-router";

function TvShows(props) {
  const { results } = useData("tv");
  return (
    <>
      <LargeMovieList data={results} />
      <Outlet />
    </>
  );
}

export default TvShows;
