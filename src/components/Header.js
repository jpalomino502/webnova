import React from "react";
import { Link } from "react-scroll";
import styles from "../styles/Header.module.css";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={scrollToTop}>
        <img src={logo} alt="WebNova Logo" className={styles.logoImage} />
        WebNova
      </div>
      <nav className={styles.nav}>
        <Link to="about" smooth={true} duration={1000} offset={-150}>
          Nosotros
        </Link>
        <Link to="services" smooth={true} duration={1000} offset={-80}>
          Servicios
        </Link>
        <Link to="contact" smooth={true} duration={1000} offset={-80}>
          Contáctanos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
