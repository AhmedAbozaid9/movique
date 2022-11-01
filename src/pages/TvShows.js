import React from "react";

import useData from "../hooks/useData";
import LargeMovieList from "../components/LargeMovieList";

function TvShows(props) {
  const { results } = useData("tv");
  return <LargeMovieList data={results} />;
}

export default TvShows;
