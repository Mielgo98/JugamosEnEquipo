// App.jsx
import React, { useState } from 'react';
import AdultPlayerForm from './components/forms/AdultPlayerForm';
import MinorPlayerForm from './components/forms/MinorPlayerForm';
import ClubForm from './components/forms/ClubForm';
import AgeSelectionModal from './components/forms/AgeSelectionModal';

const App = () => {
  const [activeForm, setActiveForm] = useState(null); // null, 'player', 'club'
  const [playerAge, setPlayerAge] = useState(null); // null, 'adult', 'minor'
  const [showAgeModal, setShowAgeModal] = useState(false);

  const handleFormSelection = (formType) => {
    if (formType === 'player') {
      setShowAgeModal(true);
      setActiveForm('player');
    } else {
      setActiveForm('club');
      setPlayerAge(null);
    }
  };

  const handleAgeSelection = (age) => {
    setPlayerAge(age);
    setShowAgeModal(false);
  };

  const handleCloseModal = () => {
    setShowAgeModal(false);
    setActiveForm(null);
  };

  const handleAdultPlayerSubmit = (data) => {
    console.log('Datos del jugador adulto:', data);
    alert('Formulario de jugador mayor de edad enviado correctamente');
  };

  const handleMinorPlayerSubmit = (data) => {
    console.log('Datos del jugador menor:', data);
    alert('Formulario de jugador menor de edad enviado correctamente');
  };

  const handleClubSubmit = (data) => {
    console.log('Datos del club:', data);
    alert('Formulario de club enviado correctamente');
  };

  const resetForms = () => {
    setActiveForm(null);
    setPlayerAge(null);
    setShowAgeModal(false);
  };

  const renderActiveForm = () => {
    if (activeForm === 'club') {
      return <ClubForm onSubmit={handleClubSubmit} />;
    }
    
    if (activeForm === 'player' && playerAge === 'adult') {
      return <AdultPlayerForm onSubmit={handleAdultPlayerSubmit} />;
    }
    
    if (activeForm === 'player' && playerAge === 'minor') {
      return <MinorPlayerForm onSubmit={handleMinorPlayerSubmit} />;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Selector principal de formularios */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleFormSelection('player')}
            className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
              activeForm === 'player'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Formulario Jugador
          </button>
          <button
            onClick={() => handleFormSelection('club')}
            className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
              activeForm === 'club'
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Formulario Club
          </button>
          
          {/* Botón para resetear */}
          {activeForm && (
            <button
              onClick={resetForms}
              className="px-6 py-2 rounded-lg font-medium bg-gray-500 text-white hover:bg-gray-600 transition duration-200"
            >
              Volver al inicio
            </button>
          )}
        </div>

        {/* Indicador del formulario activo */}
        {activeForm && (
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              {activeForm === 'club' && 'Formulario de Club'}
              {activeForm === 'player' && playerAge === 'adult' && 'Formulario de Jugador - Mayor de edad'}
              {activeForm === 'player' && playerAge === 'minor' && 'Formulario de Jugador - Menor de edad'}
            </p>
          </div>
        )}
      </div>

      {/* Modal de selección de edad */}
      <AgeSelectionModal
        isOpen={showAgeModal}
        onClose={handleCloseModal}
        onSelectAge={handleAgeSelection}
      />

      {/* Renderizar formulario activo */}
      {renderActiveForm()}
    </div>
  );
};

export default App;