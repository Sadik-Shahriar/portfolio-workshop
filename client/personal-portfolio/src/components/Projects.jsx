import { useState, useEffect } from "react";
import Reveal from "./Reveal";

const API_URL = import.meta.env.VITE_API_URL;

const semesterOrder = ["Fall 2025", "Summer 2025"];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const grouped = projects.reduce((acc, p) => {
    if (!acc[p.period]) acc[p.period] = [];
    acc[p.period].push(p);
    return acc;
  }, {});

  if (loading) {
    return (
      <section id="projects" className="py-24 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto text-center text-muted text-sm">
          Loading projects...
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-800 mb-12">
            Projects
          </h2>
        </Reveal>

        <div className="space-y-12">
          {semesterOrder.map((period) =>
            grouped[period] ? (
              <Reveal key={period}>
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {period === "Fall 2025" ? "\u2014" : "\u2014"}{" "}
                      {period}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="space-y-5">
                    {grouped[period].map((project) => (
                      <div
                        key={project.id}
                        className="group bg-surface border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                      >
                        <div className="space-y-3">
                          <div>
                            <h3 className="font-display text-lg font-semibold text-slate-800 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-xs text-muted font-mono mt-0.5">
                              {project.course}
                            </p>
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-md"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-4 mt-4 pt-4 border-t border-border">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs font-medium text-slate-600 hover:text-primary transition-colors"
                            >
                              GitHub &rarr;
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs font-medium text-slate-600 hover:text-primary transition-colors"
                            >
                              Live Demo &rarr;
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}
