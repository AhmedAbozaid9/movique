import { useState, useEffect } from "react";

import imdb from "../components/api/imdb";
const useData = (type = "all", page = 1) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await imdb.get(`${type}/week`, {
        params: {
          page: page,
        },
      });
      setData(res.data);
    })();
  });
  return data;
};

export default useData;
