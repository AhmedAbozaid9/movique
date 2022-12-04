import React from "react";

import { collectionRef } from "../firebase";
import { getDocs } from "firebase/firestore";
import { useQuery } from "react-query";
import ItemCard from "../components/ItemCard";
import styles from "../style/components/largeList.module.css";

function MyList() {
  const { data } = useQuery(["userData"], () => getDocs(collectionRef), {
    select: (data) => data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
  });
  return (
    <div className={styles.largeList}>
      {data?.map((item) => (
        <React.Fragment key={item.id}>
          <ItemCard
            result={item?.data}
            type={item?.type}
            id={item.id}
            actionType="delete"
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default MyList;
