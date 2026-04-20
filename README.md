# Práctica 7 - FrameLix: App de Películas con React

Aplicación web SPA desarrollada con React + Vite que consume la API de TMDB para mostrar un catálogo de películas populares y el detalle de cada una.

## Integrantes del equipo

- Renata Margarita
- Juan Antonio
- Eriberto Orozco

**Profesor:** Zeus Emmanuel Gutierrez Cobian
**Materia:** Desarrollo Web
**Calendario:** 2026A
**Institución:** CUCEI – Universidad de Guadalajara

## Objetivo

Desarrollar una aplicación web en React usando Vite como entorno de desarrollo, que consuma información de una API de películas (TMDB), muestre un listado y el detalle de cada película, trabajada colaborativamente mediante GitHub y publicada en Netlify.

## Tecnologías utilizadas

- **React 19** - Librería para construir interfaces
- **Vite** - Entorno de desarrollo y build
- **React Router DOM 7** - Navegación entre rutas
- **Axios** - Cliente HTTP para consumir la API
- **CSS Modules** - Estilos encapsulados por componente
- **ESLint + Prettier** - Calidad y formato de código
- **Git + GitHub** - Control de versiones y colaboración
- **Netlify** - Despliegue continuo

## Estructura general del proyecto

```
practica7-react-peliculas/
├── public/
│   ├── _redirects          # Redirect para SPA en Netlify
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx      # Pie de página con créditos
│   │   ├── MovieCard.jsx   # Tarjeta individual de película
│   │   ├── MovieGrid.jsx   # Grid responsivo de tarjetas
│   │   └── Navbar.jsx      # Barra de navegación
│   ├── pages/
│   │   ├── LandingPage.jsx    # Vista principal (listado)
│   │   └── MovieDetails.jsx   # Vista de detalle
│   ├── routers/
│   │   └── AppRouter.jsx   # Configuración de rutas
│   ├── services/
│   │   └── httpClient.js   # Cliente Axios centralizado
│   ├── utils/
│   │   └── getMovieImg.js  # Helper para URLs de imágenes
│   ├── img/                # Imágenes locales (escudo CUCEI, etc.)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Variables globales y reset
├── .env.example
├── .gitignore
├── eslint.config.js
├── package.json
└── vite.config.js
```

## Instalación y ejecución local

1. Clona el repositorio:

   ```bash
   git clone git@github.com:JuanM1005/practica7-react-peliculas.git
   cd practica7-react-peliculas
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Copia el archivo de variables de entorno y reemplaza con tu API key de TMDB:

   ```bash
   cp .env.example .env
   ```

   Luego edita `.env` y pon tu API key real:

   ```
   VITE_TMDB_API_KEY=tu_api_key_aqui
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Scripts disponibles
... (92 líneas restantes)

message.txt
7 KB
﻿
# Práctica 7 - FrameLix: App de Películas con React

Aplicación web SPA desarrollada con React + Vite que consume la API de TMDB para mostrar un catálogo de películas populares y el detalle de cada una.

## Integrantes del equipo

- Renata Margarita
- Juan Antonio
- Eriberto Orozco
- [Nombre del/la cuarto/a integrante]

**Profesor:** Zeus Emmanuel Gutierrez Cobian
**Materia:** Desarrollo Web
**Calendario:** 2026A
**Institución:** CUCEI – Universidad de Guadalajara

## Objetivo

Desarrollar una aplicación web en React usando Vite como entorno de desarrollo, que consuma información de una API de películas (TMDB), muestre un listado y el detalle de cada película, trabajada colaborativamente mediante GitHub y publicada en Netlify.

## Tecnologías utilizadas

- **React 19** - Librería para construir interfaces
- **Vite** - Entorno de desarrollo y build
- **React Router DOM 7** - Navegación entre rutas
- **Axios** - Cliente HTTP para consumir la API
- **CSS Modules** - Estilos encapsulados por componente
- **ESLint + Prettier** - Calidad y formato de código
- **Git + GitHub** - Control de versiones y colaboración
- **Netlify** - Despliegue continuo

## Estructura general del proyecto

```
practica7-react-peliculas/
├── public/
│   ├── _redirects          # Redirect para SPA en Netlify
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx      # Pie de página con créditos
│   │   ├── MovieCard.jsx   # Tarjeta individual de película
│   │   ├── MovieGrid.jsx   # Grid responsivo de tarjetas
│   │   └── Navbar.jsx      # Barra de navegación
│   ├── pages/
│   │   ├── LandingPage.jsx    # Vista principal (listado)
│   │   └── MovieDetails.jsx   # Vista de detalle
│   ├── routers/
│   │   └── AppRouter.jsx   # Configuración de rutas
│   ├── services/
│   │   └── httpClient.js   # Cliente Axios centralizado
│   ├── utils/
│   │   └── getMovieImg.js  # Helper para URLs de imágenes
│   ├── img/                # Imágenes locales (escudo CUCEI, etc.)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Variables globales y reset
├── .env.example
├── .gitignore
├── eslint.config.js
├── package.json
└── vite.config.js
```

## Instalación y ejecución local

1. Clona el repositorio:

   ```bash
   git clone git@github.com:JuanM1005/practica7-react-peliculas.git
   cd practica7-react-peliculas
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Copia el archivo de variables de entorno y reemplaza con tu API key de TMDB:

   ```bash
   cp .env.example .env
   ```

   Luego edita `.env` y pon tu API key real:

   ```
   VITE_TMDB_API_KEY=tu_api_key_aqui
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Scripts disponibles

| Comando                | Descripción                     |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Inicia servidor de desarrollo   |
| `npm run build`        | Genera build de producción      |
| `npm run preview`      | Previsualiza el build           |
| `npm run lint`         | Ejecuta ESLint                  |
| `npm run format`       | Formatea el código con Prettier |
| `npm run format:check` | Verifica formato sin modificar  |

## Rutas utilizadas

| Ruta                 | Componente     | Descripción                                    |
| -------------------- | -------------- | ---------------------------------------------- |
| `/`                  | `LandingPage`  | Listado de películas populares                 |
| `/movies/:movieId`   | `MovieDetails` | Vista de detalle de una película seleccionada  |

## API utilizada

Se utiliza **TMDB (The Movie Database)**: [https://www.themoviedb.org/](https://www.themoviedb.org/)

Endpoints consumidos:

- `GET /movie/popular` - Lista de películas populares (LandingPage)
- `GET /movie/{movie_id}` - Detalle completo de una película (MovieDetails)

Para obtener una API key gratuita:

1. Crea una cuenta en [themoviedb.org](https://www.themoviedb.org/)
2. Ve a Configuración → API → Solicitar una API key
3. Copia la `API Key (v3 auth)` en tu archivo `.env`

## Funcionamiento

### Página principal (`/`)

Al entrar a la app se muestra una cuadrícula responsiva con las películas más populares del momento. Cada tarjeta muestra:

- Póster de la película
- Calificación promedio
- Título
- Año de estreno

### Vista de detalle (`/movies/:movieId`)

Al hacer clic en cualquier tarjeta, el usuario navega a la vista de detalle, que muestra:

- Póster en tamaño grande
- Título y tagline
- Calificación, fecha de estreno, duración y géneros
- Sinopsis completa
- Botón para regresar al listado

### Características adicionales

- Navbar fija con el logo de la aplicación
- Footer con créditos del equipo y escudo de CUCEI
- Manejo de estados de carga y errores
- Fallback visual para películas sin póster
- Diseño responsivo tipo Apple TV

## Convenciones de código

Este proyecto usa **Prettier** para formateo automático y **ESLint** para calidad de código.

### Antes de hacer commit

```bash
npm run format       # formatea todos los archivos
npm run lint         # verifica reglas de ESLint
```

### Configuración recomendada de VSCode

Al abrir el proyecto, VSCode sugerirá instalar:

- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)

## Links

- **Repositorio GitHub:** [https://github.com/JuanM1005/practica7-react-peliculas](https://github.com/JuanM1005/practica7-react-peliculas)
- **Despliegue Netlify:** [pendiente de desplegar]

## Conclusiones

Esta práctica permitió al equipo aplicar de forma integral los conceptos fundamentales del desarrollo con React: componentes, props, hooks (`useState`, `useEffect`, `useParams`, `useNavigate`), ruteo con React Router y consumo de APIs externas mediante Axios.

Además, el trabajo colaborativo en GitHub (ramas, commits significativos y merge) reforzó la importancia del control de versiones y la comunicación dentro del equipo. La configuración de variables de entorno para la API key y el despliegue en Netlify con el archivo `_redirects` demostraron cómo se lleva una aplicación desde el desarrollo local hasta producción.

Como aprendizajes adicionales, incorporamos herramientas de calidad de código (ESLint + Prettier) y un sistema de diseño basado en variables CSS que permitió mantener la estética consistente en toda la aplicación.
