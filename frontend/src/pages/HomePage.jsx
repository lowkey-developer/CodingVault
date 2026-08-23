import { Hero } from "../components/Hero";
import { EditorialMarquee } from "../components/Marquee";
import { Manifesto } from "../components/Manifesto";
import { LanguageIndex } from "../components/LanguageIndex";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <main data-testid="home-page">
      <Hero />
      <EditorialMarquee />
      <Manifesto />
      <LanguageIndex />
      <Footer />
    </main>
  );
}
