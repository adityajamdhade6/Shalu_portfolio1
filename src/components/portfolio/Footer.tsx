
const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-5 md:px-12 py-6 md:py-8 border-t border-border gap-4">
      <div className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted-foreground">
        <span>SHALU SHARMA · PORTFOLIO 2026</span>
      </div>

      {/* Social links */}
      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/shalu-sharmas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          LINKEDIN
        </a>
        <a
          href="https://docs.google.com/document/d/1oMUCVPtf_h7XkzhIEf8-v1Ooc7hoHuQTXJ7aj13BqCc/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          ↓ RESUME
        </a>
      </div>
      
      <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground">
        © 2026 SHALU SHARMA · ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;


