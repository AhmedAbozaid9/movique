import ReviewCard from "./ReviewCard";

import styles from "../style/components/reviews.module.css";

function Reviews({ reviews }) {
  return (
    <section className={styles.reviews}>
      <h2 className={styles.header}>Reviews :</h2>
      {reviews?.length ? (
        reviews.map((review) => {
          return <ReviewCard review={review} key={review.id} />;
        })
      ) : (
        <p>There are no reviews</p>
      )}
    </section>
  );
}

export default Reviews;
