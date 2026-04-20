import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ flex: 1, paddingBottom: "2rem" }}>
        {/* flex: 1 empuja el footer hacia abajo */}
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
