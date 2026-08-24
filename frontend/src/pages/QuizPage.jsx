import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { questions, reasons, scoreQuiz } from "../data/quiz";
import { getLanguage } from "../data/languages";
import { MaskedLine, FadeUp } from "../components/MaskedText";
import { ArrowButton } from "../components/ArrowButton";

const EASE = [0.16, 1, 0.3, 1];

const Result = ({ lang, onRestart }) => {
  const Icon = lang.iconComponent;
  return (
    <div data-testid="quiz-result">
      <FadeUp y={16}>
        <span className="font-jetbrains text-xs uppercase tracking-[0.3em] text-accent">Your match</span>
      </FadeUp>
      <div className="flex items-end justify-between gap-8 mt-8">
        <h1 className="font-clash font-medium text-cream tracking-tight uppercase leading-[0.9]">
          <MaskedLine inView={false} className="text-[13vw] md:text-8xl">
            {lang.name}
          </MaskedLine>
        </h1>
        <Icon className="w-16 h-16 md:w-24 md:h-24 text-accent shrink-0 hidden sm:block" />
      </div>
      <FadeUp delay={0.2}>
        <p className="font-cormorant italic text-2xl md:text-3xl text-dim mt-6">{lang.tagline}</p>
        <p className="font-satoshi text-base md:text-lg text-dim leading-relaxed max-w-2xl mt-8" data-testid="quiz-result-reason">
          {reasons[lang.slug]}
        </p>
        <div className="flex flex-wrap gap-4 mt-12">
          <ArrowButton to={`/language/${lang.slug}`} filled testId="quiz-start-learning-button">
            Start learning {lang.name}
          </ArrowButton>
          <button
            onClick={onRestart}
            data-testid="quiz-restart-button"
            className="group inline-flex items-center gap-3 px-6 py-3.5 border border-line text-cream font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-surface transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <RotateCcw size={14} className="transition-transform duration-500 group-hover:-rotate-180" />
            Retake
          </button>
        </div>
      </FadeUp>
    </div>
  );
};

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const done = step >= questions.length;
  const result = done ? getLanguage(scoreQuiz(answers)) : null;

  const choose = (a) => {
    setAnswers((prev) => [...prev, a]);
    setStep((s) => s + 1);
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  return (
    <main className="min-h-screen px-6 md:px-12 pt-36 md:pt-44 pb-24" data-testid="quiz-page">
      <div className="mx-auto max-w-[1100px]">
        {!done ? (
          <>
            <div className="flex items-center justify-between mb-10">
              <span className="font-jetbrains text-xs uppercase tracking-[0.3em] text-accent" data-testid="quiz-kicker">
                The picker
              </span>
              <span className="font-jetbrains text-xs text-dim tracking-[0.25em]" data-testid="quiz-progress-label">
                {String(step + 1).padStart(2, "0")} / {String(questions.length).padStart(2, "0")}
              </span>
            </div>
            <div className="h-px bg-line w-full mb-16 relative">
              <motion.div
                className="absolute left-0 top-0 h-px bg-accent"
                animate={{ width: `${(step / questions.length) * 100}%` }}
                transition={{ duration: 0.6, ease: EASE }}
                data-testid="quiz-progress-bar"
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -48 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <h1
                  className="font-clash font-medium text-4xl sm:text-5xl lg:text-6xl text-cream tracking-tight leading-tight mb-14"
                  data-testid="quiz-question"
                >
                  {questions[step].title}
                </h1>
                <div className="border-t border-line" data-testid="quiz-answers">
                  {questions[step].answers.map((a, i) => (
                    <button
                      key={i}
                      onClick={() => choose(a)}
                      data-testid={`quiz-answer-${i}`}
                      className="group w-full text-left flex items-baseline gap-6 py-6 border-b border-line px-2 md:px-4 hover:bg-surface transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <span className="font-jetbrains text-xs text-dim shrink-0">{String.fromCharCode(65 + i)}</span>
                      <span className="font-satoshi text-lg md:text-xl text-cream/90 transition-transform duration-300 group-hover:translate-x-2">
                        {a.label}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="ml-auto shrink-0 text-dim opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 self-center"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          <Result lang={result} onRestart={restart} />
        )}
      </div>
    </main>
  );
}
