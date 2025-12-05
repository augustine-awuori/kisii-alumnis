import { AlumniRegistrationForm } from "../AlumniRegistrationForm";

export default function RegistrationSection() {
  return (
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
            Your information is secure and will only be used for alumni-related
            communications.
          </p>
        </div>
      </div>
    </main>
  );
}
