function Buscador({
  url,
  validar,
  limpiar,
  clearVisible,
  obtener,
  disabled,
  error,
}) {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Descargar TikTok
      </h2>

      <div className="input-container">
        <input
          value={url}
          placeholder="Pega el link de TikTok..."
          onChange={(e) => validar(e.target.value)}
        />

        {clearVisible && (
          <button className="clear" onClick={limpiar}>
            ✕
          </button>
        )}

        <button
          className="download"
          onClick={obtener}
          disabled={disabled}
        >
          Download
        </button>
      </div>

      {error && (
        <div className="error">
          ❌ Ingresa un enlace válido
        </div>
      )}
    </>
  );
}

export default Buscador;