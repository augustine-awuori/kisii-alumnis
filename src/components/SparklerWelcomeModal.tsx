import logo from "@/assets/icon.png";
import SparklerDownloadButtons from "./SparklerDownloadButtons";

interface Props {
  isOpen: boolean;
  changeVisibility: (visible: boolean) => void;
}

export default function SparklerWelcomeModal({
  isOpen,
  changeVisibility,
}: Props) {
  const handleClose = () => {
    changeVisibility(false);
    localStorage.setItem("sparkler_modal_seen_v2", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div
        className="relative bg-white rounded-3xl shadow-3xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in duration-400"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition z-10"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-10 text-center">
          {/* Logo + Tagline */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img
                src={logo}
                alt="Sparkler"
                className="w-20 h-20 rounded-2xl shadow-2xl ring-4 ring-green-100"
              />
              <div className="text-left">
                <h3 className="text-2xl font-black text-green-900 tracking-tight">
                  Sparkler
                </h3>
                <p className="text-sm font-bold text-green-700 leading-tight">
                  The 1st ever social media platform
                  <br />
                  for Kisii University students only
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Never Miss Campus Tea Again
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            No lecturers. Just Kisii students. Talking about anything.
          </p>

          <SparklerDownloadButtons />

          <p className="text-gray-500 text-xs mt-5 font-medium">
            Free forever · 10 seconds to join · Ongoing Kisii students already
            inside
          </p>
        </div>
      </div>
    </div>
  );
}
