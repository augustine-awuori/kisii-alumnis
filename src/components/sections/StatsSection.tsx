import { useEffect, useState } from "react";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

import alumniApi from "@/api/alumnis";

export default function StatsSection() {
  const [alumniCount, setAlumniCount] = useState(0);

  const stats = [
    { icon: Users, label: "Alumni Network", value: alumniCount },
    { icon: Award, label: "Years of Excellence", value: "58+" },
    {
      icon: BookOpen,
      label: "Programmes",
      value: "30+",
    },
    {
      icon: GraduationCap,
      label: "Graduates Yearly",
      value: "5,000+",
    },
  ];

  useEffect(() => {
    const getAlumniCount = async (): Promise<number> => {
      const res = await alumniApi.getAlumnisCount();

      return res.ok ? (res.data as { count: number }).count : 0;
    };

    const initAlumniCount = async () => setAlumniCount(await getAlumniCount());

    initAlumniCount();
  }, []);

  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl md:text-4xl font-bold text-foreground font-display">
                {stat.value.toString()}
              </div>
              <p className="text-sm md:text-base text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
