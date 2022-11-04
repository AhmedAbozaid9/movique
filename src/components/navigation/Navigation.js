import React from "react";

import styles from "../../style/components/navigation.module.css";
import NavLinks from "./NavLinks";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLinks />
    </nav>
  );
}

export default Navigation;
