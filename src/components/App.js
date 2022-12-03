import React from "react";
import Navigation from "./navigation/Navigation";
import { Route, Routes } from "react-router";

import Home from "../pages/Home";
import MyList from "../pages/MyList";
import Item from "../pages/Item";
import MobileNavigation from "./navigation/MobileNavigation";
import Items from "../pages/Items";
import { AuthContextProvider } from "../context/authContext";

function App() {
  return (
    <>
      <AuthContextProvider>
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
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
