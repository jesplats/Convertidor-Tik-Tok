function BotonesDescarga({ videoURL, audioURL, titulo, descargar }) {
  const limpiarNombre = (nombre) => {
    return nombre.replace(/[\\/:*?"<>|]/g, "").substring(0, 80);
  };

  return (
    <div className="acciones">
      <button
        className="btn video"
        onClick={() =>
          descargar(videoURL, limpiarNombre(titulo) + ".mp4")
        }
      >
        🎬 Descargar Video
      </button>

      <button
        className="btn audio"
        onClick={() =>
          descargar(audioURL, limpiarNombre(titulo) + ".mp3")
        }
      >
        🎵 Descargar MP3
      </button>
    </div>
  );
}

export default BotonesDescarga;