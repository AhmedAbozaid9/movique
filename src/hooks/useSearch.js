import { useState, useEffect } from "react";

import imdb from "../components/api/imdb";

function UseSearch(type, query, page) {
  const [searchData, setSearchData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await imdb.get(`search/${type}/week`, {
        params: {
          query: query,
        },
      });
      setSearchData(res.data);
    })();
  }, [type, page]);

  return searchData;
}

export default UseSearch;
