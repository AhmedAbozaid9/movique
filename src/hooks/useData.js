import { useState, useEffect } from "react";

import imdb from "../components/api/imdb";

const useData = (type = "all", page = 1, query = "") => {
  const [data, setData] = useState([]);

  let config;
  config = {
    params: {
      page: page,
      query: query,
    },
  };

  useEffect(() => {
    (async () => {
      const res = await imdb.get(`trending/${type}/week`, config);
      setData(res.data);
    })();
  }, [type, config]);

  return data;
};

export default useData;
