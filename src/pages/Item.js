import { useLocation } from "react-router";

import extractData from "../utils/extractData";
import extractGenre from "../utils/extractGenre";
import ItemHeader from "../components/ItemHeader";

function Item() {
  const { state: itemData } = useLocation();
  const { title, image, year } = extractData(itemData);
  const genres = extractGenre(itemData["genre_ids"], itemData["media_type"]);
  console.log(itemData);

  return (
    <ItemHeader
      title={title}
      image={image}
      overview={itemData.overview}
      genres={genres}
      year={year}
      rating={itemData["vote_average"].toFixed(1)}
    />
  );
}

export default Item;
