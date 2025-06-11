// components/forms/AgeSelectionModal.jsx
import React from 'react';

const AgeSelectionModal = ({ isOpen, onClose, onSelectAge }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md mx-4 shadow-xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Selecciona tu edad
          </h2>
          <p className="text-gray-600">
            Para continuar con el formulario, necesitamos saber si eres mayor o menor de edad
          </p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => onSelectAge('minor')}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center"
          >
            <span className="mr-2">👶</span>
            Menor de edad (Menos de 18 años)
          </button>
          
          <button
            onClick={() => onSelectAge('adult')}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200 flex items-center justify-center"
          >
            <span className="mr-2">🧑‍💼</span>
            Mayor de edad (18 años o más)
          </button>
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-6 text-gray-500 hover:text-gray-700 transition duration-200 py-2"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default AgeSelectionModal;