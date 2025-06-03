import React from "react";
import TypewriterText from "./TypewriterText"; //

const SceneWelcome = ({ onNextScene }) => {
  //
  return (
    <div className="scene-container">
      {" "}
      <TypewriterText
        text="Esse é um presente confidencial e exclusivo. Tem certeza que foi pra você e deseja abrí-lo?" //
        el="h2" //
        className="typewriter-text"
      />
      <div style={{ marginTop: "40px" }}>
        <button onClick={onNextScene}> Sim</button>
        <button
          onClick={() => alert("Não quer tentar descobrir se é para você?")}
        >
          {" "}
          Não
        </button>
      </div>
    </div>
  );
};

export default SceneWelcome;
