import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, ThumbsUp, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const reasons = [
    {
      icon: ShieldCheck,
      title: "Calidad Garantizada",
      description: "Nos aseguramos de ofrecer soluciones de alta calidad que cumplen con tus expectativas.",
    },
    {
      icon: Star,
      title: "Innovación Constante",
      description: "Estamos siempre a la vanguardia de las últimas tecnologías y tendencias del mercado.",
    },
    {
      icon: ThumbsUp,
      title: "Clientes Satisfechos",
      description: "La satisfacción del cliente es nuestra prioridad, y nuestros resultados lo demuestran.",
    },
    {
      icon: Heart,
      title: "Soporte Dedicado",
      description: "Nuestro equipo está siempre disponible para brindarte la asistencia que necesites.",
    },
  ];

  return (
    <section ref={sectionRef} className="relative lg:h-screen py-16 lg:py-0 mb-16 lg:mb-0">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#f74a1f 1px, transparent 1px), radial-gradient(#cdcdd0 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 100px 100px',
          backgroundPosition: '0 0, 25px 25px',
        }}
      />

      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="relative">
            ¿Por qué Elegirnos?
            <span className="absolute -inset-1 bg-[#f74a1f] opacity-20 blur-xl"></span>
          </span>
        </motion.h2>

        <motion.p 
          className="text-center text-lg mb-8 px-8"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} 
          transition={{ duration: 0.5 }}
        >
          En WebNova, entendemos que elegir un socio tecnológico es crucial. Por eso, te ofrecemos soluciones personalizadas y de calidad que se adaptan a tus necesidades.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] rounded-lg p-6 relative overflow-hidden transition-all duration-300 hover:scale-105 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f74a1f] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <reason.icon className="w-12 h-12 text-[#f74a1f] mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-[#a0a0a0]">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
