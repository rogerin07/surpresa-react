import React from "react";
import TypewriterText from "./TypewriterText"; //

const SceneWelcome = ({ onNextScene }) => {
  //
  return (
    <div className="scene-container">
      {" "}
      {/* Using a general scene container class */}
      <TypewriterText
        text="Esse é um presente confidencial e exclusivo. Tem certeza que foi pra você e deseja abrí-lo?" //
        el="h2" //
        className="typewriter-text"
      />
      <div style={{ marginTop: "40px" }}>
        <button onClick={onNextScene}>
          {" "}
          {/* Using App.css button styles */}
          Sim
        </button>
        <button
          onClick={() => alert("Não quer tentar descobrir se é para você?")}
        >
          {" "}
          {/* Using App.css button styles */}
          Não
        </button>
      </div>
    </div>
  );
};

export default SceneWelcome;
