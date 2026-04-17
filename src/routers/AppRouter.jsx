/*
   AppRouter — Configuración central de rutas de la aplicación.

   Rutas:
     "/" → LandingPage (listado de películas populares)
     "/movies/:movieId" → MovieDetails (detalle de una película)
 */

import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MovieDetails from "../pages/MovieDetails";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
    </Routes>
  );
}

export default AppRouter;
