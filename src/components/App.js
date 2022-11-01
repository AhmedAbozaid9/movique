import React from "react";
import Navigation from "./navigation/Navigation";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TvShows from "../pages/TvShows";
import MyList from "../pages/MyList";
import SignIn from "../pages/SignIn";
import MobileNavigation from "./navigation/MobileNavigation";

function App() {
  return (
    <>
      <MobileNavigation />
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
