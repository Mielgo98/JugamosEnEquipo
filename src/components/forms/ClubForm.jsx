// components/forms/ClubForm.jsx
import React, { useState } from 'react';
import FormHeader from '../ui/FormHeader';

const ClubForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombreClub: '',
    deporte: '',
    fechaCreacion: '',
    poblacion: '',
    provincia: '',
    direccionSede: '',
    telefonoClub: '',
    emailClub: '',
    webClub: '',
    juntaDirectiva: '',
    equipos: '',
    categorias: '',
    numeroSocios: '',
    instalacionesDisponibles: '',
    historiaDescriptiva: '',
    logrosRecientes: '',
    proyectosFuturos: '',
    adjuntos: {
      fotoEquipo: false,
      videos: false,
      escudo: false,
      documentacion: false
    },
    contactoPrincipal: {
      nombre: '',
      cargo: '',
      telefono: '',
      email: ''
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('adjuntos.')) {
      const adjuntoKey = name.split('.')[1];
      setFormData({
        ...formData,
        adjuntos: {
          ...formData.adjuntos,
          [adjuntoKey]: checked
        }
      });
    } else if (name.startsWith('contactoPrincipal.')) {
      const contactoKey = name.split('.')[1];
      setFormData({
        ...formData,
        contactoPrincipal: {
          ...formData.contactoPrincipal,
          [contactoKey]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = () => {
    // Validación básica
    if (!formData.nombreClub || !formData.deporte || !formData.contactoPrincipal.nombre) {
      alert('Por favor, completa todos los campos obligatorios');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <FormHeader 
        title="FICHA IDENTIFICATIVA CLUB"
        subtitle="En Caja Rural lo tenemos claro:"
      />

      <div className="space-y-6">
        {/* Información básica del club */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Información Básica del Club</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              NOMBRE DEL CLUB *
            </label>
            <input
              type="text"
              name="nombreClub"
              value={formData.nombreClub}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              DEPORTE/S *
            </label>
            <input
              type="text"
              name="deporte"
              value={formData.deporte}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Ej: Fútbol, Baloncesto, Tenis..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                FECHA CREACIÓN *
              </label>
              <input
                type="date"
                name="fechaCreacion"
                value={formData.fechaCreacion}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                POBLACIÓN *
              </label>
              <input
                type="text"
                name="poblacion"
                value={formData.poblacion}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                DIRECCIÓN DE LA SEDE
              </label>
              <input
                type="text"
                name="direccionSede"
                value={formData.direccionSede}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Dirección completa de la sede del club"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                NÚMERO DE SOCIOS APROXIMADO
              </label>
              <input
                type="number"
                name="numeroSocios"
                value={formData.numeroSocios}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Número aproximado de socios"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                TELÉFONO DEL CLUB
              </label>
              <input
                type="tel"
                name="telefonoClub"
                value={formData.telefonoClub}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                EMAIL DEL CLUB
              </label>
              <input
                type="email"
                name="emailClub"
                value={formData.emailClub}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WEB DEL CLUB
              </label>
              <input
                type="url"
                name="webClub"
                value={formData.webClub}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="https://..."
              />
            </div>
          </div>
        </div>

        {/* Estructura organizativa */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Estructura Organizativa</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              JUNTA DIRECTIVA *
            </label>
            <textarea
              name="juntaDirectiva"
              value={formData.juntaDirectiva}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Lista de miembros de la junta directiva con sus cargos (Presidente, Vicepresidente, Secretario, etc.)"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                EQUIPOS *
              </label>
              <textarea
                name="equipos"
                value={formData.equipos}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Describe los equipos del club (senior, juvenil, infantil, etc.)"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CATEGORÍAS *
              </label>
              <textarea
                name="categorias"
                value={formData.categorias}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Categorías en las que compite el club (Primera, Segunda, Tercera, etc.)"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              INSTALACIONES DISPONIBLES
            </label>
            <textarea
              name="instalacionesDisponibles"
              value={formData.instalacionesDisponibles}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Describe las instalaciones deportivas disponibles (campos, pistas, vestuarios, etc.)"
            />
          </div>
        </div>

        {/* Historia y proyectos */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Historia y Proyectos</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              HISTORIA DESCRIPTIVA DEL CLUB (mín. 100 palabras - máx. 300 palabras) *
            </label>
            <textarea
              name="historiaDescriptiva"
              value={formData.historiaDescriptiva}
              onChange={handleChange}
              rows="6"
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Describe la historia, valores, filosofía y características principales del club..."
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Palabras: {formData.historiaDescriptiva.split(/\s+/).filter(word => word.length > 0).length}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LOGROS Y RECONOCIMIENTOS RECIENTES
              </label>
              <textarea
                name="logrosRecientes"
                value={formData.logrosRecientes}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Menciona los principales logros, títulos o reconocimientos obtenidos en los últimos años..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                PROYECTOS FUTUROS
              </label>
              <textarea
                name="proyectosFuturos"
                value={formData.proyectosFuturos}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Describe los proyectos y objetivos futuros del club..."
              />
            </div>
          </div>
        </div>

        {/* Persona de contacto */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Persona de Contacto Principal</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                NOMBRE COMPLETO *
              </label>
              <input
                type="text"
                name="contactoPrincipal.nombre"
                value={formData.contactoPrincipal.nombre}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CARGO EN EL CLUB *
              </label>
              <input
                type="text"
                name="contactoPrincipal.cargo"
                value={formData.contactoPrincipal.cargo}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Ej: Presidente, Secretario, Coordinador..."
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                TELÉFONO DE CONTACTO *
              </label>
              <input
                type="tel"
                name="contactoPrincipal.telefono"
                value={formData.contactoPrincipal.telefono}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                EMAIL DE CONTACTO *
              </label>
              <input
                type="email"
                name="contactoPrincipal.email"
                value={formData.contactoPrincipal.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Sección de adjuntos */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">ADJUNTOS</h3>
          <p className="text-sm text-gray-600 mb-4">
            Selecciona los documentos que puedes proporcionar (opcional):
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center p-3 border border-gray-200 rounded hover:bg-gray-50">
              <input
                type="checkbox"
                name="adjuntos.fotoEquipo"
                checked={formData.adjuntos.fotoEquipo}
                onChange={handleChange}
                className="mr-3"
              />
              <span className="text-sm">
                <strong>Foto del Equipo</strong><br />
                <span className="text-gray-500">(125 ppp - 105 x 153 pix)</span>
              </span>
            </label>

            <label className="flex items-center p-3 border border-gray-200 rounded hover:bg-gray-50">
              <input
                type="checkbox"
                name="adjuntos.videos"
                checked={formData.adjuntos.videos}
                onChange={handleChange}
                className="mr-3"
              />
              <span className="text-sm">
                <strong>Videos promocionales</strong><br />
                <span className="text-gray-500">(formato horizontal)</span>
              </span>
            </label>

            <label className="flex items-center p-3 border border-gray-200 rounded hover:bg-gray-50">
              <input
                type="checkbox"
                name="adjuntos.escudo"
                checked={formData.adjuntos.escudo}
                onChange={handleChange}
                className="mr-3"
              />
              <span className="text-sm">
                <strong>Escudo del Club</strong><br />
                <span className="text-gray-500">(125 ppp - 105 x 153 pix)</span>
              </span>
            </label>

            <label className="flex items-center p-3 border border-gray-200 rounded hover:bg-gray-50">
              <input
                type="checkbox"
                name="adjuntos.documentacion"
                checked={formData.adjuntos.documentacion}
                onChange={handleChange}
                className="mr-3"
              />
              <span className="text-sm">
                <strong>Documentación adicional</strong><br />
                <span className="text-gray-500">(estatutos, palmares, etc.)</span>
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
            ENVIAR FORMULARIO DEL CLUB
          </button>
        </div>
      </div>

      {/* Footer con información de contacto */}
      <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-600">
        <p className="font-medium">Si tienen alguna duda:</p>
        <p className="font-medium">Contacto:</p>
        <p>Pepe Herrero</p>
        <p>616 913 100</p>
        <p>info@jugamosenequipo.com</p>
      </div>
    </div>
  );
};

export default ClubForm;