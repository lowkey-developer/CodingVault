import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-ink transition-[border-color] duration-300 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] flex items-center justify-between px-6 md:px-12 py-5">
        <Link
          to="/"
          data-testid="nav-logo"
          className="font-clash font-semibold text-lg tracking-tight text-cream hover:text-accent transition-colors duration-300"
        >
          lang<span className="text-accent">/</span>index
        </Link>
        <div className="flex items-center gap-8">
          <Link
            to="/#index"
            data-testid="nav-index-link"
            className="font-jetbrains text-xs uppercase tracking-[0.25em] text-dim hover:text-cream transition-colors duration-300"
          >
            Index
          </Link>
          <span className="hidden md:inline font-jetbrains text-xs tracking-[0.25em] text-dim" data-testid="nav-count">
            07 LANGUAGES
          </span>
        </div>
      </nav>
    </header>
  );
};
