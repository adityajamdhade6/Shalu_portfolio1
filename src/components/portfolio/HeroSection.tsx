import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 lg:py-24 relative">
      {/* Decorative color dots */}
      <div className="absolute top-20 left-[20%] flex gap-1.5">
        <span className="color-dot dot-blue"></span>
        <span className="color-dot dot-green"></span>
        <span className="color-dot dot-yellow"></span>
        <span className="color-dot dot-red"></span>
      </div>
      <div className="absolute top-32 right-[25%] flex gap-1.5">
        <span className="color-dot dot-purple"></span>
        <span className="color-dot dot-orange"></span>
        <span className="color-dot dot-blue"></span>
      </div>
      
      {/* Main hero content */}
      <div className="text-center max-w-4xl">
        <AnimatedSection animation="fade-up">
          <p className="text-muted-foreground text-lg mb-4">hello i'm</p>
        </AnimatedSection>
        
        <AnimatedSection animation="scale-in" delay="100">
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter">
            Aditya
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay="200">
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="sticker">UI/UX Designer</span>
            <span className="sticker" style={{ transform: 'rotate(2deg)', background: 'hsl(142 70% 50%)' }}>Data Science</span>
            <span className="sticker" style={{ transform: 'rotate(-1deg)', background: 'hsl(217 91% 60%)', color: 'white' }}>IIT Jodhpur</span>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay="300">
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            I create experiences that blend design thinking with data-driven insights
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay="400">
          <Link 
            to="/work"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all duration-300 group"
          >
            View my work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default HeroSection;


