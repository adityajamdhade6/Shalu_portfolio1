import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import Marquee from "@/components/portfolio/Marquee";
import AnimatedSection from "@/components/AnimatedSection";
import colabGoldImage from "@/assets/colab-gold-prediction.jpg";

const ColabGoldPrediction = () => {
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
              GOLD PRICE PREDICTION MODEL
            </h1>
            <p className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-8">
              LINEAR REGRESSION • MACHINE LEARNING • PYTHON
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay="200">
            <div className="border border-border p-4 mb-8">
              <img 
                src={colabGoldImage} 
                alt="Gold Price Prediction Project"
                className="w-full aspect-video object-cover"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay="300">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-6">
                A machine learning model that predicts gold prices using Linear Regression, achieving 99.97% accuracy (R² Score) on historical trading data spanning 10 years (2013-2023).
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">99.97%</p>
                  <p className="text-xs text-muted-foreground uppercase">Accuracy</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">2,583</p>
                  <p className="text-xs text-muted-foreground uppercase">Records</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">10</p>
                  <p className="text-xs text-muted-foreground uppercase">Years Data</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">0.22%</p>
                  <p className="text-xs text-muted-foreground uppercase">Error Rate</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Technical Stack</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python 3.12", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Google Colab"].map((tech) => (
                  <span key={tech} className="border border-border px-3 py-1 text-xs uppercase tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-4">Data Preprocessing</h2>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>• Handled 5 missing values in Volume column using mean imputation</li>
                <li>• Converted string-formatted numeric data (removed commas, K suffix)</li>
                <li>• Normalized percentage values to decimal representation</li>
                <li>• Applied type conversion for all numeric columns</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Features Used</h2>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>• <strong>Open Price:</strong> Opening price at session start</li>
                <li>• <strong>High Price:</strong> Highest price during trading day</li>
                <li>• <strong>Low Price:</strong> Lowest price during trading day</li>
                <li>• <strong>Volume:</strong> Trading volume in thousands</li>
                <li>• <strong>Change %:</strong> Daily percentage change</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Model Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-border p-4">
                  <p className="text-lg font-bold">Training R² Score</p>
                  <p className="text-3xl font-bold text-primary">0.9997</p>
                  <p className="text-xs text-muted-foreground">99.97% variance explained</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-lg font-bold">Testing R² Score</p>
                  <p className="text-3xl font-bold text-primary">0.9997</p>
                  <p className="text-xs text-muted-foreground">High generalization</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>✅ 99.97% prediction accuracy (R² Score)</li>
                <li>✅ 0.22% error on sample predictions</li>
                <li>✅ Successfully processed 2,583 historical records</li>
                <li>✅ Minimal overfitting (0.003% gap between train/test)</li>
              </ul>

              <a 
                href="https://colab.research.google.com/drive/1B2eOqfkNBO9DGHflsSeinS6om39bOeib?usp=sharing"
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

export default ColabGoldPrediction;


