import { Baby, Users2, HandHeart, BookOpen, Music, Globe } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Baby,
      title: "Catequesis",
      description:
        "Formación en la fe para niños y jóvenes, preparándolos para los sacramentos de la Comunión y Confirmación.",
    },
    {
      icon: Users2,
      title: "Grupos de Células",
      description:
        "Pequeños grupos en hogares para estudiar la Biblia, orar juntos y fortalecer lazos de amistad y fe.",
    },
    {
      icon: HandHeart,
      title: "Servicio Social",
      description:
        "Programas de ayuda a la comunidad: banco de alimentos, visitas a hospitales y apoyo a familias necesitadas.",
    },
    {
      icon: BookOpen,
      title: "Escuela Bíblica",
      description:
        "Cursos y talleres para profundizar en el conocimiento de las Escrituras y crecer espiritualmente.",
    },
    {
      icon: Music,
      title: "Ministerio de Alabanza",
      description:
        "Equipo de música y canto que dirige la adoración en nuestros servicios y eventos especiales.",
    },
    {
      icon: Globe,
      title: "Misiones",
      description:
        "Compromiso con la evangelización local e internacional, apoyando misioneros y proyectos en diferentes países.",
    },
  ];

  return (
    <section id="servicios" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600">
            Ministerios y programas diseñados para servir a nuestra comunidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-lg border-2 border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Icon
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="mb-3 text-2xl">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            ¿Te gustaría participar en alguno de nuestros ministerios?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contacto");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
}
