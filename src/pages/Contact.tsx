import { useState } from "react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import SkillsMarquee from "@/components/portfolio/SkillsMarquee";
import AnimatedSection from "@/components/AnimatedSection";
import useSEO from "@/hooks/useSEO";
import { toast } from "sonner";

const Contact = () => {
  useSEO({
    title: "Contact : Shalu Sharma : Get in Touch",
    description: "Reach out to Shalu Sharma for collaborations, strategy projects, or just to say hello. Entrepreneur, Strategist, and Digital Marketing professional.",
    keywords: "Contact, Shalu Sharma, Collaboration, Strategy, Digital Marketing",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:shalusharmas2805@gmail.com?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <div className="flex-1 px-5 md:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Let's Connect */}
          <div className="lg:col-span-3">
            <AnimatedSection animation="fade-up">
              <p className="section-label mb-6">[LET'S CONNECT]</p>
              <p className="text-xs uppercase tracking-wide leading-relaxed text-foreground mb-12">
                OPEN TO COLLABORATIONS, STRATEGY CONVERSATIONS, AND NEW IDEAS.
              </p>
              
              {/* Social Links */}
              <div className="space-y-2 mt-auto">
                <a 
                  href="mailto:shalusharmas2805@gmail.com" 
                  className="block text-xs uppercase tracking-[0.1em] hover:underline underline-offset-4"
                >
                  [EMAIL] shalusharmas2805@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/shalu-sharmas" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs uppercase tracking-[0.1em] hover:underline underline-offset-4"
                >
                  [LINKEDIN] shalu-sharmas
                </a>
                <a
                  href="https://docs.google.com/document/d/1oMUCVPtf_h7XkzhIEf8-v1Ooc7hoHuQTXJ7aj13BqCc/export?format=pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs uppercase tracking-[0.1em] hover:underline underline-offset-4 mt-1"
                >
                  [RESUME] ↓ Download
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Center Column - SAY HII */}
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-up" delay="100">
              <div className="border border-border p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight mb-2">SAY</h1>
                  <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight">HELLO.</h2>
                </div>

                {/* Quote card replacing emoji */}
                <div className="border border-border p-6 mt-8">
                  <p className="font-mono text-sm md:text-base leading-snug tracking-tight mb-4">
                    “The best ideas come from conversations : not presentations.”
                  </p>
                </div>

                <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-6">
                  INDIA · OPEN TO REMOTE
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-4">
            <AnimatedSection animation="fade-up" delay="200">
              <p className="section-label mb-4">[REACH OUT]</p>
              <p className="text-xs uppercase tracking-wide leading-relaxed text-foreground mb-8">
                I'D LOVE TO HEAR FROM YOU. WHETHER YOU'RE LOOKING TO COLLABORATE, DISCUSS A PROJECT, OR SIMPLY SAY HELLO.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.1em] mb-2">NAME*</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full bg-transparent border-b border-foreground py-2 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/50 font-mono"
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-[0.1em] mb-2">EMAIL*</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@gmail.com"
                    required
                    className="w-full bg-transparent border-b border-foreground py-2 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/50 font-mono"
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-[0.1em] mb-2">PHONE</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone number"
                    className="w-full bg-transparent border-b border-foreground py-2 text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/50 font-mono"
                  />
                </div>
                
                <div>
                  <label className="block text-xs uppercase tracking-[0.1em] mb-2">MESSAGE*</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What's on your mind?"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-foreground py-2 text-sm focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-foreground/50 font-mono"
                  />
                </div>
                
                <h3 className="font-mono font-bold text-sm tracking-widest uppercase mt-8 mb-4">
                  LET'S BUILD SOMETHING MEANINGFUL
                </h3>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 border border-foreground text-xs uppercase font-bold tracking-[0.15em] hover:bg-foreground hover:text-background transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <SkillsMarquee />
      <Footer />
    </main>
  );
};

export default Contact;
