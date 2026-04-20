import { useState, useEffect } from "react";
import httpClient from "../services/httpClient";
import MovieGrid from "../components/MovieGrid";
import styles from "./LandingPage.module.css";

function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extraída fuera del useEffect para poder reutilizarla en el botón "Reintentar"
  const fetchMovies = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await httpClient.get("/movie/popular");
      setMovies(response.data.results);
    } catch (e) {
      console.error("Error al cargar películas:", e);
      setError("No se pudieron cargar las películas. Verifica tu conexión o intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className={styles.landing}>
      <h2 className={styles.sectionTitle}>Películas Populares</h2>

      {loading && <div className={styles.statusMessage}>Cargando películas...</div>}

      {!loading && error && (
        <div className={styles.statusMessage}>
          <p>{error}</p>
          <button className={styles.retryButton} onClick={fetchMovies}>
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && movies.length === 0 && (
        <div className={styles.statusMessage}>
          <p>No se encontraron películas en este momento.</p>
        </div>
      )}

      {!loading && !error && movies.length > 0 && <MovieGrid movies={movies} />}
    </section>
  );
}

export default LandingPage;
