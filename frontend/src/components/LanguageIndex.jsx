import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { languages } from "../data/languages";
import { ChapterHeading } from "./MaskedText";

const EASE = [0.16, 1, 0.3, 1];

const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-6",
  "md:col-span-6",
];

const Card = ({ lang, index }) => {
  const Icon = lang.iconComponent;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: EASE }}
      className={`col-span-1 ${spans[index]} group relative bg-ink p-8 md:p-12 flex flex-col justify-between min-h-[340px] hover:bg-surface transition-colors duration-500`}
      data-testid={`language-card-${lang.slug}`}
    >
      <div className="flex items-start justify-between">
        <span className="font-jetbrains text-xs text-dim tracking-[0.25em]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Icon
          size={44}
          className="text-dim transition-all duration-500 group-hover:text-accent group-hover:scale-110"
        />
      </div>

      <div className="mt-14">
        <h3 className="font-clash font-medium text-3xl md:text-4xl text-cream tracking-tight transition-transform duration-500 group-hover:translate-x-2">
          {lang.name}
        </h3>
        <p className="font-cormorant italic text-xl text-accent mt-1 transition-transform duration-500 delay-75 group-hover:translate-x-2">
          {lang.tagline}
        </p>
        <p className="font-satoshi text-sm md:text-base text-dim leading-relaxed mt-5 max-w-lg">
          {lang.brief}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-7 font-jetbrains text-[11px] uppercase tracking-[0.2em] text-dim">
          <span className="border border-line px-3 py-1.5">{lang.year}</span>
          <span className="border border-line px-3 py-1.5 hidden sm:inline">{lang.typing.split(",")[0]}</span>
          <Link
            to={`/language/${lang.slug}`}
            data-testid={`learn-basics-${lang.slug}`}
            className="ml-auto inline-flex items-center gap-2 text-cream border border-line px-4 py-2.5 hover:bg-accent hover:text-ink hover:border-accent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Learn the basics
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const LanguageIndex = () => (
  <section id="index" className="px-6 md:px-12 py-24 md:py-32" data-testid="language-index-section">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading number="02" title="The" italic="index" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-line border border-line">
        {languages.map((lang, i) => (
          <Card key={lang.slug} lang={lang} index={i} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="border border-line border-t-0 bg-ink p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        data-testid="quiz-cta"
      >
        <div>
          <p className="font-cormorant italic text-2xl md:text-3xl text-cream">Not sure where to begin?</p>
          <p className="font-satoshi text-sm md:text-base text-dim mt-2">Four questions. One honest answer.</p>
        </div>
        <Link
          to="/quiz"
          data-testid="quiz-cta-link"
          className="group inline-flex items-center gap-3 px-6 py-3.5 bg-accent text-ink font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-cream transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Take the quiz
          <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </motion.div>
    </div>
  </section>
);
