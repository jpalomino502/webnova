import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <section id="hero" ref={ref} className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <h1>WebNova</h1>
        <p>
          Soluciones tecnológicas para tu negocio. Escuchamos y creamos
          estrategias específicas para el entorno empresarial.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
