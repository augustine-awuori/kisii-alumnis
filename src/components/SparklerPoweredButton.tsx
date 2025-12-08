import logo from "@/assets/icon.png";
import SparklerDownloadButtons from "./SparklerDownloadButtons";

export default function SparklerPoweredButton() {
  return (
    <div className="mt-8 pt-8 border-t border-primary-foreground/20">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={() => {}}
            className="flex items-center gap-3 bg-white/20 backdrop-blur-xl px-5 py-3 rounded-full border border-white/30 shadow-2xl hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span className="text-white/90 text-xs md:text-sm font-medium tracking-wider">
              Powered by
            </span>
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Sparkler"
                className="w-7 h-7 md:w-8 md:h-8 rounded-lg shadow-lg ring-2 ring-white/40"
              />
              <span className="text-white font-bold text-sm md:text-base tracking-tight">
                Sparkler
              </span>
            </div>
          </button>
          <p className="text-primary-foreground/80 text-xs text-white">
            The official social media platform for Kisii University students &
            alumni
          </p>
        </div>
      </div>

      <SparklerDownloadButtons />
    </div>
  );
}
