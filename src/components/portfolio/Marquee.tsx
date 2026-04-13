const Marquee = () => {
  const items = [
    "UI/UX Design",
    "•",
    "Data Analytics", 
    "•",
    "Machine Learning",
    "•",
    "Product Design",
    "•",
    "Python",
    "•",
    "Figma",
    "•",
  ];
  
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <section className="py-6 overflow-hidden border-y border-border/50 bg-card/30">
      <div className="marquee-container">
        <div className="marquee flex items-center gap-8">
          {repeatedItems.map((item, index) => (
            <span 
              key={index} 
              className={`text-lg font-medium whitespace-nowrap ${
                item === "•" ? "text-muted-foreground/30" : "text-muted-foreground"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;


