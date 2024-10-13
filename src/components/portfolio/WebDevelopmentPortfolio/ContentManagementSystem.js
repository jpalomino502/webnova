import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusCircle, Edit2, Trash2, X, Check, Search } from 'lucide-react';

export default function ContentManagementSystem() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  const addArticle = () => {
    if (title && content) {
      setArticles((prev) => [...prev, { title, content, createdAt: new Date() }]);
      resetForm();
    }
  };

  const editArticle = (index) => {
    setEditIndex(index);
    setTitle(articles[index].title);
    setContent(articles[index].content);
    setShowForm(true);
  };

  const updateArticle = () => {
    const updatedArticles = articles.map((article, index) =>
      index === editIndex ? { ...article, title, content } : article
    );
    setArticles(updatedArticles);
    resetForm();
  };

  const deleteArticle = (index) => {
    setArticles((prev) => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setEditIndex(-1);
    setShowForm(false);
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 p-4 sm:p-8">
      <motion.div
        className="max-w-full md:max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-4 sm:p-6 bg-gradient-to-r from-purple-600 to-indigo-600">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">Sistema de Gestión de Contenido</h1>
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
            <Search className="ml-4 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 px-4 outline-none text-sm"
            />
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <input
                  type="text"
                  placeholder="Título"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                />
                <textarea
                  placeholder="Contenido"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full mb-4 p-2 border rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm"
                />
                <div className="flex justify-end space-x-2">
                  <button
                    className="px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300 flex items-center text-sm"
                    onClick={resetForm}
                  >
                    <X size={18} className="mr-2" /> Cancelar
                  </button>
                  <button
                    className="px-3 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 flex items-center text-sm"
                    onClick={editIndex === -1 ? addArticle : updateArticle}
                  >
                    <Check size={18} className="mr-2" />
                    {editIndex === -1 ? 'Agregar' : 'Actualizar'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!showForm && (
            <motion.button
              className="mb-6 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 flex items-center text-sm"
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlusCircle size={18} className="mr-2" /> Nuevo Artículo
            </motion.button>
          )}

          <AnimatePresence>
            {filteredArticles.map((article, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-4 mb-4 shadow text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.content}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>Creado: {article.createdAt.toLocaleString()}</span>
                  <div className="space-x-2">
                    <button
                      className="text-blue-600 hover:text-blue-800 transition duration-300"
                      onClick={() => editArticle(index)}
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 transition duration-300"
                      onClick={() => deleteArticle(index)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredArticles.length === 0 && (
            <motion.p
              className="text-center text-gray-500 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No se encontraron artículos.
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
