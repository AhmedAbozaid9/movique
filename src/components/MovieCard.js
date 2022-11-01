import React from "react";

import styles from "../style/components/movieCard.module.css";

function MovieCard({ title, image, year }) {
  return (
    <div className={styles.movieCard}>
      <img src={image} alt={title} />
      <p>
        {title} ({year})
      </p>
    </div>
  );
}

export default MovieCard;
