import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logonova[black].svg';

const Footer = () => {
  return (
    <footer className="relative bg-[#cdcdd0] text-[#141414] py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#f74a1f] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-[#141414] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-3/4 w-1/4 h-1/4 bg-[#f74a1f] opacity-5 transform rotate-45 blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="flex justify-start mb-6 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={logo} 
            alt="Logo de WebNova" 
            width="128"
            height="128"
            className="w-32 h-auto" 
            aria-label="Ir al inicio de la página de WebNova"
          />
        </motion.div>

        <div className="flex flex-col items-center mb-8 md:mb-0">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Contáctanos</h3>
          <p className="text-xl leading-relaxed mb-8 text-center">
            ¡Conéctate con nosotros a través de nuestras redes sociales!
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://co.linkedin.com/company/webnova-co"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Visita nuestro perfil en LinkedIn"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Linkedin className="w-8 h-8 text-[#141414] group-hover:text-[#f74a1f] transition-colors duration-300" />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://www.instagram.com/teamwebnova/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label="Visita nuestro perfil en Instagram"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Instagram className="w-8 h-8 text-[#141414] group-hover:text-[#f74a1f] transition-colors duration-300" />
            <span className="sr-only">Instagram</span>
          </motion.a>
          <motion.a
            href="mailto:webnova@webnova.com.co"
            className="group relative"
            aria-label="Envíanos un correo electrónico"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Mail className="w-8 h-8 text-[#141414] group-hover:text-[#f74a1f] transition-colors duration-300" />
            <span className="sr-only">Correo Electrónico</span>
          </motion.a>
        </div>
      </div>

      <p className="text-sm mt-8 text-center">&copy; 2024 WebNova. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
