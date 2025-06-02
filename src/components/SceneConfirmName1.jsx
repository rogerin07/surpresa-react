import React from 'react';
import TypewriterText from './TypewriterText';

const SceneConfirmName1 = ({ onNextScene, nomeCompleto }) => {
  return (
    <div>
      <TypewriterText text={`Seu nome é ${nomeCompleto}?`} el="h2" />
      <button onClick={onNextScene}>Sim</button>
      <button onClick={(e) => e.preventDefault()}>Não</button>
    </div>
  );
};

export default SceneConfirmName1;