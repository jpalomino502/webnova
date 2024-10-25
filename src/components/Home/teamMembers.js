import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import davidChia from "../../assets/Team/david_chia.webp";
import mariaHerrera from "../../assets/Team/maria_herrera.webp";
import josephPalomino from "../../assets/Team/joseph_palomino.webp";
import leonardoWalted from "../../assets/Team/leonardo_walted.webp";
import gabrielLozada from "../../assets/Team/gabriel_lozada.webp";
import damianMorales from "../../assets/Team/damian_morales.webp";
import asrleyRodriguez from "../../assets/Team/asrley_rodriguez.webp";
import valentinaGarcia from "../../assets/Team/valentina_garcia.webp";

const teamMembers = [
  {
    name: "David Chía",
    role: "Socio Fundador Desarrollador Web",
    career: "Ingeniería de Sistemas",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: davidChia,
  },
  {
    name: "María Herrera",
    role: "Desarrolladora Frontend",
    career: "Ingeniería de Sistemas",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: mariaHerrera,
  },
  {
    name: "Joseph Palomino",
    role: "CEO y Desarrollador Full Stack",
    career: "Ingeniería de Sistemas",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: josephPalomino,
  },
  {
    name: "Leonardo Walted",
    role: "Desarrollador Web",
    career: "Ingeniería de Sistemas",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: leonardoWalted,
  },
  {
    name: "Gabriel Lozada",
    role: "Contador Público",
    career: "Contaduría",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: gabrielLozada,
  },
  {
    name: "Damián Morales",
    role: "Especialista en Innovación",
    career: "Ingeniería Electrónica",
    university: "Universidad Industrial de Santander (UIS)",
    image: damianMorales,
  },
  {
    name: "Asrley Rodríguez",
    role: "Administrador",
    career: "Administración de Empresas Dual",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: asrleyRodriguez,
  },
  {
    name: "Valentina García",
    role: "Analista de Innovación",
    career: "Ingeniería Biomédica",
    university: "Universidad Autónoma de Bucaramanga (UNAB)",
    image: valentinaGarcia,
  },
];

const Member = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-[#cdcdd0] text-[#141414] font-sans"
      ref={ref}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#f74a1f] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 bg-[#141414] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-3/4 w-1/4 h-1/4 bg-[#f74a1f] opacity-5 transform rotate-45 blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 py-16">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative inline-block">
            Nuestro Equipo
            <span className="absolute -inset-1 bg-[#f74a1f] opacity-20 blur-lg"></span>
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-xl leading-relaxed mb-12 px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          En WebNova, nos especializamos en brindar soluciones tecnológicas
          innovadoras. Nuestro equipo multidisciplinario trabaja con pasión y
          compromiso para crear proyectos que transformen el futuro digital.
        </motion.p>

        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="px-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-[#141414] text-[#cdcdd0] p-8 rounded-lg transition-transform duration-300 group relative overflow-hidden h-96">
                <img
                  src={member.image}
                  alt={`Imagen de ${member.name}`}
                  loading="lazy"
                  width="128"
                  height="128"
                  className="rounded-full w-32 h-32 mb-4 object-cover mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-center">{member.role}</p>
                <p className="text-sm text-center italic">{member.career}</p>
                <p className="text-sm text-center italic">
                  {member.university}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default Member;
