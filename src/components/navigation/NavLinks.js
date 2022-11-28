import React from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import styles from "../../style/components/navigation.module.css";

function NavLinks() {
  return (
    <motion.div
      className={styles.navLinks}
      initial={{ height: 0 }}
      animate={{ height: "500%" }}
    >
      <NavLink end to={"/"}>
        Home
      </NavLink>
      <NavLink to={"movies"}>Movies</NavLink>
      <NavLink to={"tvShows"}>TV shows</NavLink>
      <NavLink to={"myList"}>My list</NavLink>
      <NavLink to={"signIn"}>Sign in</NavLink>
    </motion.div>
  );
}

export default NavLinks;
