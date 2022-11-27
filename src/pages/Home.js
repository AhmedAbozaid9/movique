import React from "react";
import HeroSection from "../components/HeroSection";
import SmallList from "../components/SmallList";
import { useQuery } from "react-query";
import getData from "../components/api/getData";
import LoadingListSkeleton from "../components/LoadingListSkeleton";

function Home(props) {
  const { data: movies, isLoading: isLoadingMovies } = useQuery([`movie`], () =>
    getData("movie")
  );
  const { data: tvShows, isLoading: isLoadingTv } = useQuery([`tv`], () =>
    getData("tv")
  );
  return (
    <>
      <HeroSection />
      <SmallList
        data={isLoadingMovies ? undefined : movies.data.results}
        title="Trending Movies"
        link="/movies"
      />
      <SmallList
        data={isLoadingTv ? undefined : tvShows.data.results}
        title="Trending Tv Shows"
        link="tvShows"
      />
    </>
  );
}

export default Home;
