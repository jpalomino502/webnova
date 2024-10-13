import React, { useState } from 'react';
import { ShieldCheckIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const initialSettings = [
  {
    id: 'data-encryption',
    name: 'Cifrado de Datos',
    description: 'Cifrar todos los datos almacenados usando cifrado AES-256.',
    enabled: true,
  },
  {
    id: 'two-factor-auth',
    name: 'Autenticación de Dos Factores',
    description: 'Requerir autenticación de dos factores para todas las cuentas de usuario.',
    enabled: false,
  },
  {
    id: 'data-retention',
    name: 'Política de Retención de Datos',
    description: 'Eliminar automáticamente los datos de los usuarios después de 12 meses de inactividad.',
    enabled: true,
  },
  {
    id: 'privacy-mode',
    name: 'Modo de Privacidad',
    description: 'Habilitar controles de privacidad más estrictos para los datos del usuario.',
    enabled: false,
  },
];

export default function ProteccionDeDatos() {
  const [settings, setSettings] = useState(initialSettings);
  const [showPassword, setShowPassword] = useState(false);
  const [masterPassword, setMasterPassword] = useState('');

  const toggleSetting = (id) => {
    setSettings(prevSettings =>
      prevSettings.map(setting =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const handlePasswordChange = (e) => {
    setMasterPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí normalmente enviarías los ajustes actualizados a un servidor
    console.log('Ajustes actualizados:', settings);
    console.log('Contraseña maestra:', masterPassword);
    alert('¡Ajustes actualizados con éxito!');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <ShieldCheckIcon className="mx-auto h-12 w-12 text-green-500" />
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900">Ajustes de Protección de Datos</h1>
          <p className="mt-2 text-lg text-gray-600">Gestiona tus preferencias de privacidad y seguridad</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Ajustes de Privacidad</h2>
              <div className="space-y-6">
                {settings.map((setting) => (
                  <div key={setting.id} className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id={setting.id}
                        name={setting.id}
                        type="checkbox"
                        checked={setting.enabled}
                        onChange={() => toggleSetting(setting.id)}
                        className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={setting.id} className="font-medium text-gray-700">
                        {setting.name}
                      </label>
                      <p className="text-gray-500">{setting.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Contraseña Maestra</h2>
              <div className="max-w-xl">
                <p className="text-sm text-gray-500 mb-4">
                  Establece una contraseña maestra para proteger tus ajustes de privacidad. Esta contraseña será requerida para hacer cambios en el futuro.
                </p>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={masterPassword}
                    onChange={handlePasswordChange}
                    className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Introduce la contraseña maestra"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <EyeIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Guardar Ajustes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
