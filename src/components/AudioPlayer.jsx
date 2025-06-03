import React, { useEffect, useRef } from "react";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play().catch((error) => {
        console.warn(
          "Autoplay da música ambiente pode ter sido bloqueado:",
          error
        );
      });
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [src]);

  return <audio ref={audioRef} src={src} loop />;
};

export default AudioPlayer;
