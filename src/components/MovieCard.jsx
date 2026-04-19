/*
   MovieCard — Tarjeta individual de película (estilo Apple TV).

   Al hacer clic navega a la vista de detalle de la película.

   Props:
     movie: objeto con { id, title, poster_path, vote_average, release_date, ... }
 */
import { Link } from "react-router-dom";
import getMovieImg from "../utils/getMovieImg";
import styles from "./MovieCard.module.css";

const PLACEHOLDER_IMG = "https://dummyimage.com/300x450/1c1c1c/ffffff&text=No+Poster";

function MovieCard({ movie }) {
  const posterUrl = getMovieImg(movie.poster_path) || PLACEHOLDER_IMG;
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";
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
