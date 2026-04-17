/*
   AppRouter — Configuración central de rutas de la aplicación.
  
  * TODO (Quien definira las rutas):
     1. Crear las páginas en src/pages/:
       - LandingPage.jsx   → listado de películas populares (ruta "/")
       - MovieDetails.jsx  → detalle de una película (ruta "/movies/:movieId")
 
    2. Importarlas aquí y definir las rutas dentro de <Routes>:
       <Route path="/" element={<LandingPage />} />
       <Route path="/movies/:movieId" element={<MovieDetails />} />
 
    3. IMPORTANTE: cuando las rutas estén listas, mover la lógica de
       fetch de películas de App.jsx a LandingPage.jsx (actualmente
       está en App.jsx como prueba temporal).
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>{/* TODO: Definir rutas */}</Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
