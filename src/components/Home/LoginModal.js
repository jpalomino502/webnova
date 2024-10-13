import React from 'react';
import { motion } from 'framer-motion';
import login from '../../assets/login.png';

const LoginModal = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-[#141414] bg-opacity-70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        className="flex flex-col md:flex-row bg-[#141414] rounded-2xl shadow-lg overflow-hidden max-w-md md:max-w-2xl md:h-[500px] shadow-orange-500/50"
        style={{
          boxShadow: '0 0 15px rgba(247, 74, 31, 0.6), 0 0 30px rgba(247, 74, 31, 0.3)',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
      >
        <div className="hidden md:flex md:w-1/2 items-center justify-center rounded-l-2xl overflow-hidden">
          <img
            src={login}
            alt="Login"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1 p-8 flex flex-col justify-center items-center">
          <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-[#f74a1f] mb-6 text-center">
            Iniciar Sesión
          </h2>
          <form className="w-full">
            <div className="mb-4">
              <label htmlFor="username" className="block text-white mb-1 text-lg">
                Usuario
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 rounded bg-[#1a1a1a] text-white border border-[#444] focus:outline-none focus:ring focus:ring-[#f74a1f]"
                placeholder="Ingrese su usuario"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-white mb-1 text-lg">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 rounded bg-[#1a1a1a] text-white border border-[#444] focus:outline-none focus:ring focus:ring-[#f74a1f]"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f74a1f] text-white rounded py-2 transition-colors duration-300 hover:bg-[#e43e1f] text-lg"
            >
              Iniciar Sesión
            </button>
          </form>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-2xl"
            aria-label="Cerrar modal"
          >
            &times;
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginModal;
