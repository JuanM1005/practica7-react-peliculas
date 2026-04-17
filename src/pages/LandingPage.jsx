/*
   LandingPage — Página principal de la aplicación.

   Muestra el grid de películas populares consumiendo la API de TMDB.
   Se monta en la ruta "/" definida en AppRouter.
 */

import { useState, useEffect } from "react";
import httpClient from "../services/httpClient";
import MovieGrid from "../components/MovieGrid";
import styles from "./LandingPage.module.css";

function LandingPage() {
  // Estado para almacenar las películas populares
  const [movies, setMovies] = useState([]);

  // Efecto para obtener las películas populares al montar el componente (Solo se ejecuta una vez, llamada a la API cuando el componente se monta como prueba)
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await httpClient.get("/movie/popular");
        // console.log(response.data.results[0]); // Verificar que los datos se reciben correctamente y que paramateros utilizar
        setMovies(response.data.results);
      } catch (e) {
        console.error(`Error fetching data: ${e}`);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className={styles.landing}>
      <h2 className={styles.sectionTitle}>Películas Populares</h2>
      <MovieGrid movies={movies} />
    </section>
  );
}

export default LandingPage;
