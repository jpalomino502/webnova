import React, { useRef, useEffect, useState } from 'react';
import { Code, Zap, Globe, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
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
    <div className="relative bg-[#cdcdd0] text-[#141414] font-sans overflow-hidden flex justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#f74a1f] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-[#141414] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-3/4 w-1/4 h-1/4 bg-[#f74a1f] opacity-5 transform rotate-45 blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-16" ref={ref}>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-center">
          <span className="relative inline-block">
            Conoce a WebNova
            <span className="absolute -inset-1 bg-[#f74a1f] opacity-20 blur-lg"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed">
            En WebNova, una startup innovadora en Bucaramanga, reunimos a estudiantes talentosos. Ofrecemos soluciones tecnológicas personalizadas que impulsan a las empresas. Nuestra pasión por la innovación nos permite crear soluciones digitales únicas y escalables, combinando diversas disciplinas para brindar una visión integral en cada proyecto.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Code, title: "Código Vanguardista", description: "Liderando la transformación digital con tecnología de punta" },
              { icon: Zap, title: "Velocidad Imbatible", description: "Soluciones optimizadas para un rendimiento excepcional" },
              { icon: Globe, title: "Conexión Global", description: "Desarrollando experiencias digitales sin límites geográficos" },
              { icon: Rocket, title: "Preparados para el Futuro", description: "Anticipándonos a las tendencias web emergentes" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-[#141414] text-[#cdcdd0] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }} 
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f74a1f] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <item.icon className="w-12 h-12 mb-4 text-[#f74a1f] group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
