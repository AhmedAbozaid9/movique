import React from "react";

import ItemCard from "./ItemCard";
import styles from "../style/components/largeList.module.css";
import LoadingListSkeleton from "./LoadingListSkeleton";

function LargeList({ data, type, isFetching }) {
  return (
    <div className={styles.largeList}>
      {data?.pages.map((page) =>
        page.data.results.map((result) => (
          <ItemCard result={result} key={result.id} type={type} />
        ))
      )}
      {isFetching && (
        <LoadingListSkeleton width={160} height={230} count={20} />
      )}
    </div>
  );
}

export default LargeList;
