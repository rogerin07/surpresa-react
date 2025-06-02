import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Volume leve
      audioRef.current.play().catch(error => {
        // Autoplay pode ser bloqueado, normal. O usuário já interagiu para chegar aqui.
        console.warn("Autoplay da música ambiente pode ter sido bloqueado:", error);
      });
    }
    return () => { // Cleanup: para a música se o componente for desmontado
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [src]);

  return <audio ref={audioRef} src={src} loop />;
};

export default AudioPlayer;