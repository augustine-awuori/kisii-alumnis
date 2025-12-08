import { useRef } from "react";
import FooterSection from "@/components/sections/FooterSection";
import Hero from "@/components/sections/HeroSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import StatsSection from "@/components/sections/StatsSection";

const Index = () => {
  const footerRef = useRef<HTMLElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onSparklerClick={scrollToFooter} />
      <StatsSection />
      <RegistrationSection />
      <FooterSection ref={footerRef} />
    </div>
  );
};

export default Index;
