import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { History } from "./components/History";
import { Services } from "./components/Services";
import { Schedule } from "./components/Schedule";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Giving } from "./components/Giving";
import { Leadership } from "./components/Leadership";
import { Ministries } from "./components/Ministries";
import { Sermons } from "./components/Sermons";
import { LiveStream } from "./components/LiveStream";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LiveStream />
        <History />
        <Ministries />
        <Sermons />
        <Services />
        <Leadership />
        <Schedule />
        <Giving />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}