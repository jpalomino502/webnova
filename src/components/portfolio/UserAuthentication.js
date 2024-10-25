import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ExampleComponent from './UserAuthentication/login';

const UserAuthentication = () => {
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
    <div className="relative bg-[#1a1a1a] text-[#ffffff] font-sans overflow-hidden">
      <div className="container mx-auto px-8 py-12" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center relative"
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
          className="text-center text-lg mb-4 px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Asegura el acceso a tu aplicación mediante un sistema de autenticación confiable.
        </motion.p>

        <section className="flex flex-col md:flex-row items-center py-4">
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center overflow-hidden max-h-[700px] md:max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden w-full h-full">
              <ExampleComponent />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 p-4 md:px-8 flex flex-col"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-2xl font-semibold mb-2">La Seguridad es Prioritaria</h4>
            <p className="text-lg mb-2">
              Implementamos medidas de seguridad robustas para proteger la información de los usuarios.
            </p>
            <p className="text-sm italic text-gray-400">
              Ideal para aplicaciones que requieren autenticación segura y confiable.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default UserAuthentication;
