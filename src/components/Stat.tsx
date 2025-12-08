import React from "react";
import type { LucideProps } from "lucide-react";

interface Props {
  index: number;
  stat: {
    label: string;
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    value: number | string;
  };
}

export default function Stat({ index, stat }: Props) {
  return (
    <div
      key={stat.label}
      className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 hover:bg-white/95 transition-all duration-500 hover:scale-105 hover:shadow-3xl text-center"
      style={{
        animation: `fade-up 0.6s ease-out forwards ${index * 0.15}s both`,
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
  );
}
