import { Link } from "react-router-dom";
import { ArrowLeft, Target, TrendingUp, AlertTriangle, CheckCircle, Shield, Download } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/iit-financial-market.jpg";

const IITFinancialMarket = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={heroImage}
            alt="Financial Market Dynamics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-8 pb-12">
          <AnimatedSection animation="fade-up">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase mb-6 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              BACK TO WORK
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 text-white">
              UNDERSTANDING FINANCIAL<br />MARKET DYNAMICS
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              A comprehensive capstone project analyzing how market shocks affect major Indian financial institutions using Linear Algebra and Python
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Download Section */}
      <section className="px-8 py-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <a
              href="/downloads/iit-financial-market.pdf"
              download="Financial_Market_Dynamics.pdf"
              className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download size={20} />
              <div>
                <p className="font-semibold">Download Full Project Report</p>
                <p className="text-sm opacity-80">PDF • Financial Market Dynamics</p>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Introduction */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Project Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              As a young data analyst at <strong className="text-foreground">FinScoop</strong>:a fictional Indian financial services company:I was tasked with understanding how market shocks can affect major financial institutions in India, such as <strong className="text-foreground">SBI, ICICI, HDFC, and Axis Bank</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My goal was to use Python & Linear Algebra to analyze how shocks in the market affect the stability of these financial institutions. Through this project, I gained practical skills in Python programming and understood how interconnected financial systems react to market shocks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Model Inputs & Parameters */}
      <section className="px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Model Inputs & Parameters</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For my analysis, I used a matrix <strong className="text-foreground">A</strong> representing the interconnectedness between four major financial institutions. Each entry reflects how much one institution is influenced by another.
            </p>
            
            <div className="bg-card border border-border p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-4">Matrix Assumptions:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Each institution is mainly influenced by itself (diagonal = 2)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Each institution is directly influenced by its neighbor (off-diagonal = -1)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  No direct influence from institutions two steps away (zeroes elsewhere)
                </li>
              </ul>
            </div>

            <p className="text-muted-foreground">
              I used vector <strong className="text-foreground">b</strong> representing external market shocks and vector <strong className="text-foreground">x</strong> as the initial portfolio vector.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Matrix Basics Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Basics of Matrices in Financial Modelling</h2>
            
            <div className="grid gap-8">
              {/* Symmetry */}
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="text-primary" size={20} />
                  Symmetry
                </h3>
                <p className="text-muted-foreground">
                  In the financial network, symmetry of matrices is crucial because it denotes reciprocal influence. If Bank A influences Bank B (represented by -1), does Bank B influence Bank A by the exact same amount? A matrix is symmetric only when the transpose of a matrix equals the matrix itself.
                </p>
              </div>

              {/* Rank */}
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="text-primary" size={20} />
                  Rank
                </h3>
                <p className="text-muted-foreground mb-4">
                  The number of linearly independent rows in a matrix. If the rank is full (4 in this case), the banks act as distinct entities. If lower, some banks' behavior is entirely dependent on others (redundancy).
                </p>
                <div className="bg-muted/50 p-4 rounded-lg text-sm">
                  <strong>Example:</strong> Suppose Axis Bank always does exactly what SBI + ICICI does combined. Then the rank would be &lt;4. If SBI drops 2% and ICICI drops 5%, Axis Bank must drop 7%. It's redundant.
                </div>
              </div>

              {/* Determinant */}
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="text-primary" size={20} />
                  Determinant
                </h3>
                <p className="text-muted-foreground">
                  A scalar value derived from a matrix. If the determinant is non-zero, there is a specific predictable reaction to a shock. If it is zero, the system is singular/unstable.
                </p>
              </div>

              {/* Trace */}
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="text-primary" size={20} />
                  Trace
                </h3>
                <p className="text-muted-foreground">
                  The sum of values on the main diagonal. This represents the aggregate self-influence of the system:the total amount of internal stability present in the entire banking market. It measures how much each bank relies on its own internal capital, history, and policies.
                </p>
              </div>

              {/* Null Space */}
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="text-primary" size={20} />
                  Null Space
                </h3>
                <p className="text-muted-foreground mb-4">
                  The number of zero columns/rows of a matrix in Reduced Row Echelon Form.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
                    <p className="font-semibold text-green-500 mb-2">Empty Null Space (Best Case)</p>
                    <p className="text-sm text-muted-foreground">The system is transparent. If SBI or Axis Bank makes a move, the market will see it.</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
                    <p className="font-semibold text-red-500 mb-2">Non-Empty Null Space (Risky)</p>
                    <p className="text-sm text-muted-foreground">Enormous changes might be happening inside banks, but the dashboard shows calm. Risk is invisible.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* A x = B Equation */}
      <section className="px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Solving the A × x = b Equation</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary mb-2">A</p>
                <p className="text-sm text-muted-foreground">The System</p>
                <p className="text-xs text-muted-foreground mt-2">The interconnected banking rules (who affects whom)</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary mb-2">b</p>
                <p className="text-sm text-muted-foreground">The Shock</p>
                <p className="text-xs text-muted-foreground mt-2">The pressure applied to market (inflation, regulation)</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary mb-2">x</p>
                <p className="text-sm text-muted-foreground">The Unknown</p>
                <p className="text-xs text-muted-foreground mt-2">How portfolio/banks must adjust to balance the shock</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Eigenvalues & Eigenvectors */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Financial Network Contagion</h2>
            <p className="text-muted-foreground mb-8">
              Using Eigenvectors and Eigenvalues, we explore how market shocks propagate through the interconnected financial network.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Eigenvectors</h3>
                <p className="text-muted-foreground mb-4">
                  Represent <strong className="text-foreground">Fundamental Market Scenarios</strong> that the network naturally wants to move in.
                </p>
                <p className="text-sm text-muted-foreground">
                  Example: All banks might drop together (total market collapse), or one rising while another dropping (competitive shift).
                </p>
              </div>
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Eigenvalues</h3>
                <p className="text-muted-foreground mb-4">
                  The number attached to that scenario:tells you how <strong className="text-foreground">intense</strong> a specific scenario becomes over time.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li><span className="text-red-500">• &gt; 1 (Growth):</span> Problem grows into crisis</li>
                  <li><span className="text-green-500">• &lt; 1 (Decay):</span> Shock fades away</li>
                  <li><span className="text-muted-foreground">• = 0:</span> Shock disappears instantly</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg">
                <h4 className="font-semibold text-red-500 mb-2">Largest Eigenvalue: "Explosion Risk"</h4>
                <p className="text-sm text-muted-foreground">
                  Measures maximum amplification. High value = reactive and volatile banks. Low/Moderate = calm, absorbs shocks.
                </p>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/30 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-500 mb-2">Smallest Eigenvalue: "Sensitivity Risk"</h4>
                <p className="text-sm text-muted-foreground">
                  Measures minimum resistance. Tiny (near 0) = vulnerable. Larger value = robust system.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stability Ratio */}
      <section className="px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Stability Analysis</h2>
            <p className="text-muted-foreground mb-8">
              To judge if the whole network is stable, analysts divide the largest by the smallest eigenvalue:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
                <p className="text-4xl font-bold text-green-500 mb-2">1-10</p>
                <p className="font-semibold text-green-500 mb-2">STABLE</p>
                <p className="text-sm text-muted-foreground">Gap between strongest and weakest response is small. Banks behave predictably.</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-lg">
                <p className="text-4xl font-bold text-red-500 mb-2">1000+</p>
                <p className="font-semibold text-red-500 mb-2">UNSTABLE</p>
                <p className="text-sm text-muted-foreground">System is unpredictable. Reacts wildly differently depending on shock angle.</p>
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Cayley-Hamilton Theorem Validation</h3>
              <p className="text-muted-foreground">
                Every matrix has a unique Characteristic Equation. If the matrix is plugged into this equation, it should result in 0 always. If not, there's something wrong with the matrix definition or calculations.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Highlights</h2>
            
            <div className="space-y-4">
              {[
                "The financial network satisfies the reciprocal influence",
                "Since the rank is full, all banks act as distinct entities:not dependent on each other",
                "The determinant is non-zero: specific predictable reaction to shocks",
                "The system is transparent (empty null space)",
                "The system is structurally unstable as the dominant eigenvalue > 1",
                "Our portfolio is unique:cannot be explained just by the 2 biggest market forces",
                "Dynamic simulation confirmed network instability"
              ].map((highlight, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Conclusion & Recommendations */}
      <section className="px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Conclusion</h2>
            <p className="text-lg text-muted-foreground mb-8 p-6 border-l-4 border-primary bg-card">
              The simulation proves that the current financial network is fragile to withstand these specific market shocks without any external intervention.
            </p>

            <h3 className="text-xl font-semibold mb-6">Recommendations</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">Decoupling</h4>
                <p className="text-sm text-muted-foreground">
                  Reduce dependency between banks so a crash in one doesn't spread to another. Lowering the -1 values to nearly 0 will be beneficial.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">Capital Buffers</h4>
                <p className="text-sm text-muted-foreground">
                  Making banks individually stronger helps absorb shocks without external help. Increase the Capital Adequacy Ratio for all banks.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">Government Intervention</h4>
                <p className="text-sm text-muted-foreground">
                  Required to lower shock vector entries, especially for higher-risk banks. Reduces impact on the overall network.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Technologies & Concepts Used</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Python",
                "NumPy",
                "Linear Algebra",
                "Matrix Operations",
                "Eigenvalues & Eigenvectors",
                "Financial Modelling",
                "Network Analysis",
                "Cayley-Hamilton Theorem",
                "Portfolio Risk Assessment",
                "Dynamic Simulation"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-card border border-border text-sm tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default IITFinancialMarket;

