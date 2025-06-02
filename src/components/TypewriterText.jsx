import React from "react";
import { motion } from "framer-motion";

const TypewriterText = ({
  text,
  speed = 0.07,
  el: Element = "p",
  className = "",
}) => {
  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: 0.2 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        textAlign: "center",
        lineHeight: "1.5",
      }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          style={{ display: "inline-block", marginRight: "6px" }} // separa palavras
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span key={charIndex} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypewriterText;
