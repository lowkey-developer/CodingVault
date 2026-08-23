import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-line px-6 md:px-12 py-16 md:py-24" data-testid="site-footer">
    <div className="mx-auto max-w-[1600px] flex flex-col md:flex-row md:items-end justify-between gap-10">
      <div>
        <p className="font-cormorant italic text-2xl md:text-4xl text-dim max-w-xl leading-snug">
          "Programs must be written for people to read, and only incidentally for machines to execute."
        </p>
        <p className="font-jetbrains text-xs tracking-[0.25em] uppercase text-dim mt-4">— Harold Abelson, SICP</p>
      </div>
      <Link
        to="/"
        data-testid="footer-back-to-index"
        className="group inline-flex items-center gap-3 font-jetbrains text-xs uppercase tracking-[0.25em] text-cream hover:text-accent transition-colors duration-300"
      >
        Back to the index
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </div>
  </footer>
);
