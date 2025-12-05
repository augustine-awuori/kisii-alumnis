import FooterSection from "@/components/sections/FooterSection";
import Hero from "@/components/sections/HeroSection";
import RegistrationSection from "@/components/sections/RegistrationSection";
import StatsSection from "@/components/sections/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <StatsSection />
      <RegistrationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
