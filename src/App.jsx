import "./App.css";
import Navbar from "./components/Navbar";
import Buscador from "./components/Buscador";
import Preview from "./components/Preview";
import { useApp } from "./context/AppContext";

function App() {
  const { ocultarBuscador, data } = useApp();

  return (
    <>
      <Navbar />

      <main className="main">
        <div className="container">
          {!ocultarBuscador && <Buscador />}
          {data && <Preview />}
        </div>
      </main>
    </>
  );
}

export default App;