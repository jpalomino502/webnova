import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Services.module.css";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="services"
      className={styles.services}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <h2>Servicios</h2>
      <div className={styles.serviceList}>
        <motion.div
          className={styles.serviceItem}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faCode} className={styles.icon} />
          <h3>Desarrollo Web</h3>
          <p>Creación de sitios web personalizados y aplicaciones web.</p>
        </motion.div>
        <motion.div
          className={styles.serviceItem}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
          <h3>Desarrollo Móvil</h3>
          <p>Aplicaciones móviles nativas para Android y iOS.</p>
        </motion.div>
        <motion.div
          className={styles.serviceItem}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FontAwesomeIcon icon={faCloud} className={styles.icon} />
          <h3>Servicios en la Nube</h3>
          <p>
            Soluciones en la nube para mejorar la escalabilidad y seguridad.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
