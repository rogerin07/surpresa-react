import React from 'react';
import TypewriterText from './TypewriterText';

const SceneConfirmName2 = ({ onNextScene, nomeCompleto }) => {
  return (
    <div>
      <TypewriterText text={`Tem CERTEZA ABSOLUTA que seu nome é ${nomeCompleto}??`} el="h2" />
      <button onClick={onNextScene}>Sim, Tenho Certeza!</button>
      <button onClick={(e) => e.preventDefault()}>Não</button>
    </div>
  );
};

export default SceneConfirmName2;