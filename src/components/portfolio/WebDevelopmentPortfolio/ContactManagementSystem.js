import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Todos los campos son obligatorios.');
      return;
    }
    setError('');
    setIsLoading(true);

    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setSuccess(`Mensaje enviado por ${formData.name} con el email: ${formData.email}`);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">Contáctanos</h2>
        {error && <p className="text-red-500 mb-4 animate-pulse text-center">{error}</p>}
        {success && (
          <div className="bg-emerald-100 border-l-4 border-emerald-500 text-emerald-700 p-4 mb-6 rounded-r" role="alert">
            <p className="font-bold">Éxito!</p>
            <p>{success}</p>
          </div>
        )}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full h-10 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-600"
                placeholder="Nombre"
                required
              />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-600 peer-focus:text-sm">
                Nombre
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full h-10 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-600"
                placeholder="Email"
                required
              />
              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-600 peer-focus:text-sm">
                Email
              </label>
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="peer w-full h-10 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-600"
              placeholder="Asunto"
              required
            />
            <label htmlFor="subject" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-teal-600 peer-focus:text-sm">
              Asunto
            </label>
          </div>
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="peer w-full border-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-teal-600 rounded-md p-2 resize-none"
              placeholder="Mensaje"
              required
            ></textarea>
            <label htmlFor="message" className="absolute left-2 -top-3 bg-white px-1 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-teal-600 peer-focus:text-sm">
              Mensaje
            </label>
          </div>
        </div>
      </div>
      <div className="px-8 py-4 bg-gray-50 border-t border-gray-200">
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            'Enviar Mensaje'
          )}
        </button>
      </div>
    </form>
  );
}
