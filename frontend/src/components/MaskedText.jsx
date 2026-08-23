import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

export const MaskedLine = ({ children, delay = 0, inView = true, className = "", as = "span" }) => {
  const Tag = motion[as] || motion.span;
  return (
    <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <Tag
        className={`block will-change-transform ${className}`}
        initial={{ y: "115%" }}
        {...(inView
          ? { whileInView: { y: "0%" }, viewport: { once: true, margin: "-10% 0px" } }
          : { animate: { y: "0%" } })}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </Tag>
    </span>
  );
};

export const FadeUp = ({ children, delay = 0, className = "", y = 28 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-8% 0px" }}
    transition={{ duration: 0.8, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const ChapterHeading = ({ number, title, italic }) => (
  <div className="mb-12 md:mb-16">
    <FadeUp y={16}>
      <span className="font-jetbrains text-xs tracking-[0.3em] uppercase text-accent" data-testid={`chapter-${number}-label`}>
        Chapter {number}
      </span>
    </FadeUp>
    <MaskedLine className="font-clash font-medium text-3xl sm:text-4xl lg:text-5xl text-cream tracking-tight mt-4">
      {title}{" "}
      {italic && <span className="font-cormorant italic font-normal text-dim">{italic}</span>}
    </MaskedLine>
  </div>
);
