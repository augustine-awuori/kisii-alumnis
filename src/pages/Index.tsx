import { useRef, useState } from "react";

import FooterSection from "@/components/sections/FooterSection";
import Hero from "@/components/sections/HeroSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import SparklerWelcomeModal from "@/components/SparklerWelcomeModal";
import StatsSection from "@/components/sections/StatsSection";

const Index = () => {
  const [isSparklerModalOpen, setIsSparklerModalOpen] = useState(false);

  const footerRef = useRef<HTMLElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSparkleModalVisibility = () => {
    const hasSeen = localStorage.getItem("sparkler_modal_seen_v2");
    if (!hasSeen) {
      setIsSparklerModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onSparklerClick={scrollToFooter} />
      <StatsSection />
      <RegistrationSection onDoneRegistration={handleSparkleModalVisibility} />
      <FooterSection ref={footerRef} />
      <SparklerWelcomeModal
        changeVisibility={setIsSparklerModalOpen}
        isOpen={isSparklerModalOpen}
      />
    </div>
  );
};

export default Index;
