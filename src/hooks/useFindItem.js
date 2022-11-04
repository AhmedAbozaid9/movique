import { useState, useEffect } from "react";

import imdb from "../components/api/imdb";

const useFindItem = (type, itemId) => {
  const [item, setItem] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await imdb.get(`${type}/${itemId}`);
      setItem(res.data);
    })();
  }, [itemId]);
  return item;
};

export default useFindItem;
