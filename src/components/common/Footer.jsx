import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="bg-black text-white py-16 px-8">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Mensaje principal */}
        <div className="space-y-5">
          <h3 className="text-sm tracking-wide">Innovando tu presencia digital</h3>
          <p className="text-white text-sm leading-relaxed">
            Creamos experiencias digitales impactantes para potenciar tu marca y hacer crecer tu negocio en línea.
          </p>
        </div>

        {/* Contacto */}
        <div className="space-y-5">
          <h3 className="text-sm tracking-wide">Contacto</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:webnova@webnova.com.co"
                className="text-white hover:opacity-80 transition-opacity duration-300 text-sm"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/message/4VLAEDVS3JPNN1"
                className="text-white hover:opacity-80 transition-opacity duration-300 text-sm"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="space-y-5">
          <h3 className="text-sm tracking-wide">Síguenos</h3>
          <ul className="space-y-3">
            {[
              { name: "LinkedIn", href: "https://co.linkedin.com/company/webnova-co" },
              { name: "Instagram", href: "https://www.instagram.com/webnova_co/" },
            ].map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  className="text-white hover:opacity-80 transition-opacity duration-300 text-sm"
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Línea divisoria y créditos */}
      <div
        className={`max-w-7xl mx-auto mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-white text-sm">© 2026 WebNova. Todos los derechos reservados.</p>
        <p className="text-white text-xs mt-3 md:mt-0">Desarrollado por WebNova</p>
      </div>
    </footer>
  );
}
