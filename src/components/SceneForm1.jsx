import React, { useState } from "react";
import TypewriterText from "./TypewriterText"; //

const SceneForm1 = ({
  onNextScene,
  formData,
  updateFormData,
  nomePrimeiroCorreto,
  nomeSobrenomeCorreto,
}) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
    setError("");
  };

  const handleSubmit = () => {
    const { primeiroNome, segundoNome, idade, beleza } = formData;

    if (
      !primeiroNome?.trim() ||
      !segundoNome?.trim() ||
      !idade?.trim() ||
      !beleza?.trim()
    ) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (primeiroNome.toLowerCase() !== nomePrimeiroCorreto.toLowerCase()) {
      setError(
        `O primeiro nome parece estar incorreto. Esperava: ${nomePrimeiroCorreto}.`
      );
      return;
    }

    if (segundoNome.toLowerCase() !== nomeSobrenomeCorreto.toLowerCase()) {
      setError(
        `O sobrenome parece estar incorreto. Esperava: ${nomeSobrenomeCorreto}.`
      );
      return;
    }

    const idadeValue = parseInt(idade);
    const correctIdade = 18;

    if (isNaN(idadeValue) || idadeValue <= 0 || idadeValue !== correctIdade) {
      alert(`Sua idade parece estar incorreta`);
      return;
    }

    const belezaValue = parseInt(beleza);
    const correctedBeleza = 999999999;

    if (!isNaN(belezaValue) && belezaValue >= 0 && belezaValue <= 10) {
      alert(
        "Seu nível de beleza parece estar incorreto. Vamos corrigir isso para o valor apropriado!"
      );
      updateFormData("beleza", correctedBeleza.toString());
      return;
    } else if (belezaValue !== correctedBeleza) {
      setError(
        "Por favor, insira um valor de beleza entre 0 e 10. Ou deixe o valor corrigido."
      );
      return;
    }

    onNextScene();
  };

  return (
    <div className="scene-container">
      <TypewriterText
        text="Preciso confirmar algumas informações. Preencha as próximas 27 páginas"
        el="h2"
        className="typewriter-text"
      />

      <label htmlFor="primeiroNome">Seu Primeiro Nome:</label>
      <input
        type="text"
        id="primeiroNome"
        name="primeiroNome"
        value={formData.primeiroNome || ""}
        onChange={handleChange}
      />

      <label htmlFor="segundoNome">Seu Sobrenome Completo:</label>
      <input
        type="text"
        id="segundoNome"
        name="segundoNome"
        value={formData.segundoNome || ""}
        onChange={handleChange}
      />

      <label htmlFor="idade">Sua Idade:</label>
      <input
        type="number"
        id="idade"
        name="idade"
        value={formData.idade || ""}
        onChange={handleChange}
      />

      <label htmlFor="beleza">
        Quão linda você é de 0 a 10 (Seja sincera):
      </label>
      <input
        type="number"
        id="beleza"
        name="beleza"
        value={formData.beleza || ""}
        onChange={handleChange}
        min="0"
        max="10"
      />

      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleSubmit}>Próximo</button>
    </div>
  );
};

export default SceneForm1;
