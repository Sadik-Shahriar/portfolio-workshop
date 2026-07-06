import { useState, useEffect } from "react";

const lines = [
  { text: "./profile --stats", prompt: "$ " },
  { text: "CGPA       3.99 / 4.00", prompt: "> " },
  { text: "A+         27 courses", prompt: "> " },
  { text: "Scholarship 100% Merit", prompt: "> " },
  { text: "Dean\u2019s List Every Semester", prompt: "> " },
  { text: "Focus      ML / CV / NLP", prompt: "> " },
];

const TYPING_SPEED = 30;
const LINE_DELAY = 600;

export default function Terminal() {
  const [started, setStarted] = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const currentLine = lines[currentLineIdx];
  const typedText = currentLine?.text.slice(0, currentCharIdx) ?? "";
  const finished = currentLineIdx >= lines.length;

  useEffect(() => {
    if (!started || currentLineIdx >= lines.length) return;

    const line = lines[currentLineIdx];

    if (currentCharIdx < line.text.length) {
      const timer = setTimeout(() => {
        setCurrentCharIdx((c) => c + 1);
      }, TYPING_SPEED + Math.random() * 20);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleLines((prev) => [...prev, currentLineIdx]);
      setCurrentLineIdx((i) => i + 1);
      setCurrentCharIdx(0);
    }, LINE_DELAY);
    return () => clearTimeout(timer);
  }, [started, currentLineIdx, currentCharIdx]);

  return (
    <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 sm:p-6 font-mono text-sm w-full max-w-lg mx-auto text-left">
      {visibleLines.map((lineIdx) => (
        <div key={lineIdx} className="text-slate-300 animate-terminal-line">
          <span className="text-primary-light">{lines[lineIdx].prompt}</span>
          {lines[lineIdx].text}
        </div>
      ))}
      {started && !finished && (
        <div className="text-slate-300 animate-terminal-line">
          <span className="text-primary-light">{currentLine.prompt}</span>
          {typedText}
          {!finished && (
            <span className="inline-block w-2 h-[1.1em] bg-primary-light align-middle ml-0.5 animate-cursor-blink" />
          )}
        </div>
      )}
      {!started && (
        <div className="text-slate-500">
          <span className="text-primary-light">$ </span>
          <span className="inline-block w-2 h-[1.1em] bg-primary-light align-middle ml-0.5 animate-cursor-blink" />
        </div>
      )}
      {finished && (
        <div className="text-green-400/80 text-xs mt-3 animate-terminal-line">
          &check; Profile loaded. Ready for opportunities.
        </div>
      )}
    </div>
  );
}
