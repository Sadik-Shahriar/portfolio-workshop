import Reveal from "./Reveal";

const skillCategories = [
  {
    name: "AI / Machine Learning",
    skills: ["Deep Learning", "PyTorch", "TensorFlow", "Scikit-learn", "CNN / RNN"],
  },
  {
    name: "Computer Vision",
    skills: ["YOLOv12", "OpenCV", "Object Detection", "Image Processing"],
  },
  {
    name: "NLP",
    skills: ["Tokenization", "Embedding", "Text Classification", "Sequence Models"],
  },
  {
    name: "Full-Stack",
    skills: ["React Native", "Node.js", "Supabase", "PostgreSQL", "Express"],
  },
  {
    name: "Languages",
    skills: ["C++", "Java", "Python", "C"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "LaTeX", "Oracle APEX", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg-page scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-800 mb-12">
            Skills
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <Reveal key={cat.name}>
              <div className="bg-surface border border-border rounded-xl p-5 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-display text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
