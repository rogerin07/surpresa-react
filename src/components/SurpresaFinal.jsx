import React, { useEffect } from "react";

const SurpresaFinal = () => {
  useEffect(() => {
    const audios = document.getElementsByTagName("audio");
    for (let audio of audios) {
      audio.pause();
      audio.currentTime = 0;
    }
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        background: "white",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "black" }}>Última Surpresa!</h1>
      <video width="80%" controls autoPlay>
        <source
          src={`${import.meta.env.BASE_URL}/videos/surpresa.mp4`}
          type="video/mp4"
        />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default SurpresaFinal;
