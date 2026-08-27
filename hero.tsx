"use client";

import { m } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "./magnetic-button";
import { useLenis } from "lenis/react";

export default function Hero() {
  const lenis = useLenis();

  const scrollToProjects = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (lenis) {
      lenis.scrollTo("#projects", {
        duration: 2,
        offset: -100,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-red-900/15 rounded-[100%] blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[600px] bg-red-950/15 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-neutral-800/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-6xl mx-auto w-full">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="inline-block mb-8 md:mb-10 w-full"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs sm:text-sm font-medium text-red-300 tracking-[0.2em] shadow-[0_0_30px_rgba(220,38,38,0.12)] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2 animate-pulse" />
            Video Editor & Creative Producer
          </div>
        </m.div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9] w-full flex flex-col items-center">
          <m.span
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            className="block w-full bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent drop-shadow-sm pb-2"
          >
            VIDEO
          </m.span>
          <m.span
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-300 pb-4 filter drop-shadow-[0_0_30px_rgba(220,38,38,0.2)]"
          >
            EDITOR
          </m.span>
        </h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12 sm:mb-16 md:px-0"
        >
          Turning ideas into engaging visual stories through clean editing, motion,
          storytelling, and modern <span className="text-white font-medium">AI workflows</span>.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto sm:max-w-none"
        >
          <MagneticButton>
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 text-base sm:text-lg font-semibold text-black bg-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] cursor-pointer"
            >
              View Work
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-10 py-4 text-base sm:text-lg font-medium text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-2xl transition-all duration-500 hover:bg-white/10 hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(220,38,38,0.12)]"
            >
              Contact Me
            </a>
          </MagneticButton>
        </m.div>
      </div>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-3 text-white/40 hover:text-red-300 transition-colors duration-500"
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
          <ArrowDown className="animate-bounce" size={18} strokeWidth={1.5} />
        </button>
      </m.div>
    </section>
  );
}
