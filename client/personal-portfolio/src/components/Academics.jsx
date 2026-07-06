import Reveal from "./Reveal";

const keyCourses = [
  "Machine Learning",
  "Computer Networks",
  "Big Data Analytics",
  "Algorithms",
  "Data Structures",
  "Operating Systems",
  "Artificial Intelligence",
  "Database Systems",
  "Object Oriented Programming",
  "Discrete Mathematics",
  "Statistics & Probability",
  "Linear Algebra",
];

export default function Academics() {
  return (
    <section id="academics" className="py-24 px-6 bg-bg-page scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-800 mb-12">
            Academics
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal className="space-y-8">
            <div className="bg-surface border border-border rounded-xl p-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display text-5xl font-bold text-gold">
                  3.99
                </span>
                <span className="text-muted font-medium text-lg">
                  / 4.00
                </span>
              </div>
              <p className="text-xs text-muted font-medium uppercase tracking-wider mb-6">
                Cumulative GPA \u2014 East West University
              </p>

              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "99.75%",
                    background: "linear-gradient(90deg, #4F46E5, #F59E0B)",
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-5 mt-6">
                {[
                  { label: "A+ Grades", value: "27" },
                  { label: "Credits Earned", value: "107" },
                  { label: "Scholarship", value: "100% Merit" },
                  { label: "Dean\u2019s List", value: "Every Semester" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-sm font-semibold text-slate-800">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface border border-border rounded-xl p-6">
              <h3 className="font-display text-xs font-semibold text-slate-800 uppercase tracking-widest mb-4">
                Achievements
              </h3>
              <ul className="space-y-3">
                {[
                  "100% Merit Scholarship \u2014 full tuition waiver for maintaining CGPA > 3.90",
                  "Dean\u2019s List recognition every semester since Fall 2023",
                  "Consistent Term GPA of 4.00 across multiple semesters",
                  "Top 10% of the department",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-slate-600 flex items-start gap-2.5"
                  >
                    <span className="text-gold shrink-0 mt-0.5 select-none">
                      &#10022;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-surface border border-border rounded-xl p-6">
              <h3 className="font-display text-xs font-semibold text-slate-800 uppercase tracking-widest mb-4">
                A+ Coursework
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {keyCourses.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <span className="text-gold text-xs font-bold tabular-nums">
                      A+
                    </span>
                    <span className="leading-snug">{course}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted mt-5 pt-4 border-t border-border">
                ...and 15 more courses with A+ grades across 8 semesters
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
