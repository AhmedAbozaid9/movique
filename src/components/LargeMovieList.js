import React from "react";

import MovieCard from "./MovieCard";
import styles from "../style/components/largeMovieList.module.css";

function LargeMovieList({ data }) {
  return (
    <div className={styles.largeList}>
      {data &&
        data.map((result) => (
          <MovieCard
            id={result.id}
            key={result.id}
            title={result[result["media_type"] === "movie" ? "title" : "name"]}
            image={result["poster_path"]}
            year={result[
              result["media_type"] === "movie"
                ? "release_date"
                : "first_air_date"
            ].slice(0, 4)}
          />
        ))}
    </div>
  );
}

export default LargeMovieList;
