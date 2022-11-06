import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import extractData from "../utils/extractData";
import extractGenre from "../utils/extractGenre";

function Item() {
  const { state: itemData } = useLocation();
  const { title, image, year } = extractData(itemData);
  const genre = extractGenre(itemData.genre_ids, itemData.media_type);
  console.log(genre);
  console.log(itemData);
  // const [color, setColor] = useState(null);
  // useEffect(() => {
  //   (async () => {
  //     const colors = await extractColors();
  //   })();
  // });

  return <div>{"name is "}</div>;
}

export default Item;
