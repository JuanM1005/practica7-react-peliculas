import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: "es-MX",
  },
});

export default httpClient;
