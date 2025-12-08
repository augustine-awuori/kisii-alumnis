import { useEffect, useState } from "react";
import { Users, Award, BookOpen, GraduationCap } from "lucide-react";
import alumniApi from "@/api/alumnis";

export default function StatsSection() {
  const [alumniCount, setAlumniCount] = useState(0);

  const stats = [
    { icon: Users, label: "Alumni Network", value: alumniCount },
    { icon: Award, label: "Years of Excellence", value: "58+" },
    { icon: BookOpen, label: "Programmes", value: "30+" },
    { icon: GraduationCap, label: "Graduates Yearly", value: "5,000+" },
  ];

  useEffect(() => {
    const getAlumniCount = async (): Promise<number> => {
      const res = await alumniApi.getAlumnisCount();
      return res.ok ? (res.data as { count: number }).count : 0;
    };

    getAlumniCount().then(setAlumniCount);
  }, []);

  return (
    <section className="relative -mt-20 pt-32 pb-20 overflow-hidden">
      {/* Beautiful curved background matching your hero */}
      <div className="absolute inset-x-0 top-0 h-32">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#f5f5f5"
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,74,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Stats Cards with glassmorphic + gold accent */}
      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 hover:bg-white/95 transition-all duration-500 hover:scale-105 hover:shadow-3xl text-center"
              style={{
                animation: `fade-up 0.6s ease-out forwards ${i * 0.15}s both`,
              }}
            >
              {/* Gold accent glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-green-700 group-hover:text-green-800 transition-colors" />

              {/* Number — perfectly centered */}
              <div className="text-4xl md:text-5xl font-bold text-green-900 font-display tracking-tight">
                {typeof stat.value === "number"
                  ? stat.value.toLocaleString()
                  : stat.value}
              </div>

              {/* Label */}
              <p className="text-sm md:text-base text-green-700/80 mt-3 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional subtle wave at bottom to match hero */}
      <div className="absolute bottom-0 left-0 right-0 h-20">
        <svg
          viewBox="0 0 1440 200"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#f5f5f5"
            d="M0,0L60,20C120,40,240,80,360,90C480,100,600,80,720,70C840,60,960,60,1080,70C1200,80,1320,100,1380,110L1440,120L1440,200L0,200Z"
          />
        </svg>
      </div>
    </section>
  );
}
