import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import NavLinks from "./NavLinks";
import styles from "../../style/components/navigation.module.css";
import MobileMenuArea from "./MobileMenuArea";

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const openIcon = (
    <BiMenuAltLeft
      size="40px"
      className={styles.navIcon}
      onClick={() => {
        setIsOpen(true);
      }}
    />
  );

  const closeIcon = (
    <AiOutlineCloseCircle
      size="40px"
      className={styles.navIcon}
      onClick={() => {
        setIsOpen(false);
      }}
    />
  );

  return (
    <>
      <MobileMenuArea />

      <nav
        className={styles.mobileNav}
        onClick={() => isOpen && setIsOpen(false)}
      >
        {isOpen ? closeIcon : openIcon}
        {isOpen && <NavLinks />}
      </nav>
    </>
  );
}

export default MobileNavigation;
