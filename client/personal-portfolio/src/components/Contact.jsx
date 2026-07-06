import { useState } from "react";
import Reveal from "./Reveal";

const API_URL = import.meta.env.VITE_API_URL;

function MailIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [errorText, setErrorText] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorText("All fields are required.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("error");
      setErrorText("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorText(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorText("Could not reach the server. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-800 mb-12">
            Contact
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-5 gap-10">
          <Reveal className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm bg-surface border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-500 mt-2">{errorText}</p>
              )}
              {status === "success" && (
                <p className="text-sm text-green-600 mt-2">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal className="md:col-span-2">
            <div className="bg-surface border border-border rounded-xl p-6 space-y-5">
              <div>
                <h3 className="font-display text-xs font-semibold text-slate-800 uppercase tracking-widest mb-3">
                  Get in touch
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  I'm always open to discussing new projects, research
                  collaborations, or mentorship opportunities.
                </p>
              </div>
              <div className="space-y-3">
                <a
                  href="mailto:shahriarsadik@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-primary transition-colors"
                >
                  <span className="text-muted">
                    <MailIcon />
                  </span>
                  shahriarsadik@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/sadik-shahriar-296b892a4"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-primary transition-colors"
                >
                  <span className="text-muted">
                    <LinkedinIcon />
                  </span>
                  linkedin.com/in/sadik-shahriar
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
