import { Users, BookOpen, Music, HeartHandshake } from "lucide-react";

export function Ministries() {
  const ministries = [
    {
      icon: Users,
      title: "Jóvenes",
      description: "Espacio dinámico para buscar a Dios, con música, amistad y palabra aplicativa a sus vidas.",
      schedule: "Sábados, 7:00 PM"
    },
    {
      icon: BookOpen,
      title: "Escuela Dominical",
      description: "Grupos por edades donde los niños aprenden principios bíblicos divirtiéndose.",
      schedule: "Domingos, 10:30 AM"
    },
    {
      icon: HeartHandshake,
      title: "Mujeres",
      description: "Reuniones de apoyo y comunión para edificar la vida y familia.",
      schedule: "Jueves, 6:00 PM"
    },
    {
      icon: Music,
      title: "Ministerio de Alabanza",
      description: "Si tienes talentos musicales, únete a nuestro equipo para dirigir la adoración.",
      schedule: "Lunes y Miércoles, 7:30 PM (Práctica)"
    }
  ];

  return (
    <section id="ministerios" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">Nuestros Ministerios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hay un lugar especial para cada miembro de la familia. Únete a nosotros y crece junto a la iglesia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 group">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{ministry.title}</h3>
                <p className="text-gray-600 mb-4">{ministry.description}</p>
                <div className="text-sm font-semibold text-primary border-t pt-4">
                  {ministry.schedule}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
