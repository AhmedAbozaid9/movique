import React from "react";
import useProminentColor from "../hooks/useProminentColor";
import styles from "../style/components/itemHeader.module.css";
import Tag from "./Tag";
import Rating from "./Rating";

function ItemHeader({ title, image, overview, genres, year, rating }) {
  const color = useProminentColor(image) || "rgba(23,23,23,0.6)";
  return (
    <header className={styles.itemHeader} style={{ backgroundColor: color }}>
      <section className={styles.info}>
        <h2>{title}</h2>
        <p>{overview}</p>
        <div className={styles.tags}>
          {genres.map((genre) => (
            <Tag text={genre} key={genre} />
          ))}
        </div>
        <div className={styles.details}>
          <Rating rating={rating} />
          <div className="year">
            <span>{year}</span>
          </div>
        </div>
      </section>
      <img src={image} alt={title} />
    </header>
  );
}

export default ItemHeader;
