export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-sm text-muted">
          Rushikesh Kanfade<span className="text-accent">.</span>
        </p>
        <p className="font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} — Built with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
