"use client"

import { useState, useRef, useEffect } from "react"
import Modal from "./modal"
import ChefSync from "../../assets/home/projets/chefsync.png"
import Ravenwear from "../../assets/home/projets/ravenwear.png"

const VercelButton = ({ text, onClick, variant = "primary" }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <button
      className={`relative px-4 py-2 text-sm overflow-hidden transition-all duration-300 rounded-md ${
        variant === "primary"
          ? "bg-white/10 text-white hover:bg-white/15"
          : "bg-transparent text-white/70 hover:text-white"
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="relative z-10 flex items-center">
        {text}
        <svg
          className={`ml-2 w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? "translate-x-0.5" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </button>
  )
}

const ProyectoCard = ({ proyecto, isLarge = false, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (isHovered && videoRef.current && !videoError && proyecto.video) {
      videoRef.current.play().catch((error) => {
        console.error("Error al reproducir el video:", error)
        setVideoError(true)
      })
    } else if (videoRef.current) {
      videoRef.current.pause()
      if (videoRef.current.currentTime) {
        videoRef.current.currentTime = 0
      }
    }
  }, [isHovered, videoError, proyecto.video])

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-white/10 transition-all duration-500 ${
        isLarge ? "md:col-span-2 row-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isHovered && proyecto.video && !videoError ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={proyecto.imagen || `/placeholder.svg?height=${isLarge ? 600 : 400}&width=${isLarge ? 800 : 600}`}
          alt={proyecto.titulo}
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      {proyecto.video && !videoError && (
        <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            src={proyecto.video}
            onError={() => setVideoError(true)}
          >
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      )}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent opacity-0 transition-opacity duration-700 ${
          isHovered ? "opacity-100" : ""
        }`}
      />
      <div
        className={`absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-700 ${
          isHovered ? "opacity-70" : "opacity-0"
        }`}
      />
      <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs bg-white/10 rounded-full text-white/70">
            {proyecto.tecnologias[0]}
          </span>
        </div>
        <h3 className={`text-xl ${isLarge ? "md:text-3xl" : "md:text-2xl"} mb-3 text-white`}>{proyecto.titulo}</h3>
        <p className="text-white/60 mb-6 text-sm md:text-base">{proyecto.descripcion}</p>
        {isLarge && (
          <div className="flex flex-wrap gap-2 mb-6">
            {proyecto.tecnologias.slice(1).map((tech, index) => (
              <span key={index} className="px-2 py-0.5 text-xs bg-white/5 rounded-md text-white/50">
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto pt-4">
          <VercelButton text="Ver detalles" onClick={() => onOpenModal(proyecto.titulo, proyecto.urlIframe)} />
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 ${
          isHovered ? "w-full" : "w-0"
        }`}
      />
    </div>
  )
}

function ProximamenteCard() {
  const handleSubscribeClick = () => {
    const whatsappUrl = "https://wa.me/message/4VLAEDVS3JPNN1";
    window.location.href = whatsappUrl;
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 transition-all duration-500">
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-transparent`} />
      <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl`} />
      <div className="relative z-10 flex flex-col h-full p-6 md:p-8">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs bg-white/10 rounded-full text-white/70">Próximamente</span>
        </div>
        <h3 className="text-xl md:text-2xl mb-3 text-white">Nuevo Proyecto</h3>
        <p className="text-white/60 mb-6 text-sm md:text-base">
          Estamos trabajando en algo nuevo. ¡Mantente atento para más información!
        </p>
        <div className="mt-auto pt-4">
          <VercelButton text="Suscríbete" onClick={handleSubscribeClick} />
        </div>
      </div>
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 w-full`}
      />
    </div>
  );
}

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({ title: "", url: "" })

  const proyectos = [
    {
      id: 1,
      titulo: "ChefSync",
      descripcion:
        "Optimiza tu negocio. Descubre cómo ChefSync puede mejorar la gestión de tu restaurante, bar o comercio con funcionalidades clave.",
      imagen: ChefSync,
      tecnologias: ["Next.js", "Firebase", "Node.js"],
      enlace: "/proyectos/chefsync",
      urlIframe: "https://chefsync.app",
      destacado: true,
    },
    {
      id: 2,
      titulo: "RavenWear",
      descripcion: "Tienda de ropa con diseño moderno y experiencia de compra optimizada.",
      imagen: Ravenwear,
      tecnologias: ["Next.js", "Node.js", "Tailwind CSS"],
      enlace: "#",
      urlIframe: "https://ravenwear.netlify.app",
      destacado: false,
    },
  ]

  const handleOpenModal = (title, url) => {
    setModalContent({ title, url })
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Nuestros Proyectos</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
            Soluciones digitales innovadoras diseñadas para transformar ideas en experiencias excepcionales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-auto">
          <ProyectoCard proyecto={proyectos[0]} isLarge={true} onOpenModal={handleOpenModal} />
          <div className="md:col-span-1">
            <ProyectoCard proyecto={proyectos[1]} onOpenModal={handleOpenModal} />
          </div>
          <div className="md:col-span-1 md:row-span-1">
            <ProximamenteCard />
          </div>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={handleCloseModal} url={modalContent.url} title={modalContent.title} />
    </div>
  )
}

