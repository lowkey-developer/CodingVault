import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import cpp from "react-syntax-highlighter/dist/esm/languages/prism/cpp";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";

SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("java", java);
SyntaxHighlighter.registerLanguage("c", c);
SyntaxHighlighter.registerLanguage("cpp", cpp);
SyntaxHighlighter.registerLanguage("csharp", csharp);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);

export const CopyButton = ({ text, testId = "copy-code-button", className = "" }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      onClick={copy}
      data-testid={testId}
      aria-label="Copy code to clipboard"
      className={`inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        copied ? "text-accent" : "text-dim hover:text-cream"
      } ${className}`}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
};

const mono = '"JetBrains Mono", monospace';

export const editorialTheme = {
  'code[class*="language-"]': {
    color: "#F4F0EA",
    background: "none",
    fontFamily: mono,
    fontSize: "0.83rem",
    lineHeight: "1.7",
    textShadow: "none",
    whiteSpace: "pre",
  },
  'pre[class*="language-"]': {
    color: "#F4F0EA",
    background: "#0B0B0C",
    fontFamily: mono,
    padding: "1.5rem",
    margin: 0,
    overflow: "auto",
  },
  comment: { color: "#6B6965", fontStyle: "italic" },
  prolog: { color: "#6B6965" },
  doctype: { color: "#6B6965" },
  cdata: { color: "#6B6965" },
  punctuation: { color: "#8A8782" },
  property: { color: "#F4F0EA" },
  tag: { color: "#FF3300" },
  boolean: { color: "#FF3300" },
  number: { color: "#FF7A55" },
  constant: { color: "#FF3300" },
  symbol: { color: "#FF3300" },
  selector: { color: "#FF3300" },
  "attr-name": { color: "#FF7A55" },
  string: { color: "#D9C7A7" },
  char: { color: "#D9C7A7" },
  builtin: { color: "#FF7A55" },
  operator: { color: "#8A8782" },
  entity: { color: "#FF7A55" },
  url: { color: "#D9C7A7" },
  atrule: { color: "#FF3300" },
  "attr-value": { color: "#D9C7A7" },
  keyword: { color: "#FF3300" },
  function: { color: "#F4F0EA" },
  "class-name": { color: "#FF7A55" },
  regex: { color: "#D9C7A7" },
  important: { color: "#FF3300" },
  variable: { color: "#F4F0EA" },
};

export const CodeBlock = ({ code, language, filename, testId = "code-block" }) => (
  <div className="border border-line" data-testid={testId}>
    <div className="flex items-center gap-2 bg-surface px-5 py-3 border-b border-line">
      <span className="w-2.5 h-2.5 rounded-full bg-line" />
      <span className="w-2.5 h-2.5 rounded-full bg-line" />
      <span className="w-2.5 h-2.5 rounded-full bg-accent" />
      <span className="ml-3 font-jetbrains text-xs text-dim tracking-wider">{filename}</span>
      <CopyButton text={code} testId="copy-main-code-button" className="ml-auto" />
    </div>
    <SyntaxHighlighter language={language} style={editorialTheme} showLineNumbers
      lineNumberStyle={{ color: "#3A3A3C", fontSize: "0.75rem", paddingRight: "1.25rem", userSelect: "none" }}>
      {code}
    </SyntaxHighlighter>
  </div>
);
