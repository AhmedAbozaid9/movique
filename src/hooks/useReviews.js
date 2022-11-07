import { useState, useEffect } from "react";

import imdb from "../components/api/imdb";

const useReviews = (type, id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await imdb.get(`${type}/${id}/reviews`);
      setData(res.data);
    })();
  }, [id, type]);

  return data.results;
};

export default useReviews;
