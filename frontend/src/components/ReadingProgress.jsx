import { motion, useScroll, useSpring } from "framer-motion";

export const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[70] origin-left"
      style={{ scaleX }}
      data-testid="reading-progress"
      aria-hidden="true"
    />
  );
};
