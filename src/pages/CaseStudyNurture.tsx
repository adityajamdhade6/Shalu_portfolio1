import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";

const CaseStudy = () => {
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
          <p className="section-label mb-4">PLANT WELLNESS APP DESIGN</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Nurture : A Plant Care Companion
          </h1>
          
          <div className="flex gap-16">
            <div>
              <p className="section-label mb-2">[ROLE]</p>
              <p className="text-sm tracking-wide uppercase">UI/UX DESIGNER</p>
            </div>
            <div>
              <p className="section-label mb-2">[FIGMA]</p>
              <a 
                href="https://www.figma.com/design/JpS7ob2eOfxFNkfjHoSddL/Nurture?node-id=1-2&m=dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm tracking-wide uppercase underline hover:opacity-70 transition-opacity"
              >
                FILE LINK <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <img 
          src="https://framerusercontent.com/images/0RKQNlUmdUNZZYuxu16clCX0vQ.png" 
          alt="Nurture App Hero" 
          className="w-full mb-16"
        />
        
        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Project Overview</h2>
          <p className="text-sm leading-relaxed mb-8 max-w-4xl">
            Nurture is a plant-care app designed to simplify gardening for enthusiasts of all skill levels. As the lead UI/UX designer, my goal was to create an interface that balances functionality, aesthetics, and user empathy, ensuring seamless interaction for plant lovers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <p className="font-bold text-sm mb-2">Timeline</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                From explorations to final designs in 5 weeks while working with multiple projects at the same time
              </p>
            </div>
            <div>
              <p className="font-bold text-sm mb-2">Background</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The app seamlessly integrates with your existing calendar and task management tools, using advanced algorithms to prioritize tasks, suggest optimal times for meetings, and provide smart reminders.
              </p>
            </div>
          </div>
        </section>
        
        {/* Research */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Research</h2>
          <p className="text-sm leading-relaxed mb-8 max-w-4xl">
            This phase focused on understanding the problem space and gathering insights. Activities included:
          </p>
          
          <h3 className="text-lg font-bold mb-4">Qualitative Research</h3>
          <p className="text-sm leading-relaxed mb-4 max-w-4xl">
            Conducted user interviews and surveys with plant enthusiasts (beginners and intermediates) to uncover pain points, motivations, and behaviors of plant lovers.
          </p>
          
          <p className="font-bold text-sm mb-3">Key Questions Asked in Interviews:</p>
          <ol className="list-decimal list-inside text-sm space-y-2 mb-6 max-w-4xl">
            <li>What challenges do you face when caring for plants?</li>
            <li>How do you currently find information about plant care?</li>
            <li>What features would you like in a plant care app?</li>
            <li>How do you feel when your plants thrive (or die)?</li>
            <li>Do you interact with other plant lovers? If so, how?</li>
          </ol>
          
          <p className="font-bold text-sm mb-3">Findings:</p>
          <ol className="list-decimal list-inside text-sm space-y-2 mb-8 max-w-4xl">
            <li>Beginners feel overwhelmed by conflicting advice.</li>
            <li>Experts want a platform to share knowledge and connect with others.</li>
            <li>Both groups value personalized advice and reminders.</li>
          </ol>
          
          <h3 className="text-lg font-bold mb-4">Quantitative Research</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            To better understand user preferences and behaviors, we analyzed survey data and created charts. These visuals help us identify key trends and make data-driven decisions for Nurture.
          </p>
          <img 
            src="https://framerusercontent.com/images/UHbMVILgvOBoJqvzB8LOyKRE.png" 
            alt="Quantitative Research Charts" 
            className="w-full mb-8"
          />
          
          <h3 className="text-lg font-bold mb-4">Competitor Analysis</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            Before diving into design, we needed to understand what was already out there. We analyzed 5 competitors to identify gaps and opportunities.
          </p>
          <img 
            src="https://framerusercontent.com/images/E5eKZrDhWZnCrzU90a59QMRC0k.png" 
            alt="Competitor Analysis" 
            className="w-full mb-8"
          />
        </section>
        
        {/* Define */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Define</h2>
          <p className="text-sm leading-relaxed mb-8 max-w-4xl">
            This phase focused on understanding the problem space and gathering insights. Activities included:
          </p>
          
          <h3 className="text-lg font-bold mb-4">User Personas</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            To design a user-centric app like Nurture, we need to deeply understand our target users. Here are two detailed user personas, including their demographics, goals, pain points, quotes, and empathy maps.
          </p>
          <img 
            src="https://framerusercontent.com/images/7j8oVehXvodjlJWGZGQIjYatGs.png" 
            alt="User Personas" 
            className="w-full mb-8"
          />
          
          <h3 className="text-lg font-bold mb-4">Empathy Map</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            By understanding what Paige and Greg think, feel, say, and do, we can design Nurture to address their unique needs. Together, they represent the two sides of the plant-loving spectrum that Nurture was designed to serve.
          </p>
          <img 
            src="https://framerusercontent.com/images/E5lKk6p1umj13TFE7BzDWflJxM.png" 
            alt="Empathy Map" 
            className="w-full mb-8"
          />
          
          <h3 className="text-lg font-bold mb-4">Information Architecture</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            The Information Architecture (IA) for Nurture was designed to ensure a seamless and intuitive user experience. During the initial research phase, we focused on understanding user needs, organizing content, and defining the app structure.
          </p>
          <img 
            src="https://framerusercontent.com/images/H3K7dz8ynRFlGNGvcn5dDHkDxF8.png" 
            alt="Information Architecture" 
            className="w-full mb-8"
          />
        </section>
        
        {/* Ideate */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Ideate</h2>
          <p className="text-sm leading-relaxed mb-8 max-w-4xl">
            This phase focused on understanding the problem space and gathering insights. Activities included:
          </p>
          
          <h3 className="text-lg font-bold mb-4">Paper Sketches</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            In the early stages of designing Nurture, we started with paper sketches to quickly visualize the app layout and flow. This low-fidelity approach allowed us to brainstorm freely and iterate rapidly.
          </p>
          <img 
            src="https://framerusercontent.com/images/gK7KFhdhZj6fOIQME4kPLd5up10.png" 
            alt="Paper Sketches" 
            className="w-full mb-8"
          />
          
          <h3 className="text-lg font-bold mb-4">Mid-Fidelity Screens</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            After sketching initial ideas on paper, we refined them into mid-fidelity wireframes, focusing on user flow, layout, and intuitive interactions. This stage ensures seamless navigation and functionality before adding visuals, making the Nurture app both practical and user-friendly.
          </p>
          <img 
            src="https://framerusercontent.com/images/eN3Ad0ps9vS08iCpYkuiNOjHNLQ.png" 
            alt="Mid-Fidelity Screens" 
            className="w-full mb-8"
          />
        </section>
        
        {/* Nurture UI Design */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Nurture UI Design</h2>
          <p className="text-sm leading-relaxed mb-8 max-w-4xl">
            Designed 25+ high-fidelity UI screens with detailed documentation, including screen overviews, in-depth explanations, and their intended use.
          </p>
          
          <h3 className="text-lg font-bold mb-4">Onboarding & Authentication</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            Illustrated slides introduce app features, creating a calming experience. Simple, minimal access screen enabling quick account creation or login.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img 
              src="https://framerusercontent.com/images/atwFbgnu74ViDoN7G8yA3JS3QM.png" 
              alt="Onboarding & Authentication - Screen 1" 
              className="w-full rounded-lg"
            />
            <img 
              src="https://framerusercontent.com/images/pkH4yNehrnCJf3dmB8RmFRlCvk.png" 
              alt="Onboarding & Authentication - Screen 2" 
              className="w-full rounded-lg"
            />
          </div>
          
          <h3 className="text-lg font-bold mb-4">Home Dashboard & Scanner</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            Central hub displaying upcoming reminders, recent activity, and quick links. Camera tool identifying plants instantly with personalized care details.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img 
              src="https://framerusercontent.com/images/YQXa9Z5O73XA8rshEzylGZWYW8.png" 
              alt="Home Dashboard & Scanner - Screen 1" 
              className="w-full rounded-lg"
            />
            <img 
              src="https://framerusercontent.com/images/KIwaiHRaEJMj9vK8AACgWwukVc.png" 
              alt="Home Dashboard & Scanner - Screen 2" 
              className="w-full rounded-lg"
            />
          </div>
          
          <h3 className="text-lg font-bold mb-4">Plant Management</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            Add new plants, view your collection, and set personalized tasks with reminders to ensure every plant's needs are met consistently.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <img 
              src="https://framerusercontent.com/images/mAEBfLPrQFDMIySA0gG13XA.png" 
              alt="Plant Management - Screen 1" 
              className="w-full rounded-lg"
            />
            <img 
              src="https://framerusercontent.com/images/tbf65QIfUFOBdkndm739DSxmI0A.png" 
              alt="Plant Management - Screen 2" 
              className="w-full rounded-lg"
            />
            <img 
              src="https://framerusercontent.com/images/S4YVDdWIryxjtfDd3w9KUWDFTU.png" 
              alt="Plant Management - Screen 3" 
              className="w-full rounded-lg"
            />
          </div>
          
          <h3 className="text-lg font-bold mb-4">Ask Buzz & Community</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            Interactive screens for asking questions, exploring posts, and sharing plant care tips with fellow enthusiasts in a supportive community.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <img 
              src="https://framerusercontent.com/images/3mfh23Hm70N1Xuh8xZWmDolk.png" 
              alt="Ask Buzz & Community - Screen 1" 
              className="w-full rounded-lg"
            />
            <img 
              src="https://framerusercontent.com/images/WJMhJ9KHyJG4GuzQxA8lHHgY.png" 
              alt="Ask Buzz & Community - Screen 2" 
              className="w-full rounded-lg"
            />
            <img 
              src="https://framerusercontent.com/images/MLpGxtTbFRlMESk6cB5cyA0JaAg.png" 
              alt="Ask Buzz & Community - Screen 3" 
              className="w-full rounded-lg"
            />
          </div>
          
          <h3 className="text-lg font-bold mb-4">Saved Content & Posts</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            Personal library for bookmarking helpful posts, care tips, and accessing saved resources. Detailed community post view for learning and engagement.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <img 
              src="https://framerusercontent.com/images/mj1aoZrU8sIuEtV3mapGu7WtHA.png" 
              alt="Saved Content & Posts - Screen 1" 
              className="w-full rounded-lg"
            />
            <img 
              src="https://framerusercontent.com/images/CRrgNrVid03zgZZqN1t1ByhSgU.png" 
              alt="Saved Content & Posts - Screen 2" 
              className="w-full rounded-lg"
            />
            <img 
              src="https://framerusercontent.com/images/Iu2t0Qq2UN1lVSnAOgxkDynYvA.png" 
              alt="Saved Content & Posts - Screen 3" 
              className="w-full rounded-lg"
            />
          </div>
          
          <h3 className="text-lg font-bold mb-4">Plant Details & Settings</h3>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            Plant insights hub with care instructions, environment details, and expert resources. User profile managing preferences and notifications.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <img 
              src="https://framerusercontent.com/images/BnryrsdHFcqgFeKpwchTIaqSQg.png" 
              alt="Plant Details & Settings - Screen 1" 
              className="w-full rounded-lg"
            />
            <img 
              src="https://framerusercontent.com/images/coMSd62a7zWx2AfUH0ekU1Af8k.png" 
              alt="Plant Details & Settings - Screen 2" 
              className="w-full rounded-lg"
            />
          </div>
        </section>
        
        {/* Solution */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Solution</h2>
          <p className="text-sm leading-relaxed mb-8 max-w-4xl">
            The resulting AI-powered scheduling app offers a seamless user experience, allowing individuals and businesses to effortlessly manage their schedules.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            <div>
              <h3 className="font-bold text-sm mb-2">Intelligent Scheduling</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                AI algorithms analyze user preferences, availability, and priorities to generate optimized schedules.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-2">Calendar Integration</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Seamless integration with popular calendar platforms such as Google Calendar and Outlook, ensuring synchronized scheduling across devices.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-2">Personalization</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Customizable settings allow users to tailor scheduling preferences and priorities to their unique needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Results */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Results</h2>
          <p className="text-sm leading-relaxed mb-8 max-w-4xl">
            Here, the outcomes and achievements of the project are highlighted, including user feedback, adoption rates, and industry recognition.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl">
            <div>
              <h3 className="font-bold text-sm mb-2">Increased Efficiency</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Users report significant time savings and improved productivity through optimized scheduling recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-2">Positive User Feedback</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                High user satisfaction ratings and positive reviews highlight the app intuitive interface and powerful AI capabilities.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-2">Growing User Base</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The app quickly gained traction among individuals and businesses worldwide, with a steady increase in user adoption and engagement.
              </p>
            </div>
          </div>
        </section>
        
        {/* Theme Screenshots */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Nurture App Screens in Light Theme</h2>
          <img 
            src="https://framerusercontent.com/images/yzD352crULyGUQzGc91eHackA4g.png" 
            alt="Light Theme Screens" 
            className="w-full mb-12"
          />
          
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Nurture App Screens in Dark Theme</h2>
          <img 
            src="https://framerusercontent.com/images/DF8aZ0NDR00wKPRlBh0AkXEyLc.png" 
            alt="Dark Theme Screens" 
            className="w-full mb-8"
          />
        </section>
        
        {/* Usability Testing */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Usability Testing Summary</h2>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            I conducted usability testing with 5 users. I asked them to use the app and share what parts were easy or difficult for them. I also asked what new features they would like to see and what changes could make the app more useful in their daily use.
          </p>
          <img 
            src="https://framerusercontent.com/images/uDJ0ioUH5n8ARZGnw0lJ6dlq2g.png" 
            alt="Usability Testing Summary" 
            className="w-full mb-8"
          />
        </section>
        
        {/* Conclusion */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Conclusion: Why Nurture Matters</h2>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            Nurture is more than just a plant care app : it is a community-driven platform that makes plant care accessible, enjoyable, and stress-free. By following a structured UX process, we have created a solution that addresses real user pain points and delivers a seamless, intuitive experience.
          </p>
          <img 
            src="https://framerusercontent.com/images/1GCEtIU20uLdD5c0N6Aa147u0.png" 
            alt="Conclusion" 
            className="w-full mb-8"
          />
        </section>
        
        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Next Steps: Building on Our Success</h2>
          <p className="text-sm leading-relaxed mb-8 max-w-4xl">
            Nurture is more than just a plant care app : it is a community-driven platform that makes plant care accessible, enjoyable, and stress-free. By following a structured UX process, we have created a solution that addresses real user pain points and delivers a seamless, intuitive experience.
          </p>
          
          <div className="space-y-8 max-w-4xl">
            <div>
              <h3 className="font-bold text-sm mb-3">Post-Launch Feedback</h3>
              <ol className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
                <li>Analyze user reviews and ratings to identify areas for improvement.</li>
                <li>Conduct follow-up surveys to understand how Nurture is impacting users plant care routines.</li>
              </ol>
            </div>
            
            <div>
              <h3 className="font-bold text-sm mb-3">Scaling the App</h3>
              <ol className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
                <li>Add support for more languages and regions.</li>
                <li>Introduce features like plant disease diagnosis and pest control tips.</li>
              </ol>
            </div>
            
            <div>
              <h3 className="font-bold text-sm mb-3">User Experience Enhancements</h3>
              <ol className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
                <li>Introduced detailed screens for each section to give users clarity at every step.</li>
                <li>Simplified and structured user flows to reduce confusion and make navigation seamless.</li>
                <li>Differentiated terms with clear labeling so users can easily understand.</li>
              </ol>
            </div>
            
            <div>
              <h3 className="font-bold text-sm mb-3">Expanding Features</h3>
              <ol className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
                <li>Plant Marketplace: A space for users to buy, sell, or trade plants and accessories.</li>
                <li>AR Plant Scanner: Use augmented reality to identify plants and provide care instructions.</li>
                <li>Seasonal Guides: Curated content for spring planting, winter care, and more.</li>
              </ol>
            </div>
            
            <div>
              <h3 className="font-bold text-sm mb-3">Continuous Design Growth</h3>
              <ol className="list-decimal list-inside text-sm space-y-2 text-muted-foreground">
                <li>Conduct regular UI audits to ensure design consistency.</li>
                <li>Prototype and test new features before full-scale rollout.</li>
                <li>Maintain a design system for scalable growth and future updates.</li>
              </ol>
            </div>
          </div>
        </section>
        
        {/* Vision */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">A Vision for the Future</h2>
          <p className="text-sm leading-relaxed mb-6 max-w-4xl">
            Our vision for Nurture goes beyond just an app. It is about fostering a global community of plant lovers who support and inspire each other. Whether you are a beginner like Paige or an expert like Greg, Nurture is here to help you grow, learn, and thrive.
          </p>
          <img 
            src="https://framerusercontent.com/images/I1PbJaeJy4TnW4iHkasgW29vsyw.png" 
            alt="Vision for the Future" 
            className="w-full mb-8"
          />
        </section>
      </article>
      
      <Footer />
    </main>
  );
};

export default CaseStudy;

