import React from "react";

import ItemCard from "./ItemCard";
import styles from "../style/components/largeMovieList.module.css";

function LargeList({ data }) {
  return (
    <div className={styles.largeList}>
      {data && data.map((result) => <ItemCard result={result} key={data.id} />)}
    </div>
  );
}

export default LargeList;
