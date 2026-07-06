import Reveal from "./Reveal";
import heroImage from "../assets/hero.png";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-800 mb-12">
            About
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <Reveal className="md:col-span-2">
            <div className="aspect-[3/4] bg-slate-200 rounded-xl overflow-hidden">
              <img
                src={heroImage}
                alt="Sadik Shahriar"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-3">
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                High-achieving Computer Science and Engineering undergraduate at
                East West University with a{" "}
                <span className="text-primary font-semibold">3.99 CGPA</span>{" "}
                and a strong foundation in algorithms and software engineering.
              </p>
              <p>
                Currently specializing in Machine Learning with practical
                experience in Object Detection, NLP, and Full-Stack System
                Design. Passionate about academic mentorship and assisting peers
                in understanding complex CS concepts.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 text-sm">
                <div>
                  <span className="text-muted font-medium">Location</span>
                  <p className="text-slate-800">Dhaka, Bangladesh</p>
                </div>
                <div>
                  <span className="text-muted font-medium">University</span>
                  <p className="text-slate-800">East West University</p>
                </div>
                <div>
                  <span className="text-muted font-medium">Email</span>
                  <p className="text-slate-800">shahriarsadik@gmail.com</p>
                </div>
                <div>
                  <span className="text-muted font-medium">Status</span>
                  <p className="text-slate-800">Undergraduate (Jan 2023 \u2013 Present)</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
