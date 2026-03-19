import { PlayCircle, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Sermon {
  title: string;
  date: string;
  image: string;
  link: string;
  author: string;
}

export function Sermons() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const channelId = "UCegLaCqbYZwmosispgezgGg";
    // Usar RSS2JSON para convertir el feed RSS de YouTube a JSON (Gratis, sin API key)
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.items) {
          // Obtener solo los últimos 3 videos
          const latestVideos = data.items.slice(0, 3).map((item: any) => ({
            title: item.title,
            date: new Date(item.pubDate).toLocaleDateString("es-ES", {
              weekday: "long",
              day: "numeric",
              month: "short",
              year: "numeric",
            }),
            image: item.thumbnail,
            link: item.link,
            author: item.author,
          }));
          setSermons(latestVideos);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando los videos de YouTube:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="predicas" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-end mb-12 flex-col md:flex-row gap-4">
          <div>
            <h2 className="mb-4 text-4xl md:text-5xl font-bold">Prédicas Recientes</h2>
            <p className="text-xl text-gray-600">Escucha los mensajes recientes directos desde nuestro canal.</p>
          </div>
          <button
            onClick={() => window.open("https://www.youtube.com/@parroquiaasuncionsde", "_blank")}
            className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
            <PlayCircle />
            Ver canal de YouTube
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="animate-spin text-primary" size={48} />
          </div>
        ) : sermons.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {sermons.map((sermon, index) => (
              <div 
                key={index} 
                onClick={() => window.open(sermon.link, "_blank")}
                className="rounded-xl overflow-hidden shadow-md group cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle size={60} className="text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="p-6 bg-white border border-t-0 border-gray-100 rounded-b-xl">
                  <span className="text-sm font-semibold text-primary mb-2 block capitalize">{sermon.date}</span>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2" title={sermon.title}>
                    {sermon.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">Canal: {sermon.author}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No se pudieron cargar los videos recientes en este momento.
          </div>
        )}
      </div>
    </section>
  );
}
