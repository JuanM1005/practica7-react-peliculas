import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import httpClient from "../services/httpClient";
import getMovieImg from "../utils/getMovieImg";
import styles from "./MovieDetails.module.css";

// Placeholder para películas sin póster disponible
const PLACEHOLDER_IMG =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 600'%3E%3Crect width='400' height='600' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' fill='%23666' font-family='sans-serif' font-size='24' text-anchor='middle' dy='.3em'%3ESin imagen%3C/text%3E%3C/svg%3E";

function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    httpClient
      .get(`/movie/${movieId}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => {
        console.error("Error al cargar detalles:", err);
        setError("No se pudo cargar la información de la película.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  // Al regresar: si no hay historial previo, volvemos al inicio
  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  if (loading) {
    return <div className={styles.loading}>Cargando información...</div>;
  }

  if (error || !movie) {
    return (
      <div className={styles.loading}>
        <p>{error || "Película no encontrada."}</p>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  const imageUrl = getMovieImg(movie.poster_path, "w500") || PLACEHOLDER_IMG;
  // Protegemos vote_average: evita que toFixed rompa la página si viene undefined/null
  const rating =
    typeof movie.vote_average === "number" ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <div className={styles.detailsContainer}>
      <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
      <div className={styles.movieInfo}>
        <h2 className={styles.title}>{movie.title}</h2>

        {movie.tagline && <h3 className={styles.tagline}>&quot;{movie.tagline}&quot;</h3>}

        <div className={styles.extraData}>
          <p>
            <strong>⭐ Calificación:</strong> {rating} / 10
          </p>
          <p>
            <strong>📅 Estreno:</strong> {movie.release_date || "Sin fecha"}
          </p>
          <p>
            <strong>⏱️ Duración:</strong>{" "}
            {movie.runtime ? `${movie.runtime} minutos` : "No disponible"}
          </p>
          <p>
            <strong>🎭 Géneros:</strong>{" "}
            {movie.genres && movie.genres.length > 0
              ? movie.genres.map((g) => g.name).join(", ")
              : "No especificados"}
          </p>
        </div>

        <div className={styles.overview}>
          <p>
            <strong>Sinopsis:</strong>
          </p>
          <p>{movie.overview || "Sin sinopsis disponible."}</p>
        </div>

        <button className={styles.backButton} onClick={handleBack}>
          Regresar
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
