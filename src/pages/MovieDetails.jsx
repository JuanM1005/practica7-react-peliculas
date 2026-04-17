/*
   MovieDetails — Vista de detalle de una película.

   Se monta en la ruta "/movies/:movieId" definida en AppRouter.
   Recibe el ID de la película desde la URL usando useParams().

 * TODO: implementar el fetch del detalle y el diseño completo.
 */

import { useParams } from "react-router-dom";

function MovieDetails() {
  /* Este hook extrae el parámetro dinámico de la URL.
  Se llama 'movieId' porque en AppRouter.jsx definimos la ruta como: "/movies/:movieId"
  Si en la URL dice localhost:5173/movies/123, movieId valdrá "123".*/
  const { movieId } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Detalle de película</h2>
      <p>ID: {movieId}</p>
      <p>Próximamente: diseño completo aquí.</p>
    </div>
  );
}

export default MovieDetails;
