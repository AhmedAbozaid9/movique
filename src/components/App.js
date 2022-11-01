import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import MyList from "../pages/MyList";
import SignIn from "../pages/SignIn";

import MovieCard from "./MovieCard";

function App() {
  return (
    <>
      <Navigation />
      <MovieCard
        image={
          "https://www.theilluminerdi.com/wp-content/uploads/2022/09/black-adam-heroes.jpg"
        }
        title="Black Adam the destroyer of all worlds"
        year="2022"
      />{" "}
      <MovieCard
        image={
          "https://www.theilluminerdi.com/wp-content/uploads/2022/09/black-adam-heroes.jpg"
        }
        title="Black Adam the destroyer of all worlds"
        year="2022"
      />{" "}
      <MovieCard
        image={
          "https://www.theilluminerdi.com/wp-content/uploads/2022/09/black-adam-heroes.jpg"
        }
        title="Black Adam the destroyer of all worlds"
        year="2022"
      />{" "}
      <MovieCard
        image={
          "https://www.theilluminerdi.com/wp-content/uploads/2022/09/black-adam-heroes.jpg"
        }
        title="Black Adam the destroyer of all worlds"
        year="2022"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tvShows" element={<TvShows />} />
        <Route path="myList" element={<MyList />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
