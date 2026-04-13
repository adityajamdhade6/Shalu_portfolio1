import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import SkillsMarquee from "@/components/portfolio/SkillsMarquee";
import RightSection from "@/components/portfolio/RightSection";
import AnimatedSection from "@/components/AnimatedSection";
import useSEO from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Shalu Sharma : Entrepreneur · Strategist · Digital Marketing",
    description: "Portfolio of Shalu Sharma : Entrepreneur, Strategist, and Digital Marketing professional. Turning complex ideas into clear strategy, products, and learning systems.",
    keywords: "Entrepreneur, Strategist, Digital Marketing, Product Thinking, Behavioral Systems, Learning Design",
  });

  const helloText = "HELLO!";
  const nameText = "I'M SHALU SHARMA";

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 px-5 md:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6">

          {/* LEFT COLUMN — Who Am I + CTA */}
          <div className="lg:col-span-3 lg:order-1 order-2 mt-2 lg:mt-0">
            <AnimatedSection animation="slide-left">
              <p className="section-label mb-6">[WHO AM I?]</p>
              <div className="text-xs leading-relaxed uppercase tracking-wide text-foreground space-y-4">
                {[
                  "I STUDY HOW IDEAS BECOME BEHAVIOR IN THE REAL WORLD : WHY PEOPLE BUY, HOW IDEAS SPREAD, AND HOW DECISIONS ARE MADE INSIDE SYSTEMS."
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
              <a
                href="/work"
                className="resume-btn inline-block mt-8 w-full text-center py-3 border-2 border-foreground text-xs tracking-[0.15em] uppercase rounded-[2px] relative overflow-hidden transition-colors duration-300"
              >
                <span className="resume-btn-text relative z-10">MY WORK</span>
              </a>
              <a
                href="https://docs.google.com/document/d/1oMUCVPtf_h7XkzhIEf8-v1Ooc7hoHuQTXJ7aj13BqCc/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors duration-200"
              >
                ↓ MY RESUME
              </a>
            </AnimatedSection>
          </div>

          {/* CENTER COLUMN — Hero Card */}
          <div className="lg:col-span-5 lg:order-2 order-1">
            <div className="border border-border p-6 sm:p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden hero-grain min-h-[400px]">

              {/* Top: HELLO! + Name */}
              <div>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none overflow-hidden text-ellipsis">
                  {helloText.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </h1>

                <motion.h2
                  className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mt-2 break-words"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: helloText.length * 0.06 + 0.4, duration: 0.5, ease: "easeOut" }}
                >
                  {nameText}
                </motion.h2>
              </div>

              {/* Bottom: tagline */}
              <motion.div
                className="mt-12 text-xs tracking-[0.15em] uppercase text-muted-foreground space-y-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: helloText.length * 0.06 + 0.9, duration: 0.5 }}
              >
                <p>IDEAS INTO STRATEGY.</p>
                <p className="inline">STRATEGY INTO IMPACT.<span className="blinking-caret" /></p>
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN — Education / Experience */}
          <div className="lg:col-span-4 lg:order-3 order-3 mt-4 lg:mt-0">
            <RightSection />
          </div>

        </div>
      </div>

      <SkillsMarquee />
      <Footer />
    </main>
  );
};

export default Index;
