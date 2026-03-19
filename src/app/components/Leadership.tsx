import { Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Leadership() {
  const leaders = [
    {
      name: "Padre Juan Pérez",
      role: "Sacerdote",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=facearea&facepad=3&w=400&h=400&q=80",
      description: "Sirviendo a la comunidad por más de 25 años con pasión por Dios y su palabra."
    }
  ];

  return (
    <section id="liderazgo" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Users className="text-primary" size={40} />
          </div>
          <h2 className="mb-4 text-4xl md:text-5xl font-bold">Nuestro Sacerdote</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce a nuestro sacerdote, dedicado a servir a Dios y a esta comunidad.
          </p>
        </div>

        <div className="flex justify-center">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center group max-w-sm">
              <div className="mb-6 overflow-hidden rounded-full w-48 h-48 mx-auto ring-4 ring-gray-50 shadow-lg">
                <ImageWithFallback
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
              <p className="text-primary font-medium mb-3">{leader.role}</p>
              <p className="text-muted-foreground">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
