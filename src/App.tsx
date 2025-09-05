import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import WireframeSection from "./components/WireframeSection";
import SimpleHero from "./components/SimpleHero";
import CompactTwoPanels from "./components/CompactTwoPanels";
import WebsiteBenefits from "./components/WebsiteBenefits";
import OurServices from "./components/OurServices";
import ProjectsPortfolio from "./components/ProjectsPortfolio";
import ContactUs from "./components/ContactUs";
import SectionDivider from "./components/SectionDivider";
import { LanguageProvider } from "./components/LanguageContext";

function AppContent() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      
      {/* Main content with padding-top to account for fixed navbar */}
      <main className="pt-16">
        
        {/* Hero Section */}
        <div id="hero">
          <SimpleHero />
        </div>

        {/* Divider */}
        <SectionDivider variant="gradient" />

        {/* Problems & Solutions Section */}
        <div id="problems">
          <CompactTwoPanels />
        </div>

        {/* Divider */}
        <SectionDivider variant="gradient" />

        {/* Website Benefits Section */}
        <div id="benefits">
          <WebsiteBenefits />
        </div>

        {/* Divider */}
        <SectionDivider variant="gradient" />

        {/* Our Services Section */}
        <div id="services">
          <OurServices />
        </div>

        {/* Divider */}
        <SectionDivider variant="dots" />

        {/* Projects Portfolio Section */}
        <div id="portfolio">
          <ProjectsPortfolio />
        </div>

        {/* Divider */}
        <SectionDivider variant="line" />

        {/* Contact Us Section */}
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