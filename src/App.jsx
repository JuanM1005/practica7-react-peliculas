/*
   App — Componente raíz de la aplicación.
 
   ESTADO ACTUAL (temporal):
     El fetch de películas y el MovieGrid están aquí como prueba
     de que la conexión con TMDB funciona correctamente.
  
  * TODO (Quien definira las rutas):
     Cuando las rutas estén listas, mover el fetch y el MovieGrid
     a LandingPage.jsx. App.jsx solo debe contener el layout general
     (header, footer) y el AppRouter.
 */

import { useState, useEffect } from "react";
// import AppRouter from "./routers/AppRouter";
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
        console.log(response.data.results[0]); // Verificar que los datos se reciben correctamente y que paramateros utilizar
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
        {/* <AppRouter /> */}
      </header>
      <MovieGrid movies={movies} />
    </div>
  );
}

export default App;
