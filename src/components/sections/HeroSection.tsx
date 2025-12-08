import { GraduationCap } from "lucide-react";

import hero from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <header className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: "50% 15%",
        }}
      />

      {/* Strong dark overlay for perfect readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80 pointer-events-none" />

      {/* Main Text Content */}
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="p-5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
              <GraduationCap className="w-14 h-14 md:w-16 md:h-16 text-yellow-400 drop-shadow-lg" />
            </div>
          </div>

          <h1 className="font-display text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
            Kisii University
          </h1>

          <p className="mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 drop-shadow-xl">
            Alumni Registration Portal
          </p>

          <p className="mt-8 text-lg xs:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-md">
            Plot twist: There’s life after graduation. And it starts here
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent pointer-events-none" />
    </header>
  );
}
