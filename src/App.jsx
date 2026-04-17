import { useState, useEffect } from "react";
import AppRouter from "./routers/AppRouter";
import httpClient from "./services/httpClient";
import MovieGrid from "./components/MovieGrid";

function App() {
  // Estado para almacenar las películas populares
  const [movies, setMovies] = useState([]);

  // Efecto para obtener las películas populares al montar el componente (Solo se ejecuta una vez, llamada a la API cuando el componente se monta como prueba)
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await httpClient.get("/movie/popular");
        setMovies(response.data.results);
      } catch (e) {
        console.error(`Error fetching data: ${e}`);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <header>
        <h1>🎬 Películas</h1>
        {/* TODO: Integrar AppRouter cuando este listo */}
      </header>
      <MovieGrid movies={movies} />
      <AppRouter />
    </div>
  );
}

export default App;
