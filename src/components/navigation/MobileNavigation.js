import React from "react";
import { slide as Menu } from "react-burger-menu";

import Links from "./Links";
import "../../style/components/MobileNavigation.css";

function MobileNavigation(props) {
  return (
    <nav>
      <Menu pageWrapId={"page-wrap"} outerContainerId={"App"}>
        <Links />
      </Menu>
    </nav>
  );
}

export default MobileNavigation;
