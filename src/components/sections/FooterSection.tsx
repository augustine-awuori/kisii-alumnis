export default function FooterSection() {
  return (
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
  );
}
