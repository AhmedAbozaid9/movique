import React from "react";
import { AiFillStar } from "react-icons/ai";
import useProminentColor from "../hooks/useProminentColor";
import styles from "../style/components/itemHeader.module.css";
import Tag from "./Tag";

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
          <div className={styles.rating}>
            <AiFillStar className={styles.star} size="25px" color="#F0CC0D" />
            <span>{rating}</span>
          </div>
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
