import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Navbar } from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import LanguagePage from "@/pages/LanguagePage";
import QuizPage from "@/pages/QuizPage";

const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollManager />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/language/:slug" element={<LanguagePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <div className="noise-overlay" aria-hidden="true" />
      </BrowserRouter>
    </div>
  );
}

export default App;
