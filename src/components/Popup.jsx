import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Popup = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="popup-content"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: 'spring', damping: 15, stiffness: 100 }}
          >
            <p>{message}</p>
            <button onClick={onClose}>Errei, vou voltar</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;