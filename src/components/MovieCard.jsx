/*
   MovieCard — Tarjeta individual de película (estilo Apple TV).

   Al hacer clic navega a la vista de detalle de la película.

   Props:
     movie: objeto con { id, title, poster_path, vote_average, release_date, ... }
 */
import { Link } from "react-router-dom";
import getMovieImg from "../utils/getMovieImg";
import styles from "./MovieCard.module.css";

// Placeholder para películas sin póster disponible
const PLACEHOLDER_IMG =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 300'%3E%3Crect width='200' height='300' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' font-family='sans-serif' font-size='14' text-anchor='middle' dy='.3em'%3ESin imagen%3C/text%3E%3C/svg%3E";

function MovieCard({ movie }) {
  const posterUrl = getMovieImg(movie.poster_path) || PLACEHOLDER_IMG;
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";
  // Protegemos vote_average: si viene undefined/null (películas muy nuevas), evitamos que toFixed rompa la app
  const rating = typeof movie.vote_average === "number" ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <Link to={`/movies/${movie.id}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.posterWrapper}>
          <img className={styles.poster} src={posterUrl} alt={movie.title} />
          <span className={styles.rating}>⭐ {rating}</span>
        </div>
        <h3 className={styles.title}>{movie.title}</h3>
        <span className={styles.year}>{year}</span>
      </article>
    </Link>
  );
}

export default MovieCard;
