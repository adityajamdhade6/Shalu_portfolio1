import { Link, useLocation } from "react-router-dom";
import { MapPin, Briefcase, GraduationCap, ExternalLink, Code2, Mail, FileText, User, FolderOpen, Sparkles } from "lucide-react";
const Linkedin = ExternalLink;
const Github = Code2;

const ProfileSidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Profile", icon: User },
    { path: "/work", label: "Portfolio", icon: FolderOpen },
  ];

  return (
    <aside className="profile-sidebar w-full lg:w-80 lg:min-h-screen lg:sticky lg:top-0 flex flex-col p-6 border-r border-border/50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="blob w-40 h-40 -top-20 -left-20 bg-accent-violet opacity-20" />
      <div className="blob w-32 h-32 top-1/2 -right-16 bg-accent-cyan opacity-15" style={{ animationDelay: '2s' }} />
      
      {/* Profile Photo */}
      <div className="flex flex-col items-center text-center mb-8 relative z-10">
        <div className="relative mb-4 group">
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-accent-violet to-accent-cyan p-0.5 rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center text-4xl font-display font-bold gradient-text">
              A
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 status-badge animate-bounce-slow">
            <Sparkles size={10} />
            Open to Work
          </div>
        </div>
        
        <h2 className="text-2xl font-display font-bold mt-4 gradient-text">Aditya</h2>
        <p className="text-sm text-muted-foreground">@aditya</p>
        
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-3">
          <MapPin size={14} className="text-accent-pink" />
          <span>India</span>
        </div>
        
        <p className="text-sm font-medium text-muted-foreground mt-3 px-4">
          UI/UX Designer & <span className="text-accent-cyan">Data Enthusiast</span>
        </p>
      </div>
      
      {/* Experience Pills */}
      <div className="flex flex-col items-center mb-8 relative z-10">
        <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Experience</p>
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center group hover:scale-110 transition-transform cursor-pointer">
            <GraduationCap size={18} className="text-accent-violet group-hover:text-accent-cyan transition-colors" />
          </div>
          <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center group hover:scale-110 transition-transform cursor-pointer">
            <Briefcase size={18} className="text-accent-green group-hover:text-accent-pink transition-colors" />
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/50" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-sidebar px-3 text-xs text-muted-foreground uppercase tracking-wider">Navigate</span>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-2 relative z-10">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path === '/work' && (location.pathname.startsWith('/case-study') || location.pathname.startsWith('/iit') || location.pathname.startsWith('/colab') || location.pathname.startsWith('/graphic-design') || location.pathname.startsWith('/live-projects')));
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 group relative overflow-hidden ${
                isActive
                  ? "bg-gradient-to-r from-accent-violet to-accent-cyan text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground glass-card"
              }`}
            >
              <Icon size={18} className={isActive ? "animate-bounce-slow" : "group-hover:scale-110 transition-transform"} />
              {item.label}
              {isActive && (
                <span className="absolute right-4 w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>
      
      {/* Social Links */}
      <div className="mt-auto pt-8 relative z-10">
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-sidebar px-3 text-xs text-muted-foreground uppercase tracking-wider">Connect</span>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          {[
            { icon: Linkedin, href: "#", color: "hover:text-accent-blue hover:border-accent-blue/50" },
            { icon: Github, href: "#", color: "hover:text-accent-violet hover:border-accent-violet/50" },
            { icon: Mail, href: "mailto:contact@aditya.com", color: "hover:text-accent-pink hover:border-accent-pink/50" },
            { icon: FileText, href: "#", color: "hover:text-accent-cyan hover:border-accent-cyan/50" },
          ].map(({ icon: Icon, href, color }, index) => (
            <a 
              key={index}
              href={href} 
              className={`w-10 h-10 rounded-xl glass-card flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;


