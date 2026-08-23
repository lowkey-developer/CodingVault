import Marquee from "react-fast-marquee";
import { languages } from "../data/languages";

export const EditorialMarquee = () => (
  <div className="border-y border-line py-6 md:py-8 overflow-hidden" data-testid="editorial-marquee">
    <Marquee speed={28} gradient={false} pauseOnHover>
      {languages.map((lang) => (
        <span key={lang.slug} className="flex items-center">
          <span className="font-cormorant italic text-3xl md:text-5xl text-cream px-6 md:px-10">
            {lang.name}
          </span>
          <span className="text-accent font-jetbrains text-xl md:text-2xl">✳</span>
        </span>
      ))}
    </Marquee>
  </div>
);
