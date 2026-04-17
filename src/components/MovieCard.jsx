import getMovieImg from "../utils/getMovieImg";
import styles from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const posterUrl = getMovieImg(movie.poster_path);
  console.log(posterUrl);

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
