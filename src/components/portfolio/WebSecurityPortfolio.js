import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SecurityAudit from './WebSecurityPortfolio/SecurityAudit';
import DataProtection from './WebSecurityPortfolio/DataProtection';

const WebSecurityPortfolio = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="relative bg-[#cdcdd0] text-[#141414] font-sans overflow-hidden">
      {/* Luces de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#f74a1f] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-[#141414] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-3/4 w-1/4 h-1/4 bg-[#f74a1f] opacity-5 transform rotate-45 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-8 py-16" ref={ref}>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-center relative">
          <span className="relative inline-block">
            Seguridad Web
            <span className="absolute -inset-1 bg-[#f74a1f] opacity-30 blur-lg"></span>
          </span>
        </h2>
        <p className="text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto">
          Proteger tu sitio web es nuestra prioridad. Soluciones integrales para un entorno seguro.
        </p>

        <section className="flex flex-col md:flex-row items-center py-16">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center overflow-hidden max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} 
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-y-auto max-h-[600px] w-full">
              <SecurityAudit />
            </div>
          </motion.div>
          <div className="md:w-1/2 p-4 md:px-8 max-h-[600px] overflow-hidden">
            <h4 className="text-2xl font-semibold mb-2">Auditoría de Seguridad</h4>
            <p className="text-lg mb-4">
              Realizamos auditorías exhaustivas para identificar vulnerabilidades y mejorar la postura de seguridad de tu sitio web. Nuestro enfoque proactivo asegura que estés siempre un paso adelante frente a posibles amenazas.
            </p>
            <p className="text-sm italic text-gray-500">
              La prevención es la clave para un entorno digital seguro.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center py-16">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center overflow-hidden max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="overflow-y-auto max-h-[600px] w-full">
              <DataProtection />
            </div>
          </motion.div>
          <div className="md:w-1/2 p-4 md:px-8 max-h-[600px] overflow-hidden">
            <h4 className="text-2xl font-semibold mb-2">Protección de Datos</h4>
            <p className="text-lg mb-4">
              Implementamos estrategias robustas para la protección de datos, asegurando que la información de tus usuarios esté siempre segura. Nuestra misión es garantizar la privacidad y la seguridad de los datos en todo momento.
            </p>
            <p className="text-sm italic text-gray-500">
              La seguridad de los datos es esencial para construir confianza.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebSecurityPortfolio;
