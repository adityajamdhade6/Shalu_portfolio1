import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

const CaseStudyZoom = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <article className="flex-1 px-8 md:px-16 lg:px-32 py-12">
        {/* Back Link */}
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity mb-12"
        >
          <ArrowLeft size={14} />
          [BACK TO CASE STUDIES]
        </Link>
        
        {/* Hero Section */}
        <div className="mb-8">
          <p className="section-label mb-4">WEBSITE REDESIGN AND DEVELOPMENT</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Zoom for Performing Artists
          </h1>
          
          <div className="flex gap-16">
            <div>
              <p className="section-label mb-2">[ROLE]</p>
              <p className="text-sm tracking-wide uppercase">UI/UX DESIGNER</p>
            </div>
            <div>
              <p className="section-label mb-2">[FIGMA]</p>
              <a 
                href="https://www.figma.com/design/S2Zal6RMMfnUr86rHdnSNC/Zoom---Case-Study?node-id=233-2858&m=dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm tracking-wide uppercase underline hover:opacity-70 transition-opacity"
              >
                DESIGN FILE <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Case Study Images */}
        <div className="space-y-4">
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f8806a232014615.6895c46a6201d.png" 
            alt="Zoom Case Study - Hero" 
            className="w-full"
          />
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8931cf232014615.6893c00db04c0.png" 
            alt="Zoom Case Study - Overview" 
            className="w-full"
          />
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/735e10232014615.6895285140348.png" 
            alt="Zoom Case Study - Research" 
            className="w-full"
          />
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/8cf4c5232014615.6893c00dafc07.png" 
            alt="Zoom Case Study - Design" 
            className="w-full"
          />
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c390d1232014615.6895d18518466.png" 
            alt="Zoom Case Study - Screens" 
            className="w-full"
          />
          <img 
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/3fe2a6232014615.6895a46f1b401.png" 
            alt="Zoom Case Study - Final" 
            className="w-full"
          />
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default CaseStudyZoom;

