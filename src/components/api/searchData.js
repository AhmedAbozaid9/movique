import tmdb from "./tmdb";

const searchData = (type, page, query) => {
  return tmdb.get(`search/${type}`, {
    params: {
      query,
      page,
    },
  });
};

export default searchData;
