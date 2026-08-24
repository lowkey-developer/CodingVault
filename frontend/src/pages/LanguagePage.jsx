import { useEffect } from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getLanguage, getAdjacent } from "../data/languages";
import { MaskedLine, FadeUp, ChapterHeading } from "../components/MaskedText";
import { CodeBlock, CopyButton } from "../components/CodeBlock";
import { StatBar } from "../components/StatBar";
import { TerminalTyping } from "../components/TerminalTyping";
import { ChapterNav, scrollToChapter } from "../components/ChapterNav";
import { ReadingProgress } from "../components/ReadingProgress";
import { Timeline } from "../components/Timeline";
import { Footer } from "../components/Footer";

const EASE = [0.16, 1, 0.3, 1];

const HeroSection = ({ lang }) => {
  const Icon = lang.iconComponent;
  return (
    <section className="relative px-6 md:px-12 pt-40 pb-20 md:pb-28 overflow-hidden" data-testid={`${lang.slug}-hero`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
        className="absolute right-6 md:right-16 top-32 md:top-40 text-line select-none pointer-events-none"
      >
        <Icon className="w-40 h-40 md:w-72 md:h-72" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <Link
          to="/"
          data-testid="detail-back-link"
          className="group inline-flex items-center gap-2 font-jetbrains text-xs uppercase tracking-[0.25em] text-dim hover:text-cream transition-colors duration-300 mb-12"
        >
          <ArrowLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Index
        </Link>

        <p className="font-jetbrains text-xs uppercase tracking-[0.35em] text-accent mb-6" data-testid="detail-kicker">
          Entry — {lang.year}
        </p>
        <h1 className="font-clash font-medium leading-[0.9] tracking-tight text-cream">
          <MaskedLine inView={false} delay={0.1} className="text-[16vw] md:text-[11vw] uppercase">
            {lang.name}
          </MaskedLine>
        </h1>
        <MaskedLine inView={false} delay={0.35}>
          <span className="font-cormorant italic text-2xl md:text-4xl text-dim">{lang.tagline}</span>
        </MaskedLine>

        <TerminalTyping slug={lang.slug} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line mt-14 max-w-3xl"
          data-testid="detail-meta-grid"
        >
          {[
            ["Born", lang.year],
            ["Creator", lang.creator],
            ["Paradigm", lang.paradigm],
            ["Typing", lang.typing],
          ].map(([k, v]) => (
            <div key={k} className="bg-ink p-5">
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-dim block">{k}</span>
              <span className="font-satoshi text-sm text-cream mt-2 block leading-snug">{v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const OverviewSection = ({ lang }) => (
  <section className="px-6 md:px-12 py-24 md:py-32 border-t border-line" data-testid="overview-section">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading number="01" title="The" italic="story" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-44">
            <FadeUp>
              <p className="font-jetbrains text-xs uppercase tracking-[0.25em] text-dim mb-10">Profile — /100</p>
              {lang.stats.map((s, i) => (
                <StatBar key={s.label} label={s.label} value={s.value} delay={i * 0.12} />
              ))}
            </FadeUp>
          </div>
        </div>
        <div className="lg:col-span-8">
          {lang.description.map((para, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <p className={`leading-relaxed mb-8 ${
                i === 0
                  ? "font-cormorant text-2xl md:text-3xl text-cream"
                  : "font-satoshi text-base md:text-lg text-dim"
              }`}>
                {para}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const BasicsSection = ({ lang }) => (
  <section className="px-6 md:px-12 py-24 md:py-32 border-t border-line" data-testid="basics-section">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading number="02" title="Learn the" italic="basics" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
        {lang.basics.map((b, i) => (
          <FadeUp key={b.title} delay={(i % 2) * 0.1} className="bg-ink p-8 md:p-12 group hover:bg-surface transition-colors duration-500">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="font-clash font-medium text-2xl text-cream tracking-tight">{b.title}</h3>
              <span className="font-jetbrains text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <p className="font-satoshi text-sm text-dim leading-relaxed mb-8">{b.note}</p>
            <div className="border border-line bg-[#0B0B0C] p-5 overflow-x-auto relative">
              <CopyButton text={b.code} testId={`copy-basics-${i}`} className="absolute top-3 right-3" />
              <pre className="font-jetbrains text-[13px] leading-7 text-cream/90 pr-16">
                <code>{b.code}</code>
              </pre>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const CodeSection = ({ lang }) => (
  <section className="px-6 md:px-12 py-24 md:py-32 border-t border-line" data-testid="code-section">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading number="03" title="Real" italic="code" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <FadeUp className="lg:col-span-4">
          <p className="font-satoshi text-base md:text-lg text-dim leading-relaxed max-w-sm">
            A complete, honest example — not a toy. Read it top to bottom, copy it
            into an editor, and change things until it breaks. That's the lesson.
          </p>
        </FadeUp>
        <FadeUp delay={0.15} className="lg:col-span-8">
          <CodeBlock code={lang.snippet} language={lang.prismLang} filename={lang.snippetFile} testId="main-code-block" />
        </FadeUp>
      </div>
    </div>
  </section>
);

const TimelineSection = ({ lang }) => (
  <section className="px-6 md:px-12 py-24 md:py-32 border-t border-line" data-testid="timeline-section">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading number="04" title="The" italic="timeline" />
      <Timeline entries={lang.timeline} />
    </div>
  </section>
);

const UseCasesSection = ({ lang }) => (
  <section className="px-6 md:px-12 py-24 md:py-32 border-t border-line" data-testid="usecases-section">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading number="05" title="Where it" italic="runs" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
        {lang.useCases.map((u, i) => (
          <FadeUp key={u.title} delay={i * 0.08} className="bg-ink p-8 min-h-[240px] flex flex-col hover:bg-surface transition-colors duration-500 group">
            <span className="font-jetbrains text-xs text-accent tracking-[0.25em]">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-clash font-medium text-xl text-cream mt-5 tracking-tight">{u.title}</h3>
            <p className="font-satoshi text-sm text-dim leading-relaxed mt-4">{u.detail}</p>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

const ProsConsSection = ({ lang }) => (
  <section className="px-6 md:px-12 py-24 md:py-32 border-t border-line" data-testid="proscons-section">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading number="06" title="The honest" italic="trade-offs" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
        <FadeUp className="bg-ink p-8 md:p-12">
          <h3 className="font-cormorant italic text-3xl text-accent mb-10">Why you'll love it</h3>
          <ul className="space-y-6">
            {lang.pros.map((p, i) => (
              <li key={i} className="flex gap-5" data-testid={`pro-${i}`}>
                <span className="font-jetbrains text-xs text-accent pt-1.5">+</span>
                <p className="font-satoshi text-base text-cream/85 leading-relaxed">{p}</p>
              </li>
            ))}
          </ul>
        </FadeUp>
        <FadeUp delay={0.1} className="bg-ink p-8 md:p-12">
          <h3 className="font-cormorant italic text-3xl text-dim mb-10">Why it will test you</h3>
          <ul className="space-y-6">
            {lang.cons.map((c, i) => (
              <li key={i} className="flex gap-5" data-testid={`con-${i}`}>
                <span className="font-jetbrains text-xs text-dim pt-1.5">−</span>
                <p className="font-satoshi text-base text-dim leading-relaxed">{c}</p>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </div>
  </section>
);

const NextSection = ({ lang }) => {
  const { prev, next } = getAdjacent(lang.slug);
  const NextIcon = next.iconComponent;
  return (
    <section className="border-t border-line" data-testid="next-language-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
        <Link
          to={`/language/${prev.slug}`}
          data-testid="prev-language-link"
          className="group bg-ink px-6 md:px-12 py-16 flex items-center gap-5 hover:bg-surface transition-colors duration-500"
        >
          <ArrowLeft size={20} className="text-dim transition-all duration-300 group-hover:-translate-x-1 group-hover:text-accent" />
          <div>
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-dim">Previous entry</span>
            <span className="block font-clash font-medium text-2xl text-cream mt-2">{prev.name}</span>
          </div>
        </Link>
        <Link
          to={`/language/${next.slug}`}
          data-testid="next-language-link"
          className="group bg-ink px-6 md:px-12 py-16 flex items-center justify-end gap-5 text-right hover:bg-surface transition-colors duration-500"
        >
          <div>
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-dim">Next entry</span>
            <span className="block font-clash font-medium text-2xl text-cream mt-2">{next.name}</span>
          </div>
          <NextIcon size={28} className="text-dim transition-all duration-300 group-hover:text-accent group-hover:scale-110" />
          <ArrowRight size={20} className="text-dim transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
        </Link>
      </div>
    </section>
  );
};

export default function LanguagePage() {
  const { slug } = useParams();
  const { hash } = useLocation();
  const lang = getLanguage(slug);

  useEffect(() => {
    if (lang && hash === "#basics") {
      const t = setTimeout(() => scrollToChapter("basics-section"), 1400);
      return () => clearTimeout(t);
    }
  }, [hash, slug, lang]);

  if (!lang) return <Navigate to="/" replace />;

  return (
    <main key={lang.slug} data-testid={`language-page-${lang.slug}`}>
      <ReadingProgress />
      <HeroSection lang={lang} />
      <ChapterNav />
      <OverviewSection lang={lang} />
      <BasicsSection lang={lang} />
      <CodeSection lang={lang} />
      <TimelineSection lang={lang} />
      <UseCasesSection lang={lang} />
      <ProsConsSection lang={lang} />
      <NextSection lang={lang} />
      <Footer />
    </main>
  );
}
