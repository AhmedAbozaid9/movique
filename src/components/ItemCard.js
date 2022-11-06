import React from "react";
import { Link } from "react-router-dom";

import styles from "../style/components/movieCard.module.css";

const IMG_PATH = "https://image.tmdb.org/t/p/w500/";

function ItemCard({ result, link }) {
  const title = result[result["media_type"] === "movie" ? "title" : "name"];
  const image = `${IMG_PATH}/${result["poster_path"]}`;
  const url = link ? `${link}/${result.id}` : `${result.id}`;
  const year = result[
    result["media_type"] === "movie" ? "release_date" : "first_air_date"
  ].slice(0, 4);

  return (
    <div className={styles.movieCard}>
      <Link to={url} state={result.title}>
        <img src={`${IMG_PATH}${image}`} alt={title} />
        <p>
          {title} ({year})
        </p>
      </Link>
    </div>
  );
}

export default ItemCard;
