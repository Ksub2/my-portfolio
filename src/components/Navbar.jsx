import { useEffect } from "react";

const SunIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <circle cx="12" cy="12" r="4" />
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="1" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="23" />
      <line x1="1" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </g>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
  </svg>
);

export const Navbar = ({ menuOpen, setMenuOpen, theme, setTheme }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[var(--nav-background)] backdrop-blur-lg border-b border-[var(--nav-border)] shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-[var(--foreground)]">
            Keshab<span className="text-blue-500"> Dahal.</span>
          </a>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-transparent text-[var(--foreground)] transition hover:bg-[var(--icon-hover)] hover:ring-2 hover:ring-[var(--icon-ring)]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-transparent text-[var(--foreground)] transition hover:bg-[var(--icon-hover)] hover:ring-2 hover:ring-[var(--icon-ring)]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              Home
            </a>
            <a href="#about" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              About
            </a>
            <a href="#projects" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
              Contact
            </a>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-transparent text-[var(--foreground)] transition hover:bg-[var(--icon-hover)] hover:ring-2 hover:ring-[var(--icon-ring)]"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
