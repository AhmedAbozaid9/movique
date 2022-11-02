import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MovieCard from "./MovieCard";
import styles from "../style/components/smallList.module.css";
import { Link } from "react-router-dom";
import Separator from "./Separator";

function SmallMovieList({ data, title, link }) {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  let numberOfSlides = Math.floor(
    windowSize.innerWidth / (window.innerWidth > 700 ? 220 : 150)
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: numberOfSlides,
    slidesToScroll: numberOfSlides,
  };
  return (
    <div className={styles.smallList}>
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <Link to={link}>See more</Link>
      </div>
      <Separator />
      <Slider {...settings}>
        {data &&
          data.map((result) => (
            <MovieCard
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
          ))}
      </Slider>
    </div>
  );
}

export default SmallMovieList;
