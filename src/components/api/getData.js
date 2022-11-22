import tmdb from "./tmdb";

const getData = function (type) {
  return tmdb.get(`trending/${type}/week`);
};
export default getData;
