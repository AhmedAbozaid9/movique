// the property names from the API are not consistent such that the title for a movie or a tv show have different names so this function is used to return consistent property names

export const IMG_PATH = "https://image.tmdb.org/t/p/w500/";

const extractData = (result, itemType) => {
  const type = result["media_type"] || itemType;
  const title = result[type === "movie" ? "title" : "name"] || result.title;
  const image = `${IMG_PATH}/${result["poster_path"]}`;

  const year = result[
    type === "movie" ? "release_date" : "first_air_date"
  ]?.slice(0, 4);
  return { title, image, year };
};

export default extractData;
