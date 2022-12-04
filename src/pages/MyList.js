import React from "react";

import { collectionRef } from "../firebase";
import { getDocs } from "firebase/firestore";
import { useQuery } from "react-query";
import ItemCard from "../components/ItemCard";

function MyList() {
  const { data } = useQuery(["userData"], () => getDocs(collectionRef), {
    select: (data) => data.docs.map((doc) => doc.data()),
  });
  console.log(data && data[0]?.data);
  return (
    <>
      {data?.map((item) => (
        <ItemCard result={item?.data} type={item?.type} />
      ))}
    </>
  );
}

export default MyList;
