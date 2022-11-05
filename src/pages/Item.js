import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

function Item() {
  const location = useLocation();
  // const [color, setColor] = useState(null);
  // useEffect(() => {
  //   (async () => {
  //     const colors = await extractColors();
  //   })();
  // });

  return <div>{"name is " + location.state}</div>;
}

export default Item;
