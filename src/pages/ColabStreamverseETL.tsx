import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import Marquee from "@/components/portfolio/Marquee";
import AnimatedSection from "@/components/AnimatedSection";
import colabStreamverseImage from "@/assets/colab-streamverse-etl.jpg";

const ColabStreamverseETL = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <section className="flex-1 px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <Link to="/work" className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block">
              ← BACK TO WORK
            </Link>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay="100">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
              STREAMVERSE ETL PIPELINE
            </h1>
            <p className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-8">
              DATA ENGINEERING • ETL • PYTHON
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay="200">
            <div className="border border-border p-4 mb-8">
              <img 
                src={colabStreamverseImage} 
                alt="StreamVerse ETL Pipeline Project"
                className="w-full aspect-video object-cover"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay="300">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-6">
                A complete ETL (Extract, Transform, Load) pipeline for analyzing user streaming activity data on the StreamVerse platform. Processes 100 records of user watch history, handles data quality issues, and creates targeted analytics for high-value users.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">100+</p>
                  <p className="text-xs text-muted-foreground uppercase">Records</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-xs text-muted-foreground uppercase">Countries</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-xs text-muted-foreground uppercase">Genres</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">3.04</p>
                  <p className="text-xs text-muted-foreground uppercase">Mean Rating</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Technical Stack</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "Pandas", "Google Colab", "CSV Processing"].map((tech) => (
                  <span key={tech} className="border border-border px-3 py-1 text-xs uppercase tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-4">ETL Pipeline Stages</h2>
              
              <div className="space-y-4 mb-6">
                <div className="border border-border p-4">
                  <h3 className="text-lg font-bold mb-2">1. EXTRACT</h3>
                  <p className="text-sm text-muted-foreground">
                    Loaded "streamverse_activity.csv" into pandas DataFrame for initial exploration. Dataset includes user_id, watch_date, video_id, watch_time_minutes, country, video_genre, and user_rating.
                  </p>
                </div>
                
                <div className="border border-border p-4">
                  <h3 className="text-lg font-bold mb-2">2. TRANSFORM</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Filled NaN ratings with mean (≈3.04)</li>
                    <li>• Converted dates via pd.to_datetime(format="%d-%m-%Y")</li>
                    <li>• Added watch_time_hours (watch_time_minutes / 60)</li>
                  </ul>
                </div>
                
                <div className="border border-border p-4">
                  <h3 className="text-lg font-bold mb-2">3. LOAD</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Exported clean data warehouse CSV</li>
                    <li>• Created data mart for USA users with ratings {">"} 4.5</li>
                    <li>• Yielded 3 high-engagement records</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Dataset Columns</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {["user_id", "watch_date", "video_id", "watch_time_minutes", "country", "video_genre", "user_rating", "watch_time_hours"].map((col) => (
                  <div key={col} className="border border-border p-3 text-center">
                    <p className="text-xs font-bold">{col}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-4">Coverage</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="border border-border p-4">
                  <p className="text-sm font-bold mb-2">Countries</p>
                  <p className="text-xs text-muted-foreground">USA, Germany, India, UK</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-sm font-bold mb-2">Genres</p>
                  <p className="text-xs text-muted-foreground">Action, Documentary, Horror, Comedy</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>✅ Handled real-world data issues: missing values, inconsistent date formats</li>
                <li>✅ Identified top USA content consumers for targeted marketing</li>
                <li>✅ Full pipeline automation from raw CSV to segmented data mart</li>
                <li>✅ Created actionable insights for personalized content recommendations</li>
              </ul>

              <a 
                href="https://colab.research.google.com/drive/1pL5K7sTBh4DDFfcOyOQqpJGAMY9qx33p?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-border px-6 py-3 text-xs tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                VIEW ON GOOGLE COLAB →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Marquee />
      <Footer />
    </main>
  );
};

export default ColabStreamverseETL;


