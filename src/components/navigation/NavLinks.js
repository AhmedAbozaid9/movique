import React from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import styles from "../../style/components/navigation.module.css";

import { UserAuth } from "../../context/authContext";
function NavLinks() {
  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(user);
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
      <span className={styles.signIn} onClick={!user && handleGoogleSignIn}>
        {user ? user.displayName : "Sign In"}
      </span>
    </motion.div>
  );
}

export default NavLinks;
