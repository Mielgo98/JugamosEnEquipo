// components/forms/AdultPlayerForm.jsx
import React, { useState } from 'react';
import FormHeader from '../ui/FormHeader';

const AdultPlayerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    dni: '',
    fechaNacimiento: '',
    telefono: '',
    email: '',
    direccion: '',
    genero: '',
    deporte: '',
    categoria: '',
    club: '',
    localidad: '',
    provincia: '',
    experienciaPreviaDeporte: '',
    objetivos: '',
    autorizacionDatos: false,
    autorizacionImagenes: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = () => {
    // Validación básica
    if (!formData.autorizacionDatos) {
      alert('Debes autorizar el tratamiento de datos personales');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <FormHeader 
        title="FICHA IDENTIFICATIVA JUGADOR"
        subtitle="Mayor de edad"
      />

      <div className="space-y-6">
        {/* Datos personales */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Datos Personales</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                NOMBRE *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                APELLIDOS *
              </label>
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                DNI/NIE *
              </label>
              <input
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                FECHA NACIMIENTO *
              </label>
              <input
                type="date"
                name="fechaNacimiento"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GÉNERO *
              </label>
              <select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Seleccionar</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                TELÉFONO *
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                EMAIL *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              DIRECCIÓN COMPLETA *
            </label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Calle, número, código postal, ciudad"
              required
            />
          </div>
        </div>

        {/* Información deportiva */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Información Deportiva</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                DEPORTE *
              </label>
              <input
                type="text"
                name="deporte"
                value={formData.deporte}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CATEGORÍA *
              </label>
              <input
                type="text"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CLUB *
              </label>
              <input
                type="text"
                name="club"
                value={formData.club}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LOCALIDAD *
              </label>
              <input
                type="text"
                name="localidad"
                value={formData.localidad}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PROVINCIA *
              </label>
              <input
                type="text"
                name="provincia"
                value={formData.provincia}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              EXPERIENCIA PREVIA EN EL DEPORTE
            </label>
            <textarea
              name="experienciaPreviaDeporte"
              value={formData.experienciaPreviaDeporte}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Describe tu experiencia previa en este deporte..."
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              OBJETIVOS DEPORTIVOS
            </label>
            <textarea
              name="objetivos"
              value={formData.objetivos}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="¿Cuáles son tus objetivos deportivos?"
            />
          </div>
        </div>

        {/* Autorizaciones */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Autorizaciones</h3>
          
          <div className="space-y-4">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="autorizacionDatos"
                checked={formData.autorizacionDatos}
                onChange={handleChange}
                className="mt-1 mr-3"
                required
              />
              <span className="text-sm text-gray-700">
                <strong>Autorización tratamiento de datos:</strong> Autorizo el tratamiento de mis datos personales para la participación en el programa "Jugamos en Equipo" de Caja Rural, según la Ley de Protección de Datos vigente. *
              </span>
            </label>

            <label className="flex items-start">
              <input
                type="checkbox"
                name="autorizacionImagenes"
                checked={formData.autorizacionImagenes}
                onChange={handleChange}
                className="mt-1 mr-3"
              />
              <span className="text-sm text-gray-700">
                <strong>Autorización de imágenes:</strong> Autorizo el uso de mi imagen en actividades promocionales del programa "Jugamos en Equipo".
              </span>
            </label>
          </div>
        </div>

        {/* Botón de envío */}
        <div className="flex justify-center pt-6">
          <button
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
          >
            ENVIAR FORMULARIO
          </button>
        </div>
      </div>

      {/* Footer con información de contacto */}
      <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
        <p>info@jugamosenequipo.com</p>
        <p>603 91 100</p>
      </div>
    </div>
  );
};

export default AdultPlayerForm;