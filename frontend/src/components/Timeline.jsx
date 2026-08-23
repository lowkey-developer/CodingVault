import { motion } from "framer-motion";

export const Timeline = ({ entries }) => (
  <div className="relative pl-8 md:pl-12" data-testid="history-timeline">
    <div className="absolute left-0 top-2 bottom-2 w-px bg-line" />
    {entries.map((entry, i) => (
      <motion.div
        key={entry.year}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="relative pb-12 last:pb-0"
        data-testid={`timeline-entry-${entry.year.replace(/\W+/g, "-").toLowerCase()}`}
      >
        <span className="absolute -left-8 md:-left-12 top-2 w-2 h-2 bg-accent -translate-x-[3.5px]" />
        <span className="font-jetbrains text-sm text-accent tracking-[0.2em]">{entry.year}</span>
        <p className="font-satoshi text-base text-cream/85 leading-relaxed mt-2 max-w-2xl">{entry.event}</p>
      </motion.div>
    ))}
  </div>
);
