import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { extractColors } from "extract-colors";
import useFindItem from "../hooks/useFindItem";

function Item() {
  const { itemId } = useParams();
  const item = useFindItem("tv", 95403);
  // const [color, setColor] = useState(null);
  // useEffect(() => {
  //   (async () => {
  //     const colors = await extractColors();
  //   })();
  // });

  return <div>{itemId}</div>;
}

export default Item;
