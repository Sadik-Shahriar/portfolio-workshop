export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <p>&copy; {new Date().getFullYear()} Sadik Shahriar</p>
        <p>Built with React &middot; Tailwind &middot; Vite</p>
      </div>
    </footer>
  );
}
