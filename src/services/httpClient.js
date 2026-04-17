/* Cliente HTTP centralizado para consumir la API de TMDB

USO:
  import httpClient from "./services/httpClient";
  const response = await httpClient.get("/movie/popular");

La baseURL y la API key se inyectan automáticamente en cada petición,
no es necesario repetirlas. Solo pasa la ruta del endpoint

IMPORTANTE: la variable VITE_TMDB_API_KEY debe estar definida en tu archivo .env local (ver .env.example).

*/

import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "es-MX",
  },
});

export default httpClient;
