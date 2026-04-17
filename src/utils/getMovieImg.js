const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

const getMovieImg = (path, size = "w500") => {
  if (!path) {
    return null;
  }

  return `${BASE_IMAGE_URL}${size}${path}`;
};

export default getMovieImg;
