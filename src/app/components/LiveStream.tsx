import { Youtube } from "lucide-react";

export function LiveStream() {
  const channelId = "UCegLaCqbYZwmosispgezgGg";
  const liveUrl = `https://www.youtube.com/embed/live_stream?channel=${channelId}`;
  
  // Cambia esto a `true` cuando estés transmitiendo en vivo
  const isLiveActive = false; 
  const offlineImageUrl = "https://res.cloudinary.com/dyxzfofp8/image/upload/v1773961593/Gemini_Generated_Image_iqzqz0iqzqz0iqzq_ohuic6.png";

  return (
    <section id="transmision" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          {isLiveActive ? (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 text-red-600 rounded-full mb-6 animate-pulse border border-red-200">
              <span className="w-2.5 h-2.5 bg-red-600 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-widest leading-none">Misa en Directo</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-full mb-6 border border-gray-300">
              <span className="w-2.5 h-2.5 bg-gray-500 rounded-full"></span>
              <span className="text-sm font-bold uppercase tracking-widest leading-none">Próxima Transmisión</span>
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sigue Nuestra Transmisión</h2>
          <p className="text-xl text-muted-foreground">Únete a nosotros en oración desde cualquier lugar</p>
        </div>

        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 bg-gray-100 flex items-center justify-center">
          {isLiveActive ? (
            <iframe
              width="100%"
              height="100%"
              src={liveUrl}
              title="YouTube Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <img 
              src={offlineImageUrl} 
              alt="Transmisión fuera de línea" 
              className="w-full h-full object-cover opacity-90"
            />
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.youtube.com/@parroquiaasuncionsde"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Youtube size={24} />
            Suscríbete a nuestro canal de YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
