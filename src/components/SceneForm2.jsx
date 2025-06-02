import React, { useState } from 'react';
import TypewriterText from './TypewriterText';
import Popup from './Popup'; // Make sure Popup.jsx is created

const SceneForm2 = ({ onNextScene, formData, updateFormData, nomeCompletoCorreto, nomeNamoradoCorreto }) => {
  const [error, setError] = useState('');
  const [showNoPresentPopup, setShowNoPresentPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateFormData(name, type === 'checkbox' ? checked : (type === 'radio' ? (value === 'sim') : value) );
    setError(''); // Limpa erro ao digitar
  };

  const handleSubmit = () => {
    if (formData.nomeCompleto?.toLowerCase() !== nomeCompletoCorreto.toLowerCase()) {
      setError(`O nome completo parece estar incorreto. Acho que você não é a ${nomeCompletoCorreto}`);
      return;
    }
    if (formData.nomeCompletoNamorado?.toLowerCase() !== nomeNamoradoCorreto.toLowerCase()) {
      setError(`O nome do namorado parece estar incorreto. Tem certeza que é esse? ;)`);
      return;
    }
    const idadeNamoradoValue = parseInt(formData.idadeNamorado);
    const correctIdadeNamorado = 21;

    if (isNaN(idadeNamoradoValue) || idadeNamoradoValue !== correctIdadeNamorado) {
      alert(`A idade do namorado parece estar incorreta.`);
      return;

    }
    if (!formData.querPresente) {
      setShowNoPresentPopup(true);
      return;
    }
    onNextScene();
  };

  return (
    <div>
      <TypewriterText text="É brincadeira, são só 2 páginas! Mas ainda não estou convencido que você seja o amor da minha vida..." el="h2"/>

      <label htmlFor="nomeCompleto">Seu Nome Completo Novamente:</label>
      <input type="text" id="nomeCompleto" name="nomeCompleto" value={formData.nomeCompleto || ''} onChange={handleChange}/>

      <label htmlFor="nomeCompletoNamorado">Nome Completo do Seu Namorado (Dica: Macaco):</label>
      <input type="text" id="nomeCompletoNamorado" name="nomeCompletoNamorado" value={formData.nomeCompletoNamorado || ''} onChange={handleChange}/>

      <label htmlFor="idadeNamorado">Idade Dele:</label>
      <input type="number" id="idadeNamorado" name="idadeNamorado" value={formData.idadeNamorado || ''} onChange={handleChange}/>

      <fieldset> {/* Removed inline style, using App.css */}
        <TypewriterText text="Você quer MESMO abrir esse presente?" el="legend"/>
        <div>
          <input type="radio" id="querSim" name="querPresente" value="sim" checked={formData.querPresente === true} onChange={handleChange} />
          <label htmlFor="querSim">Sim!</label>
          <input type="radio" id="querNao" name="querPresente" value="nao" checked={formData.querPresente === false} onChange={handleChange} />
          <label htmlFor="querNao">Não...</label>
        </div>
      </fieldset>

      {error && <p style={{color: 'red'}}>{error}</p>}
      <button onClick={handleSubmit}>Finalizar e Abrir!</button>

      <Popup
        isOpen={showNoPresentPopup}
        message="Você NÃO quer abrir o presente?! Tem certeza disso?"
        onClose={() => {
          setShowNoPresentPopup(false);
          updateFormData('querPresente', true); // Permite que ela volte e coloque sim
        }}
      />
    </div>
  );
};

export default SceneForm2;