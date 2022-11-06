import { useLocation } from "react-router";

import extractData from "../utils/extractData";
import extractGenre from "../utils/extractGenre";
import useProminentColor from "../hooks/useProminentColor";

function Item() {
  const { state: itemData } = useLocation();
  const { title, image, year } = extractData(itemData);
  const genre = extractGenre(itemData.genre_ids, itemData.media_type);

  console.log(useProminentColor(image));

  return <div>{"name is "}</div>;
}

export default Item;
