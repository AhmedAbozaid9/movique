import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../style/components/navigation.module.css";

function Navigation(props) {
  return (
    <nav className={styles.nav}>
      <NavLink end to={"/"}>
        Home
      </NavLink>
      <NavLink to={"movies"}>Movies</NavLink>
      <NavLink to={"tvShows"}>TV shows</NavLink>
      <NavLink to={"myList"}>My list</NavLink>
      <NavLink to={"signIn"}>Sign in</NavLink>
    </nav>
  );
}

export default Navigation;
