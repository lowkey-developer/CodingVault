import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const ArrowButton = ({ to, children, filled = false, testId }) => {
  const base =
    "group inline-flex items-center gap-3 px-6 py-3.5 font-jetbrains text-xs uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
  const style = filled
    ? "bg-accent text-ink hover:bg-cream"
    : "border border-line text-cream hover:bg-accent hover:text-ink hover:border-accent";
  return (
    <Link to={to} data-testid={testId} className={`${base} ${style}`}>
      <span>{children}</span>
      <ArrowUpRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
};
