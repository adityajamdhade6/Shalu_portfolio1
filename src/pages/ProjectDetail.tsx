import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import { projectsData } from "@/data/projectsData";

// Thumbnail imports : same as Work.tsx
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

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  // Scroll to top on enter
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-background">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">
          PROJECT NOT FOUND
        </p>
        <Link
          to="/work"
          className="text-xs tracking-[0.12em] uppercase underline underline-offset-4"
        >
          ← BACK TO WORK
        </Link>
      </main>
    );
  }

  const thumbnail = thumbnailMap[project.id];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      <div className="flex-1 px-5 md:px-12 py-8 md:py-10">

        {/* Back link */}
        <motion.div {...fadeUp} transition={{ duration: 0.4 }}>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors group mb-12"
          >
            <ArrowLeft
              size={13}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            [BACK TO CASE STUDIES]
          </button>
        </motion.div>

        {/* Header block */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground mb-3">
            {project.category}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-8 max-w-4xl">
            {project.title}
          </h1>

          {/* Metadata row : wraps on mobile */}
          <div className="flex flex-wrap gap-x-6 gap-y-4 border-t border-b border-border py-5 mb-10 md:mb-16">
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                [ROLE]
              </p>
              <p className="text-xs tracking-[0.1em] uppercase font-medium">
                {project.role}
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                [YEAR]
              </p>
              <p className="text-xs tracking-[0.1em] uppercase font-medium">
                {project.year}
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                [CATEGORY]
              </p>
              <p className="text-xs tracking-[0.1em] uppercase font-medium">
                {project.category}
              </p>
            </div>
            <div className="ml-0 md:ml-auto flex items-end mt-1">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase underline underline-offset-4 hover:opacity-70 transition-opacity"
              >
                {project.linkLabel} <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20">

          {/* Left: Overview */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label mb-5">[PROJECT OVERVIEW]</p>
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-10">
              {project.overview}
            </p>

            {/* What I did */}
            <p className="section-label mb-5">[WHAT I DID]</p>
            <ul className="space-y-4">
              {project.whatIDid.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4 border-b border-border pb-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                >
                  <span className="text-[10px] tracking-widest text-muted-foreground mt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs uppercase tracking-wide leading-relaxed">
                    {item}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Outcomes + Tags + CTA */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Outcomes */}
            <div className="border border-border p-6 mb-8">
              <p className="section-label mb-5">[KEY OUTCOMES]</p>
              <ul className="space-y-3">
                {project.outcomes.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <span className="text-foreground mt-0.5 flex-shrink-0">→</span>
                    <p className="text-xs uppercase tracking-wide leading-relaxed text-foreground">
                      {item}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mb-10">
              <p className="section-label mb-4">[TAGS]</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.12em] uppercase border border-border px-3 py-1.5 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Live project CTA */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn flex items-center justify-center gap-3 w-full py-4 border-2 border-foreground text-xs tracking-[0.18em] uppercase relative overflow-hidden transition-colors duration-300 group"
            >
              <span className="resume-btn-text relative z-10">{project.linkLabel}</span>
              <ExternalLink
                size={11}
                className="relative z-10 group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </div>

        {/* Next project navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-border pt-10 flex items-center justify-between"
        >
          <Link
            to="/work"
            className="text-xs tracking-[0.12em] uppercase text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={12} />
            ALL PROJECTS
          </Link>

          {/* Next project */}
          {(() => {
            const currentIndex = projectsData.findIndex((p) => p.id === project.id);
            const next = projectsData[(currentIndex + 1) % projectsData.length];
            return (
              <Link
                to={`/work/${next.id}`}
                className="text-right group"
              >
                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                  NEXT PROJECT
                </p>
                <p className="text-xs tracking-[0.08em] font-medium group-hover:underline underline-offset-4 transition-all">
                  {next.title} →
                </p>
              </Link>
            );
          })()}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
