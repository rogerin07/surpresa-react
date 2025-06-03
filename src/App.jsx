import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import SceneWelcome from "./components/SceneWelcome";
import SceneConfirmName1 from "./components/SceneConfirmName1";
import SceneConfirmName2 from "./components/SceneConfirmName2";
import SceneForm1 from "./components/SceneForm1";
import SceneForm2 from "./components/SceneForm2";
import SceneFinal from "./components/SceneFinal";
import AudioPlayer from "./components/AudioPlayer";
import SurpresaFinal from "./components/SurpresaFinal";

const NOME_PRIMEIRO_CORRETO = "Ellen";
const NOME_SOBRENOME_CORRETO = "de Oliveira Rodrigues";
const NOME_COMPLETO_CORRETO = `${NOME_PRIMEIRO_CORRETO} ${NOME_SOBRENOME_CORRETO}`;
const NOME_NAMORADO_CORRETO = "Roger Santos Bezerra";

function App() {
  const [currentScene, setCurrentScene] = useState("welcome");
  const [formData, setFormData] = useState({
    primeiroNome: "",
    segundoNome: "",
    idade: "",
    beleza: "",
    nomeCompleto: "",
    nomeCompletoNamorado: "",
    idadeNamorado: "",
    querPresente: true,
  });
  const [playMusic, setPlayMusic] = useState(false);

  const handleNextScene = (sceneName) => {
    setCurrentScene(sceneName);
  };

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const startMusic = () => {
    setPlayMusic(true);
  };

  const renderScene = () => {
    switch (currentScene) {
      case "welcome":
        return (
          <SceneWelcome
            onNextScene={() => {
              handleNextScene("confirmName1");
              startMusic();
            }}
          />
        );
      case "confirmName1":
        return (
          <SceneConfirmName1
            onNextScene={() => handleNextScene("confirmName2")}
            nomeCompleto={NOME_COMPLETO_CORRETO}
          />
        );
      case "confirmName2":
        return (
          <SceneConfirmName2
            onNextScene={() => handleNextScene("form1")}
            nomeCompleto={NOME_COMPLETO_CORRETO}
          />
        );
      case "form1":
        return (
          <SceneForm1
            onNextScene={() => handleNextScene("form2")}
            formData={formData}
            updateFormData={updateFormData}
            nomePrimeiroCorreto={NOME_PRIMEIRO_CORRETO}
            nomeSobrenomeCorreto={NOME_SOBRENOME_CORRETO}
          />
        );
      case "form2":
        return (
          <SceneForm2
            onNextScene={() => handleNextScene("final")}
            formData={formData}
            updateFormData={updateFormData}
            nomeCompletoCorreto={NOME_COMPLETO_CORRETO}
            nomeNamoradoCorreto={NOME_NAMORADO_CORRETO}
          />
        );
      case "final":
        return (
          <SceneFinal onNextScene={() => handleNextScene("surpresaFinal")} />
        );
      case "surpresaFinal":
        return <SurpresaFinal />;
      default:
        return (
          <SceneWelcome
            onNextScene={() => {
              handleNextScene("confirmName1");
              startMusic();
            }}
          />
        );
    }
  };

  return (
    <div className="app-container">
      {playMusic && (
        <AudioPlayer src={`${import.meta.env.BASE_URL}audio/musica.mp3`} />
      )}

      {renderScene()}
    </div>
  );
}

export default App;
