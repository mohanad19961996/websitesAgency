import React from "react";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import WireframeSection from "./components/WireframeSection";
import SimpleHero from "./components/SimpleHero";
import CompactTwoPanels from "./components/CompactTwoPanels";
import WebsiteBenefits from "./components/WebsiteBenefits";
import OurServices from "./components/OurServices";
import ProjectsPortfolio from "./components/ProjectsPortfolio";
import SocialMediaPortfolio from "./components/SocialMediaPortfolio";
import WorkflowSteps from "./components/WorkflowSteps";
import ContactUs from "./components/ContactUs";
import SectionDivider from "./components/SectionDivider";
import { LanguageProvider } from "./components/LanguageContext";
import TemplatesShowcase from "./components/TemplatesShowcase";

function AppContent() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      <main className="pt-16">
        <div id="hero">
          <SimpleHero />
        </div>

        <SectionDivider variant="gradient" />

        <div id="problems">
          <CompactTwoPanels />
        </div>

        <SectionDivider variant="gradient" />

        <div id="benefits">
          <WebsiteBenefits />
        </div>

        <SectionDivider variant="gradient" />

        <div id="services">
          <OurServices />
        </div>

        <SectionDivider variant="dots" />
        <div id="templates">
          <TemplatesShowcase />
        </div>

        <SectionDivider variant="dots" />

       {/* <div id="portfolio">
          <ProjectsPortfolio />
        </div>*/}

        <SectionDivider variant="gradient" />

        <div id="workflow">
          <WorkflowSteps />
        </div>

        <SectionDivider variant="line" />

        <div id="contact">
          <ContactUs />
        </div>

      </main>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}