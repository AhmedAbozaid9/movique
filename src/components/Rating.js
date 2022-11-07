import React from "react";
import { AiFillStar } from "react-icons/ai";

import styles from "../style/components/rating.module.css";

function Rating({ rating }) {
  return (
    <div className={styles.rating}>
      <AiFillStar className={styles.star} size="25px" color="#F0CC0D" />
      <span>{rating}</span>
    </div>
  );
}

export default Rating;
