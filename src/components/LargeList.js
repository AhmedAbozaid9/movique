import React from "react";

import ItemCard from "./ItemCard";
import styles from "../style/components/largeList.module.css";

function LargeList({ data }) {
  return (
    <div className={styles.largeList}>
      {data?.pages.map((page) =>
        page.data.results.map((result) => (
          <ItemCard result={result} key={result.id} />
        ))
      )}
    </div>
  );
}

export default LargeList;
