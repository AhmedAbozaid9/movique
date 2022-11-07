import React from "react";

import styles from "../style/components/reviews.module.css";
import Rating from "./Rating";
import Separator from "./Separator";

function ReviewCard({ review }) {
  const { author, author_details, content } = review;
  return (
    <div className={styles.reviewCard}>
      <div className={styles.details}>
        <h4>{author}</h4>
        <Rating rating={`${author_details.rating || 7}.0`} />
      </div>
      <Separator />
      <p>{content}</p>
    </div>
  );
}

export default ReviewCard;
