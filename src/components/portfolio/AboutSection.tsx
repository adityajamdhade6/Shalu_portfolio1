import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:pr-8">
      <AnimatedSection animation="slide-right">
        <span className="section-label mb-6">[WHO AM I?]</span>
      </AnimatedSection>
      
      <div className="space-y-4 text-xs leading-relaxed tracking-wide uppercase">
        <AnimatedSection animation="fade-up" delay="100">
          <p>
            I'M ADITYA. I BEGAN WITH SCIENCE AND COMPETITIVE EXAMS, BUT OVER TIME I BECAME MORE CURIOUS ABOUT HOW REAL-WORLD SYSTEMS ACTUALLY WORK. THAT CURIOSITY LED ME TO DATA, ANALYTICS, UI/UX, AND EVENTUALLY STARTUPS.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay="200">
          <p className="text-muted-foreground">
            I ENJOY WORKING WHERE LOGIC AND DESIGN MEET:UNDERSTANDING PROBLEMS, STRUCTURING DATA, AND BUILDING SIMPLE, USABLE EXPERIENCES. FROM ML AND ANALYTICS PROJECTS TO EARLY-STAGE FINTECH WORK AND UI/UX EXPLORATION, I'VE LEARNED THE MOST BY BUILDING THINGS FROM SCRATCH.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay="300">
          <p className="text-muted-foreground">
            RIGHT NOW, I'M FOCUSED ON LEARNING BY DOING AND EXPLORING HOW TECHNOLOGY, DESIGN, AND BUSINESS COME TOGETHER TO CREATE PRACTICAL PRODUCTS.
          </p>
        </AnimatedSection>
      </div>
      
      <AnimatedSection animation="fade-up" delay="400" className="mt-8 lg:mt-auto pt-4 lg:pt-8">
        <a
          href="#"
          className="block w-full py-3 text-center text-xs tracking-[0.15em] uppercase border border-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          MY RESUME
        </a>
      </AnimatedSection>
    </div>
  );
};

export default AboutSection;

