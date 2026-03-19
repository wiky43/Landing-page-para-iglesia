import { Church, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://res.cloudinary.com/dyxzfofp8/image/upload/v1773877577/Logo_Instagram_2_zdhn37.png"
                alt="Logo Parroquia Asunción"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl">Asunción de Nuestra Señora</span>
            </div>
            <p className="text-gray-400">
              Una comunidad de fe, esperanza y amor, comprometida con servir a
              Dios y a nuestra comunidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#historia"
                  className="hover:text-white transition-colors"
                >
                  Historia
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@parroquiaasuncionsde/live"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Youtube en Vivo
                </a>
              </li>
              <li>
                <a
                  href="#horarios"
                  className="hover:text-white transition-colors"
                >
                  Horarios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/asuncionnuestrasenorasde/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/parroquia_asuncion_sde/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@parroquiaasuncionsde"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Iglesia de Fe. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}