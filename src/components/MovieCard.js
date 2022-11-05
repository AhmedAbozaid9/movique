import React from "react";
import { Link } from "react-router-dom";

import styles from "../style/components/movieCard.module.css";

const IMG_PATH = "https://image.tmdb.org/t/p/w500/";

function MovieCard({ id, title, image, year, link, onClick, onMouseDown }) {
  return (
    <div className={styles.movieCard}>
      <Link
        to={link ? `${link}/${id}` : `${id}`}
        state={title}
        onMouseDown={(e) => onMouseDown(e)}
        onClick={(e) => onClick(e)}
      >
        <img src={`${IMG_PATH}${image}`} alt={title} />
        <p>
          {title} ({year})
        </p>
      </Link>
    </div>
  );
}

export default MovieCard;
