// components/ui/FormHeader.jsx
import React from 'react';

const FormHeader = ({ title, subtitle }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        {/* LOGO CAJA RURAL: Insertar aquí el logo de Caja Rural */}
        <div className="w-32 h-16 bg-green-600 flex items-center justify-center text-white font-bold rounded">
          CAJA RURAL LOGO
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {subtitle && (
          <p className="text-sm text-gray-600 mt-2">{subtitle}</p>
        )}
      </div>
      
      <div>
        {/* LOGO JUGAMOS EN EQUIPO: Insertar aquí el logo "Jugamos en Equipo" */}
        <div className="w-32 h-16 bg-gray-600 flex items-center justify-center text-white font-bold rounded">
          JUGAMOS LOGO
        </div>
      </div>
    </div>
  );
};

export default FormHeader;