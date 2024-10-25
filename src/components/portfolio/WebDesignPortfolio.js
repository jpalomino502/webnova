import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ResponsiveDesignExample from './WebDesignPortfolio/ResponsiveDesignExample';

const WebDesignPortfolio = () => {
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
      <div className="container mx-auto px-8 py-24" ref={ref}>
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="relative">
            Diseño Web Responsive
            <span className="absolute -inset-1 bg-[#f74a1f] opacity-20 blur-xl"></span>
          </span>
        </motion.h2>
        <motion.p 
          className="text-center text-lg mb-8 px-8"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} 
          transition={{ duration: 0.5 }}
        >
          Creamos experiencias web que se adaptan a cualquier dispositivo, asegurando que cada usuario tenga una excelente experiencia.
        </motion.p>

        <section className="flex flex-col md:flex-row items-center py-16">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center overflow-hidden max-h-[700px] md:max-h-[800px]"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} 
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-y-auto max-h-[700px] md:max-h-[800px] w-full">
              <ResponsiveDesignExample />
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 p-4 md:px-8 flex flex-col max-h-[700px]"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-2xl font-semibold mb-3">La Experiencia del Usuario es Clave</h4>
            <p className="text-lg mb-4">
              Nuestras soluciones de diseño web son responsivas y atractivas, garantizando que tu sitio web funcione perfectamente en cualquier dispositivo.
            </p>
            <p className="text-sm italic text-gray-400">
              Ideal para negocios que buscan destacar en el mundo digital.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default WebDesignPortfolio;
