import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Reveal({ children, className = "" }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
