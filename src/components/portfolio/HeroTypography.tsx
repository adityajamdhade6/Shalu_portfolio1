import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroTypography = () => {
  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="blob w-96 h-96 -top-48 right-0 bg-accent-violet opacity-10" />
      <div className="blob w-80 h-80 bottom-0 left-1/4 bg-accent-cyan opacity-10" style={{ animationDelay: '3s' }} />
      <div className="blob w-64 h-64 top-1/2 right-1/4 bg-accent-pink opacity-10" style={{ animationDelay: '5s' }} />
      
      <div className="max-w-5xl relative z-10">
        {/* Intro badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-up">
          <Sparkles size={14} className="text-accent-violet animate-pulse" />
          <span className="text-sm text-muted-foreground">Welcome to my creative space</span>
        </div>
        
        {/* Main Typography */}
        <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter leading-[0.85]">
          <span className="block overflow-hidden">
            <span className="inline-block animate-text-reveal gradient-text-pink italic">design</span>
          </span>
          <span className="flex items-center gap-4 md:gap-8 overflow-hidden">
            <span className="inline-block animate-text-reveal animate-delay-100">makes</span>
            <span className="inline-block w-24 h-16 md:w-44 md:h-28 rounded-2xl overflow-hidden animated-gradient-border float animate-scale-in animate-delay-200">
              <img 
                src="https://framerusercontent.com/images/z3XlbAXnkrK88Zsi6aXz9l6fhs.gif"
                alt="Coding animation"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="inline-block animate-text-reveal animate-delay-300">tech</span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-text-reveal animate-delay-400 gradient-text italic">edible!</span>
          </span>
        </h1>
        
        {/* Subtitle */}
        <div className="flex items-start gap-8 mt-12 animate-fade-up animate-delay-500">
          <div className="max-w-md">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              And that gives me <span className="text-foreground font-semibold">kick</span> every morning!
              <Zap className="inline-block ml-2 text-accent-orange" size={20} />
            </p>
            <p className="text-muted-foreground mt-4">
              I craft digital experiences that blend aesthetics with functionality.
            </p>
          </div>
          
          <Link 
            to="/work"
            className="group hidden md:flex items-center gap-3 px-6 py-4 rounded-2xl glass-card hover:bg-accent-violet/20 transition-all duration-300"
          >
            <span className="text-sm font-medium">View my work</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fade-up animate-delay-600">
          {[
            { value: "3+", label: "Years Experience" },
            { value: "50+", label: "Projects Completed" },
            { value: "20+", label: "Happy Clients" },
            { value: "∞", label: "Cups of Coffee" },
          ].map((stat, index) => (
            <div 
              key={index}
              className="glass-card card-shine p-6 rounded-2xl text-center group cursor-default"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <p className="text-3xl md:text-4xl font-display font-bold gradient-text group-hover:scale-110 transition-transform">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroTypography;


