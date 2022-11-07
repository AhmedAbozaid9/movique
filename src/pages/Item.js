import { useLocation } from "react-router";

import useReviews from "../hooks/useReviews";
import extractData from "../utils/extractData";
import extractGenre from "../utils/extractGenre";
import ItemHeader from "../components/ItemHeader";

function Item() {
  const { state: itemData } = useLocation();
  const type = itemData["media_type"];
  const { title, image, year } = extractData(itemData);
  const genres = extractGenre(itemData["genre_ids"], type);

  console.log(useReviews(type, itemData.id));

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
