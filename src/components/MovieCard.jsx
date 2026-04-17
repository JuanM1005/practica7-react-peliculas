/*
  MovieCard — Tarjeta individual de película (estilo Apple TV).

  Recibe un objeto "movie" con los datos de la API de TMDB.
  Muestra: póster, calificación y título.
 
  * TODO (Quien definira las rutas):
    - Envolver la tarjeta en un <Link to={`/movies/${movie.id}`}> para
      que al hacer clic navegue a la vista de detalle.

  Props:
    movie: objeto con { id, title, poster_path, vote_average, ... }
    Pue
*/

import getMovieImg from "../utils/getMovieImg";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const posterUrl = getMovieImg(movie.poster_path);

  return (
    <article className={styles.card}>
      <div className={styles.posterWrapper}>
        <img className={styles.poster} src={posterUrl} alt={movie.title} />
        <span className={styles.rating}>⭐ {movie.vote_average.toFixed(1)}</span>
      </div>
      <h3 className={styles.title}>{movie.title}</h3>
    </article>
  );
}

export default MovieCard;
