import Image from "next/image";
import AutoSlider from "@/components/AutoSlider";
import BusinessTransform from "@/components/BusinessTransform";
import AboutSection from "@/components/AboutSection";
import WebDevelopmentSection from "@/components/WebDevelopmentSection";
import DigitalMarketingSection from "@/components/DigitalMarketingSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import ClientsSection from "@/components/ClientsSection";

export default function Home() {
  return (
    <>
      <div>
        <AutoSlider />
        <BusinessTransform />
        <AboutSection />
         <ServicesSection />
        {/* <WebDevelopmentSection /> */}
        {/* <DigitalMarketingSection /> */}
        <StatsSection/>
        <TeamSection/>
        <ClientsSection/>
         <ContactSection />
         <Footer/>
      </div>

    </>
  );
}
