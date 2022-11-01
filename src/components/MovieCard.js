import React from "react";

import styles from "../style/components/movieCard.module.css";

const IMG_PATH = "https://image.tmdb.org/t/p/w500/";

function MovieCard({ title, image, year }) {
  return (
    <div className={styles.movieCard}>
      <img src={`${IMG_PATH}${image}`} alt={title} />
      <p>
        {title} ({year})
      </p>
    </div>
  );
}

export default MovieCard;
