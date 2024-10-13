import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon, ShieldExclamationIcon } from '@heroicons/react/24/solid';

const initialAuditItems = [
  { id: 1, name: 'Configuración del Cortafuegos', status: 'passed', description: 'Las reglas del cortafuegos están correctamente configuradas.' },
  { id: 2, name: 'Política de Contraseñas', status: 'passed', description: 'Todas las contraseñas de los usuarios cumplen con los requisitos de complejidad.' },
  { id: 3, name: 'Actualizaciones de Software', status: 'passed', description: 'Todas las actualizaciones críticas están instaladas en los servidores.' },
  { id: 4, name: 'Control de Acceso', status: 'passed', description: 'Los controles de acceso de los usuarios están correctamente implementados.' },
  { id: 5, name: 'Cifrado de Datos', status: 'passed', description: 'Todos los datos sensibles están correctamente cifrados en reposo y en tránsito.' },
];

export default function AuditoriaDeSeguridad() {
  const [auditItems, setAuditItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuditItems = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simular retraso de red
      setAuditItems(initialAuditItems);
      setLoading(false);
    };

    fetchAuditItems();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'passed':
        return <CheckCircleIcon className="w-6 h-6 text-green-500" />;
      case 'warning':
        return <ExclamationCircleIcon className="w-6 h-6 text-yellow-500" />;
      case 'failed':
        return <ShieldExclamationIcon className="w-6 h-6 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'passed':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200';
      case 'failed':
        return 'bg-red-50 border-red-200';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Panel de Auditoría de Seguridad</h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {auditItems.map((item) => (
                <li key={item.id} className={`p-4 transition duration-300 ease-in-out hover:shadow-lg ${getStatusClass(item.status)}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        {getStatusIcon(item.status)}
                      </div>
                      <div className="ml-4">
                        <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                    <div>
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.status === 'passed' ? 'bg-green-100 text-green-800' :
                        item.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 1500);
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Ejecutar Nueva Auditoría
          </button>
        </div>
      </div>
    </div>
  );
}
