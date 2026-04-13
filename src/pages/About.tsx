import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import SkillsMarquee from "@/components/portfolio/SkillsMarquee";
import AnimatedSection from "@/components/AnimatedSection";
import RightSection from "@/components/portfolio/RightSection";

const About = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 px-8 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - What Do I Do */}
          <div className="lg:col-span-3">
            <AnimatedSection animation="fade-up">
              <p className="section-label mb-6">[WHAT DO I DO?]</p>
              <p className="text-xs uppercase tracking-wide leading-relaxed text-foreground mb-4">
                I STUDY HOW IDEAS BECOME BEHAVIOR IN THE REAL WORLD : WHY PEOPLE BUY, HOW IDEAS SPREAD, AND HOW DECISIONS ARE MADE INSIDE SYSTEMS.
              </p>
              <p className="text-xs uppercase tracking-wide leading-relaxed text-foreground mb-12">
                MY WORK SITS ACROSS RETAIL, CAFÉS, EDUCATION, FINTECH, AND AI TOOLS : TURNING COMPLEX IDEAS INTO CLEAR STRATEGY, PRODUCTS, AND LEARNING SYSTEMS. I ENJOY WORKING ON MESSY PROBLEMS AND BUILDING THINGS THAT ACTUALLY WORK IN PRACTICE.
              </p>
              
              <Link 
                to="/work"
                className="block w-full py-4 border border-foreground text-center text-xs tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                MY PROJECTS
              </Link>
              <a
                href="https://docs.google.com/document/d/1oMUCVPtf_h7XkzhIEf8-v1Ooc7hoHuQTXJ7aj13BqCc/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 border border-foreground text-center text-xs tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors mt-3"
              >
                ↓ MY RESUME
              </a>
            </AnimatedSection>
          </div>

          {/* Center Column - Here's What I Do */}
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-up" delay="100">
              <div className="border border-border p-6 md:p-8 h-full flex flex-col">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none mb-6 md:mb-8">
                  HERE'S<br />
                  WHAT I DO.
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-border p-5 flex flex-col justify-between hover:border-foreground transition-colors duration-300">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-3">01 / STRATEGY</p>
                    <div>
                      <p className="font-serif text-2xl tracking-tight leading-tight mb-2">Market & Business Analysis</p>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground leading-relaxed">Retail · Fintech · Consumer · Edtech</p>
                    </div>
                  </div>
                  <div className="border border-border p-5 flex flex-col justify-between hover:border-foreground transition-colors duration-300">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-3">02 / SYSTEMS</p>
                    <div>
                      <p className="font-serif text-2xl tracking-tight leading-tight mb-2">Brand & Learning Design</p>
                      <p className="text-[10px] uppercase tracking-wide text-muted-foreground leading-relaxed">Positioning · Curriculum · AI Tools</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-[0.1em]">STRATEGY FIRST.</p>
                  <p className="text-xs uppercase tracking-[0.1em]">IMPACT ALWAYS.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Education, Experience, Tools, Focus */}
          <div className="lg:col-span-4 space-y-10">
            {/* Education & Experience */}
            <RightSection />
            
            <AnimatedSection animation="fade-up" delay="300">
              {/* Tools */}
              <div>
                <p className="section-label mb-4">[TOOLS]</p>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide">FIGMA</p>
                  <p className="text-xs uppercase tracking-wide">NOTION</p>
                  <p className="text-xs uppercase tracking-wide">CANVA</p>
                  <p className="text-xs uppercase tracking-wide">GOOGLE WORKSPACE</p>
                  <p className="text-xs uppercase tracking-wide">CHATGPT & AI TOOLS</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay="400">
              {/* Focus */}
              <div>
                <p className="section-label mb-4">[FOCUS]</p>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wide">MARKETING STRATEGY</p>
                  <p className="text-xs uppercase tracking-wide">PRODUCT THINKING</p>
                  <p className="text-xs uppercase tracking-wide">BEHAVIORAL SYSTEMS</p>
                  <p className="text-xs uppercase tracking-wide">LEARNING DESIGN</p>
                  <p className="text-xs uppercase tracking-wide">BRAND POSITIONING</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <SkillsMarquee />
      <Footer />
    </main>
  );
};

export default About;
