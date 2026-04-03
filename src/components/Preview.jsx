import { useApp } from "../context/AppContext";

function Preview() {
  const { data, descargarArchivo, reiniciar, textos, idioma ,loading } = useApp();

  return (
    <div>
      <div className="preview">
        <div
          className="video-bg"
          style={{ backgroundImage: `url('${data.cover}')` }}
        ></div>

        <div className="content">
          <div className="user">
            <img src={data.author.avatar} className="avatar" />
            <div>
              <strong>@{data.author.nickname}</strong>
              <p>{data.title}</p>
            </div>
          </div>

          <div className="acciones">
            <button
              className="btn video"
              onClick={() =>
                descargarArchivo(data.play, data.title + ".mp4")
              }
            >
              {textos.descargarVideo}
            </button>

            <button
              className="btn audio"
              onClick={() =>
                descargarArchivo(data.music, data.title + ".mp3")
              }
            >
              {textos.descargarAudio}
            </button>
          </div>
        </div>
      </div>

      <button className="volver" onClick={reiniciar}>
        {textos.volver}
      </button>
    </div>
  );
}

export default Preview;