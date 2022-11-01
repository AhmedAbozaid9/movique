import React from "react";
import { NavLink } from "react-router-dom";

function Links(props) {
  return (
    <>
      <NavLink end to={"/"}>
        Home
      </NavLink>
      <NavLink to={"movies"}>Movies</NavLink>
      <NavLink to={"tvShows"}>TV shows</NavLink>
      <NavLink to={"myList"}>My list</NavLink>
      <NavLink to={"signIn"}>Sign in</NavLink>
    </>
  );
}

export default Links;
