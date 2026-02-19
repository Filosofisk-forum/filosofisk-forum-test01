import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const navItems = [
  { label: "Om Filosofisk Forum", path: "/om" },
  { label: "Kontakt", path: "/kontakt" },
  { label: "Bliv Medlem", path: "/bliv-medlem" },
  { label: "Aktuelt Program", path: "/program" },
  { label: "Bestyrelse", path: "/bestyrelse" },
];

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header>
      {/* Hero Banner */}
      <div className="relative h-28 md:h-40 overflow-hidden">
        <img
          src={heroBanner}
          alt="Filosofisk Forum banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.6)] flex items-center justify-center">
          <h1 className="font-display text-3xl md:text-5xl tracking-wider text-primary-foreground drop-shadow-lg">
            Filosofisk Forum
          </h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-nav">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between md:justify-start">
            <Link
              to="/"
              className="py-3 text-nav-foreground font-display text-sm font-bold hover:text-nav-hover transition-colors md:mr-6"
            >
              Filosofisk Forum
            </Link>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-nav-foreground p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-3 text-xs uppercase tracking-wider transition-colors ${
                    location.pathname === item.path
                      ? "text-nav-hover"
                      : "text-nav-foreground hover:text-nav-hover"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile nav */}
          {menuOpen && (
            <div className="md:hidden pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 text-sm transition-colors ${
                    location.pathname === item.path
                      ? "text-nav-hover"
                      : "text-nav-foreground hover:text-nav-hover"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
