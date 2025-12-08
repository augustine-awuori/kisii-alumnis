import hero from "@/assets/hero.jpg"; // Your 1282×1144 graduation image
import logo from "@/assets/icon.png";

interface Props {
  onSparklerClick: VoidFunction;
}

export default function Hero({ onSparklerClick }: Props) {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      />

      {/* Sparkler Credit – positioned near bottom */}
      <div className="absolute bottom-17 left-0 right-0">
        <div className="container mx-auto px-6 text-center">
          <div
            onClick={onSparklerClick}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full cursor-pointer hover:bg-white/20 transition-all duration-300 shadow-xl"
          >
            <span className="text-white/80 text-sm font-medium">
              Powered by
            </span>
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Sparkler"
                className="w-8 h-8 rounded-lg shadow-md"
              />
              <span className="text-white font-bold text-lg tracking-tight">
                Sparkler
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Optional subtle bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 from-background to-transparent pointer-events-none" />
    </header>
  );
}
