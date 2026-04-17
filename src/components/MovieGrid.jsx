/*
   MovieGrid — Cuadrícula responsiva de tarjetas de películas.
  
   Renderiza un grid CSS con auto-fill: se adapta automáticamente
   al ancho de pantalla sin necesidad de media queries.
 
   USO:
     <MovieGrid movies={arrayDePeliculas} />
 
   Se puede reutilizar para: populares, búsqueda, favoritas, etc.
   Solo necesita recibir un array de objetos de película.
 
   Props:
     movies: array de objetos con los datos de cada película
 */

import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.css";

function MovieGrid({ movies }) {
  return (
    <section className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
        // Key es necesario para ayudar a React a identificar cada elemento de la lista y optimizar el renderizado. Se recomienda usar un identificador único como el ID de la película.
      ))}
    </section>
  );
}

export default MovieGrid;
