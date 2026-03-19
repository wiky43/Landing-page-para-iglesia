import { Clock, Calendar, Users, Heart } from "lucide-react";

export function Schedule() {
  const schedules = [
    {
      icon: Calendar,
      title: "Culto Dominical",
      time: "Domingo 07:00 AM - 10:00 AM - 12:00 PM",
      description: "Misas todos los domingos en la Parroquia",
    },
    {
      icon: Users,
      title: "Estudio Bíblico",
      time: "Miércoles 7:00 PM - 8:30 PM",
      description: "Estudio profundo de las Escrituras y compañerismo",
    },
    {
      icon: Heart,
      title: "Grupo de Jóvenes Juhma",
      time: "Sábados 5:00 PM - 7:00 PM",
      description: "Encuentro para jóvenes con actividades y enseñanza en la Parroquia",
    },
    {
      icon: Clock,
      title: "Oración Matutina",
      time: "Martes y Jueves 6:00 AM",
      description: "Tiempo de oración comunitaria para empezar el día",
    },
  ];

  return (
    <section id="horarios" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl md:text-5xl">Nuestros Horarios</h2>
          <p className="text-xl text-gray-600">
            Te esperamos en nuestras reuniones semanales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {schedules.map((schedule, index) => {
            const Icon = schedule.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-2xl">{schedule.title}</h3>
                    <p className="mb-2 text-primary">{schedule.time}</p>
                    <p className="text-muted-foreground">{schedule.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
