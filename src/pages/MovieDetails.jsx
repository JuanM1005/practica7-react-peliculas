import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import httpClient from "../services/httpClient";
import getMovieImg from "../utils/getMovieImg";
import styles from "./MovieDetails.module.css";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    httpClient
      .get(`/movie/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar detalles:", error);
      });
  }, [movieId]);

  if (!movie) {
    return <div className={styles.loading}>Cargando información...</div>;
  }

  const imageUrl = getMovieImg(movie.poster_path, "w500");

  return (
    <div className={styles.detailsContainer}>
      <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
      <div className={styles.movieInfo}>
        <h2 className={styles.title}>{movie.title}</h2>

        {/* Si la película tiene un lema (tagline), lo mostramos */}
        {movie.tagline && <h3 className={styles.tagline}>"{movie.tagline}"</h3>}

        <div className={styles.extraData}>
          <p>
            <strong>⭐ Calificación:</strong> {movie.vote_average.toFixed(1)} / 10
          </p>
          <p>
            <strong>📅 Estreno:</strong> {movie.release_date}
          </p>
          <p>
            <strong>⏱️ Duración:</strong> {movie.runtime} minutos
          </p>
          <p>
            <strong>🎭 Géneros:</strong> {movie.genres.map((g) => g.name).join(", ")}
          </p>
        </div>

        <div className={styles.overview}>
          <p>
            <strong>Sinopsis:</strong>
          </p>
          <p>{movie.overview}</p>
        </div>

        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Regresar
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
