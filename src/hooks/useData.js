import { useState, useEffect } from "react";

import imdb from "../components/api/imdb";

const useData = (type = "all", page = 1, query = "") => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await imdb.get(`trending/${type}/week`, {
        params: { page: page },
      });
      setData(res.data);
    })();
  }, [page, type]);

  return data;
};

export default useData;
