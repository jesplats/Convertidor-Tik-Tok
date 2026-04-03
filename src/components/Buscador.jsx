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
    loading, // 
  } = useApp();

  return (
    <>
      <h2>{textos.titulo}</h2>

      <div className="input-container">
        {/* INPUT */}
        <input
          value={url}
          placeholder={textos.placeholder}
          onChange={(e) => validar(e.target.value)}
        />

        {/* BOTONES */}
        <div className="botones-container">
          {clearVisible && (
            <button className="clear" onClick={limpiar}>
               {textos.eliminar}
            </button>
          )}

          <button
            className={`download ${loading ? "loading" : ""}`}
            onClick={obtener}
            disabled={disabled || loading}
          >
            {loading ? textos.espera : textos.descargar}
          </button>
        </div>
      </div>

      {error && <div className="error">{textos.error}</div>}
    </>
  );
}

export default Buscador;