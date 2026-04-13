import { Link } from "react-router-dom";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import Marquee from "@/components/portfolio/Marquee";
import AnimatedSection from "@/components/AnimatedSection";
import colabTitanicImage from "@/assets/colab-titanic-prediction.jpg";

const ColabTitanicPrediction = () => {
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
              TITANIC SURVIVAL PREDICTION
            </h1>
            <p className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-8">
              LOGISTIC REGRESSION • CLASSIFICATION • PYTHON
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay="200">
            <div className="border border-border p-4 mb-8">
              <img 
                src={colabTitanicImage} 
                alt="Titanic Survival Prediction Project"
                className="w-full aspect-video object-cover"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay="300">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-6">
                A logistic regression classification model that predicts which Titanic passengers survived based on their characteristics, achieving ~80% accuracy on the test set.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">79.88%</p>
                  <p className="text-xs text-muted-foreground uppercase">Test Accuracy</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">891</p>
                  <p className="text-xs text-muted-foreground uppercase">Records</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-xs text-muted-foreground uppercase">Features</p>
                </div>
                <div className="border border-border p-4">
                  <p className="text-2xl font-bold">80/20</p>
                  <p className="text-xs text-muted-foreground uppercase">Train/Test Split</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Technical Stack</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "Scikit-learn", "Pandas", "NumPy", "Google Colab"].map((tech) => (
                  <span key={tech} className="border border-border px-3 py-1 text-xs uppercase tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-4">Dataset Characteristics</h2>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>• <strong>Size:</strong> 891 rows × 11 original columns</li>
                <li>• <strong>Target:</strong> Survived (1 = survived, 0 = not)</li>
                <li>• <strong>Key Features:</strong> Pclass, Sex, Age, SibSp, Parch, Fare, Embarked</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Data Preprocessing</h2>
              <ul className="text-muted-foreground mb-6 space-y-2">
                <li>• Filled 171 missing Age values with mean age</li>
                <li>• Filled missing Embarked values with mode (Southampton)</li>
                <li>• Encoded categorical variables: Sex (male→0, female→1), Embarked (S→0, C→1, Q→2)</li>
                <li>• Dropped non-essential columns: Name, Ticket</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">Features Used</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {["PassengerId", "Pclass", "Sex", "Age", "SibSp", "Parch", "Fare", "Embarked"].map((feature) => (
                  <div key={feature} className="border border-border p-3 text-center">
                    <p className="text-sm font-bold">{feature}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-4">Model Performance</h2>
              <div className="border border-border p-6 mb-6">
                <p className="text-lg font-bold mb-2">Test Set Accuracy</p>
                <p className="text-4xl font-bold text-primary">79.88%</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Approximately 8 out of 10 test passengers correctly classified
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Sample Prediction</h2>
              <div className="border border-border p-4 mb-6">
                <p className="text-sm text-muted-foreground mb-2">Test Input:</p>
                <p className="text-xs font-mono mb-4">
                  (PassengerId=1, Pclass=3, Sex=0, Age=22, SibSp=1, Parch=0, Fare=7.25, Embarked=0)
                </p>
                <p className="text-sm text-muted-foreground mb-2">Prediction:</p>
                <p className="text-lg font-bold">Did Not Survive (0)</p>
              </div>

              <a 
                href="https://colab.research.google.com/drive/1krehfJHOdwGobOE6s_f4HSBKeOA33agm?usp=sharing"
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

export default ColabTitanicPrediction;


