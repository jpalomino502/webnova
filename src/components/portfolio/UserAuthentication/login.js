import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AuthComponent = () => {
  const [view, setView] = useState('login');
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const exampleUser = {
    email: "usuario@ejemplo.com",
    password: "contraseña123",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === exampleUser.email && password === exampleUser.password) {
      setModalMessage("Inicio de sesión exitoso!");
    } else {
      setModalMessage("Credenciales incorrectas. Intenta de nuevo.");
    }
    setShowModal(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setModalMessage("Registro exitoso. Ahora puedes iniciar sesión.");
    setShowModal(true);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setModalMessage(`Se ha enviado un correo para recuperar la contraseña a ${email}.`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative bg-[#1a1a1a] min-h-screen text-[#ffffff] font-sans flex flex-col items-center justify-center py-12">
      <motion.div 
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          {view === 'login' && "Iniciar Sesión"}
          {view === 'register' && "Registro de Usuario"}
          {view === 'forgotPassword' && "Olvidé mi Contraseña"}
        </h2>

        {view === 'login' && (
          <p className="text-center text-sm mb-4 text-gray-400">
            Usuario de prueba: <strong>{exampleUser.email}</strong><br />
            Contraseña: <strong>{exampleUser.password}</strong>
          </p>
        )}

        {view === 'login' && (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-2">Correo Electrónico</label>
              <input type="email" id="email" required className="w-full p-2 rounded bg-gray-700 text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm mb-2">Contraseña</label>
              <input type="password" id="password" required className="w-full p-2 rounded bg-gray-700 text-white" />
            </div>
            <button type="submit" className="w-full py-2 bg-[#f74a1f] text-white rounded hover:bg-[#e63927] transition duration-200">
              Iniciar Sesión
            </button>
            <p className="text-sm mt-4 text-center cursor-pointer" onClick={() => setView('forgotPassword')}>¿Olvidaste tu contraseña?</p>
            <p className="text-sm mt-2 text-center cursor-pointer" onClick={() => setView('register')}>¿No tienes una cuenta? Regístrate</p>
          </form>
        )}

        {view === 'register' && (
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-2">Correo Electrónico</label>
              <input type="email" id="email" required className="w-full p-2 rounded bg-gray-700 text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm mb-2">Contraseña</label>
              <input type="password" id="password" required className="w-full p-2 rounded bg-gray-700 text-white" />
            </div>
            <button type="submit" className="w-full py-2 bg-[#f74a1f] text-white rounded hover:bg-[#e63927] transition duration-200">
              Registrarse
            </button>
            <p className="text-sm mt-4 text-center cursor-pointer" onClick={() => setView('login')}>¿Ya tienes una cuenta? Inicia sesión</p>
          </form>
        )}

        {view === 'forgotPassword' && (
          <form onSubmit={handleForgotPassword}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-2">Correo Electrónico</label>
              <input type="email" id="email" required className="w-full p-2 rounded bg-gray-700 text-white" />
            </div>
            <button type="submit" className="w-full py-2 bg-[#f74a1f] text-white rounded hover:bg-[#e63927] transition duration-200">
              Enviar Correo
            </button>
            <p className="text-sm mt-4 text-center cursor-pointer" onClick={() => setView('login')}>Volver a Iniciar Sesión</p>
          </form>
        )}
      </motion.div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div 
            className="bg-gray-800 rounded-lg p-6 w-11/12 max-w-md"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white text-center mb-4">{modalMessage}</h3>
            <button onClick={closeModal} className="w-full py-2 bg-[#f74a1f] text-white rounded hover:bg-[#e63927] transition duration-200">
              Cerrar
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
