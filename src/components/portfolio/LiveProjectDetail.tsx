import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

interface LiveProjectDetailProps {
  category: string;
  title: string;
  role: string;
  roleValue: string;
  company?: string;
  companyValue?: string;
  websiteLabel: string;
  websiteUrl: string;
  websiteLinkText: string;
  heroImage: string;
  introduction: string;
  roleDetails: string[];
  timeline: string;
  sections: {
    title: string;
    content: string;
  }[];
}

const LiveProjectDetail = ({
  category,
  title,
  role,
  roleValue,
  company,
  companyValue,
  websiteLabel,
  websiteUrl,
  websiteLinkText,
  heroImage,
  introduction,
  roleDetails,
  timeline,
  sections,
}: LiveProjectDetailProps) => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <article className="flex-1 px-8 md:px-16 lg:px-24 py-12">
        {/* Back Link */}
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity mb-12"
        >
          <ArrowLeft size={14} />
          [BACK TO LIVE PROJECTS]
        </Link>
        
        {/* Hero Section */}
        <div className="mb-8">
          <p className="section-label mb-4">{category}</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 uppercase">
            {title}
          </h1>
          
          <div className="flex flex-wrap gap-12 md:gap-24">
            <div>
              <p className="section-label mb-2">[{role}]</p>
              <p className="text-sm tracking-wide uppercase">{roleValue}</p>
            </div>
            {company && companyValue && (
              <div>
                <p className="section-label mb-2">[{company}]</p>
                <p className="text-sm tracking-wide uppercase">{companyValue}</p>
              </div>
            )}
            <div>
              <p className="section-label mb-2">[{websiteLabel}]</p>
              <a 
                href={websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm tracking-wide uppercase underline hover:opacity-70 transition-opacity"
              >
                {websiteLinkText} <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <img 
          src={heroImage} 
          alt={title}
          className="w-full mb-16"
        />
        
        {/* Project Introduction */}
        <section className="mb-16 max-w-4xl">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-6">Project Introduction</h2>
          <p className="text-sm leading-relaxed mb-8">
            {introduction}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold text-sm mb-3">My Role</p>
              <ol className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
                {roleDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ol>
            </div>
            <div>
              <p className="font-bold text-sm mb-3">Timeline</p>
              <p className="text-sm text-muted-foreground">{timeline}</p>
            </div>
          </div>
        </section>
        
        {/* Additional Sections */}
        {sections.map((section, index) => (
          <section key={index} className="mb-12 max-w-4xl">
            <h3 className="font-bold text-sm mb-3">{section.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {section.content}
            </p>
          </section>
        ))}
      </article>
      
      <Footer />
    </main>
  );
};

export default LiveProjectDetail;

