import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "Nombre es requerido";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Correo electrónico es requerido";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo electrónico no es válido";
      valid = false;
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "Mensaje es requerido";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Aquí puedes agregar la lógica para enviar el formulario
    }
  };

  return (
    <motion.section
      id="contact"
      className={styles.contact}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <h2>Contáctanos</h2>
      <p>Para más información sobre nuestros servicios, contáctanos:</p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
          <motion.input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            required
          />
        </div>
        {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <motion.input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            required
          />
        </div>
        {errors.email && <span className={styles.error}>{errors.email}</span>}
        <div className={styles.inputGroup}>
          <FontAwesomeIcon icon={faComment} className={styles.icon} />
          <motion.textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            required
          ></motion.textarea>
        </div>
        {errors.mensaje && (
          <span className={styles.error}>{errors.mensaje}</span>
        )}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Enviar
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
