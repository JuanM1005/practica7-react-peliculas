import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <header>
        <h1>🎬 Películas</h1>
        {/* TODO: Integrar AppRouter cuando este listo */}
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
