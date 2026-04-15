# Práctica 7 - App de Películas con React

Proyecto en desarrollo. Documentación completa próximamente.

## Tecnologías

- React + Vite
- React Router DOM
- CSS Modules
- API: TMDB

## Instalación

1. Clona el repositorio:

```bash
   git clone git@github.com:JuanM1005/practica7-react-peliculas.git
   cd practica7-react-peliculas
```

2. Instala dependencias:

```bash
   npm install
```

3. Crea tu archivo `.env` basándote en `.env.example`:

```bash
   cp .env.example .env
```

Luego reemplaza el valor con tu API key de TMDB.

4. Inicia el servidor de desarrollo:

```bash
   npm run dev
```

## Convenciones de código

Este proyecto usa **Prettier** para formateo automático y **ESLint** para calidad de código.

### Antes de hacer commit

Ejecuta:

```bash
npm run format       # formatea todos los archivos
npm run lint         # verifica reglas de ESLint
```

### Configuración recomendada de VSCode

Al abrir el proyecto, VSCode te sugerirá instalar dos extensiones:

- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- **ESLint** (`dbaeumer.vscode-eslint`)

Instálalas. Con ellas, el código se formateará automáticamente al guardar cada archivo, y no necesitarás correr `npm run format` manualmente.

### Scripts disponibles

| Comando                | Descripción                     |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Inicia servidor de desarrollo   |
| `npm run build`        | Genera build de producción      |
| `npm run preview`      | Previsualiza el build           |
| `npm run lint`         | Ejecuta ESLint                  |
| `npm run format`       | Formatea el código con Prettier |
| `npm run format:check` | Verifica formato sin modificar  |
