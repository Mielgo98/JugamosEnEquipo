// components/forms/MinorPlayerForm.jsx
import React, { useState } from 'react';
import FormHeader from '../ui/FormHeader';

const MinorPlayerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    // Datos del menor
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    genero: '',
    deporte: '',
    categoria: '',
    club: '',
    localidad: '',
    provincia: '',
    experienciaPreviaDeporte: '',
    objetivos: '',
    
    // Datos del tutor/padre/madre
    nombreTutor: '',
    apellidosTutor: '',
    dniTutor: '',
    telefonoTutor: '',
    emailTutor: '',
    direccionTutor: '',
    relacionConMenor: '',
    
    // Autorizaciones (firmadas por el tutor)
    autorizacionDatos: false,
    autorizacionImagenes: false,
    autorizacionActividades: false,
    autorizacionMedica: false
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
    if (!formData.autorizacionDatos || !formData.autorizacionActividades) {
      alert('El tutor debe autorizar el tratamiento de datos y las actividades deportivas');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <FormHeader 
        title="FICHA IDENTIFICATIVA JUGADOR"
        subtitle="Menor de edad - Requiere autorización del tutor"
      />

      <div className="space-y-6">
        {/* Datos del menor */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Datos del Menor</h3>
          
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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
              placeholder="Describe la experiencia previa del menor en este deporte..."
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
              placeholder="¿Cuáles son los objetivos deportivos del menor?"
            />
          </div>
        </div>

        {/* Datos del tutor/padre/madre */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Datos del Tutor/Padre/Madre</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                NOMBRE DEL TUTOR *
              </label>
              <input
                type="text"
                name="nombreTutor"
                value={formData.nombreTutor}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                APELLIDOS DEL TUTOR *
              </label>
              <input
                type="text"
                name="apellidosTutor"
                value={formData.apellidosTutor}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                DNI/NIE DEL TUTOR *
              </label>
              <input
                type="text"
                name="dniTutor"
                value={formData.dniTutor}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                TELÉFONO DEL TUTOR *
              </label>
              <input
                type="tel"
                name="telefonoTutor"
                value={formData.telefonoTutor}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                RELACIÓN CON EL MENOR *
              </label>
              <select
                name="relacionConMenor"
                value={formData.relacionConMenor}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Seleccionar</option>
                <option value="padre">Padre</option>
                <option value="madre">Madre</option>
                <option value="tutor_legal">Tutor Legal</option>
                <option value="abuelo">Abuelo/a</option>
                <option value="otro">Otro familiar</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                EMAIL DEL TUTOR *
              </label>
              <input
                type="email"
                name="emailTutor"
                value={formData.emailTutor}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                DIRECCIÓN COMPLETA DEL TUTOR *
              </label>
              <input
                type="text"
                name="direccionTutor"
                value={formData.direccionTutor}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Calle, número, código postal, ciudad"
                required
              />
            </div>
          </div>
        </div>

        {/* Autorizaciones del tutor */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Autorizaciones del Tutor</h3>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Importante:</strong> Todas las autorizaciones deben ser firmadas por el tutor legal del menor.
          </p>
          
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
                <strong>Autorización tratamiento de datos:</strong> Como tutor legal, autorizo el tratamiento de los datos personales del menor para la participación en el programa "Jugamos en Equipo" de Caja Rural, según la Ley de Protección de Datos vigente. *
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
                <strong>Autorización de imágenes:</strong> Autorizo el uso de la imagen del menor en actividades promocionales del programa "Jugamos en Equipo".
              </span>
            </label>

            <label className="flex items-start">
              <input
                type="checkbox"
                name="autorizacionActividades"
                checked={formData.autorizacionActividades}
                onChange={handleChange}
                className="mt-1 mr-3"
                required
              />
              <span className="text-sm text-gray-700">
                <strong>Autorización de actividades deportivas:</strong> Autorizo al menor a participar en todas las actividades deportivas del programa, asumiendo los riesgos inherentes a la práctica deportiva. *
              </span>
            </label>

            <label className="flex items-start">
              <input
                type="checkbox"
                name="autorizacionMedica"
                checked={formData.autorizacionMedica}
                onChange={handleChange}
                className="mt-1 mr-3"
              />
              <span className="text-sm text-gray-700">
                <strong>Autorización médica de emergencia:</strong> En caso de emergencia médica, autorizo al personal del programa a tomar las medidas necesarias para la atención del menor, incluyendo el traslado a un centro médico.
              </span>
            </label>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Nota importante:</strong> El tutor debe presentar una copia de su DNI/NIE y, en caso de no ser el padre o madre, documentación que acredite la tutela legal del menor.
            </p>
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
        <p><strong>Para consultas sobre menores de edad:</strong></p>
        <p>info@jugamosenequipo.com</p>
        <p>603 91 100</p>
        <p className="mt-2 text-xs">Horario de atención: Lunes a Viernes de 9:00 a 18:00h</p>
      </div>
    </div>
  );
};

export default MinorPlayerForm;