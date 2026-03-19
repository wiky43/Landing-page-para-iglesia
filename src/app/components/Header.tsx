import { useState, useEffect } from "react";
import { Menu, X, Church } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLiveActive, setIsLiveActive] = useState(true); // Toggle to false when there's no live stream

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "historia", label: "Historia" },
    { id: "servicios", label: "Servicios" },
    { id: "horarios", label: "Horarios" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center gap-2"
          >
            <img 
              src="https://res.cloudinary.com/dyxzfofp8/image/upload/v1773877577/Logo_Instagram_2_zdhn37.png" 
              alt="Logo Parroquia Asunción" 
              className={`w-12 h-12 object-contain transition-opacity ${isScrolled ? "opacity-100" : "opacity-90"}`}
            />
            <span
              className={`text-xl ${isScrolled ? "text-gray-900" : "text-white"
                }`}
            >
              Asunción de Nuestra Señora
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:opacity-70 transition-opacity ${isScrolled ? "text-gray-900" : "text-white"
                  }`}
              >
                {item.label}
              </button>
            ))}
            {isLiveActive && (
              <button
                onClick={() => scrollToSection("transmision")}
                className="flex items-center gap-2 px-3 py-1 bg-red-600/10 text-red-600 rounded-full animate-pulse border border-red-600/20 hover:bg-red-600/20 transition-colors"
                aria-label="Ir a la transmisión en vivo"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-wider">En Vivo</span>
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? "text-gray-900" : "text-white"}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 bg-white">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-900 hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </button>
            ))}
            {isLiveActive && (
              <button
                onClick={() => scrollToSection("transmision")}
                className="flex w-full items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                <span className="font-bold uppercase">En Vivo Ahora</span>
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}