import { useState } from "react";
import "./App.css";
import Buscador from "./components/Buscador";
import Preview from "./components/Preview";

function App() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [clearVisible, setClearVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [ocultarBuscador, setOcultarBuscador] = useState(false);

  const [data, setData] = useState(null);

  const validar = (valor) => {
    setUrl(valor);
    setClearVisible(valor !== "");

    if (valor.includes("tiktok.com")) {
      setDisabled(false);
      setError(false);
    } else {
      setDisabled(true);
      setError(valor !== "");
    }
  };

  const limpiar = () => {
    setUrl("");
    setClearVisible(false);
    setDisabled(true);
    setError(false);
  };

  const obtener = async () => {
    try {
      const res = await fetch(
        `https://tikwm.com/api/?url=${encodeURIComponent(url)}`
      );
      const json = await res.json();

      if (json.data) {
        setData(json.data);
        setOcultarBuscador(true);
      } else {
        alert("❌ No se pudo obtener el contenido");
      }
    } catch {
      alert("❌ Error de conexión");
    }
  };

  const descargarArchivo = async (url, nombre) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = nombre;
      link.click();
    } catch {
      alert("❌ Error al descargar");
    }
  };

  const reiniciar = () => {
    setOcultarBuscador(false);
    setData(null);
    limpiar();
  };

  return (
    <div className="container">
      {!ocultarBuscador && (
        <Buscador
          url={url}
          validar={validar}
          limpiar={limpiar}
          clearVisible={clearVisible}
          obtener={obtener}
          disabled={disabled}
          error={error}
        />
      )}

      {data && (
        <Preview
          thumbnail={data.cover}
          username={data.author.nickname}
          avatar={data.author.avatar}
          titulo={data.title}
          videoURL={data.play}
          audioURL={data.music}
          descargar={descargarArchivo}
          reiniciar={reiniciar}
        />
      )}
    </div>
  );
}

export default App;