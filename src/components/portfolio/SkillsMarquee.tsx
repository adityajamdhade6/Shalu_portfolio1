const SkillsMarquee = () => {
  const text = "STRATEGY · PRODUCT · LEARNING DESIGN · BRAND · AI · IDEAS THAT WORK IN PRACTICE";
  
  return (
    <div className="px-6 md:px-12 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">
        <div className="hidden lg:block lg:col-span-3" />
        
        <div className="lg:col-span-5">
          <div className="group relative overflow-hidden cursor-pointer transition-colors duration-300 bg-transparent hover:bg-foreground border border-border hover:border-foreground marquee-hover-pause">
            <div className="marquee-inline py-6">
              <div className="marquee-content-slow">
                {[...Array(8)].map((_, index) => (
                  <span key={index} className="flex items-center mx-8">
                    <span className="text-foreground group-hover:text-background text-2xl md:text-3xl tracking-[0.15em] uppercase whitespace-nowrap font-serif transition-colors duration-300">
                      {text}
                    </span>
                    <span className="mx-6 text-foreground group-hover:text-background text-lg transition-colors duration-300">◆</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block lg:col-span-4" />
      </div>
    </div>
  );
};

export default SkillsMarquee;


