import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdClose } from "react-icons/md";

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
    <MdClose
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
        {isOpen && (
          <div className={styles.overlay}>
            <NavLinks />
          </div>
        )}
      </nav>
    </>
  );
}

export default MobileNavigation;
