import logo from "@/assets/icon.png";

interface Props {
  ref?: React.Ref<HTMLElement>;
}

export default function FooterSection(props: Props) {
  return (
    <footer className="bg-primary py-12" ref={props.ref}>
      <div className="container mx-auto px-4 text-center">
        {/* Main copyright */}
        <p className="text-primary-foreground/80 text-sm">
          © {new Date().getFullYear()} Kisii University. All rights reserved.
        </p>
        <p className="text-primary-foreground/60 text-xs mt-2">
          Alumni Relations Office · P.O. Box 408-40200, Kisii, Kenya
        </p>

        {/* Sparkler Promotion – with logo */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/90 text-sm font-medium mb-4">
            Powered by
          </p>

          {/* Logo + Name */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={logo} // Replace with your actual logo URL
              alt="Sparkler Logo"
              className="w-12 h-12 rounded-xl shadow-lg ring-4 ring-primary-foreground/20"
            />
            <div>
              <p className="text-primary-foreground font-bold text-lg tracking-tight">
                Sparkler
              </p>
              <p className="text-primary-foreground/80 text-xs">
                The official social media platform for Kisii University students
                & alumni
              </p>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=sparkler.lol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white hover:bg-black/80 transition-all shadow-md"
            >
              <svg
                className="w-6 h-6"
                viewBox="30 336.7 120.9 129.2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#FFD400" d="M119.2 421.2l-18.2-18.2 18.2-18.2z" />
                <path fill="#FF3333" d="M96.2 402.9l-53.1 53.1-29.6-29.6z" />
                <path fill="#00C851" d="M43.1 456l-29.6-29.6 29.6-29.6z" />
                <path fill="#00D9FF" d="M96.2 402.9l-53.1-53.1 53.1-53.1z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold -mt-1">Google Play</div>
              </div>
            </a>

            <a
              href="https://apps.apple.com/app/sparkler-social/id6749565718"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-black hover:bg-white/90 transition-all shadow-md"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.56 2.34-2.55 3.96-2.58 1.56-.03 3.04.9 4.01 1.01.97.11 2.09-.51 2.75-1.33 1.06-1.31 2.57-2.13 4.09-2.06 1.93.07 3.49 1.59 3.98 3.39.22 1.02.04 2.07-.39 3.03-.94 2.09-2.42 3.89-3.39 5.66zM16 3.5c-.92.08-2.02.48-2.68 1.09-.64.59-1.19 1.54-1.01 2.45.92.11 1.87-.38 2.49-1.01.6-.61 1.08-1.5 1.2-2.53z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold -mt-1">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
