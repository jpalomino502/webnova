import React, { useState, useEffect } from 'react';
import { Code, Zap, Globe, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleButtonClick = () => {
    navigate('/portafolio');
  };

  return (
    <motion.div
      className="relative"
      style={{ height: '100vh' }}
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100vw' }}
      transition={{ type: 'spring', stiffness: 50, duration: 1 }}
    >
      <div
        className="absolute rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #f74a1f 0%, rgba(247, 74, 31, 0) 70%)',
          width: '40vw',
          height: '40vw',
          top: `${mousePosition.y / 10}px`,
          left: `${mousePosition.x / 10}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'top 0.5s ease-out, left 0.5s ease-out',
        }}
      />

      {[Code, Zap, Globe, Rocket].map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none"
          style={{
            top: `${20 + index * 20}%`,
            left: `${10 + index * 25}%`,
            zIndex: 0,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, delay: index * 0.2 }}
        >
          <Icon
            className="text-[#f74a1f] opacity-10"
            size={96}
            style={{ filter: 'drop-shadow(0 0 20px rgba(247, 74, 31, 0.7))' }}
          />
        </motion.div>
      ))}

      <motion.div
        className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, x: 100 }}
        transition={{ delay: 0.5, duration: 1, type: 'spring' }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-[#cdcdd0]">Innovando la</span>
          <br />
          <span className="text-[#f74a1f] relative">
            Frontera Digital
            <span className="absolute -inset-1 bg-[#f74a1f] opacity-20 blur-xl"></span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">
          Creando experiencias web revolucionarias que impulsan tu negocio hacia el futuro.
        </p>

        <button 
          onClick={handleButtonClick}
          className="group relative px-8 py-3 overflow-hidden rounded-full text-lg font-semibold text-[#141414] bg-[#f74a1f] transition-all duration-300 ease-out hover:text-[#141414]"
        >
          <span className="relative z-10">Explora Nuestro Universo</span>
          <span className="absolute inset-0 bg-[#cdcdd0] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out transform origin-left"></span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
