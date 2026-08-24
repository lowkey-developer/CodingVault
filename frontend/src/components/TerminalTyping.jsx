import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const HELLO_WORLD = {
  python: 'print("Hello, World!")',
  java: 'System.out.println("Hello, World!");',
  c: 'printf("Hello, World!\\n");',
  cpp: 'std::cout << "Hello, World!" << std::endl;',
  csharp: 'Console.WriteLine("Hello, World!");',
  javascript: 'console.log("Hello, World!");',
  typescript: 'const msg: string = "Hello, World!"; console.log(msg);',
};

const splitStrings = (line) => {
  const parts = [];
  let rest = line;
  while (rest.length) {
    const start = rest.indexOf('"');
    if (start === -1) {
      parts.push({ text: rest, isString: false });
      break;
    }
    if (start > 0) parts.push({ text: rest.slice(0, start), isString: false });
    const end = rest.indexOf('"', start + 1);
    if (end === -1) {
      parts.push({ text: rest.slice(start), isString: true });
      break;
    }
    parts.push({ text: rest.slice(start, end + 1), isString: true });
    rest = rest.slice(end + 1);
  }
  return parts;
};

export const TerminalTyping = ({ slug }) => {
  const line = HELLO_WORLD[slug] || 'print("Hello, World!")';
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? line : "");
  const [done, setDone] = useState(reduce);
  const [runId, setRunId] = useState(0);

  const replay = () => {
    if (reduce) return;
    setTyped("");
    setDone(false);
    setRunId((k) => k + 1);
  };

  useEffect(() => {
    if (reduce) {
      setTyped(line);
      setDone(true);
      return;
    }
    setTyped("");
    setDone(false);
    let i = 0;
    let iv;
    let finish;
    const start = setTimeout(
      () => {
        iv = setInterval(() => {
          i += 1;
          setTyped(line.slice(0, i));
          if (i >= line.length) {
            clearInterval(iv);
            finish = setTimeout(() => setDone(true), 350);
          }
        }, 42);
      },
      runId === 0 ? 1200 : 350
    );
    return () => {
      clearTimeout(start);
      if (iv) clearInterval(iv);
      if (finish) clearTimeout(finish);
    };
  }, [line, reduce, runId]);

  const colored = splitStrings(typed);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className="border border-line max-w-xl mt-12"
      data-testid="hello-terminal"
    >
      <div className="flex items-center gap-2 bg-surface px-4 py-2.5 border-b border-line">
        <span className="w-2 h-2 rounded-full bg-line" />
        <span className="w-2 h-2 rounded-full bg-line" />
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="ml-2 font-jetbrains text-[10px] uppercase tracking-[0.25em] text-dim">
          hello — {slug}
        </span>
        <button
          onClick={replay}
          data-testid="hello-terminal-replay"
          aria-label="Replay typing animation"
          className="ml-auto group flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.25em] text-dim hover:text-accent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <RotateCcw size={11} className="transition-transform duration-500 group-hover:-rotate-180" />
          Re-run
        </button>
      </div>
      <div className="bg-[#0B0B0C] px-5 py-4 font-jetbrains text-[13px] md:text-sm leading-7 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center">
          <span className="text-accent mr-3 select-none">›</span>
          <span>
            {colored.map((p, i) => (
              <span key={i} className={p.isString ? "text-[#D9C7A7]" : "text-cream/90"}>
                {p.text}
              </span>
            ))}
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            className="inline-block w-[9px] h-[1.15em] bg-accent ml-1 align-middle"
            data-testid="hello-terminal-cursor"
          />
        </div>
        {done && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-dim"
            data-testid="hello-terminal-output"
          >
            Hello, World!
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
