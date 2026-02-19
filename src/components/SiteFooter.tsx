import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="bg-nav py-8 mt-12">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <p className="font-display text-lg text-nav-foreground mb-2">
        Filosofisk Forum
      </p>
      <div className="flex justify-center space-x-4 text-xs text-nav-foreground/60">
        <Link to="/kontakt" className="hover:text-nav-hover transition-colors">
          Kontakt
        </Link>
        <Link to="/bliv-medlem" className="hover:text-nav-hover transition-colors">
          Bliv Medlem
        </Link>
        <a
          href="https://www.facebook.com/groups/155537601124000/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-nav-hover transition-colors"
        >
          Facebook
        </a>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
