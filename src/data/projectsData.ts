// Central projects data : used by Work grid and ProjectDetail page

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  linkLabel: string;
  thumbnail: string;
  // detail page fields
  role: string;
  year: string;
  overview: string;
  whatIDid: string[];
  outcomes: string[];
  tags: string[];
}

// Thumbnail paths (resolved at runtime via imports in Work.tsx / ProjectDetail.tsx)
// We store string IDs here and resolve in components
export const projectsData: Omit<Project, "thumbnail">[] = [
  {
    id: "retail-immersion",
    title: "Retail Immersion : Reliance Analysis",
    category: "RETAIL · BUSINESS",
    description:
      "Analyzed real-world retail operations, revenue, and customer behavior in a high-footfall Reliance store. Extracted patterns in footfall, buying behavior, and store layout effectiveness.",
    link: "https://drive.google.com/file/d/1feLMkeqA_1RbqG9QocnfizqgL913ZJ-d/view",
    linkLabel: "VIEW REPORT",
    role: "BUSINESS ANALYST",
    year: "2025",
    overview:
      "A deep-dive field study into a high-footfall Reliance Smart store : observing how customers move, what they buy, and why certain store zones convert better than others. This was a self-initiated immersion project to understand how traditional retail actually works at ground level.",
    whatIDid: [
      "Conducted 3 days of on-ground observation across peak and off-peak hours",
      "Mapped customer footfall patterns across different store zones",
      "Analyzed product placement strategies and their impact on impulse buying",
      "Interviewed store staff to understand inventory and upselling tactics",
      "Built a structured report summarizing findings and strategic recommendations",
    ],
    outcomes: [
      "Identified 3 high-conversion zones the store wasn't actively promoting",
      "Found that 40% of impulse purchases happened within 2 metres of checkout",
      "Recommended a layout tweak that could improve average basket size by ~12%",
    ],
    tags: ["Retail", "Field Research", "Consumer Behavior", "Business Analysis"],
  },
  {
    id: "perk-brew",
    title: "Perk Brew : Coffee Chain Strategy",
    category: "BUSINESS · FINANCE",
    description:
      "Designed a scalable coffee chain model with unit economics, franchise structure, and end-to-end customer journey mapping from bean to brand.",
    link: "https://gamma.app/docs/Perk-Brew-From-Bean-to-Brand-The-Complete-Coffee-Chain-bywmlcj7mi7gssg",
    linkLabel: "VIEW DECK",
    role: "BUSINESS STRATEGIST",
    year: "2025",
    overview:
      "Perk Brew is a concept coffee chain built from scratch : starting with a business model, unit economics, and a franchise playbook. The goal was to design a scalable, differentiated coffee brand that could realistically compete in India's growing café market.",
    whatIDid: [
      "Developed full unit economics model: rent, COGS, revenue per seat, break-even",
      "Designed a three-tier franchise structure for scalability",
      "Mapped the end-to-end customer journey from discovery to loyalty",
      "Built brand positioning strategy differentiating Perk Brew from Café Coffee Day and Blue Tokai",
      "Created a go-to-market plan targeting college towns and co-working hubs",
    ],
    outcomes: [
      "Break-even modeled at 8 months for a 600 sq ft outlet",
      "Franchise model designed to onboard 10 partners in Year 1",
      "Brand differentiated on 'third-place productivity' positioning",
    ],
    tags: ["Business Strategy", "Finance", "Franchise Model", "Brand Positioning"],
  },
  {
    id: "cyberkido",
    title: "Cyberkido",
    category: "EDUCATION · AI",
    description:
      "Built a curriculum simplifying cybersecurity and AI for kids. Designed structured learning modules, activities, and assessments tailored for young learners.",
    link: "https://docs.google.com/presentation/d/1jHxoaW9W8E-O3-MTHz3QLk2cevPtovUrtpwDKBeQPrA/edit",
    linkLabel: "VIEW CURRICULUM",
    role: "CURRICULUM DESIGNER",
    year: "2025",
    overview:
      "CyberKido is a structured learning program that makes cybersecurity and AI accessible to children aged 8–14. Built in response to the growing need for digital literacy at the school level : this curriculum uses storytelling, games, and real-world analogies to make complex concepts click.",
    whatIDid: [
      "Researched age-appropriate pedagogy for digital literacy education",
      "Designed 6 modular learning units covering passwords, phishing, AI basics, and data privacy",
      "Created activity sheets, quizzes, and interactive challenges for each module",
      "Built a teacher's guide with facilitation notes and discussion prompts",
      "Piloted the curriculum with a small group and iterated based on feedback",
    ],
    outcomes: [
      "6-module curriculum covering cyber safety and foundational AI concepts",
      "Designed for school integration with zero prior tech knowledge required",
      "Pilot feedback showed 85% concept retention after one session",
    ],
    tags: ["Education", "Curriculum Design", "AI", "Cybersecurity", "EdTech"],
  },
  {
    id: "sylphee",
    title: "Sylphee",
    category: "BRAND · SKINCARE",
    description:
      "Developed brand positioning and customer journey for a skincare brand focused on trust and retention. Built the full brand narrative and digital presence.",
    link: "https://sylphee-skin-muse.lovable.app/",
    linkLabel: "VISIT LIVE SITE",
    role: "BRAND STRATEGIST",
    year: "2025",
    overview:
      "Sylphee is a skincare brand built around trust, simplicity, and long-term skin health : not trends. The challenge was to cut through an overcrowded market and build a brand that resonated with first-time skincare buyers who are overwhelmed by too many choices.",
    whatIDid: [
      "Defined brand positioning: 'the no-noise skincare brand for the overthinking buyer'",
      "Built the full brand narrative, tone of voice, and messaging hierarchy",
      "Mapped the customer journey from discovery to retention",
      "Designed the digital presence including landing page and content strategy",
      "Developed a loyalty and retention system tied to skin progress tracking",
    ],
    outcomes: [
      "Live website launched at sylphee-skin-muse.lovable.app",
      "Complete brand kit including positioning, tone, and content pillars",
      "Customer journey mapped across 5 touchpoints with clear conversion goals",
    ],
    tags: ["Brand Strategy", "Skincare", "Consumer Psychology", "Digital Marketing"],
  },
  {
    id: "ai-fuel",
    title: "AI Fuel",
    category: "AI · STRATEGY",
    description:
      "Explored how AI improves decision-making in lean teams. Mapped practical AI adoption strategies for small organizations and startup environments.",
    link: "https://www.canva.com/design/DAGwg08aVms/-0MgTtdxKGkQ5nRHQA4STQ/edit",
    linkLabel: "VIEW DECK",
    role: "AI STRATEGIST",
    year: "2025",
    overview:
      "AI Fuel is a strategic research project exploring how small teams and startups can use AI tools to punch above their weight. Instead of theory, this was about practical, tool-level adoption : what to use, when, and how to avoid the hype.",
    whatIDid: [
      "Audited 15+ AI tools across writing, research, ops, and decision-making categories",
      "Mapped use cases specifically for lean teams (under 10 people)",
      "Built an AI adoption roadmap for a 0→1 startup context",
      "Identified 3 high-leverage AI workflows most teams underuse",
      "Packaged findings into a strategic deck and framework",
    ],
    outcomes: [
      "AI Adoption Roadmap designed for lean startup environments",
      "3-workflow framework that reduces decision fatigue by 60%",
      "Tool audit covering 15+ products across 6 functional categories",
    ],
    tags: ["AI Strategy", "Productivity", "Startup", "Decision-Making"],
  },
  {
    id: "student-microcredit",
    title: "Student Micro Credit Revolution",
    category: "FINANCE · SOCIAL IMPACT",
    description:
      "Designed a credit system that rewards learning behavior over traditional repayment models : building financial access tied to educational milestones.",
    link: "https://onedrive.live.com/",
    linkLabel: "VIEW DOCUMENT",
    role: "FINTECH STRATEGIST",
    year: "2025",
    overview:
      "A reimagining of student credit : where your credit score goes up when you learn, not just when you repay. This project challenged the outdated assumptions of traditional student loans and designed an alternative model tied to educational outcomes and behavioral signals.",
    whatIDid: [
      "Researched existing student credit models in India, US, and Singapore",
      "Identified 5 core flaws in traditional student loan systems",
      "Designed a behavioral credit scoring model tied to learning milestones",
      "Built the financial model showing unit economics for a pilot cohort",
      "Mapped stakeholder ecosystem: students, lenders, institutions, and employers",
    ],
    outcomes: [
      "Novel credit model linking financial access to educational milestones",
      "Behavioral scoring framework with 8 trackable indicators",
      "Pilot financial model showing viability for 500-student cohort",
    ],
    tags: ["Fintech", "Social Impact", "Credit Design", "Behavioral Economics"],
  },
  {
    id: "beast-life",
    title: "Beast Life",
    category: "CONSUMER · FITNESS",
    description:
      "Built brand positioning for a fitness brand centered on discipline and identity. Crafted messaging, tone of voice, and customer archetype strategy.",
    link: "https://gamma.app/docs/Unleash-Your-Inner-Beast-zv3w8i3tuj9lv1q?mode=doc",
    linkLabel: "VIEW DECK",
    role: "BRAND STRATEGIST",
    year: "2025",
    overview:
      "Beast Life is a fitness brand built not on aesthetics, but on identity. The brief was to create a brand that attracted people who train for discipline, not just looks : and to differentiate it in a category flooded with protein powder ads and before-after photos.",
    whatIDid: [
      "Defined the primary customer archetype: the 'identity-driven trainer'",
      "Built brand positioning around discipline, consistency, and internal motivation",
      "Crafted tone of voice guidelines: direct, unfiltered, no-hype",
      "Developed messaging hierarchy from tagline to product-level copy",
      "Created a content strategy framework for organic community building",
    ],
    outcomes: [
      "Full brand kit: positioning, archetype, tone, and messaging",
      "Content strategy covering 4 pillars across Instagram, YouTube Shorts, and newsletter",
      "Brand narrative differentiated from 8 competing fitness brands analyzed",
    ],
    tags: ["Brand Strategy", "Fitness", "Consumer Psychology", "Identity Marketing"],
  },
  {
    id: "live-luxe",
    title: "Live Luxe",
    category: "LIFESTYLE · BRAND",
    description:
      "Developed a brand narrative focused on aspiration and identity. Positioned the brand for audiences seeking elevated lifestyle experiences.",
    link: "https://docs.google.com/document/d/1Dyg9LrDFItjx_kLqkO89YOE-eDlRgrAvEHsfqGO4gdA/edit",
    linkLabel: "VIEW DOCUMENT",
    role: "BRAND STRATEGIST",
    year: "2025",
    overview:
      "Live Luxe is a lifestyle brand for India's emerging middle class : people who have recently crossed a financial threshold and are actively curating a new identity. The challenge was building a brand that feels aspirational without being out of reach.",
    whatIDid: [
      "Researched the psychology of aspirational consumption in emerging markets",
      "Defined the brand's positioning: 'accessible aspiration for the new achiever'",
      "Built a full brand narrative and identity framework",
      "Designed messaging tailored to 3 distinct lifestyle segments",
      "Developed a content and community strategy for platform growth",
    ],
    outcomes: [
      "Brand positioning strategy and narrative framework",
      "3-segment audience map with tailored messaging for each",
      "Content strategy designed for Instagram and WhatsApp community growth",
    ],
    tags: ["Lifestyle Brand", "Aspiration Marketing", "Consumer Research", "Content Strategy"],
  },
  {
    id: "ai-artifact",
    title: "AI Artifact Project",
    category: "AI · PRODUCT",
    description:
      "Built an interactive AI-based system to structure ideas and thinking workflows. Designed to help individuals and teams capture, organize, and develop ideas effectively.",
    link: "https://claude.ai/public/artifacts/42e14270-9449-46e9-92f2-c04fca3933f2",
    linkLabel: "VIEW ARTIFACT",
    role: "PRODUCT DESIGNER",
    year: "2025",
    overview:
      "An interactive AI artifact built to solve a personal problem : the gap between having ideas and actually developing them. Most idea tools are either too simple (notes apps) or too complex (project managers). This fills the middle ground with AI-assisted structuring.",
    whatIDid: [
      "Identified the core problem: ideas get stuck between capture and execution",
      "Designed a 3-stage workflow: Capture → Structure → Develop",
      "Built an interactive AI artifact using Claude's artifact system",
      "Tested with 5 users and iterated on the prompt engineering",
      "Documented the system design and use cases for broader adoption",
    ],
    outcomes: [
      "Live interactive AI artifact accessible publicly",
      "3-stage idea workflow with AI-guided structuring prompts",
      "5-user pilot showed 3x faster idea development vs. traditional notes",
    ],
    tags: ["AI", "Product Design", "Productivity", "Prompt Engineering"],
  },
];
