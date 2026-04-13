import AnimatedSection from "@/components/AnimatedSection";

const educationData = [
  {
    title: "UG IN ENTREPRENEURSHIP",
    institution: "INSTITUTE OF VENTURE BUILDING",
    period: "2025-28",
  },
  {
    title: "BBA IN ENTREPRENEURSHIP",
    institution: "SRM INSTITUTE OF SCIENCE TECHNOLOGY",
    period: "2025-28",
  },
];

const experienceData = [
  {
    company: "WHITELINES",
    role: "PROGRAM DESIGNER · CONTRACT",
    period: "DEC 2025-JAN 2026",
  },
];

const RightSection = () => {
  return (
    <div className="flex flex-col lg:pl-8">
      {/* Education Section */}
      <div className="mb-8">
        <AnimatedSection animation="slide-left">
          <span className="section-label mb-4 block">[EDUCATION]</span>
        </AnimatedSection>
        
        <div className="space-y-4">
          {educationData.map((item, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <div>
                  <h3 className="text-xs font-bold tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground tracking-wide uppercase mt-0.5">
                    {item.institution}
                  </p>
                </div>
                <span className="text-xs tracking-wide text-muted-foreground sm:text-foreground sm:whitespace-nowrap mt-1 sm:mt-0">
                  {item.period}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      {/* Experience Section */}
      <div>
        <AnimatedSection animation="slide-left" delay="200">
          <span className="section-label mb-4 block">[EXPERIENCE]</span>
        </AnimatedSection>
        
        <div className="space-y-4">
          {experienceData.map((item, index) => (
            <AnimatedSection 
              key={index} 
              animation="fade-up" 
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4">
                <div>
                  <h3 className="text-xs font-bold tracking-wide uppercase">
                    {item.company}
                  </h3>
                  <p className="text-xs text-muted-foreground tracking-wide uppercase mt-0.5">
                    {item.role}
                  </p>
                </div>
                <span className="text-xs tracking-wide text-muted-foreground sm:text-foreground sm:whitespace-nowrap mt-1 sm:mt-0">
                  {item.period}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSection;

