import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import RightSection from "./RightSection";

const MainContent = () => {
  return (
    <section className="flex-1 px-8 py-8">
      {/* Mobile Layout - Hero first */}
      <div className="lg:hidden flex flex-col gap-12">
        <HeroSection />
        <AboutSection />
        <RightSection />
      </div>
      
      {/* Desktop Layout - 3 columns */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr_1fr] gap-0">
        <AboutSection />
        <HeroSection />
        <RightSection />
      </div>
    </section>
  );
};

export default MainContent;

