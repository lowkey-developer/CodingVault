import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { MaskedLine } from "./MaskedText";
import { languages } from "../data/languages";

const EASE = [0.16, 1, 0.3, 1];
const depths = [-34, 22, -18, 30, -26, 16];

const LogoCell = ({ lang, index, sx, sy }) => {
  const Icon = lang.iconComponent;
  const x = useTransform(sx, (v) => v * depths[index]);
  const y = useTransform(sy, (v) => v * depths[index] * 0.6);
  return (
    <motion.div
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 + index * 0.12, duration: 0.8, ease: EASE }}
      className="bg-ink w-24 h-24 xl:w-28 xl:h-28 flex items-center justify-center"
    >
      <Icon size={34} className="text-dim hover:text-accent transition-colors duration-300" />
    </motion.div>
  );
};

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const onMouseMove = (e) => {
    if (reduceMotion) return;
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 2);
    my.set((e.clientY / innerHeight - 0.5) * 2);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 pt-32 overflow-hidden"
      onMouseMove={onMouseMove}
      data-testid="home-hero"
    >
      <div className="absolute top-24 right-6 md:right-12 hidden lg:grid grid-cols-3 gap-px bg-line border border-line z-0">
        {languages.slice(0, 6).map((lang, i) => (
          <LogoCell key={lang.slug} lang={lang} index={i} sx={sx} sy={sy} />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-jetbrains text-xs uppercase tracking-[0.35em] text-dim mb-8"
          data-testid="hero-kicker"
        >
          Seven Languages. One Coding Journey.
        </motion.p>

        <h1 className="font-clash font-medium leading-[0.92] tracking-tight text-cream">
          <MaskedLine inView={false} delay={0.1} className="text-[13vw] lg:text-[9.5vw]">
            SEVEN
          </MaskedLine>
          <MaskedLine inView={false} delay={0.25} className="text-[13vw] lg:text-[9.5vw]">
            LANGUAGES<span className="text-accent">,</span>
          </MaskedLine>
          <MaskedLine inView={false} delay={0.4} className="text-[13vw] lg:text-[9.5vw]">
            <span className="font-cormorant italic font-normal text-dim">one</span> MACHINE
          </MaskedLine>
        </h1>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9, ease: EASE }}
            className="md:col-span-5 font-satoshi text-base md:text-lg leading-relaxed text-dim max-w-md"
            data-testid="hero-description"
          >
            Learn the fundamentals, practice the basics, and discover which
            language fits you best — every entry is a full lesson in history,
            code, and craft.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="md:col-span-7 flex md:justify-end gap-10 font-jetbrains text-xs text-dim"
            data-testid="hero-meta"
          >
            <div>
              <span className="block text-cream text-2xl font-clash font-medium">07</span>
              <span className="tracking-[0.25em] uppercase">Languages</span>
            </div>
            <div>
              <span className="block text-cream text-2xl font-clash font-medium">1972</span>
              <span className="tracking-[0.25em] uppercase">Oldest entry</span>
            </div>
            <div>
              <span className="block text-accent text-2xl font-clash font-medium">∞</span>
              <span className="tracking-[0.25em] uppercase">Possibilities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
