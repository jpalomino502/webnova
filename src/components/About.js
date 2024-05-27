import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faCheckCircle,
  faUsers,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/About.module.css";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="about"
      className={styles.about}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      <h2>Sobre Nosotros</h2>
      <p>
        En WebNova, somos una empresa emergente con sede en Bucaramanga,
        Colombia, fundada por estudiantes talentosos de la Universidad Autónoma
        de Bucaramanga (UNAB). Nos especializamos en proporcionar soluciones
        tecnológicas personalizadas para empresas en búsqueda de alcanzar sus
        metas corporativas. Nuestro equipo se centra en comprender las
        necesidades específicas de cada cliente y ofrece soluciones a medida que
        impulsan el crecimiento empresarial.
      </p>
      <h3>Misión</h3>
      <p>
        Nuestra misión es impulsar la transformación digital de las empresas
        mediante la implementación de soluciones tecnológicas. Nos enfocamos en
        ofrecer herramientas que permitan a nuestros clientes alcanzar sus
        objetivos de manera eficiente y segura.
      </p>
      <h3>Nuestros Valores</h3>
      <ul>
        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <strong>Innovación Constante:</strong> Buscamos siempre estar a la
            vanguardia de la tecnología para ofrecer las soluciones más
            eficientes y modernas.
          </div>
        </li>
        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <strong>Compromiso con la Calidad:</strong> Nos esforzamos por
            entregar productos y servicios de alta calidad que cumplan con los
            más altos estándares.
          </div>
        </li>
        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faUsers} className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <strong>Colaboración y Empatía:</strong> Trabajamos estrechamente
            con nuestros clientes, escuchando sus necesidades y preocupaciones
            para proporcionar soluciones verdaderamente efectivas.
          </div>
        </li>
        <li>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faGraduationCap} className={styles.icon} />
          </div>
          <div className={styles.textContainer}>
            <strong>Aprendizaje Continuo:</strong> Estamos comprometidos con el
            desarrollo profesional y personal de nuestro equipo, asegurando que
            siempre estén equipados con las últimas habilidades y conocimientos.
          </div>
        </li>
      </ul>
    </motion.section>
  );
};

export default About;
