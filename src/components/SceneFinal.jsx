import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterText from "./TypewriterText";

const images = [
  `${import.meta.env.BASE_URL}images/foto1.jpg`,
  `${import.meta.env.BASE_URL}images/foto2.jpg`,
  `${import.meta.env.BASE_URL}images/foto3.jpeg`,
  `${import.meta.env.BASE_URL}images/foto4.jpg`,
  `${import.meta.env.BASE_URL}images/foto5.jpg`,
  `${import.meta.env.BASE_URL}images/foto6.jpg`,
  `${import.meta.env.BASE_URL}images/foto7.jpg`,
];

const SceneFinal = ({ onNextScene }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, []);

  const textoFinal =
    "Ellen, meu amor. Fiz isso para demonstrar um pouco do meu amor por ti, e tentar demonstrar o quanto te amo, e quanto você é especial. Eu te amo muitcho";

  return (
    <div style={{ textAlign: "center" }}>
      <TypewriterText text="PARABÉNS, VOCÊ CONSEGUIU!" el="h1" />
      <TypewriterText
        text={textoFinal}
        el="p"
        className="texto-final-paragrafo"
      />

      <div className="image-gallery-container">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Lembrança ${currentImageIndex + 1}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <button
        style={{
          marginTop: "2rem",
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white",
        }}
        onClick={onNextScene}
      >
        Clique aqui para finalizar (última surpresa)
      </button>
    </div>
  );
};

export default SceneFinal;
