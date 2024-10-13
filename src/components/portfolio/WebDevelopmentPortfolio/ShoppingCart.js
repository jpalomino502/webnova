import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { id: 1, name: 'lorem 1', price: 29.99 },
  { id: 2, name: 'lorem 2', price: 39.99 },
  { id: 3, name: 'lorem 3', price: 49.99 },
  { id: 4, name: 'lorem 4', price: 19.99 },
];

export default function Component() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [notification, setNotification] = useState(null);
  const [paymentProcessed, setPaymentProcessed] = useState(false); // Nuevo estado

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setNotification(`${product.name} añadido al carrito`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item))
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const handlePayment = () => {
    // Procesar pago (aquí puedes agregar lógica real de pago)
    setPaymentProcessed(true);
    setCart([]); // Limpiar el carrito después del pago
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tienda Electrónica</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full transition duration-300 flex items-center"
          onClick={() => setShowCart(!showCart)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 md:mx-8"> {/* Ajustado aquí */}
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-full h-36 bg-white flex items-center justify-center">
              <span className="text-gray-800 font-bold">{product.name}</span>
            </div>
            <div className="p-2">
              <h2 className="text-lg font-semibold mb-1 truncate">{product.name}</h2>
              <p className="text-gray-400 mb-1">${product.price.toFixed(2)}</p>
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition duration-300"
                onClick={() => addToCart(product)}
              >
                Añadir al Carrito
              </button>
            </div>
          </motion.div>
        ))}
      </main>

      <AnimatePresence>
        {showCart && (
          <motion.div
            className="fixed inset-y-0 right-0 w-full sm:w-96 bg-gray-900 shadow-lg p-4 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-600"
              onClick={() => setShowCart(false)} // Botón para cerrar el carrito
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-3">Carrito de Compras</h2>
            {cart.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <>
                <ul className="mb-3 space-y-3">
                  {cart.map((item) => (
                    <motion.li
                      key={item.id}
                      className="flex items-center justify-between bg-gray-800 p-2 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold truncate">{item.name}</h3>
                        <p className="text-gray-400">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center">
                        <button
                          className="bg-gray-700 text-white px-2 py-1 rounded-l"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="bg-gray-700 text-white px-4 py-1">{item.quantity}</span>
                        <button
                          className="bg-gray-700 text-white px-2 py-1 rounded-r"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                        <button
                          className="ml-2 text-red-500 hover:text-red-600"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10h6M6 6h12"
                            />
                          </svg>
                        </button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <div className="text-lg font-bold mb-3">Total: ${total}</div>
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded transition duration-300"
                  onClick={handlePayment} // Procesar pago
                >
                  Proceder al Pago
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {notification && (
          <motion.div
            className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {paymentProcessed && ( // Ventana modal de pago procesado
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="bg-white text-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold">Pago Procesado</h2>
              <p>Tu pago ha sido procesado exitosamente.</p>
              <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                onClick={() => setPaymentProcessed(false)} // Cerrar ventana modal
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
