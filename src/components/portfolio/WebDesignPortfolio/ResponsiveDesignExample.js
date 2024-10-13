import React, { useState, useEffect } from 'react';

const screens = [
  { name: 'Móvil', class: 'w-full sm:w-[320px]' },
  { name: 'Tableta', class: 'w-full sm:w-[360px] md:w-[600px]' },
  { name: 'Escritorio', class: 'w-full sm:w-[360px] md:w-[768px]' },
];

export default function ResponsiveDemo() {
  const [activeScreen, setActiveScreen] = useState(screens[0]);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex = /Mobi|Android|iPad|Tablet/i;
      setIsMobileOrTablet(mobileRegex.test(userAgent));
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  const renderContent = () => {
    switch (activeScreen.name) {
      case 'Móvil':
        return (
          <div className="bg-gradient-to-b from-teal-400 to-teal-600 text-white min-h-[600px] sm:min-h-[500px] md:min-h-[400px] lg:min-h-[600px] rounded-lg shadow-lg overflow-auto">
            <header className="bg-teal-700 p-4">
              <h1 className="text-2xl font-bold">App Móvil</h1>
            </header>
            <nav className="flex justify-around bg-teal-600 p-2">
              {['Inicio', 'Buscar', 'Perfil'].map((item) => (
                <button
                  key={item}
                  onClick={() => alert(`${item} clicked`)}
                  className="text-white px-3 py-1 rounded hover:bg-teal-700 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>
            <main className="p-4 space-y-4 overflow-y-auto">
              <section className="bg-white bg-opacity-20 p-4 rounded-lg animate-fade-in">
                <h2 className="text-xl font-semibold mb-2">Últimas Actualizaciones</h2>
                <p className="text-sm">¡Mira nuestras nuevas funciones móviles!</p>
              </section>
              <section className="bg-white bg-opacity-20 p-4 rounded-lg animate-slide-in">
                <h2 className="text-xl font-semibold mb-2">Acciones Rápidas</h2>
                <div className="grid grid-cols-2 gap-2">
                  {['Publicar', 'Foto', 'Check-in', 'En vivo'].map((action) => (
                    <button key={action} className="bg-teal-700 p-2 rounded-full text-sm hover:bg-teal-800 transition-colors duration-200">
                      {action}
                    </button>
                  ))}
                </div>
              </section>
            </main>
          </div>
        );
      case 'Tableta':
        return (
          <div className="bg-gradient-to-br from-teal-400 to-teal-600 text-white min-h-[500px] rounded-lg shadow-lg overflow-auto">
            <header className="bg-teal-700 p-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Vista Tableta</h1>
              <nav className="flex space-x-2">
                {['Inicio', 'Descubrir', 'Biblioteca', 'Ajustes'].map((item) => (
                  <button
                    key={item}
                    onClick={() => alert(`${item} clicked`)}
                    className="text-white px-2 py-1 rounded hover:bg-teal-800 transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </header>
            <main className="p-4 grid grid-cols-2 gap-4 overflow-y-auto">
              <section className="bg-white bg-opacity-20 p-3 rounded-lg col-span-2 animate-fade-in">
                <h2 className="text-lg font-semibold mb-2">Contenido Destacado</h2>
                <p>Explora nuestra selección de contenido optimizado para tabletas.</p>
              </section>
              <section className="bg-white bg-opacity-20 p-3 rounded-lg animate-slide-in">
                <h2 className="text-lg font-semibold mb-2">Actividad Reciente</h2>
                <ul className="list-disc list-inside">
                  <li>Actualizaste tu perfil</li>
                  <li>Completaste 2 lecciones</li>
                  <li>Ganaste una nueva insignia</li>
                </ul>
              </section>
              <section className="bg-white bg-opacity-20 p-3 rounded-lg animate-slide-in">
                <h2 className="text-lg font-semibold mb-2">Recomendaciones</h2>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-teal-700 h-20 rounded-md animate-pulse"></div>
                  ))}
                </div>
              </section>
            </main>
          </div>
        );
      case 'Escritorio':
        return (
          <div className="bg-gradient-to-br from-teal-400 to-teal-600 text-white min-h-[600px] rounded-lg shadow-lg overflow-auto">
            <header className="bg-teal-700 p-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Panel de Control</h1>
              <nav className="flex space-x-2">
                {['Inicio', 'Análisis', 'Proyectos', 'Equipo', 'Ajustes'].map((item) => (
                  <button
                    key={item}
                    onClick={() => alert(`${item} clicked`)}
                    className="text-white px-2 py-1 rounded hover:bg-teal-800 transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </header>
            <main className="p-4 grid grid-cols-2 gap-4 overflow-y-auto">
              <section className="bg-white bg-opacity-20 p-3 rounded-lg col-span-2 row-span-2 animate-fade-in">
                <h2 className="text-lg font-semibold mb-4">Resumen del Proyecto</h2>
                <div className="grid grid-cols-2 gap-2">
                  {['Tareas', 'Cronograma', 'Recursos', 'Presupuesto'].map((item) => (
                    <div key={item} className="bg-teal-700 p-3 rounded-lg">
                      <h3 className="font-semibold mb-2">{item}</h3>
                      <div className="h-24 bg-teal-600 rounded-md animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="bg-white bg-opacity-20 p-3 rounded-lg animate-slide-in">
                <h2 className="text-lg font-semibold mb-2">Actividad del Equipo</h2>
                <ul className="space-y-2">
                  {['Ana subió un archivo', 'Carlos completó una tarea', 'Elena inició un nuevo proyecto'].map((activity, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-teal-300 rounded-full mr-2"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="bg-white bg-opacity-20 p-3 rounded-lg animate-slide-in">
                <h2 className="text-lg font-semibold mb-2">Próximas Fechas Límite</h2>
                <ul className="space-y-2">
                  {['Proyecto A: 3 días', 'Reunión: Mañana', 'Informe: Próxima semana'].map((deadline, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {deadline}
                    </li>
                  ))}
                </ul>
              </section>
            </main>
          </div>
        );
      default:
        return <div className="p-4 text-center">Por favor, selecciona un dispositivo para ver el contenido.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl w-full">
        {isMobileOrTablet && (
          <div className="bg-red-600 text-white text-center p-4 rounded-lg mb-4">
            <strong>¡Atención!</strong> Para una mejor experiencia, visualiza este contenido en una PC/ORDENADOR.
          </div>
        )}
        <div className="flex border-b border-gray-200">
          {screens.map((screen) => (
            <button
              key={screen.name}
              onClick={() => setActiveScreen(screen)}
              className={`px-4 py-2 font-medium text-sm focus:outline-none transition-colors duration-200 ${
                activeScreen.name === screen.name
                  ? 'bg-teal-600 text-white'
                  : 'text-gray-600 hover:text-teal-600'
              }`}
            >
              {screen.name}
            </button>
          ))}
        </div>
        <div className="p-4 flex justify-center">
          <div className={`${activeScreen.class} max-w-full transition-all duration-300 ease-in-out`}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
