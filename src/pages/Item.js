import { useLocation } from "react-router";

import useReviews from "../hooks/useReviews";
import extractData from "../utils/extractData";
import extractGenre from "../utils/extractGenre";
import ItemHeader from "../components/ItemHeader";
import Reviews from "../components/Reviews";

function Item() {
  const { state: itemData } = useLocation();
  const type = itemData["media_type"];
  const { title, image, year } = extractData(itemData);
  const genres = extractGenre(itemData["genre_ids"], type);

  const reviews = useReviews(type, itemData.id);
  console.log(itemData);

  return (
    <>
      <ItemHeader
        title={title}
        image={image}
        overview={itemData.overview}
        genres={genres}
        year={year}
        rating={itemData["vote_average"].toFixed(1)}
      />
      <Reviews reviews={reviews} />
    </>
  );
}

export default Item;
