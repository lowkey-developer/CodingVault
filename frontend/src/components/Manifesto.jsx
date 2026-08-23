import { FadeUp, ChapterHeading } from "./MaskedText";

const chapters = [
  {
    number: "01",
    title: "Code is literature",
    body: "Every programming language is an argument about how humans should talk to machines. Python argues for prose. C argues for honesty. Haskell (not in this index, sadly) argues for math. To learn a language is to read its author's mind.",
  },
  {
    number: "02",
    title: "No language is 'best'",
    body: "There are only trade-offs. Speed against safety, expressiveness against discipline, time-to-build against time-to-run. This index shows each language's hand openly — the strengths it flaunts and the weaknesses it hides.",
  },
  {
    number: "03",
    title: "Learn by touching",
    body: "Reading about code teaches nothing. Each chapter below ends in real, runnable examples. Open them, copy them, break them. That is how every programmer in history has actually learned.",
  },
];

export const Manifesto = () => (
  <section className="px-6 md:px-12 py-24 md:py-32 border-t border-line" data-testid="manifesto-section">
    <div className="mx-auto max-w-[1600px]">
      <ChapterHeading number="01" title="The" italic="manifesto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
        {chapters.map((ch, i) => (
          <FadeUp key={ch.number} delay={i * 0.12} className="bg-ink p-8 md:p-12 min-h-[300px] flex flex-col">
            <span className="font-jetbrains text-xs text-accent tracking-[0.3em]">{ch.number}</span>
            <h3 className="font-clash font-medium text-2xl text-cream mt-6 tracking-tight">{ch.title}</h3>
            <p className="font-satoshi text-sm md:text-base text-dim leading-relaxed mt-5">{ch.body}</p>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);
