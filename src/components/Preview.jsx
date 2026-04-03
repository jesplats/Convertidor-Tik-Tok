import { useApp } from "../context/AppContext";

function Preview() {
  const { data, descargarArchivo, reiniciar, textos } = useApp();

  const esImagen = data.tipo === "imagen";

  return (
    <div>
      {/* PREVIEW */}
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

          {/* ===== ACCIONES ===== */}
          <div className="acciones">

            {/* 🟢 CASO VIDEO */}
            {!esImagen && (
              <>
                <button
                  className="btn video"
                  onClick={() =>
                    descargarArchivo(
                      data.play,
                      data.title + ".mp4"
                    )
                  }
                >
                  {textos.descargarVideo}
                </button>

                <button
                  className="btn audio"
                  onClick={() =>
                    descargarArchivo(
                      data.music,
                      data.title + ".mp3"
                    )
                  }
                >
                  {textos.descargarAudio}
                </button>
              </>
            )}

            {/* 🟣 CASO IMÁGENES */}
            {esImagen && (
              <div className="imagenes-container">
                <p className="contador">
                  📸 {textos.imagenes}: {data.images.length}
                </p>

                <div className="grid-imagenes">
                  {data.images.map((img, index) => (
                    <button
                      key={index}
                      className="btn imagen"
                      onClick={() =>
                        descargarArchivo(
                          img,
                          `${data.title}_img_${index + 1}.jpg`
                        )
                      }
                    >
                      {textos.descargarImagen} {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            )}
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