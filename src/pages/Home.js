import React from "react";
import HeroSection from "../components/HeroSection";
import SmallList from "../components/SmallList";
import useData from "../hooks/useData";

function Home(props) {
  const movies = useData("movie");
  const tvShows = useData("tv");
  return (
    <>
      <HeroSection />
      <SmallList data={movies.results} title="Trending Movies" link="/movies" />
      <SmallList
        data={tvShows.results}
        title="Trending Tv Shows"
        link="tvShows"
      />
    </>
  );
}

export default Home;
