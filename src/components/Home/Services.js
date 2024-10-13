import React, { useRef, useState } from 'react';
import { Code, Globe, Smartphone, Zap, Shield, Search } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: Code,
      title: "Desarrollo Web Personalizado",
      description: "Soluciones web a medida para satisfacer las necesidades únicas de tu negocio.",
      examples: ["Plataformas de comercio electrónico", "Sistemas de gestión de contenido", "Aplicaciones web"]
    },
    {
      icon: Globe,
      title: "Diseño Web Responsive",
      description: "Crea sitios web que se vean geniales en todos los dispositivos y tamaños de pantalla.",
      examples: ["Diseños móviles primero", "Diseños adaptativos", "Compatibilidad entre navegadores"]
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Web Progresivas",
      description: "Desarrolla aplicaciones web rápidas, confiables y atractivas que funcionen sin conexión.",
      examples: ["Aplicaciones web capaces de trabajar sin conexión", "Notificaciones push", "Instalación en la pantalla de inicio"]
    },
    {
      icon: Zap,
      title: "Optimización del Rendimiento",
      description: "Mejora la velocidad y eficiencia de tu sitio web para una mejor experiencia del usuario.",
      examples: ["Minificación de código", "Optimización de imágenes", "Estrategias de caché"]
    },
    {
      icon: Shield,
      title: "Seguridad Web",
      description: "Implementa medidas de seguridad sólidas para proteger tus activos web.",
      examples: ["Implementación de SSL", "Auditorías de seguridad", "Protección contra DDoS"]
    },
    {
      icon: Search,
      title: "Optimización SEO",
      description: "Mejora la visibilidad de tu sitio web en los resultados de los motores de búsqueda.",
      examples: ["SEO en la página", "SEO técnico", "Optimización de contenido"]
    }
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const handleCardClick = (index) => {
    setActiveService(index === activeService ? null : index);
  };

  return (
    <section className="bg-[#141414] text-[#cdcdd0] py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="relative">
            Nuestros Servicios Web
            <span className="absolute -inset-1 bg-[#f74a1f] opacity-20 blur-xl"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-[#1a1a1a] rounded-lg p-6 relative overflow-hidden transition-all duration-300 hover:scale-105 group cursor-pointer ${activeService === index ? "border border-[#f74a1f]" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleCardClick(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f74a1f] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <service.icon className="w-12 h-12 text-[#f74a1f] mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-[#a0a0a0] mb-4">{service.description}</p>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={activeService === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <ul className="list-disc list-inside text-sm text-[#cdcdd0] mt-4">
                  {service.examples.map((example, i) => (
                    <li key={i} className="mb-1">{example}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
