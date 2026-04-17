/*
   App — Componente raíz de la aplicación.

   Contiene el layout general (Navbar + rutas).
   El contenido específico de cada página lo maneja AppRouter.
 */

import Navbar from "./components/Navbar";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
