import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import SkillsMarquee from "@/components/portfolio/SkillsMarquee";
import AnimatedSection from "@/components/AnimatedSection";
import useSEO from "@/hooks/useSEO";
import { projectsData } from "@/data/projectsData";

// Thumbnails
import thumbRetail from "@/assets/thumb-retail-immersion.jpeg";
import thumbPerkBrew from "@/assets/thumb-perk-brew.png";
import thumbCyberkido from "@/assets/thumb-cyberkido.png";
import thumbAiFuel from "@/assets/thumb-ai-fuel.jpeg";
import thumbStudentCredit from "@/assets/thumb-student-credit.jpeg";
import thumbBeastLife from "@/assets/thumb-beast-life.png";
import thumbLiveLuxe from "@/assets/thumb-live-luxe.jpeg";
import thumbSylphee from "@/assets/thumb-sylphee.png";
import thumbAiArtifact from "@/assets/thumb-ai-artifact.png";

const thumbnailMap: Record<string, string> = {
  "retail-immersion": thumbRetail,
  "perk-brew": thumbPerkBrew,
  "cyberkido": thumbCyberkido,
  "ai-fuel": thumbAiFuel,
  "student-microcredit": thumbStudentCredit,
  "beast-life": thumbBeastLife,
  "live-luxe": thumbLiveLuxe,
  "sylphee": thumbSylphee,
  "ai-artifact": thumbAiArtifact,
};

type FilterType = "all" | "strategy" | "ai" | "brand" | "finance";

const filterMap: Record<FilterType, string[]> = {
  all: [],
  strategy: ["RETAIL · BUSINESS", "BUSINESS · FINANCE", "AI · STRATEGY"],
  ai: ["AI · STRATEGY", "EDUCATION · AI", "AI · PRODUCT"],
  brand: ["BRAND · SKINCARE", "LIFESTYLE · BRAND", "CONSUMER · FITNESS"],
  finance: ["FINANCE · SOCIAL IMPACT", "BUSINESS · FINANCE"],
};

const Work = () => {
  useSEO({
    title: "Work : Shalu Sharma : Projects & Strategy",
    description: "Explore selected projects, case studies, and systems designed by Shalu Sharma. Covering strategy, AI, branding, and business analysis.",
    keywords: "Portfolio, Projects, Case Studies, Strategy, Work, Shalu Sharma",
  });

  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filtered =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) =>
          filterMap[activeFilter].some(
            (cat) =>
              p.category.includes(cat.split(" · ")[0]) || p.category === cat
          )
        );

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 px-5 md:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Title & Filters */}
          <div className="lg:col-span-3">
            <AnimatedSection animation="fade-up">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none mb-8 md:mb-12">
                MY
                <br />
                WORK.
              </h1>

              {/* Filters: vertical on md+, horizontal scroll on mobile */}
              <div className="flex flex-row flex-wrap md:flex-col gap-3 md:gap-3">
                {(
                  ["all", "strategy", "ai", "brand", "finance"] as FilterType[]
                ).map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`text-xs tracking-[0.1em] uppercase transition-colors whitespace-nowrap ${
                      activeFilter === f
                        ? "text-foreground underline underline-offset-4"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    [{f === "all" ? "ALL PROJECTS" : f.toUpperCase()}]
                  </button>
                ))}
              </div>

              <div className="mt-6 md:mt-12 text-xs text-muted-foreground uppercase tracking-wide">
                <p>{filtered.length} projects</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Projects Grid */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {filtered.map((project, index) => (
                <AnimatedSection
                  key={project.id}
                  animation="fade-up"
                  delay={
                    index === 0
                      ? "100"
                      : index === 1
                      ? "200"
                      : index === 2
                      ? "300"
                      : "400"
                  }
                >
                  <Link
                    to={`/work/${project.id}`}
                    className="group block border border-border hover:border-foreground transition-all duration-300 p-5 project-card h-full flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div className="overflow-hidden mb-5 bg-muted relative">
                      <img
                        src={thumbnailMap[project.id]}
                        alt={project.title}
                        loading="lazy"
                        className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                    </div>

                    {/* Card body */}
                    <div className="mb-5 flex-1 flex flex-col">
                      <h3 className="text-sm tracking-[0.15em] uppercase font-medium mb-1 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground">
                        {project.category}
                      </p>
                      
                      <p className="text-xs text-muted-foreground leading-relaxed mt-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="w-full py-3 border border-border text-center text-xs tracking-[0.2em] uppercase group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-colors mt-auto">
                      VIEW IN DETAIL
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SkillsMarquee />
      <Footer />
    </main>
  );
};

export default Work;
