import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

import { AlumniRegistrationForm } from "../components/AlumniRegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

        <div className="container relative mx-auto px-4">
          <div className="text-center animate-fade-up">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-accent/20 backdrop-blur-sm">
                <GraduationCap className="w-10 h-10 text-accent" />
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Kisii University
            </h1>
            <p className="text-xl md:text-2xl font-display text-primary-foreground/90 mb-2">
              Alumni Registration Portal
            </p>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
              Join our growing community of distinguished graduates. Register
              today and stay connected with your alma mater.
            </p>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(45 30% 97%)"
            />
          </svg>
        </div>
      </header>

      {/* Stats Section */}
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

      {/* Registration Form Section */}
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div
              className="text-center mb-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Register Your Details
              </h2>
              <p className="text-muted-foreground">
                Fill in the form below to join our alumni database and receive
                updates about university events and opportunities.
              </p>
            </div>

            <div
              className="bg-card rounded-2xl shadow-elevated p-8 md:p-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <AlumniRegistrationForm />
            </div>

            <p
              className="text-center text-sm text-muted-foreground mt-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              Your information is secure and will only be used for
              alumni-related communications.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © {new Date().getFullYear()} Kisii University. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            Alumni Relations Office | P.O. Box 408-40200, Kisii, Kenya
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
