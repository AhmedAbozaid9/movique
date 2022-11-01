import React from "react";
import styles from "../../style/components/navigation.module.css";
import Links from "./Links";

function Navigation(props) {
  return (
    <nav className={styles.nav}>
      <Links />
    </nav>
  );
}

export default Navigation;
