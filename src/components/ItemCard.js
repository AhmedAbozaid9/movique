import React from "react";
import { Link } from "react-router-dom";

import styles from "../style/components/movieCard.module.css";
import extractData from "../utils/extractData";

function ItemCard({ result, link }) {
  const { title, image, year } = extractData(result);
  const url = link ? `${link}/${result.id}` : `${result.id}`;

  return (
    <div className={styles.movieCard}>
      <Link to={url} state={result}>
        <img src={`${image}`} alt={title} />
        <p>
          {title} ({year})
        </p>
      </Link>
    </div>
  );
}

export default ItemCard;
