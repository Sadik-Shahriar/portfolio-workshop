import Reveal from "./Reveal";
import Terminal from "./Terminal";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-bg px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.05),transparent_50%)]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
        <Reveal>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Sadik Shahriar
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-base sm:text-lg text-slate-400 font-body max-w-xl mx-auto">
            Computer Science &amp; Engineering Undergraduate
          </p>
        </Reveal>

        <Reveal>
          <Terminal />
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => scrollTo("projects")}
              className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              View Work
            </button>
            <a
              href="https://www.linkedin.com/in/sadik-shahriar-296b892a4"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 border border-slate-600 text-slate-300 text-sm font-medium rounded-lg hover:border-slate-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
