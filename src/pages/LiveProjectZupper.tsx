import LiveProjectDetail from "@/components/portfolio/LiveProjectDetail";

const LiveProjectZupper = () => {
  return (
    <LiveProjectDetail
      category="E-COMMERCE APP DESIGN"
      title="Zupper : B2B Multi-Commerce App"
      role="ROLE"
      roleValue="FOUNDING UI/UX DESIGNER"
      websiteLabel="ZUPPER APP"
      websiteUrl="https://play.google.com/store/apps/details?id=com.zupper.b2b&pcampaignid=web_share"
      websiteLinkText="PLAYSTORE APP LINK"
      heroImage="https://framerusercontent.com/images/fBeSR5leJRk3Qw2mAaiJTHEcQRI.png"
      introduction="Between September to November, I worked as the founding designer for Zupper, a B2B BlendCommerce app built for MSMEs in India. During this period, I designed 45+ high-fidelity screens and end-to-end flows, ensuring a user-friendly experience for retailers, wholesalers, and suppliers. (Some aspects of the UI may have evolved in the live app due to internal iterations and business decisions.)"
      roleDetails={[
        "Creating intuitive journeys for product discovery, auctions, financing, and storefront setup",
        "Collaborating closely with product managers and developers",
        "Delivering smooth design-to-development handoffs",
      ]}
      timeline="September – November (Founding Designer)"
      sections={[
        {
          title: "Screen Design",
          content: "Delivered 45+ high-fidelity screens covering onboarding, auctions, storefronts (Store+), financing (BNPL), and product discovery.",
        },
        {
          title: "B2B UX Learning",
          content: "The project gave me deep insights into how B2B shopping, sourcing, and trade dynamics work:especially in fast-moving industries like lifestyle and fashion.",
        },
        {
          title: "Competitive Analysis",
          content: "Conducted research on similar commerce and super-apps such as Udaan, Tata Neu, and Nykaa, identifying best practices in navigation, cart flows, and trust-building UI.",
        },
        {
          title: "Team Collaboration",
          content: "Ensured smooth cross-functional collaboration for design-to-development handoff, creating scalable flows ready for engineers.",
        },
      ]}
    />
  );
};

export default LiveProjectZupper;

