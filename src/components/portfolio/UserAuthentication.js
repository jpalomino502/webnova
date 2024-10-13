import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ExampleComponent from './UserAuthentication/login'; // Cambié el nombre a algo más general

const UserAuthentication = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Detener la observación después de la primera intersección
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
        observer.unobserve(currentRef); // Limpiar el observador
      }
    };
  }, []);

  return (
    <div className="relative bg-[#1a1a1a] min-h-screen text-[#ffffff] font-sans overflow-hidden">
      <div className="container mx-auto px-8 py-24" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="relative">
            Autenticación de Usuarios
            <span className="absolute -inset-1 bg-[#f74a1f] opacity-20 blur-xl"></span>
          </span>
        </motion.h2>

        <motion.p 
          className="text-center text-lg mb-8 px-8"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} 
          transition={{ duration: 0.5 }}
        >
          Asegura el acceso a tu aplicación mediante un sistema de autenticación confiable.
        </motion.p>

        <section className="flex flex-col md:flex-row items-center py-16">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} 
            transition={{ duration: 0.5 }}
          >
            <ExampleComponent />
          </motion.div>

          <div className="md:w-1/2 p-4 md:px-8 flex flex-col">
            <h4 className="text-2xl font-semibold mb-3">La Seguridad es Prioritaria</h4>
            <p className="text-lg mb-4">
              Implementamos medidas de seguridad robustas para proteger la información de los usuarios.
            </p>
            <p className="text-sm italic text-gray-400">
              Ideal para aplicaciones que requieren autenticación segura y confiable.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserAuthentication;
