import React from "react";
import Navigation from "./navigation/Navigation";
import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import MyList from "../pages/MyList";
import SignIn from "../pages/SignIn";
import Item from "../pages/Item";
import MobileNavigation from "./navigation/MobileNavigation";
import Items from "../pages/Items";

function App() {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies">
          <Route index element={<Items type="movie" />} />
          <Route path=":itemId" element={<Item />} />
        </Route>
        <Route path="tvShows">
          <Route index element={<Items type="tv" />} />
          <Route path=":itemId" element={<Item />} />
        </Route>
        <Route path="myList" element={<MyList />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
