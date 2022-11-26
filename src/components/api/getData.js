import tmdb from "./tmdb";

const getData = function (type, page) {
  return tmdb.get(`trending/${type}/week`, { params: { page: page } });
};
export default getData;
