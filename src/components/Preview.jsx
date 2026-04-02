import BotonesDescarga from "./BotonesDescarga";

function Preview({
  thumbnail,
  username,
  avatar,
  titulo,
  videoURL,
  audioURL,
  descargar,
  reiniciar,
}) {
  return (
    <div>
      <div className="preview">
        <div
          className="video-bg"
          style={{ backgroundImage: `url('${thumbnail}')` }}
        ></div>

        <div className="content">
          <div className="user">
            <img src={avatar} className="avatar" />
            <div>
              <strong>@{username}</strong>
              <p>{titulo}</p>
            </div>
          </div>

          <BotonesDescarga
            videoURL={videoURL}
            audioURL={audioURL}
            titulo={titulo}
            descargar={descargar}
          />
        </div>
      </div>

      <button className="volver" onClick={reiniciar}>
        ⬅️ Volver al Inicio
      </button>
    </div>
  );
}

export default Preview;