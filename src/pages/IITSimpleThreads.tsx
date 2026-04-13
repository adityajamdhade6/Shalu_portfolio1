import { Link } from "react-router-dom";
import { ArrowLeft, Users, ShoppingBag, TrendingUp, Target, BarChart3, PieChart, Percent, Download } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/iit-simple-threads.jpg";

const IITSimpleThreads = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={heroImage}
            alt="Simple Threads Business Analysis"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-8 pb-12">
          <AnimatedSection animation="fade-up">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase mb-6 hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} />
              BACK TO WORK
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
              SIMPLE THREADS<br />BUSINESS & CAMPAIGN ANALYSIS
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Stitching Success Together : A comprehensive data analytics report for a boutique retail fashion company
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Download Section */}
      <section className="px-8 py-8 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <a
              href="/downloads/iit-simple-threads.pdf"
              download="Simple_Threads_Business_Analysis.pdf"
              className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download size={20} />
              <div>
                <p className="font-semibold">Download Full Project Report</p>
                <p className="text-sm opacity-80">PDF • Business & Campaign Analysis</p>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Overview */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Company Overview</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong className="text-foreground">Simple Threads</strong> is a boutique retail company specializing in selling curated clothing collections for both men and women. The company operates primarily through its online store and has built a growing customer base.
            </p>

            <h3 className="text-xl font-semibold mb-4">Data Sources</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Customer_Information.csv", desc: "Demographic and basic customer information" },
                { name: "Product_Information.xlsx", desc: "Product details, categories, prices, attributes" },
                { name: "Discount_Information.xlsx", desc: "End-of-year promotional email campaign records" },
                { name: "Purchase_Information.xlsx", desc: "Q1 2025 purchases (January–March)" }
              ].map((file) => (
                <div key={file.name} className="bg-card border border-border p-4 rounded-lg">
                  <p className="font-mono text-sm text-primary mb-1">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* My Role */}
      <section className="px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">My Role as Data Analyst</h2>
            <p className="text-muted-foreground mb-6">
              Help the management team gain actionable insights about:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: TrendingUp, label: "Overall Business Performance" },
                { icon: Users, label: "Customer Behavior" },
                { icon: ShoppingBag, label: "Product Sales Trends" },
                { icon: Percent, label: "Campaign Effectiveness" }
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="bg-card border border-border p-4 rounded-lg text-center">
                  <Icon className="mx-auto text-primary mb-2" size={28} />
                  <p className="text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Customer Analysis */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Users className="text-primary" />
              Customer Analysis
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-primary mb-2">22</p>
                <p className="text-sm text-muted-foreground">Unique Customers</p>
                <p className="text-xs text-muted-foreground">in Q1 2025</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-primary mb-2">₹22,770</p>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-xs text-muted-foreground">Q1 2025</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg text-center">
                <p className="text-4xl font-bold text-primary mb-2">₹1,035</p>
                <p className="text-sm text-muted-foreground">Average Spend</p>
                <p className="text-xs text-muted-foreground">per customer</p>
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Behavioral Insights</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Customers are low-frequency but high-intent buyers:few customers, but meaningful spending
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Customer base is small and concentrated, indicating an early-stage or niche business
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Customers who received coupons showed higher average spending
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Customers trust the brand enough to spend over ₹1,000 on average:healthy for a boutique fashion business
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sales Analysis */}
      <section className="px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <BarChart3 className="text-primary" />
              Sales Analysis
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Popular Products : Q1 2025</h3>
              <div className="bg-card border border-border p-6 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-lg">🏆 Skirt (Women) - Green</p>
                    <p className="text-sm text-muted-foreground">Most Popular Product</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">5 buys</p>
                    <p className="text-sm text-muted-foreground">@ ₹900/-</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="text-pink-500">👗</span> Women's Category
                </h4>
                <p className="text-muted-foreground text-sm">
                  Women's apparel dominates revenue, clearly outperforming men's products. Simple Threads is currently perceived as a stronger women's fashion brand.
                </p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-500">👔</span> Men's Category
                </h4>
                <p className="text-muted-foreground text-sm">
                  Men's products are not failing, but they are under-marketed or under-positioned. Marketing for men's category is required to balance contributions.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Campaign Analysis */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Target className="text-primary" />
              Campaign Analysis
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary mb-1">36</p>
                <p className="text-xs text-muted-foreground">Coupons Sent</p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary mb-1">68%</p>
                <p className="text-xs text-muted-foreground">Buyers Used Coupons</p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary mb-1">40</p>
                <p className="text-xs text-muted-foreground">Total Transactions</p>
              </div>
              <div className="bg-card border border-border p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-primary mb-1">10-20%</p>
                <p className="text-xs text-muted-foreground">Discount Range</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
                <p className="text-2xl font-bold text-green-500 mb-2">₹1,104.67</p>
                <p className="text-sm text-muted-foreground">Average spend with coupons</p>
              </div>
              <div className="bg-card border border-border p-6 rounded-lg">
                <p className="text-2xl font-bold mb-2">₹885.71</p>
                <p className="text-sm text-muted-foreground">Average spend without coupons</p>
              </div>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Key Insight</h3>
              <p className="text-muted-foreground">
                Discounts increase average order value, but <strong className="text-foreground">higher discounts do NOT drive higher spending</strong>. Customers are buying because they like the product and trust the brand, not because of aggressive discounting.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Advanced Analysis */}
      <section className="px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <PieChart className="text-primary" />
              Advanced Analysis
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Box Plot - Product Prices */}
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Product Prices Distribution</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Minimum:</span><span>₹300</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Q1:</span><span>₹400</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Q2 (Median):</span><span>₹500</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Q3:</span><span>₹800</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Maximum:</span><span>₹900</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Mean:</span><span>₹592</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Outliers:</span><span className="text-green-500">None</span></div>
                </div>
              </div>

              {/* Box Plot - Quantities */}
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Quantities Purchased</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Minimum:</span><span>0</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Q1:</span><span>1</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Q3:</span><span>2</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Maximum:</span><span>5</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Mean:</span><span>1.6</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Outliers:</span><span className="text-yellow-500">Yes (5)</span></div>
                </div>
              </div>
            </div>

            {/* Correlation Analysis */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Correlation Analysis</h3>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-muted-foreground">r = 0.061</span>
                  <span className="text-sm px-3 py-1 bg-muted rounded-full">Very Weak</span>
                </div>
                <p className="font-semibold mb-2">Discount % vs Purchase Amount</p>
                <p className="text-sm text-muted-foreground">
                  Offering higher discount does not correlate with higher purchase amounts. Discounts are not heavily driving sales:it's customer trust in quality and brand.
                </p>
              </div>

              <div className="bg-card border border-border p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-primary">r = 0.45</span>
                  <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">Moderate Positive</span>
                </div>
                <p className="font-semibold mb-2">Quantity vs Product Price</p>
                <p className="text-sm text-muted-foreground">
                  Higher-priced products tend to be bought in slightly larger quantities. Customers are comfortable buying higher-priced items.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Business Insights Summary */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Business Insights</h2>

            <div className="space-y-6">
              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-primary">Customer Behavior</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Low-frequency but high-intent buyers</li>
                  <li>• Small, concentrated customer base (early-stage business)</li>
                  <li>• Challenge is scaling customer base, not extracting more value</li>
                </ul>
              </div>

              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-primary">Product Sales</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Women's apparel dominates revenue</li>
                  <li>• No extreme pricing issues:prices well-distributed</li>
                  <li>• Customers comfortable with premium pricing</li>
                </ul>
              </div>

              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-primary">Campaign Effectiveness</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 68% coupon usage rate</li>
                  <li>• Discounts increase AOV but higher % doesn't mean higher spending</li>
                  <li>• Brand trust drives purchases more than discounts</li>
                </ul>
              </div>

              <div className="border border-border p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-primary">Advanced Insights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Customers don't chase discounts</li>
                  <li>• Higher-priced items are not scaring buyers away (premium acceptance)</li>
                  <li>• One outlier in purchase quantity (5 items) indicates potential loyal/bulk buyers</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technologies */}
      <section className="px-8 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Technologies & Skills Used</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Microsoft Excel",
                "Pivot Tables",
                "Data Visualization",
                "Box Plot Analysis",
                "Correlation Analysis",
                "Pearson's Coefficient",
                "Customer Segmentation",
                "Sales Analytics",
                "Campaign Analysis",
                "Business Intelligence",
                "Statistical Analysis",
                "Data Cleaning"
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

export default IITSimpleThreads;

