import { languages } from "./languages";

export const questions = [
  {
    id: "excites",
    title: "What excites you most?",
    answers: [
      { label: "Teaching machines to learn", weights: { python: 3 } },
      { label: "Building games and entire worlds", weights: { cpp: 2, csharp: 2 } },
      { label: "Crafting beautiful websites", weights: { javascript: 2, typescript: 2 } },
      { label: "Understanding how computers really work", weights: { c: 3, cpp: 1 } },
      { label: "Big, serious software that runs companies", weights: { java: 3, csharp: 1 } },
    ],
  },
  {
    id: "rules",
    title: "How do you feel about strict rules?",
    answers: [
      { label: "Keep it loose — let me move fast", weights: { python: 2, javascript: 2 } },
      { label: "Catch my mistakes before they ship", weights: { typescript: 2, java: 1, csharp: 1 } },
      { label: "Give me total control — I'll take the risk", weights: { c: 2, cpp: 2 } },
    ],
  },
  {
    id: "workday",
    title: "Pick your ideal workday",
    answers: [
      { label: "Analysing data and training a model", weights: { python: 3 } },
      { label: "Shipping a mobile or enterprise app", weights: { java: 2, csharp: 2 } },
      { label: "Building a slick interactive web UI", weights: { typescript: 2, javascript: 2 } },
      { label: "Squeezing microseconds out of hardware", weights: { cpp: 2, c: 2 } },
    ],
  },
  {
    id: "patience",
    title: "How much patience do you have?",
    answers: [
      { label: "Show me results today", weights: { python: 2, javascript: 2 } },
      { label: "I'll invest months for real mastery", weights: { java: 2, csharp: 1, typescript: 1 } },
      { label: "Throw me in the deep end", weights: { cpp: 2, c: 2 } },
    ],
  },
];

export const reasons = {
  python:
    "You want momentum over machinery. Python takes you from idea to working code faster than anything else on this list — and it happens to be the front door to AI, data science, and automation.",
  java:
    "You like structure with staying power. Java's discipline is exactly what builds software that runs banks, airlines, and billions of phones for decades.",
  c:
    "You want to understand, not just use. C teaches you precisely what the machine is doing at every moment — it never hides anything, and it never lies to you.",
  cpp:
    "You crave control and speed. C++ hands you the raw machine with industrial-strength abstractions on top — the language of game engines, browsers, and rockets.",
  csharp:
    "You want polish with power. C# is one of the most thoughtfully designed languages ever made, and it spans games, web, desktop, and cloud in a single toolkit.",
  javascript:
    "You want to see things happen. JavaScript runs everywhere people click, the feedback loop is instant, and the job market is the biggest in software.",
  typescript:
    "You like speed with seatbelts. TypeScript keeps everything you would love about JavaScript's reach while catching your mistakes before the world ever sees them.",
};

export const scoreQuiz = (answers) => {
  const totals = {};
  answers.forEach((a) => {
    Object.entries(a.weights).forEach(([slug, pts]) => {
      totals[slug] = (totals[slug] || 0) + pts;
    });
  });
  let best = languages[0].slug;
  let bestScore = -1;
  languages.forEach((l) => {
    const s = totals[l.slug] || 0;
    if (s > bestScore) {
      bestScore = s;
      best = l.slug;
    }
  });
  return best;
};
