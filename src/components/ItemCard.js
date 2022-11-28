import React from "react";
import { Link } from "react-router-dom";

import styles from "../style/components/itemCard.module.css";
import extractData from "../utils/extractData";
import ImagePlaceholder from "./ImagePlaceholder";

function ItemCard({ result, link, type }) {
  const { title, image, year } = extractData(result);
  const imageComponent =
    image.slice(-4) !== "null" ? (
      <img src={`${image}`} alt={title} />
    ) : (
      <ImagePlaceholder />
    );
  const url = link ? `${link}/${result.id}` : `${result.id}`;

  return (
    <div className={styles.movieCard}>
      <Link to={url} state={{ itemData: result, itemType: type }}>
        {imageComponent}
        <p>
          {title} ({year})
        </p>
      </Link>
    </div>
  );
}

export default ItemCard;
