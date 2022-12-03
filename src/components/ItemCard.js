import React from "react";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

import styles from "../style/components/itemCard.module.css";
import extractData from "../utils/extractData";
import ImagePlaceholder from "./ImagePlaceholder";
import { UserAuth } from "../context/authContext";

function ItemCard({ result, link, type }) {
  const { user } = UserAuth();

  const { title, image, year } = extractData(result, type);
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
      <button className={styles.add}>
        <BsPlusLg size={20} />
      </button>
    </div>
  );
}

export default ItemCard;
