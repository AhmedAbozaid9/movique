import React from "react";

import styles from "../style/components/heroSection.module.css";

function HeroSection(props) {
  return (
    <section className={styles.hero}>
      <h1>
        <strong>Movique</strong> Helps you Discover trending Movies and Tv shows
        !
      </h1>
    </section>
  );
}

export default HeroSection;
