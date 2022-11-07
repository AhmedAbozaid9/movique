import React from "react";
import ReviewCard from "./ReviewCard";

import styles from "../style/components/reviews.module.css";

function Reviews({ reviews }) {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.header}>Reviews :</h2>
      {reviews &&
        reviews.map((review) => <ReviewCard review={review} key={review.id} />)}
    </section>
  );
}

export default Reviews;
