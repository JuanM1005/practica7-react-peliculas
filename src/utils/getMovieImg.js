/*
   Construye la URL completa de una imagen de TMDB.
  
   TMDB devuelve rutas parciales (ej: "/rMvPXy8PUjj1o8o1pzgQbwUhOJN.jpg").
   Esta función les antepone la URL base + el tamaño deseado.
  
   USO:
     getMovieImg(movie.poster_path);            → usa tamaño "w500" por defecto
     getMovieImg(movie.backdrop_path, "w780");   → tamaño personalizado
     getMovieImg(movie.poster_path, "original"); → calidad máxima (detalle)
  
   Tamaños disponibles: w92, w154, w185, w342, w500, w780, original
  
   Retorna null si no hay imagen (algunas películas no tienen póster).
 */

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

const getMovieImg = (path, size = "w500") => {
  // Si la película no tiene imagen, retornamos null para manejar un placeholder en el componente
  if (!path) {
    return null;
  }

  // Construimos la URL: base + tamaño + ruta parcial
  // Ejemplo resultado: "https://image.tmdb.org/t/p/w500/rMvPXy8PUjj1o8o1pzgQbwUhOJN.jpg"
  return `${BASE_IMAGE_URL}${size}${path}`;
};

export default getMovieImg;
