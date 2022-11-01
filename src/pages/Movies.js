import React from "react";

import useData from "../hooks/useData";
import LargeMovieList from "../components/LargeMovieList";

function Movies(props) {
  const { results } = useData("movie");
  return <LargeMovieList data={results} />;
}

export default Movies;
