import { ImageWithFallback } from "./figma/ImageWithFallback";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function History() {
  const priests = [
    {
      name: "Padre Miguel Ángel Rodríguez",
      period: "1985 - 1998",
      description: "Fundador de nuestra iglesia",
      imageUrl: "https://images.unsplash.com/photo-1561984781-de40954f2c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcHJpZXN0JTIwbWluaXN0ZXJ8ZW58MXx8fHwxNzczODcyNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Padre Juan Carlos Mendoza",
      period: "1998 - 2010",
      description: "Expandió nuestros ministerios",
      imageUrl: "https://images.unsplash.com/photo-1612813560949-e1d3f2774c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBwYXN0b3IlMjBsZWFkZXJ8ZW58MXx8fHwxNzczODcyNTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Padre Ricardo Fernández",
      period: "2010 - 2020",
      description: "Fortaleció la comunidad juvenil",
      imageUrl: "https://images.unsplash.com/photo-1560279800-8b23f487ce83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBhc3RvciUyMHByZWFjaGVyfGVufDF8fHx8MTc3Mzg3MjU1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Padre David Martínez",
      period: "2020 - Presente",
      description: "Líder actual de nuestra congregación",
      imageUrl: "https://images.unsplash.com/photo-1626197626028-46c0cf75813f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3IlMjBwcmllc3QlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM4NzI1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  // Custom arrow components
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="text-gray-800" size={24} />
      </button>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="text-gray-800" size={24} />
      </button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="historia" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="mb-6 text-4xl md:text-5xl">Nuestra Historia</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Desde 1985, nuestra iglesia ha sido un faro de esperanza y fe
                en la comunidad. Comenzamos como un pequeño grupo de creyentes
                reunidos en una casa, unidos por el deseo de adorar y servir.
              </p>
              <p>
                A lo largo de los años, hemos crecido no solo en números, sino
                en el impacto que tenemos en las vidas de las personas. Nuestra
                misión siempre ha sido clara: compartir el amor de Dios y crear
                un espacio donde todos se sientan bienvenidos.
              </p>
              <p>
                Hoy, somos una comunidad vibrante de más de 500 miembros,
                comprometidos con el servicio, la adoración y el crecimiento
                espiritual. Cada día trabajamos para ser la luz en nuestra
                ciudad y más allá.
              </p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1744551433076-fdccb57194ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBjaHVyY2glMjBidWlsZGluZyUyMGhpc3Rvcnl8ZW58MXx8fHwxNzczODcyMjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Historia de la iglesia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Sección de Sacerdotes */}
        <div className="mt-16">
          <h3 className="mb-12 text-3xl md:text-4xl text-center">
            Nuestros Pastores a Través del Tiempo
          </h3>
          <div className="relative px-12">
            <Slider {...sliderSettings}>
              {priests.map((priest, index) => (
                <div key={index} className="px-4">
                  <div className="group text-center">
                    <div className="mb-4 relative overflow-hidden rounded-lg shadow-lg">
                      <ImageWithFallback
                        src={priest.imageUrl}
                        alt={priest.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 text-sm">{priest.description}</p>
                      </div>
                    </div>
                    <h4 className="mb-2 text-lg">{priest.name}</h4>
                    <p className="text-blue-600">{priest.period}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}