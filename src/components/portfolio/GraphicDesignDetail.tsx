import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

interface GraphicDesignDetailProps {
  category: string;
  title: string;
  description: string;
  image: string;
  tools: string;
  inspiration: string;
  process: string;
  effects: string;
}

const GraphicDesignDetail = ({
  category,
  title,
  description,
  image,
  tools,
  inspiration,
  process,
  effects,
}: GraphicDesignDetailProps) => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <article className="flex-1 px-8 py-12">
        {/* Back Link */}
        <Link 
          to="/work" 
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase hover:opacity-70 transition-opacity mb-12"
        >
          <ArrowLeft size={14} />
          [BACK TO GRAPHIC DESIGN PROJECTS]
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-8 lg:gap-12">
          {/* Left Column - Description */}
          <div>
            <p className="section-label mb-2">{category}</p>
            <p className="text-sm leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Center Column - Image */}
          <div className="flex justify-center">
            <img 
              src={image} 
              alt={title}
              className="max-w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
          
          {/* Right Column - Details */}
          <div className="space-y-8">
            <h1 className="text-2xl font-bold tracking-tight uppercase">{title}</h1>
            
            <div>
              <p className="section-label mb-2">[TOOLS]</p>
              <p className="text-sm tracking-wide uppercase">{tools}</p>
            </div>
            
            <div>
              <p className="section-label mb-2">[INSPIRATION]</p>
              <p className="text-sm tracking-wide uppercase">{inspiration}</p>
            </div>
            
            <div>
              <p className="section-label mb-2">[PROCESS]</p>
              <p className="text-sm tracking-wide uppercase">{process}</p>
            </div>
            
            <div>
              <p className="section-label mb-2">[EFFECTS]</p>
              <p className="text-sm tracking-wide uppercase">{effects}</p>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  );
};

export default GraphicDesignDetail;

