import { useState } from "react";
//import textos from "./textos"; 

export function useTikTok(textos, idioma) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [clearVisible, setClearVisible] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [ocultarBuscador, setOcultarBuscador] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    const res = await fetch(
      `https://tikwm.com/api/?url=${encodeURIComponent(url)}`
    );
    const json = await res.json();

    if (json.data) {
      const tipo = json.data.images && json.data.images.length > 0 ? "imagen" : "video";

      setData({
        ...json.data,
        tipo
      });

      setOcultarBuscador(true);
    } else {
      alert(textos[idioma].errorContenido);
    }
  } catch {
    alert(textos[idioma].errorConexion);
  } finally {
    setLoading(false);
  }
};

  const limpiarNombre = (nombre) => {
  return (
    nombre
      ?.replace(/[\\/:*?"<>|]/g, "")
      .replace(/\s+/g, "_")
      .substring(0, 60) || "tiktok_video"
  );
};

  const descargarArchivo = async (url, nombre) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const nombreLimpio = limpiarNombre(nombre);

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = nombreLimpio;
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

  return {
    url,
    error,
    clearVisible,
    disabled,
    ocultarBuscador,
    data,
    validar,
    limpiar,
    obtener,
    descargarArchivo,
    reiniciar,
    loading,
  };
}