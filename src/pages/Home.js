import React from "react";
import HeroSection from "../components/HeroSection";
import SmallMovieList from "../components/SmallMovieList";
import useData from "../hooks/useData";

function Home(props) {
  const movies = useData("movie");
  const tvShows = useData("tv");
  return (
    <>
      <HeroSection />
      <SmallMovieList
        data={movies.results}
        title="Trending Movies"
        link="/movies"
      />
      <SmallMovieList
        data={tvShows.results}
        title="Trending Tv Shows"
        link="tvShows"
      />
    </>
  );
}

export default Home;
