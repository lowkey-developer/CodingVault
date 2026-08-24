import { useEffect, useState } from "react";

const CHAPTERS = [
  { testid: "overview-section", num: "01", label: "Story" },
  { testid: "basics-section", num: "02", label: "Basics" },
  { testid: "code-section", num: "03", label: "Code" },
  { testid: "timeline-section", num: "04", label: "Timeline" },
  { testid: "usecases-section", num: "05", label: "Where it runs" },
  { testid: "proscons-section", num: "06", label: "Trade-offs" },
];

export const scrollToChapter = (testid) => {
  const el = document.querySelector(`[data-testid="${testid}"]`);
  if (!el) return;
  const go = () => {
    const y = el.getBoundingClientRect().top + window.scrollY - 116;
    if (window.__lenis) {
      window.__lenis.scrollTo(y, { duration: 0.9 });
    } else {
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  go();
  setTimeout(() => {
    if (Math.abs(el.getBoundingClientRect().top - 116) > 8) go();
  }, 1100);
};

export const ChapterNav = () => {
  const [active, setActive] = useState(CHAPTERS[0].testid);

  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const target = document.activeElement;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) return;
      const idx = parseInt(e.key, 10) - 1;
      if (idx >= 0 && idx < CHAPTERS.length) {
        scrollToChapter(CHAPTERS[idx].testid);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      let current = CHAPTERS[0].testid;
      for (const c of CHAPTERS) {
        const el = document.querySelector(`[data-testid="${c.testid}"]`);
        if (el && el.getBoundingClientRect().top <= 200) current = c.testid;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-[68px] z-40 bg-ink border-b border-line" data-testid="chapter-nav">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center gap-6 md:gap-10 overflow-x-auto py-4">
        {CHAPTERS.map((c, i) => (
          <button
            key={c.testid}
            onClick={() => scrollToChapter(c.testid)}
            data-testid={`chapter-nav-${c.label.toLowerCase().replace(/\s+/g, "-")}`}
            className={`shrink-0 font-jetbrains text-[10px] md:text-xs uppercase tracking-[0.25em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              active === c.testid ? "text-accent" : "text-dim hover:text-cream"
            }`}
          >
            <span className="mr-2 opacity-60">{c.num}</span>
            {c.label}
            <span className="ml-2 hidden xl:inline opacity-40">[{i + 1}]</span>
          </button>
        ))}
        <span className="hidden lg:inline ml-auto shrink-0 font-jetbrains text-[10px] uppercase tracking-[0.25em] text-dim opacity-60" data-testid="chapter-nav-keyhint">
          keys 1–6
        </span>
      </div>
    </nav>
  );
};
