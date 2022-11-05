import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

import MovieCard from "./MovieCard";
import styles from "../style/components/smallList.module.css";
import { Link } from "react-router-dom";
import Separator from "./Separator";

function SmallList({ data, title, link }) {
  return (
    <div className={styles.smallList}>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <Link to={link}>See more</Link>
      </div>
      <Separator />
      <Splide options={{ autoWidth: true, pagination: false }}>
        {data &&
          data.map((result) => (
            <SplideSlide>
              <MovieCard
                id={result.id}
                link={link}
                key={result.id}
                title={
                  result[result["media_type"] === "movie" ? "title" : "name"]
                }
                image={result["poster_path"]}
                year={result[
                  result["media_type"] === "movie"
                    ? "release_date"
                    : "first_air_date"
                ].slice(0, 4)}
              />
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
}

export default SmallList;
