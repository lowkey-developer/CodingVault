import { motion } from "framer-motion";

export const StatBar = ({ label, value, delay = 0 }) => (
  <div className="mb-7" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, "-")}`}>
    <div className="flex items-baseline justify-between mb-2.5">
      <span className="font-jetbrains text-xs uppercase tracking-[0.2em] text-dim">{label}</span>
      <span className="font-clash font-medium text-xl text-cream">{value}</span>
    </div>
    <div className="h-px bg-line w-full relative">
      <motion.div
        className="absolute left-0 top-0 h-px bg-accent"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-accent"
        initial={{ left: 0, opacity: 0 }}
        whileInView={{ left: `${value}%`, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  </div>
);
