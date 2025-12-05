import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, label: "Alumni Network", value: "50,000+" },
            { icon: Award, label: "Years of Excellence", value: "58+" },
            { icon: BookOpen, label: "Programs", value: "100+" },
            {
              icon: GraduationCap,
              label: "Graduates Yearly",
              value: "5,000+",
            },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl md:text-4xl font-bold text-foreground font-display">
                {stat.value}
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
