import { useApp } from "../context/AppContext";

function Buscador() {
  const {
    url,
    validar,
    limpiar,
    clearVisible,
    obtener,
    disabled,
    error,
    textos,
  } = useApp();

  return (
    <>
      <h2>{textos.titulo}</h2>

      <div className="input-container">
        <input
          value={url}
          placeholder={textos.placeholder}
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
          {textos.descargar}
        </button>
      </div>

      {error && <div className="error">{textos.error}</div>}
    </>
  );
}

export default Buscador;