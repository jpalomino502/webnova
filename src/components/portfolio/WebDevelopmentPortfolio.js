import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ShoppingCart from './WebDevelopmentPortfolio/ShoppingCart';
import ContentManagementSystem from './WebDevelopmentPortfolio/ContentManagementSystem';
import ContactForm from './WebDevelopmentPortfolio/ContactManagementSystem';

const WebDevelopmentPortfolio = () => {
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
    <div className="relative bg-[#cdcdd0] min-h-screen text-[#141414] font-sans overflow-hidden">
      {/* Luces de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#f74a1f] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-[#141414] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-3/4 w-1/4 h-1/4 bg-[#f74a1f] opacity-5 transform rotate-45 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-8 py-16" ref={ref}>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-center relative">
          <span className="relative inline-block">
            Desarrollo Web Personalizado
            <span className="absolute -inset-1 bg-[#f74a1f] opacity-30 blur-lg"></span>
          </span>
        </h2>
        <p className="text-xl leading-relaxed mb-12 text-center max-w-2xl mx-auto">
          Soluciones web a medida para satisfacer las necesidades únicas de tu negocio.
        </p>

        <section className="flex flex-col md:flex-row items-center py-16">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center overflow-hidden max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} 
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-y-auto max-h-[600px] w-full">
              <ShoppingCart />
            </div>
          </motion.div>
          <div className="md:w-1/2 p-4 md:px-8 max-h-[600px] overflow-hidden">
            <h4 className="text-2xl font-semibold mb-2">Tu Tienda en Línea Ideal</h4>
            <p className="text-lg mb-4">
              Imagina un carrito de compras que no solo muestra productos, ¡sino que transforma la experiencia de compra! Este componente permite a los usuarios explorar, agregar y gestionar sus productos favoritos con facilidad. Ideal para ecommerce, donde cada clic cuenta en la conversión.
            </p>
            <p className="text-sm italic text-gray-500">
              Perfecto para cualquier negocio que busque maximizar su presencia online.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center py-16">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center overflow-hidden max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="overflow-y-auto max-h-[600px] w-full">
              <ContentManagementSystem />
            </div>
          </motion.div>
          <div className="md:w-1/2 p-4 md:px-8 max-h-[600px] overflow-hidden">
            <h4 className="text-2xl font-semibold mb-2">Gestiona Contenido con Estilo</h4>
            <p className="text-lg mb-4">
              Este sistema de gestión de contenido transforma cómo se crean y distribuyen las historias. Con una interfaz intuitiva, permite a los usuarios crear, editar y visualizar artículos de manera dinámica y atractiva. Ideal para blogs, sitios informativos y más.
            </p>
            <p className="text-sm italic text-gray-500">
              Empodera a los creadores a contar sus historias de manera efectiva.
            </p>
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center py-16">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center overflow-hidden max-h-[600px]"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="overflow-y-auto max-h-[600px] w-full">
              <ContactForm />
            </div>
          </motion.div>
          <div className="md:w-1/2 p-4 md:px-8 max-h-[600px] overflow-hidden">
            <h4 className="text-2xl font-semibold mb-2">Conéctate con tus Clientes</h4>
            <p className="text-lg mb-4">
              Este formulario de contacto no solo recoge datos; crea conexiones. Permite a los usuarios enviar mensajes personalizados y obtener respuestas rápidas, fomentando la interacción y la confianza. ¡Perfecto para fortalecer la relación con tus clientes!
            </p>
            <p className="text-sm italic text-gray-500">
              La comunicación efectiva es clave para cualquier negocio exitoso.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopmentPortfolio;
