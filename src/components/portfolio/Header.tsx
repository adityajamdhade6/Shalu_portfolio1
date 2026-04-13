import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import sanghLogo from "@/assets/shalu-logo.png";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isWorkPage = location.pathname === '/work' || location.pathname.startsWith('/case-study') || location.pathname.startsWith('/iit') || location.pathname.startsWith('/colab') || location.pathname.startsWith('/graphic-design') || location.pathname.startsWith('/live-projects');
  const isAboutPage = location.pathname === '/about' || location.pathname === '/';
  const isContactPage = location.pathname === '/contact';

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toUpperCase();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between px-4 md:px-12 py-4 md:py-6 sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-[12px] bg-background/80 border-b border-foreground/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <Link to="/" className="flex items-center">
        <img 
          src={sanghLogo} 
          alt="Sangh Logo" 
          className="h-14 w-auto object-contain dark:invert" 
        />
      </Link>
      
      <nav className="flex items-center gap-4 md:gap-8">
        <Link 
          to="/" 
          className={`nav-link-hover text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${isAboutPage ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
        >
          ABOUT.
        </Link>
        <Link 
          to="/work" 
          className={`nav-link-hover text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${isWorkPage ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
        >
          WORK.
        </Link>
        <Link 
          to="/contact" 
          className={`nav-link-hover text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${isContactPage ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
        >
          CONTACT.
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <span className="text-xs tracking-[0.1em] text-muted-foreground hidden md:block">
          {currentDate}
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;


